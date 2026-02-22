const { createClient } = require('@supabase/supabase-js');

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key',
};

const VALID_CONTENT_TYPES = ['business', 'event', 'article', 'neighborhood_update'];

const TARGET_TABLES = {
  business: 'businesses',
  event: 'events',
  article: 'articles',
};

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS_HEADERS);
    return res.end();
  }

  // Set CORS headers on all responses
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // API key authentication
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.INGEST_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized: invalid or missing API key' });
  }

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

  try {
    const { content_type, source, data } = req.body;

    // Validate content type
    if (!content_type || !VALID_CONTENT_TYPES.includes(content_type)) {
      return res.status(400).json({
        error: `Invalid content_type. Must be one of: ${VALID_CONTENT_TYPES.join(', ')}`,
      });
    }

    if (!data || typeof data !== 'object') {
      return res.status(400).json({ error: 'data field is required and must be an object' });
    }

    // Log to ai_ingest_log
    const { data: logEntry, error: logError } = await supabase
      .from('ai_ingest_log')
      .insert({
        content_type,
        source: source || 'ai_agent',
        payload: data,
        status: 'pending',
      })
      .select()
      .single();

    if (logError) {
      return res.status(500).json({ error: logError.message });
    }

    let targetId = null;

    if (content_type === 'neighborhood_update') {
      // Update neighborhoods table
      const { id: neighborhoodId, ...updateData } = data;

      if (!neighborhoodId) {
        return res.status(400).json({ error: 'neighborhood_update requires data.id' });
      }

      const { data: updated, error: updateError } = await supabase
        .from('neighborhoods')
        .update(updateData)
        .eq('id', neighborhoodId)
        .select()
        .single();

      if (updateError) {
        // Update log status to failed
        await supabase
          .from('ai_ingest_log')
          .update({ status: 'failed', error_message: updateError.message })
          .eq('id', logEntry.id);
        return res.status(500).json({ error: updateError.message });
      }

      targetId = updated.id;
    } else {
      // Insert into target table with pending status
      const targetTable = TARGET_TABLES[content_type];

      // Strip fields that don't exist in the table
      const { author_name, tags, ...cleanData } = data;
      // Generate area-specific image if not provided
      const areaNames = {10:'Downtown+Orlando',11:'Winter+Park',12:'Thornton+Park',13:'Mills+50+District',14:'College+Park',15:'Lake+Nona',16:'Dr+Phillips',17:'Baldwin+Park',18:'Ivanhoe+Village',19:'Audubon+Park'};
      const imageUrl = cleanData.image_url || `/api/places?query=${areaNames[cleanData.area_id] || 'Orlando'}+Orlando+FL&maxwidth=1600`;
      const { data: inserted, error: insertError } = await supabase
        .from(targetTable)
        .insert({
          ...cleanData,
          image_url: imageUrl,
          author: author_name || cleanData.author || 'Orlando Vibes',
          status: 'published',
          source: 'manual',
        })
        .select()
        .single();

      if (insertError) {
        // Update log status to failed
        await supabase
          .from('ai_ingest_log')
          .update({ status: 'failed', error_message: insertError.message })
          .eq('id', logEntry.id);
        return res.status(500).json({ error: insertError.message });
      }

      targetId = inserted.id;
    }

    // Update log with target_id (keep status as pending — constraint only allows pending/failed)
    await supabase
      .from('ai_ingest_log')
      .update({ target_id: targetId })
      .eq('id', logEntry.id);

    return res.status(200).json({
      success: true,
      ingest_id: logEntry.id,
      target_id: targetId,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
