-- ============================================================
-- The 407 Vibes - Seed Data (Orlando, FL)
-- ============================================================

-- AREAS (10 Orlando zones)
INSERT INTO areas (name, slug, tagline, description, image_url, vibes, sort_order) VALUES
  ('Downtown Orlando', 'downtown-orlando', 'The Heart of the City Beautiful',
   'Orlando''s urban core — Lake Eola, Church Street, and the growing creative district where history meets high-rises.',
   'https://images.unsplash.com/photo-1575089776834-8be34c8a652f?w=1600',
   ARRAY['Urban','Lakefront','Nightlife','Arts'], 1),

  ('Winter Park', 'winter-park', 'Old Florida Charm & Culture',
   'Tree-lined Park Avenue, Rollins College, world-class museums, and some of the best dining in Central Florida.',
   'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
   ARRAY['Charming','Culture','Dining','Historic'], 2),

  ('Thornton Park', 'thornton-park', 'Walkable Urban Village',
   'Orlando''s most walkable neighborhood — brick streets, local boutiques, wine bars, and Lake Eola views.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Walkable','Boutique','Dining','Village'], 3),

  ('Mills 50 / Milk District', 'mills-50', 'Creative & Multicultural',
   'Orlando''s vibrant Vietnamese food corridor meets indie arts scene. Murals, pho, craft beer, and community.',
   'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1600',
   ARRAY['Multicultural','Food','Arts','Indie'], 4),

  ('College Park', 'college-park', 'Historic Bungalows & Local Flavor',
   'One of Orlando''s oldest neighborhoods with Craftsman bungalows, Edgewater Drive''s local shops, and serious community pride.',
   'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
   ARRAY['Historic','Walkable','Community','Local'], 5),

  ('Lake Nona', 'lake-nona', 'Innovation & Modern Living',
   'Orlando''s planned community of the future — Medical City, smart home tech, and the USTA National Campus.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Innovation','Health','Modern','Sports'], 6),

  ('Dr. Phillips', 'dr-phillips', 'Restaurant Row & Family Living',
   'Orlando''s culinary epicenter on Sand Lake Road, plus top-rated schools and the Dr. Phillips Center for the Performing Arts.',
   'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600',
   ARRAY['Dining','Family','Entertainment','Suburban'], 7),

  ('Baldwin Park', 'baldwin-park', 'New Urbanism Done Right',
   'A master-planned community built on the former Naval Training Center — walkable streets, village center, and lakefront living.',
   'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600',
   ARRAY['New Urbanism','Walkable','Lakefront','Family'], 8),

  ('Ivanhoe Village', 'ivanhoe-village', 'Antiques, Art & Lakeside Living',
   'Orlando''s antique row meets emerging arts district along the shores of Lake Ivanhoe. Eclectic, creative, and growing.',
   'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600',
   ARRAY['Eclectic','Arts','Antiques','Lakefront'], 9),

  ('Audubon Park', 'audubon-park', 'Garden District Vibes',
   'Orlando''s garden district — community market, local coffee, East End Market, and tree-canopied streets full of character.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Garden','Market','Community','Walkable'], 10);


-- NEIGHBORHOODS

