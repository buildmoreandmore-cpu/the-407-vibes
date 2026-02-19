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
        status: 'processing',
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

      const { data: inserted, error: insertError } = await supabase
        .from(targetTable)
        .insert({
          ...data,
          status: 'published',
          source: source || 'ai_agent',
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

    // Update log status to completed
    await supabase
      .from('ai_ingest_log')
      .update({ status: 'completed', target_id: targetId })
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
