/**
 * GeoDirectory REST API Proxy
 *
 * This serverless function proxies requests to the GeoDirectory REST API
 * keeping authentication credentials secure on the server side.
 *
 * Required Environment Variables (set in Vercel Dashboard):
 * - GEODIR_URL: Your WordPress site URL (e.g., https://yourdomain.com)
 * - GEODIR_KEY: GeoDirectory Consumer Key (ck_...)
 * - GEODIR_SECRET: GeoDirectory Consumer Secret (cs_...)
 */

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow GET and POST requests
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { endpoint, ...params } = req.query;

  // Validate endpoint parameter
  if (!endpoint) {
    return res.status(400).json({
      error: 'Missing endpoint parameter',
      usage: '/api/geodir?endpoint=places&per_page=20'
    });
  }

  // Whitelist allowed endpoints for security
  const allowedEndpoints = [
    'places',
    'places/categories',
    'events',
    'events/categories',
    'reviews',
    'locations',
    'neighbourhoods'
  ];

  // Check if endpoint starts with an allowed prefix
  const isAllowed = allowedEndpoints.some(allowed =>
    endpoint === allowed || endpoint.startsWith(allowed + '/')
  );

  if (!isAllowed) {
    return res.status(403).json({
      error: 'Endpoint not allowed',
      allowed: allowedEndpoints
    });
  }

  // Get environment variables
  const GD_URL = process.env.GEODIR_URL;
  const GD_KEY = process.env.GEODIR_KEY;
  const GD_SECRET = process.env.GEODIR_SECRET;

  // Check if credentials are configured
  if (!GD_URL || !GD_KEY || !GD_SECRET) {
    console.error('GeoDirectory credentials not configured');
    return res.status(500).json({
      error: 'API not configured',
      message: 'GeoDirectory credentials are not set in environment variables'
    });
  }

  try {
    // Create Basic Auth header
    const authHeader = 'Basic ' + Buffer.from(`${GD_KEY}:${GD_SECRET}`).toString('base64');

    // Handle POST requests (create new listing)
    if (req.method === 'POST') {
      const { endpoint } = req.query;

      if (!endpoint) {
        return res.status(400).json({
          error: 'Missing endpoint parameter',
          usage: 'POST /api/geodir?endpoint=places'
        });
      }

      // Only allow POST to places and events endpoints
      const allowedPostEndpoints = ['places', 'events'];
      if (!allowedPostEndpoints.includes(endpoint)) {
        return res.status(403).json({
          error: 'POST not allowed for this endpoint',
          allowed: allowedPostEndpoints
        });
      }

      const url = `${GD_URL}/wp-json/geodir/v2/${endpoint}`;

      // Get the submission data from request body
      // Clone to avoid modifying the original
      const submissionData = { ...req.body };

      // Force status to pending for all public submissions
      submissionData.status = 'pending';

      // Debug: Log what we're sending
      console.log('Submitting to GeoDirectory:', JSON.stringify(submissionData, null, 2));

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('GeoDirectory API error:', data);
        return res.status(response.status).json({
          error: 'GeoDirectory API error',
          details: data
        });
      }

      // Set CORS headers
      res.setHeader('Access-Control-Allow-Origin', '*');

      return res.status(201).json({
        success: true,
        message: 'Submission received! It will appear after admin approval.',
        data: data
      });
    }

    // Handle GET requests (existing logic)
    // Build query string from remaining params
    const queryString = new URLSearchParams(params).toString();
    const url = `${GD_URL}/wp-json/geodir/v2/${endpoint}${queryString ? '?' + queryString : ''}`;

    // Make request to GeoDirectory API
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': authHeader,
        'Accept': 'application/json'
      }
    });

    // Get response data
    const data = await response.json();

    // Check for GeoDirectory API errors
    if (!response.ok) {
      console.error('GeoDirectory API error:', data);
      return res.status(response.status).json({
        error: 'GeoDirectory API error',
        details: data
      });
    }

    // Extract pagination info from headers if available
    const totalItems = response.headers.get('X-WP-Total');
    const totalPages = response.headers.get('X-WP-TotalPages');

    // Set CORS and cache headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

    // Return response with pagination metadata
    return res.status(200).json({
      data: data,
      meta: {
        total: totalItems ? parseInt(totalItems) : null,
        totalPages: totalPages ? parseInt(totalPages) : null,
        endpoint: endpoint
      }
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({
      error: 'Proxy request failed',
      message: error.message
    });
  }
}