-- Downtown Orlando neighborhoods
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'Lake Eola Heights', 'lake-eola-heights',
   'The crown jewel of downtown living — condos and historic homes surrounding Orlando''s iconic Lake Eola with its famous fountain and swan boats.',
   'https://images.unsplash.com/photo-1575089776834-8be34c8a652f?w=1600',
   ARRAY['Lakefront','Urban','Iconic','Walkable'],
   '{"title": "Lake Eola: The Soul of Orlando", "excerpt": "How the iconic lake and its fountain became the symbol of the City Beautiful.", "category": "Culture", "date": "February 2026"}'::jsonb, 1),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'Church Street District', 'church-street',
   'Orlando''s historic entertainment corridor featuring restored buildings, craft cocktail bars, and the Amway Center.',
   'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600',
   ARRAY['Entertainment','Historic','Nightlife','Sports'],
   '{"title": "Church Street''s Second Act", "excerpt": "The revival of Orlando''s original entertainment district.", "category": "Development", "date": "February 2026"}'::jsonb, 2),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'Parramore', 'parramore',
   'Orlando''s historic Black neighborhood experiencing a renaissance with the Creative Village development, UCF downtown campus, and the new Performing Arts Center.',
   'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
   ARRAY['Historic','Creative','Renaissance','Community'],
   '{"title": "Parramore Rising: Creative Village Changes Everything", "excerpt": "How UCF''s downtown campus is transforming Orlando''s most historic neighborhood.", "category": "Development", "date": "February 2026"}'::jsonb, 3),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'North Quarter', 'north-quarter',
   'The emerging creative district north of downtown, home to galleries, co-working spaces, and adaptive reuse projects.',
   'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600',
   ARRAY['Creative','Emerging','Galleries','Adaptive Reuse'],
   '{"title": "North Quarter: Orlando''s Next Creative Frontier", "excerpt": "Artists and entrepreneurs are staking claims in this up-and-coming district.", "category": "Culture", "date": "February 2026"}'::jsonb, 4);

-- Winter Park neighborhoods
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Park Avenue', 'park-avenue',
   'The charming main street of Winter Park — boutique shopping, sidewalk dining, Central Park, and the SunRail station.',
   'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
   ARRAY['Shopping','Dining','Charming','Historic'],
   '{"title": "Park Avenue: Florida''s Most Charming Main Street", "excerpt": "Why this tree-lined boulevard remains Central Florida''s premier shopping destination.", "category": "Lifestyle", "date": "February 2026"}'::jsonb, 1),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Hannibal Square', 'hannibal-square',
   'A historic African American community now home to trendy restaurants, a heritage center, and vibrant community life.',
   'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600',
   ARRAY['Historic','Dining','Heritage','Community'],
   '{"title": "Hannibal Square: Preserving History While Moving Forward", "excerpt": "How this community honors its past while embracing new growth.", "category": "History", "date": "February 2026"}'::jsonb, 2),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Via Tuscany / Ravaudage', 'via-tuscany',
   'The newest development corridor in Winter Park featuring upscale mixed-use projects and the transformation of the old Winter Park Village.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Development','Upscale','Mixed-Use','Modern'],
   '{"title": "Ravaudage: Winter Park''s Billion-Dollar Bet", "excerpt": "Inside the massive redevelopment reshaping Winter Park''s northern gateway.", "category": "Development", "date": "February 2026"}'::jsonb, 3);

-- Mills 50 neighborhoods
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Mills 50 Main District', 'mills-50-main',
   'The heart of Orlando''s Vietnamese-American community and indie culture. Colonial Drive to Virginia Drive — wall-to-wall flavor.',
   'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1600',
   ARRAY['Vietnamese','Indie','Murals','Food'],
   '{"title": "The Pho Trail: A Guide to Mills 50''s Best Vietnamese Food", "excerpt": "From banh mi to bun bo hue, a definitive guide to the corridor''s best bites.", "category": "Food", "date": "February 2026"}'::jsonb, 1),

  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Milk District', 'milk-district',
   'The creative sibling of Mills 50 centered on Robinson Street — craft breweries, indie shops, and the monthly Milk District arts market.',
   'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600',
   ARRAY['Craft Beer','Arts','Market','Creative'],
   '{"title": "Milk District: Orlando''s DIY Creative Hub", "excerpt": "How a monthly market turned a quiet neighborhood into a cultural destination.", "category": "Culture", "date": "February 2026"}'::jsonb, 2);

-- College Park neighborhoods
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'college-park'), 'Edgewater Drive', 'edgewater-drive',
   'College Park''s walkable main street with local restaurants, coffee shops, and boutiques. The vibe is neighborhood-first.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Walkable','Local','Dining','Boutique'],
   '{"title": "Edgewater Drive: Orlando''s Neighborhood Main Street", "excerpt": "Why locals love this walkable strip of independent businesses.", "category": "Lifestyle", "date": "February 2026"}'::jsonb, 1),

  ((SELECT id FROM areas WHERE slug = 'college-park'), 'SODO', 'sodo',
   'South of Downtown — the emerging commercial and residential corridor along Orange Avenue between downtown and the airport.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Emerging','Commercial','Urban','Development'],
   '{"title": "SODO: Orlando''s Next Urban Frontier", "excerpt": "Rapid development is transforming the Orange Avenue corridor.", "category": "Development", "date": "February 2026"}'::jsonb, 2);

