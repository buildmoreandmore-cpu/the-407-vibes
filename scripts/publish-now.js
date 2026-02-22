/**
 * Generate 3 articles via MiniMax and insert directly into Supabase
 */
const { createClient } = require('@supabase/supabase-js');

const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY;
const supabase = createClient(
  'https://ottaaklorclfbzztpsrm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90dGFha2xvcmNsZmJ6enRwc3JtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTQ2NDIzMiwiZXhwIjoyMDg3MDQwMjMyfQ._edSkk1n-A9ELjNtb0ulVTo0931QwMMG612PcnooAp8'
);

const AREAS = [
  { id: 18, name: 'Ivanhoe Village' },
  { id: 13, name: 'Mills 50 / Milk District' },
  { id: 15, name: 'Lake Nona' },
];

const PROMPTS = [
  { area: AREAS[0], type: 'Hidden Gems', prompt: `Write about why Ivanhoe Village is still Orlando's best-kept open secret — the antique shops, craft breweries, lakefront walks, and creative energy that make it special. Return ONLY valid JSON: {"title":"string","slug":"string","content":"full HTML article 4 paragraphs with <p> tags","excerpt":"one sentence","category":"Hidden Gems"}` },
  { area: AREAS[1], type: 'Culture', prompt: `Write about how Mills 50, Orlando's Vietnamese district, became the city's cultural backbone — the pho shops, banh mi spots, art galleries, and how the community shaped the neighborhood. Return ONLY valid JSON: {"title":"string","slug":"string","content":"full HTML article 4 paragraphs with <p> tags","excerpt":"one sentence","category":"Culture"}` },
  { area: AREAS[2], type: 'Development', prompt: `Write about Lake Nona in 2026 — Orlando's boomtown with medical city expansion, new residential communities, tech companies moving in, and what's next. Return ONLY valid JSON: {"title":"string","slug":"string","content":"full HTML article 4 paragraphs with <p> tags","excerpt":"one sentence","category":"Development"}` },
];

async function callMiniMax(prompt) {
  const res = await fetch('https://api.minimax.io/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${MINIMAX_API_KEY}` },
    body: JSON.stringify({
      model: 'MiniMax-Text-01',
      messages: [
        { role: 'system', content: 'You are an Orlando local journalist. Return ONLY valid JSON. No markdown, no explanation, no thinking tags.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.8,
      max_tokens: 2000,
    }),
  });
  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}

async function run() {
  for (const p of PROMPTS) {
    console.log(`Generating: ${p.type} — ${p.area.name}...`);
    const raw = await callMiniMax(p.prompt);
    let cleaned = raw.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
    cleaned = cleaned.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    if (!cleaned.startsWith('{')) { const i = cleaned.indexOf('{'); if (i !== -1) cleaned = cleaned.slice(i); }

    let article;
    try { article = JSON.parse(cleaned); } catch (e) {
      console.error(`Parse failed for ${p.area.name}:`, e.message);
      console.error('Raw:', raw.slice(0, 200));
      continue;
    }

    const { data, error } = await supabase.from('articles').insert({
      title: article.title,
      slug: article.slug,
      content: article.content,
      excerpt: article.excerpt,
      category: article.category || p.type,
      area_id: p.area.id,
      author: 'Orlando Vibes',
      status: 'published',
      source: 'manual',
      published_at: new Date().toISOString(),
    }).select();

    if (error) { console.error(`Insert failed: ${error.message}`); continue; }
    console.log(`✅ Published: "${article.title}"`);
  }
}

run().catch(console.error);
