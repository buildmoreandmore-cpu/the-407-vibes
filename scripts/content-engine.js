/**
 * 407 Vibes Content Engine
 * Powered by MiniMax M2.5
 * 
 * Generates and ingests Orlando-focused content:
 * - Neighborhood spotlights
 * - Business discoveries
 * - Local event coverage
 * - Development/growth stories
 * - Culture & community pieces
 * 
 * Run via cron or manually: node scripts/content-engine.js
 */

const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY || "";
const MINIMAX_ENDPOINT = "https://api.minimax.io/v1/chat/completions";
const MINIMAX_MODEL = "MiniMax-M2.5";

const SITE_URL = process.env.SITE_URL || "https://the-407-vibes.vercel.app";
const INGEST_API_KEY = process.env.INGEST_API_KEY || "";

// Orlando areas and their IDs (must match Supabase)
const ORLANDO_AREAS = [
  { id: 1, name: "Downtown Orlando", slug: "downtown" },
  { id: 2, name: "Winter Park", slug: "winter-park" },
  { id: 3, name: "College Park", slug: "college-park" },
  { id: 4, name: "Mills 50 / Milk District", slug: "mills-50" },
  { id: 5, name: "Thornton Park", slug: "thornton-park" },
  { id: 6, name: "Lake Nona", slug: "lake-nona" },
  { id: 7, name: "Dr. Phillips", slug: "dr-phillips" },
  { id: 8, name: "Baldwin Park", slug: "baldwin-park" },
  { id: 9, name: "Ivanhoe Village", slug: "ivanhoe-village" },
  { id: 10, name: "Audubon Park", slug: "audubon-park" },
];

const CONTENT_TYPES = [
  "neighborhood_spotlight",
  "business_discovery",
  "development_update",
  "culture_story",
  "hidden_gem",
];

async function callMiniMax(systemPrompt, userPrompt) {
  const res = await fetch(MINIMAX_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${MINIMAX_API_KEY}`,
    },
    body: JSON.stringify({
      model: MINIMAX_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.8,
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`MiniMax error (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}

async function ingestContent(contentType, source, data) {
  const res = await fetch(`${SITE_URL}/api/ingest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": INGEST_API_KEY,
    },
    body: JSON.stringify({
      content_type: contentType,
      source,
      data,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error(`Ingest error (${res.status}): ${text}`);
    return null;
  }

  return res.json();
}

const SYSTEM_PROMPT = `You are a local Orlando, Florida journalist and storyteller for "The 407 Vibes" — a premium city media platform. You write with:

- Deep local knowledge of Orlando neighborhoods, culture, and development
- A voice that's warm, smart, and proud of the city — NOT generic tourism copy
- Real insight into what makes each neighborhood unique
- Understanding of Orlando beyond Disney — the REAL Orlando that locals love
- Awareness of growth, development, gentrification, new businesses, cultural shifts

You focus on: neighborhoods, local businesses, development/real estate, culture, community stories, hidden gems.
You NEVER write: generic "top 10" listicles, tourist trap content, coupon/deal spam, or AI-sounding filler.

When asked to generate content, return ONLY valid JSON. No markdown, no explanation, just the JSON object.`;

async function generateArticle(area) {
  const type = CONTENT_TYPES[Math.floor(Math.random() * CONTENT_TYPES.length)];

  const prompts = {
    neighborhood_spotlight: `Write a neighborhood spotlight article about ${area.name}, Orlando. Return JSON:
{"title": "compelling headline", "slug": "url-slug", "content": "full HTML article (3-4 paragraphs, use <p> tags)", "excerpt": "one compelling sentence", "category": "Neighborhoods", "area_id": ${area.id}, "tags": ["array", "of", "tags"], "author_name": "The 407 Vibes"}`,

    business_discovery: `Imagine a compelling local business that would thrive in ${area.name}, Orlando. Create a realistic business spotlight article about it. Return JSON:
{"title": "headline about the business", "slug": "url-slug", "content": "full HTML article (3-4 paragraphs, use <p> tags) about this business, what makes it special, why locals love it", "excerpt": "one sentence hook", "category": "Local Business", "area_id": ${area.id}, "tags": ["array", "of", "tags"], "author_name": "The 407 Vibes"}`,

    development_update: `Write about real estate development and growth happening in or near ${area.name}, Orlando. Cover new construction, rezoning, mixed-use developments, or neighborhood transformation. Return JSON:
{"title": "headline", "slug": "url-slug", "content": "full HTML article (3-4 paragraphs, use <p> tags)", "excerpt": "one sentence", "category": "Development", "area_id": ${area.id}, "tags": ["array", "of", "tags"], "author_name": "The 407 Vibes"}`,

    culture_story: `Write a culture/community story about ${area.name}, Orlando. Cover local art, music, food culture, community events, or the people who make the neighborhood special. Return JSON:
{"title": "headline", "slug": "url-slug", "content": "full HTML article (3-4 paragraphs, use <p> tags)", "excerpt": "one sentence", "category": "Culture", "area_id": ${area.id}, "tags": ["array", "of", "tags"], "author_name": "The 407 Vibes"}`,

    hidden_gem: `Write about a hidden gem in ${area.name}, Orlando — a place, experience, or tradition that only locals know about. Return JSON:
{"title": "headline", "slug": "url-slug", "content": "full HTML article (3-4 paragraphs, use <p> tags)", "excerpt": "one sentence", "category": "Hidden Gems", "area_id": ${area.id}, "tags": ["array", "of", "tags"], "author_name": "The 407 Vibes"}`,
  };

  console.log(`Generating ${type} for ${area.name}...`);

  const raw = await callMiniMax(SYSTEM_PROMPT, prompts[type]);

  // Parse JSON from response (handle potential markdown wrapping)
  let article;
  try {
    const jsonStr = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    article = JSON.parse(jsonStr);
  } catch (err) {
    console.error(`Failed to parse MiniMax response for ${area.name}:`, err.message);
    console.error("Raw:", raw.slice(0, 200));
    return null;
  }

  return article;
}

async function run() {
  console.log("🎯 407 Vibes Content Engine — Starting content generation");
  console.log(`Site: ${SITE_URL}`);
  console.log(`Areas: ${ORLANDO_AREAS.length}`);

  if (!MINIMAX_API_KEY) {
    console.error("❌ MINIMAX_API_KEY not set");
    process.exit(1);
  }
  if (!INGEST_API_KEY) {
    console.error("❌ INGEST_API_KEY not set");
    process.exit(1);
  }

  // Pick 2-3 random areas to generate content for
  const shuffled = [...ORLANDO_AREAS].sort(() => Math.random() - 0.5);
  const selectedAreas = shuffled.slice(0, 3);

  let generated = 0;
  let failed = 0;

  for (const area of selectedAreas) {
    try {
      const article = await generateArticle(area);
      if (!article) {
        failed++;
        continue;
      }

      const result = await ingestContent("article", "content_engine_minimax", article);
      if (result?.success) {
        console.log(`✅ Published: "${article.title}" (${area.name})`);
        generated++;
      } else {
        console.error(`❌ Ingest failed for "${article.title}":`, result);
        failed++;
      }
    } catch (err) {
      console.error(`❌ Error generating for ${area.name}:`, err.message);
      failed++;
    }
  }

  console.log(`\n📊 Results: ${generated} generated, ${failed} failed`);
}

run().catch(console.error);