-- Lake Nona neighborhoods
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'lake-nona'), 'Medical City', 'medical-city',
   'Home to the VA Medical Center, Nemours Children''s Hospital, and UCF College of Medicine. A health and life sciences cluster.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Medical','Innovation','Research','Wellness'],
   '{"title": "Medical City: How Lake Nona Became a Health Innovation Hub", "excerpt": "The story behind Orlando''s biomedical corridor.", "category": "Innovation", "date": "February 2026"}'::jsonb, 1),

  ((SELECT id FROM areas WHERE slug = 'lake-nona'), 'Lake Nona Town Center', 'lake-nona-town-center',
   'The walkable heart of Lake Nona with Boxi Park, Tavistock restaurants, and community gathering spaces.',
   'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600',
   ARRAY['Walkable','Dining','Community','Modern'],
   '{"title": "Boxi Park & Beyond: Lake Nona''s Social Scene", "excerpt": "Inside the shipping-container food hall that anchors Lake Nona''s nightlife.", "category": "Lifestyle", "date": "February 2026"}'::jsonb, 2);

-- Audubon Park neighborhoods
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'audubon-park'), 'Audubon Park Garden District', 'audubon-garden',
   'The commercial heart of Audubon Park along Corrine Drive — East End Market, Stardust Video & Coffee, and the weekly community market.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Market','Coffee','Community','Garden'],
   '{"title": "East End Market: Orlando''s Food Hall Pioneer", "excerpt": "How a local food hall became the model for community-driven dining.", "category": "Food", "date": "February 2026"}'::jsonb, 1);

-- Thornton Park neighborhoods
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'Thornton Park District', 'thornton-park-district',
   'The walkable village center along Washington Street with wine bars, galleries, and brick-lined sidewalks.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Wine Bars','Galleries','Walkable','Village'],
   '{"title": "Thursday Night Wine & Art: Thornton Park''s Signature Event", "excerpt": "How a weekly wine walk became Orlando''s most beloved neighborhood tradition.", "category": "Culture", "date": "February 2026"}'::jsonb, 1);

-- Baldwin Park neighborhoods
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'baldwin-park'), 'Baldwin Park Village Center', 'baldwin-village',
   'The town center of Baldwin Park with restaurants, shops, and the central park. New urbanism at its finest.',
   'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600',
   ARRAY['Village','Dining','Walkable','New Urbanism'],
   '{"title": "From Naval Base to New Urbanism: Baldwin Park''s Transformation", "excerpt": "How a decommissioned military base became one of Orlando''s most desirable neighborhoods.", "category": "Development", "date": "February 2026"}'::jsonb, 1);

-- Dr. Phillips neighborhoods
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Restaurant Row', 'restaurant-row',
   'Sand Lake Road between I-4 and Turkey Lake — the densest concentration of restaurants in Central Florida.',
   'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600',
   ARRAY['Dining','International','Culinary','Diverse'],
   '{"title": "Restaurant Row: A World Tour on Sand Lake Road", "excerpt": "From sushi to Brazilian steakhouses, exploring Orlando''s most diverse dining corridor.", "category": "Food", "date": "February 2026"}'::jsonb, 1);

-- Ivanhoe Village neighborhoods
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'ivanhoe-village'), 'Ivanhoe Row', 'ivanhoe-row',
   'The antique and vintage row along Orange Avenue north of downtown, now mixed with craft breweries and creative businesses.',
   'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600',
   ARRAY['Antiques','Vintage','Breweries','Creative'],
   '{"title": "Ivanhoe Row: Where Vintage Meets Craft", "excerpt": "How antique shops and craft breweries are coexisting on Orlando''s most eclectic strip.", "category": "Culture", "date": "February 2026"}'::jsonb, 1);
