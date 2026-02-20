/**
 * RSS Feed Proxy — Vercel Serverless Function
 *
 * Fetches RSS XML from Orlando news/event/restaurant sources,
 * parses it into normalized JSON, and returns it with cache headers.
 *
 * Query params:
 *   ?source=development|events|restaurants
 *
 * Response:
 *   { items: [{ title, link, description, pubDate, image }] }
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// RSS feed URLs organized by source category
const RSS_SOURCES = {
  development: [
    { name: 'Orlando Business Journal', url: 'https://www.bizjournals.com/orlando/news.rss' },
    { name: 'GrowthSpotter', url: 'https://www.growthspotter.com/feed/' },
  ],
  events: [
    { name: 'Visit Orlando', url: 'https://www.visitorlando.com/events/rss/' },
    { name: 'Orlando Weekly', url: 'https://www.orlandoweekly.com/orlando/Rss.xml' },
  ],
  restaurants: [
    { name: 'Bungalower', url: 'https://bungalower.com/feed/' },
    { name: 'Orlando Weekly Food', url: 'https://www.orlandoweekly.com/orlando/Rss.xml?category=food' },
  ],
};

/**
 * Extract the text content between an XML tag.
 * Returns empty string if the tag is not found.
 */
function extractTag(xml, tagName) {
  // Try CDATA first: <tag><![CDATA[...]]></tag>
  const cdataRegex = new RegExp(
    `<${tagName}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*</${tagName}>`,
    'i'
  );
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) {
    return cdataMatch[1].trim();
  }

  // Plain text content: <tag>...</tag>
  const plainRegex = new RegExp(
    `<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`,
    'i'
  );
  const plainMatch = xml.match(plainRegex);
  if (plainMatch) {
    return plainMatch[1].trim();
  }

  return '';
}

/**
 * Try to extract an image URL from the item XML.
 * Checks <media:content>, <media:thumbnail>, <enclosure>, and <image> tags,
 * then falls back to the first <img> src in the description.
 */
function extractImage(itemXml) {
  // <media:content url="...">
  const mediaContent = itemXml.match(/<media:content[^>]+url=["']([^"']+)["']/i);
  if (mediaContent) return mediaContent[1];

  // <media:thumbnail url="...">
  const mediaThumbnail = itemXml.match(/<media:thumbnail[^>]+url=["']([^"']+)["']/i);
  if (mediaThumbnail) return mediaThumbnail[1];

  // <enclosure url="..." type="image/...">
  const enclosure = itemXml.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]+type=["']image\/[^"']+["']/i);
  if (enclosure) return enclosure[1];

  // <enclosure url="..."> (without type check — common in many feeds)
  const enclosureAny = itemXml.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
  if (enclosureAny && /\.(jpg|jpeg|png|gif|webp)/i.test(enclosureAny[1])) {
    return enclosureAny[1];
  }

  // <image><url>...</url></image>
  const imageTag = itemXml.match(/<image>\s*<url>([^<]+)<\/url>/i);
  if (imageTag) return imageTag[1].trim();

  // Fallback: first <img src="..."> in the description HTML
  const imgSrc = itemXml.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgSrc) return imgSrc[1];

  return '';
}

/**
 * Strip HTML tags from a string and decode common entities.
 */
function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Truncate a string to a max length, breaking at a word boundary.
 */
function truncate(str, maxLen = 200) {
  if (!str || str.length <= maxLen) return str;
  const truncated = str.substring(0, maxLen);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

/**
 * Parse a raw RSS XML string into an array of normalized item objects.
 */
function parseRSSItems(xml, sourceName) {
  const items = [];

  // Split on <item> blocks (works for both RSS 2.0 and Atom-wrapped feeds)
  const itemBlocks = xml.split(/<item[\s>]/i);

  // Skip the first chunk — it's everything before the first <item>
  for (let i = 1; i < itemBlocks.length; i++) {
    const block = itemBlocks[i].split(/<\/item>/i)[0];
    if (!block) continue;

    const title = stripHtml(extractTag(block, 'title'));
    const link = extractTag(block, 'link') || '';
    const rawDescription = extractTag(block, 'description') || extractTag(block, 'content:encoded') || '';
    const description = truncate(stripHtml(rawDescription), 200);
    const pubDate = extractTag(block, 'pubDate') || extractTag(block, 'dc:date') || '';
    const image = extractImage(block);

    if (title) {
      items.push({
        title,
        link: link.trim(),
        description,
        pubDate,
        image,
        source: sourceName,
      });
    }
  }

  return items;
}

/**
 * Fetch a single RSS feed URL with timeout handling.
 */
async function fetchFeed(feedConfig) {
  const { name, url } = feedConfig;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'The407Vibes/1.0 RSS Aggregator',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`RSS fetch failed for ${name}: HTTP ${response.status}`);
      return [];
    }

    const xml = await response.text();
    return parseRSSItems(xml, name);
  } catch (err) {
    console.warn(`RSS fetch error for ${name}:`, err.message);
    return [];
  }
}

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS_HEADERS);
    return res.end();
  }

  // Set CORS headers
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { source } = req.query;

    // Validate the source parameter
    if (!source || !RSS_SOURCES[source]) {
      return res.status(400).json({
        error: 'Invalid or missing "source" parameter. Use one of: development, events, restaurants',
        validSources: Object.keys(RSS_SOURCES),
      });
    }

    const feeds = RSS_SOURCES[source];

    // Fetch all feeds for this source in parallel
    const feedResults = await Promise.allSettled(
      feeds.map((feed) => fetchFeed(feed))
    );

    // Merge all items from all feeds
    let items = [];
    for (const result of feedResults) {
      if (result.status === 'fulfilled' && Array.isArray(result.value)) {
        items = items.concat(result.value);
      }
    }

    // Sort by pubDate descending (most recent first)
    items.sort((a, b) => {
      const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
      const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
      return dateB - dateA;
    });

    // Cap at 30 items to keep response size reasonable
    items = items.slice(0, 30);

    // Cache for 5 minutes at the edge, serve stale for 10 min while revalidating
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.setHeader('Content-Type', 'application/json');

    return res.status(200).json({
      source,
      feedCount: feeds.length,
      itemCount: items.length,
      items,
    });
  } catch (err) {
    console.error('RSS feed handler error:', err);
    return res.status(500).json({ error: 'Internal server error fetching RSS feeds' });
  }
};
