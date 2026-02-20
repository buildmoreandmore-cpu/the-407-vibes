# AI Agent Integration Guide

This document describes how AI agents can autonomously push content into the City Content Engine platform.

## Authentication

All ingest endpoints require an API key via the `x-api-key` header.

```
x-api-key: <your INGEST_API_KEY value>
```

The key is set as the `INGEST_API_KEY` environment variable in Vercel.

## Endpoints

### Single Item Ingest

```
POST /api/ingest
```

**Headers:**
```json
{
  "Content-Type": "application/json",
  "x-api-key": "your-api-key"
}
```

**Body:**
```json
{
  "content_type": "business | event | article | neighborhood_update",
  "source": "yelp_scraper",
  "data": { ... }
}
```

### Batch Ingest (up to 100 items)

```
POST /api/ingest-batch
```

**Body:**
```json
{
  "items": [
    { "content_type": "business", "source": "yelp_scraper", "data": { ... } },
    { "content_type": "event", "source": "eventbrite_scraper", "data": { ... } }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "processed": 98,
  "total": 100,
  "results": [
    { "success": true, "ingest_id": "uuid", "target_id": "uuid" },
    { "success": false, "error": "duplicate name" }
  ]
}
```

## Content Types

### business

Inserts into the `businesses` table with `status: pending`.

**Required fields:**
- `name` (string) — business name

**Recommended fields:**
```json
{
  "name": "The Capital Grille",
  "description": "Upscale steakhouse chain featuring classic American fare.",
  "category": "Restaurant",
  "area_id": 1,
  "neighborhood_id": 5,
  "street": "255 S Orange Ave",
  "city": "Orlando",
  "state": "Florida",
  "zip": "32789",
  "phone": "(407) 262-1162",
  "email": "info@example.com",
  "website": "https://thecapitalgrille.com",
  "image_url": "https://example.com/photo.jpg",
  "price_range": "$$$$",
  "rating": 4.5,
  "review_count": 1200,
  "hours": { "mon": "11am-10pm", "tue": "11am-10pm" },
  "tags": ["steakhouse", "fine dining", "wine bar"]
}
```

### event

Inserts into the `events` table with `status: pending`.

**Required fields:**
- `title` (string) — event name
- `start_date` (string) — ISO date `YYYY-MM-DD`

**Recommended fields:**
```json
{
  "title": "Orlando Food & Wine Festival",
  "description": "Annual culinary celebration featuring 150+ chefs.",
  "category": "Food & Drink",
  "area_id": 2,
  "start_date": "2026-06-15",
  "end_date": "2026-06-17",
  "start_time": "12:00",
  "end_time": "22:00",
  "venue": "Lake Eola Park",
  "street": "400 Park Dr NE",
  "city": "Orlando",
  "state": "Florida",
  "zip": "32803",
  "ticket_url": "https://orlandofoodandwine.com/tickets",
  "price": "$75-$250",
  "image_url": "https://example.com/event.jpg",
  "organizer_name": "Orlando Food Events LLC",
  "organizer_email": "info@orlandofoodandwine.com"
}
```

### article

Inserts into the `articles` table with `status: pending`.

**Required fields:**
- `title` (string) — article headline

**Recommended fields:**
```json
{
  "title": "10 Best Brunch Spots in Downtown Orlando",
  "slug": "best-brunch-downtown-orlando",
  "content": "<p>Full HTML article content here...</p>",
  "excerpt": "Our curated guide to the best brunch destinations in Downtown Orlando.",
  "category": "Food",
  "area_id": 1,
  "tags": ["brunch", "restaurants", "downtown-orlando"],
  "image_url": "https://example.com/brunch.jpg",
  "author_name": "City Content AI"
}
```

### neighborhood_update

Updates an existing row in the `neighborhoods` table. Does **not** create new neighborhoods.

**Required fields:**
- `id` (integer) — the neighborhood ID to update

```json
{
  "id": 12,
  "description": "Updated description of the neighborhood.",
  "vibes": ["Artsy", "Family-friendly", "Walkable"],
  "featured_story": {
    "title": "New Mural Trail Opens",
    "excerpt": "A walking tour of 15 new murals...",
    "image": "https://example.com/mural.jpg"
  }
}
```

## Approval Workflow

All ingested content (except `neighborhood_update`) is created with `status: pending`. Content does **not** appear on the public site until an admin approves it.

