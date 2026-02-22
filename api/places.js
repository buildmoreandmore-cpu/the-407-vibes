const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS_HEADERS);
    return res.end();
  }

  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GOOGLE_PLACES_API_KEY not configured' });
  }

  const { query, photo_reference, maxwidth = '800', info, idx } = req.query;

  try {
    // Mode 1: Direct photo by reference
    if (photo_reference) {
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${encodeURIComponent(photo_reference)}&maxwidth=${maxwidth}&key=${apiKey}`;
      const photoRes = await fetch(photoUrl);

      if (!photoRes.ok) {
        return res.status(502).json({ error: 'Failed to fetch photo from Google' });
      }

      res.setHeader('Content-Type', photoRes.headers.get('content-type') || 'image/jpeg');
      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');

      const buffer = Buffer.from(await photoRes.arrayBuffer());
      return res.end(buffer);
    }

    // Mode 2 & 3: Text Search by query
    if (!query) {
      return res.status(400).json({ error: 'Missing required parameter: query or photo_reference' });
    }

    // Text Search to find a place
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();

    if (searchData.status !== 'OK' || !searchData.results || searchData.results.length === 0) {
      return res.status(404).json({ error: 'No places found', status: searchData.status });
    }

    // Use idx param to pick different results/photos for variety
    const photoIdx = idx ? parseInt(idx, 10) : 0;
    const place = searchData.results[Math.min(photoIdx, searchData.results.length - 1)] || searchData.results[0];

    // Mode 2: Return JSON metadata
    if (info === 'true') {
      const result = {
        name: place.name,
        address: place.formatted_address,
        rating: place.rating,
        user_ratings_total: place.user_ratings_total,
        place_id: place.place_id,
        types: place.types,
        location: place.geometry?.location,
      };

      if (place.photos && place.photos.length > 0) {
        result.photo_url = `/api/places?photo_reference=${place.photos[0].photo_reference}&maxwidth=${maxwidth}`;
        result.photo_attributions = place.photos[0].html_attributions;
      }

      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
      return res.status(200).json(result);
    }

    // Mode 3: Proxy the first photo as image bytes
    if (!place.photos || place.photos.length === 0) {
      return res.status(404).json({ error: 'Place found but no photos available' });
    }

    // Pick different photo based on idx for variety
    const pIdx = Math.min(photoIdx, place.photos.length - 1);
    const photoRef = place.photos[pIdx].photo_reference;
    const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${encodeURIComponent(photoRef)}&maxwidth=${maxwidth}&key=${apiKey}`;
    const photoRes = await fetch(photoUrl);

    if (!photoRes.ok) {
      return res.status(502).json({ error: 'Failed to fetch photo from Google' });
    }

    res.setHeader('Content-Type', photoRes.headers.get('content-type') || 'image/jpeg');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');

    const buffer = Buffer.from(await photoRes.arrayBuffer());
    return res.end(buffer);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