```
AI Agent → POST /api/ingest → ai_ingest_log (processing)
                                     ↓
                              businesses/events/articles (status: pending)
                                     ↓
                              Admin approves → status: approved/published
                                     ↓
                              Content visible on public site
```

## Audit Trail

Every ingest call is logged in the `ai_ingest_log` table:

| Column | Description |
|--------|-------------|
| `id` | UUID of the log entry |
| `content_type` | business, event, article, neighborhood_update |
| `source` | Agent name (e.g., "yelp_scraper") |
| `payload` | Full JSON data submitted |
| `status` | processing, completed, failed |
| `target_id` | ID of the created/updated record |
| `error_message` | Error details if failed |
| `created_at` | Timestamp |

## Querying Existing Data

Before ingesting, agents should check for duplicates using the public read APIs:

```
GET /api/listings?area=1&search=Capital+Grille
GET /api/events?area=2&upcoming=true
GET /api/areas?neighborhoods=true
```

These endpoints return approved/published content and are publicly accessible (no API key needed).

## Error Handling

| Status | Meaning |
|--------|---------|
| 200 | Success |
| 400 | Bad request (missing/invalid fields) |
| 401 | Unauthorized (missing or wrong API key) |
| 405 | Method not allowed (must be POST) |
| 500 | Server error (database issue) |

## Rate Limits

- Single ingest: No special rate limit (Vercel defaults apply)
- Batch ingest: Max 100 items per request
- Vercel serverless: 10s execution timeout on Hobby plan

## Future Agent Types

These agents are planned but not yet built:

| Agent | Source | Content Type | Description |
|-------|--------|-------------|-------------|
| Business Scraper | Yelp, Google Maps | business | Discovers local businesses by neighborhood |
| Event Scraper | Eventbrite, Meetup | event | Finds upcoming local events |
| Content Generator | Claude/GPT | article | Writes SEO articles about neighborhoods |
| Data Enrichment | Multiple | business | Adds hours, photos, descriptions to sparse listings |
| Freshness Agent | Google, Yelp | neighborhood_update | Verifies businesses are still open, removes closed ones |
| Image Agent | DALL-E, Unsplash | article | Generates or finds hero images for content |

## Example: Python Agent

```python
import requests

API_URL = "https://your-site.vercel.app"
API_KEY = "your-ingest-api-key"

headers = {
    "Content-Type": "application/json",
    "x-api-key": API_KEY
}

# Single business
response = requests.post(f"{API_URL}/api/ingest", json={
    "content_type": "business",
    "source": "yelp_scraper",
    "data": {
        "name": "Bones Restaurant",
        "category": "Restaurant",
        "area_id": 1,
        "street": "3130 E Colonial Dr",
        "city": "Orlando",
        "state": "Florida",
        "zip": "32789",
        "phone": "(407) 237-2663",
        "price_range": "$$$$"
    }
}, headers=headers)

print(response.json())
# {"success": true, "ingest_id": "...", "target_id": "..."}

# Batch of events
response = requests.post(f"{API_URL}/api/ingest-batch", json={
    "items": [
        {
            "content_type": "event",
            "source": "eventbrite_scraper",
            "data": {
                "title": "Jazz in the Park",
                "start_date": "2026-03-15",
                "venue": "Lake Eola Park",
                "area_id": 2,
                "price": "Free"
            }
        },
        {
            "content_type": "event",
            "source": "eventbrite_scraper",
            "data": {
                "title": "Orlando Tech Week",
                "start_date": "2026-04-01",
                "end_date": "2026-04-05",
                "venue": "Florida World Congress Center",
                "area_id": 3,
                "price": "$50-$200"
            }
        }
    ]
}, headers=headers)

print(response.json())
# {"success": true, "processed": 2, "total": 2, "results": [...]}
```

## Example: Node.js Agent

```javascript
const API_URL = 'https://your-site.vercel.app';
const API_KEY = 'your-ingest-api-key';

async function ingestBusiness(business) {
  const res = await fetch(`${API_URL}/api/ingest`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify({
      content_type: 'business',
      source: 'google_scraper',
      data: business,
    }),
  });
  return res.json();
}

// Usage
const result = await ingestBusiness({
  name: 'Kadence',
  category: 'Restaurant',
  area_id: 4,
  street: '1809 Winter Park Rd',
  city: 'Orlando',
  state: 'Florida',
  zip: '32801',
  price_range: '$$$',
  rating: 4.7,
});
```
