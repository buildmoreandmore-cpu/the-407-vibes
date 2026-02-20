-- ============================================================
-- Orlando Vibes - Seed Data (Orlando, FL)
-- ============================================================
-- Populates areas, neighborhoods, and spotlight_properties
-- from site-config.js and neighborhoods-data.js
-- ============================================================

-- ============================================================
-- AREAS (9 top-level city zones from SiteConfig)
-- ============================================================
INSERT INTO areas (name, slug, tagline, description, image_url, vibes, sort_order) VALUES
  ('Downtown Orlando',              'downtown-orlando',     'Urban Core & Lake Eola',        'Orlando''s vibrant urban center anchored by Lake Eola, with a thriving arts scene, nightlife, and growing residential community.',                                   '/api/places?query=Lake+Eola+Park+Orlando+FL&maxwidth=1600', ARRAY['Urban','Lakeside','Nightlife','Arts'],                1),
  ('Winter Park',                   'winter-park',          'Upscale Charm & Culture',       'A refined city-within-a-city known for Park Avenue boutiques, Rollins College, world-class museums, and tree-canopied streets.',                                      '/api/places?query=Park+Avenue+Winter+Park+FL&maxwidth=1600', ARRAY['Upscale','Culture','Boutiques','Parks'],              2),
  ('Thornton Park / SoDo',         'thornton-park',        'Historic & Emerging',           'Charming brick-street neighborhoods south and east of downtown with eclectic dining, local boutiques, and emerging development.',                                     '/api/places?query=Thornton+Park+District+Orlando+FL&maxwidth=1600', ARRAY['Historic','Dining','Walkable','Emerging'],            3),
  ('Mills 50',                      'mills-50',             'Eclectic & Arts',               'Orlando''s creative district blending Vietnamese culture, indie art galleries, vintage shops, and one of Florida''s best food scenes.',                                '/api/places?query=Mills+50+District+Orlando+FL&maxwidth=1600', ARRAY['Creative','Diverse','Food','Arts'],                   4),
  ('College Park / Edgewater',      'college-park',         'Trendy & Local',                'Hip neighborhoods west of downtown with craft breweries, local eateries, and a strong sense of community identity.',                                                 '/api/places?query=College+Park+neighborhood+Orlando+FL&maxwidth=1600', ARRAY['Trendy','Local','Breweries','Community'],             5),
  ('International Drive',           'international-drive',  'Entertainment & Tourism',       'Orlando''s world-famous entertainment corridor with theme parks, attractions, dining, and the Orange County Convention Center.',                                      '/api/places?query=International+Drive+Orlando+FL&maxwidth=1600', ARRAY['Entertainment','Tourism','Dining','Attractions'],     6),
  ('Dr. Phillips / Restaurant Row', 'dr-phillips',          'Dining & Upscale',              'Orlando''s premier dining destination with Restaurant Row, upscale residential communities, and proximity to theme parks.',                                           '/api/places?query=Restaurant+Row+Sand+Lake+Road+Orlando+FL&maxwidth=1600', ARRAY['Dining','Upscale','Family','Suburban'],               7),
  ('East Orlando / UCF',            'east-orlando',         'College & Growth',              'A rapidly growing corridor anchored by the University of Central Florida, with master-planned communities and Lake Nona''s medical city.',                            '/api/places?query=University+of+Central+Florida+Orlando+FL&maxwidth=1600', ARRAY['College','Growth','Innovation','Family'],             8),
  ('North Orlando / Maitland',      'north-orlando',        'Suburban & Connected',          'Suburban communities north of Orlando with corporate offices, excellent schools, and diverse dining along the I-4 corridor.',                                         '/api/places?query=Maitland+FL&maxwidth=1600', ARRAY['Suburban','Schools','Dining','Parks'],                9);


-- ============================================================
-- NEIGHBORHOODS - Downtown Orlando (10 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'Lake Eola Heights', 'lake-eola-heights',
   'The crown jewel of Downtown Orlando, centered around the iconic Lake Eola Park with its famous fountain. This walkable neighborhood blends high-rise living with lakeside leisure, farmers markets, and swan boat rides. It is the postcard image of Orlando that locals actually live in.',
   '/api/places?query=Lake+Eola+Park+Orlando+FL&maxwidth=1600',
   ARRAY['Lakeside','Walkable','Urban','Iconic'],
   '{"title": "Lake Eola: The Heart That Keeps Downtown Orlando Beating", "excerpt": "How this urban lake became the soul of a city and the anchor of a thriving residential neighborhood.", "image": "/api/places?query=Lake+Eola+fountain+Orlando+FL&maxwidth=800", "category": "Neighborhood Spotlight", "date": "February 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'Parramore', 'parramore',
   'Orlando''s historic African American neighborhood undergoing a transformative renaissance. Parramore is home to the Dr. Phillips Center for the Performing Arts, Creative Village, and a rich cultural heritage that stretches back over a century.',
   '/api/places?query=Parramore+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Historic','Cultural','Emerging','Arts'],
   '{"title": "Parramore Rising: Honoring History While Building the Future", "excerpt": "Inside the community-driven transformation of Orlando''s most historic neighborhood.", "image": "/api/places?query=Dr+Phillips+Center+Performing+Arts+Orlando+FL&maxwidth=800", "category": "Development", "date": "February 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'Church Street District', 'church-street-district',
   'The entertainment backbone of Downtown Orlando, anchored by the historic Church Street Station. This district pulses with nightlife, restaurants, and event venues, making it ground zero for Orlando''s urban social scene after dark.',
   '/api/places?query=Church+Street+Station+Orlando+FL&maxwidth=1600',
   ARRAY['Nightlife','Entertainment','Historic','Social'],
   '{"title": "Church Street After Dark: Orlando''s Original Entertainment District", "excerpt": "How this historic corridor continues to reinvent itself as the pulse of downtown nightlife.", "image": "/api/places?query=Church+Street+Orlando+FL+nightlife&maxwidth=800", "category": "Nightlife", "date": "February 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'Creative Village', 'creative-village',
   'A bold mixed-use innovation district rising on the former Amway Arena site. Creative Village brings together UCF''s downtown campus, Valencia College, tech startups, and modern apartments in a walkable urban hub designed for the knowledge economy.',
   '/api/places?query=Creative+Village+Orlando+FL&maxwidth=1600',
   ARRAY['Innovation','Education','Tech','Modern'],
   '{"title": "Creative Village: Where Orlando''s Tech Future Takes Shape", "excerpt": "How a university campus and innovation hub are redefining what downtown Orlando can be.", "image": "/api/places?query=UCF+Downtown+Campus+Orlando+FL&maxwidth=800", "category": "Innovation", "date": "February 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'North Quarter', 'north-quarter',
   'The emerging northern edge of downtown featuring adaptive reuse projects and new residential towers. North Quarter is quickly becoming a favorite for young professionals who want urban living with a quieter, more residential feel than the core.',
   '/api/places?query=North+Quarter+Downtown+Orlando+FL&maxwidth=1600',
   ARRAY['Emerging','Residential','Young Professionals','Adaptive Reuse'],
   '{"title": "North Quarter: The Quiet Rise of Downtown''s New Frontier", "excerpt": "Young professionals are discovering this evolving pocket just north of the urban core.", "image": "/api/places?query=North+Quarter+Orlando+FL&maxwidth=800", "category": "Real Estate", "date": "February 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'South Eola', 'south-eola',
   'A sophisticated residential enclave on the southern shore of Lake Eola. South Eola is known for its upscale condos, tree-lined streets, and proximity to both the lake and Thornton Park''s dining scene. Quiet elegance in the heart of the city.',
   '/api/places?query=South+Eola+Orlando+FL&maxwidth=1600',
   ARRAY['Upscale','Lakeside','Residential','Elegant'],
   '{"title": "South Eola Living: Lakefront Luxury in Downtown Orlando", "excerpt": "Why discerning buyers are choosing the southern shore of Lake Eola for upscale urban living.", "image": "/api/places?query=South+Eola+Drive+Orlando+FL&maxwidth=800", "category": "Luxury Living", "date": "February 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'Lake Cherokee', 'lake-cherokee',
   'A quiet residential neighborhood wrapped around a beautiful chain of lakes just south of downtown. Lake Cherokee features charming bungalows, mature oak canopies, and a tight-knit community feel that belies its proximity to the urban core.',
   '/api/places?query=Lake+Cherokee+Orlando+FL&maxwidth=1600',
   ARRAY['Lakeside','Bungalows','Quiet','Community'],
   '{"title": "Lake Cherokee: Orlando''s Hidden Lakeside Village", "excerpt": "Discovering the bungalow-lined streets and serene lakes just minutes from downtown.", "image": "/api/places?query=Lake+Cherokee+Park+Orlando+FL&maxwidth=800", "category": "Neighborhood Spotlight", "date": "February 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'Signal Hill', 'signal-hill',
   'A small but proud residential neighborhood on the western edge of downtown. Signal Hill offers affordable homeownership near the urban core with a diverse, close-knit community that has been the backbone of this area for decades.',
   '/api/places?query=Signal+Hill+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Affordable','Diverse','Community','Residential'],
   '{"title": "Signal Hill: Affordable Living Steps from Downtown", "excerpt": "How this tight-knit neighborhood offers real community near Orlando''s urban center.", "image": "/api/places?query=Signal+Hill+Orlando+FL&maxwidth=800", "category": "Community", "date": "February 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'South Division', 'south-division',
   'An up-and-coming pocket south of the downtown core where new mixed-use projects are blending with established residential streets. South Division is attracting attention for its walkability and proximity to both the SoDo retail district and downtown.',
   '/api/places?query=South+Division+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Walkable','Mixed-Use','Up-and-Coming','Urban'],
   '{"title": "South Division: Orlando''s Next Great Walkable Neighborhood", "excerpt": "New development and old charm are meeting in this overlooked downtown pocket.", "image": "/api/places?query=SoDo+Orlando+FL&maxwidth=800", "category": "Development", "date": "February 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'downtown-orlando'), 'Callahan', 'callahan',
   'A historic neighborhood on the northwest edge of downtown with deep roots in Orlando''s African American community. Callahan is experiencing new interest as downtown expands, while longtime residents work to preserve the area''s cultural identity.',
   '/api/places?query=Callahan+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Historic','Cultural Heritage','Emerging','Community'],
   '{"title": "Callahan: Preserving Culture as Downtown Grows", "excerpt": "Longtime residents balance new development with the neighborhood''s rich cultural legacy.", "image": "/api/places?query=Callahan+neighborhood+Downtown+Orlando+FL&maxwidth=800", "category": "History", "date": "February 2026"}'::jsonb,
   10);


-- ============================================================
-- NEIGHBORHOODS - Winter Park (10 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Park Avenue District', 'park-avenue-district',
   'The elegant main street of Winter Park, lined with boutique shops, sidewalk cafes, and oak-canopied charm. Park Avenue is Central Florida''s premier walkable shopping district, anchored by the Charles Hosmer Morse Museum of American Art and Central Park.',
   '/api/places?query=Park+Avenue+Winter+Park+FL&maxwidth=1600',
   ARRAY['Boutique Shopping','Walkable','Charming','Cultural'],
   '{"title": "Park Avenue: Central Florida''s Most Charming Main Street", "excerpt": "How Winter Park''s signature boulevard maintains its independent character in the age of big retail.", "image": "/api/places?query=Park+Avenue+shops+Winter+Park+FL&maxwidth=800", "category": "Lifestyle", "date": "February 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Hannibal Square', 'hannibal-square',
   'Winter Park''s historic African American neighborhood, now a vibrant dining and cultural destination. Hannibal Square blends its deep heritage with acclaimed restaurants, the Hannibal Square Heritage Center, and a community that has shaped the city for over a century.',
   '/api/places?query=Hannibal+Square+Winter+Park+FL&maxwidth=1600',
   ARRAY['Historic','Dining','Cultural Heritage','Vibrant'],
   '{"title": "Hannibal Square: Where Heritage Meets the Table", "excerpt": "The rich cultural history and booming restaurant scene of Winter Park''s most storied neighborhood.", "image": "/api/places?query=Hannibal+Square+Heritage+Center+Winter+Park+FL&maxwidth=800", "category": "Food & Culture", "date": "February 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Winter Park Village', 'winter-park-village',
   'A popular open-air lifestyle center featuring restaurants, a movie theater, and retail shops in an upscale outdoor setting. The Village serves as a modern gathering spot for Winter Park residents who want convenience without sacrificing charm.',
   '/api/places?query=Winter+Park+Village+FL&maxwidth=1600',
   ARRAY['Shopping','Dining','Lifestyle','Modern'],
   '{"title": "Winter Park Village: The Outdoor Living Room of the City", "excerpt": "How this open-air center became the go-to gathering spot for Winter Park locals.", "image": "/api/places?query=Winter+Park+Village+shopping+FL&maxwidth=800", "category": "Lifestyle", "date": "February 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Lake Virginia', 'lake-virginia',
   'Home to Rollins College and the scenic shores of Lake Virginia, this neighborhood embodies the intellectual and natural beauty of Winter Park. Stately homes with lake views sit alongside the campus, creating a tranquil, prestigious setting.',
   '/api/places?query=Rollins+College+Winter+Park+FL&maxwidth=1600',
   ARRAY['Lakefront','College Town','Prestigious','Tranquil'],
   '{"title": "Lake Virginia: Where Rollins College Meets Lakefront Living", "excerpt": "The serene intersection of academic life and waterfront elegance in Winter Park.", "image": "/api/places?query=Lake+Virginia+Rollins+College+Winter+Park+FL&maxwidth=800", "category": "Education", "date": "February 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Orwin Manor', 'orwin-manor',
   'A mid-century neighborhood with tree-canopied streets and well-maintained ranch homes. Orwin Manor offers an accessible entry point to Winter Park living with a friendly, established community feel and easy access to Park Avenue.',
   '/api/places?query=Orwin+Manor+Winter+Park+FL&maxwidth=1600',
   ARRAY['Mid-Century','Family-Friendly','Established','Accessible'],
   '{"title": "Orwin Manor: Winter Park Living Without the Premium", "excerpt": "How this friendly mid-century neighborhood offers real Winter Park charm at attainable prices.", "image": "/api/places?query=Orwin+Manor+neighborhood+Winter+Park+FL&maxwidth=800", "category": "Real Estate", "date": "February 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Bryn Mawr', 'bryn-mawr',
   'An upscale residential enclave with gracious homes on large lots shaded by mature oaks. Bryn Mawr is one of Winter Park''s most sought-after addresses, prized for its quiet streets, manicured landscapes, and proximity to top-rated schools.',
   '/api/places?query=Bryn+Mawr+neighborhood+Winter+Park+FL&maxwidth=1600',
   ARRAY['Upscale','Quiet','Schools','Oak-Canopied'],
   '{"title": "Bryn Mawr: Under the Oaks of Winter Park''s Finest", "excerpt": "Inside one of Central Florida''s most coveted residential enclaves.", "image": "/api/places?query=Bryn+Mawr+Winter+Park+FL&maxwidth=800", "category": "Luxury Living", "date": "February 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Temple Trail', 'temple-trail',
   'A quiet residential neighborhood south of Aloma Avenue featuring mid-century homes and a strong neighborhood association. Temple Trail is popular with families who appreciate its community events, safe streets, and Winter Park schools.',
   '/api/places?query=Temple+Trail+neighborhood+Winter+Park+FL&maxwidth=1600',
   ARRAY['Family-Friendly','Mid-Century','Community','Safe'],
   '{"title": "Temple Trail: Where Neighbors Still Borrow Sugar", "excerpt": "Inside one of Winter Park''s most tight-knit family neighborhoods.", "image": "/api/places?query=Temple+Trail+Winter+Park+FL&maxwidth=800", "category": "Community", "date": "February 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Windsong', 'windsong',
   'A peaceful residential pocket in Winter Park with winding streets and mature landscaping. Windsong offers a tucked-away feeling with convenient access to shopping, dining, and the Winter Park chain of lakes.',
   '/api/places?query=Windsong+neighborhood+Winter+Park+FL&maxwidth=1600',
   ARRAY['Peaceful','Residential','Tucked-Away','Convenient'],
   '{"title": "Windsong: Winter Park''s Quiet Escape", "excerpt": "How this hidden pocket offers serenity minutes from everything.", "image": "/api/places?query=Windsong+Winter+Park+FL&maxwidth=800", "category": "Neighborhood Spotlight", "date": "February 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Lake Sue', 'lake-sue',
   'An exclusive lakefront neighborhood wrapped around the scenic Lake Sue, part of Winter Park''s famous chain of lakes. Grand homes with private docks and lush tropical landscaping define this premier residential address.',
   '/api/places?query=Lake+Sue+Winter+Park+FL&maxwidth=1600',
   ARRAY['Lakefront','Exclusive','Grand Homes','Scenic'],
   '{"title": "Lake Sue: Living on Winter Park''s Chain of Lakes", "excerpt": "Lakefront luxury along one of Central Florida''s most beautiful waterways.", "image": "/api/places?query=Lake+Sue+Winter+Park+chain+of+lakes+FL&maxwidth=800", "category": "Luxury Living", "date": "February 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'winter-park'), 'Baldwin Park', 'baldwin-park',
   'A master-planned new urbanist community built on the former Orlando Naval Training Center. Baldwin Park features tree-lined streets, a town center with shops and restaurants, lakes, parks, and a diverse mix of housing from apartments to estate homes.',
   '/api/places?query=Baldwin+Park+Orlando+FL&maxwidth=1600',
   ARRAY['New Urbanism','Town Center','Walkable','Mixed Housing'],
   '{"title": "Baldwin Park: From Military Base to Model Community", "excerpt": "How a former naval training center became one of Orlando''s most desirable neighborhoods.", "image": "/api/places?query=Baldwin+Park+Village+Center+Orlando+FL&maxwidth=800", "category": "Development", "date": "February 2026"}'::jsonb,
   10);


-- ============================================================
-- NEIGHBORHOODS - Thornton Park / SoDo (10 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'Thornton Park District', 'thornton-park-district',
   'Orlando''s most walkable neighborhood, known for its brick-lined streets, independent restaurants, wine bars, and boutique shops along Washington Street. Thornton Park is where Orlando feels most like a proper city, with a European-inspired pedestrian vibe.',
   '/api/places?query=Thornton+Park+District+Orlando+FL&maxwidth=1600',
   ARRAY['Walkable','Dining','Boutiques','European Vibe'],
   '{"title": "Thornton Park: Orlando''s Most Walkable Block Party", "excerpt": "How brick streets and independent restaurants created Central Florida''s finest urban neighborhood.", "image": "/api/places?query=Washington+Street+Thornton+Park+Orlando+FL&maxwidth=800", "category": "Lifestyle", "date": "February 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'SoDo', 'sodo',
   'South of Downtown Orlando, SoDo is a rapidly evolving commercial and residential district anchored by the SoDo shopping center and Orlando Health campus. New apartments and mixed-use projects are transforming this corridor into a vibrant urban neighborhood.',
   '/api/places?query=SoDo+shopping+district+Orlando+FL&maxwidth=1600',
   ARRAY['Evolving','Mixed-Use','Shopping','Urban'],
   '{"title": "SoDo: Orlando''s Fastest-Changing Corridor", "excerpt": "New development is turning this commercial strip into a genuine neighborhood.", "image": "/api/places?query=SoDo+Orlando+FL&maxwidth=800", "category": "Development", "date": "February 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'Delaney Park', 'delaney-park',
   'A beloved residential neighborhood anchored by the 10-acre Delaney Park, one of Orlando''s oldest public parks. Craftsman bungalows and renovated cottages line the streets, and families gather at the playground, dog park, and community center.',
   '/api/places?query=Delaney+Park+Orlando+FL&maxwidth=1600',
   ARRAY['Family-Friendly','Parks','Bungalows','Community'],
   '{"title": "Delaney Park: The Front Yard of South Orlando", "excerpt": "How a ten-acre park became the heart of one of Orlando''s most family-friendly neighborhoods.", "image": "/api/places?query=Delaney+Park+playground+Orlando+FL&maxwidth=800", "category": "Parks", "date": "February 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'Lawsona / Fern Creek', 'lawsona-fern-creek',
   'A diverse residential neighborhood east of downtown with affordable bungalows and growing investment. Lawsona/Fern Creek is attracting first-time buyers who want walkability to Thornton Park and downtown without the premium prices.',
   '/api/places?query=Lawsona+Fern+Creek+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Diverse','Affordable','Walkable','Up-and-Coming'],
   '{"title": "Lawsona/Fern Creek: Where Orlando''s Next Wave Is Buying", "excerpt": "First-time homebuyers are discovering real value in this downtown-adjacent neighborhood.", "image": "/api/places?query=Fern+Creek+Avenue+Orlando+FL&maxwidth=800", "category": "Real Estate", "date": "February 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'Eola Heights', 'eola-heights',
   'A historic neighborhood on the eastern shore of Lake Eola featuring some of Orlando''s oldest and most charming homes. Eola Heights is a walkable, tree-shaded residential area with direct access to the lake and Thornton Park''s restaurants.',
   '/api/places?query=Eola+Heights+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Historic','Lakeside','Charming','Walkable'],
   '{"title": "Eola Heights: Orlando''s Original Lakeside Living", "excerpt": "The historic homes and tree-canopied streets that make this neighborhood a downtown treasure.", "image": "/api/places?query=Eola+Heights+Orlando+FL&maxwidth=800", "category": "History", "date": "February 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'East Central Park', 'east-central-park',
   'A transitional neighborhood along East Colonial Drive with a mix of commercial activity and residential pockets. East Central Park is benefiting from the overall momentum of the Thornton Park area as new investment flows east.',
   '/api/places?query=East+Colonial+Drive+Orlando+FL&maxwidth=1600',
   ARRAY['Transitional','Investment','Mixed-Use','Emerging'],
   '{"title": "East Central Park: Riding the Wave of Eastside Growth", "excerpt": "How spillover from Thornton Park is reshaping this Colonial Drive corridor.", "image": "/api/places?query=East+Central+Park+Orlando+FL&maxwidth=800", "category": "Development", "date": "February 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'Lancaster Park', 'lancaster-park',
   'A quiet residential neighborhood south of downtown with modest homes and a strong community feel. Lancaster Park offers a laid-back pace of life with easy access to SoDo shopping and the Orlando Health medical campus.',
   '/api/places?query=Lancaster+Park+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Quiet','Residential','Laid-Back','Convenient'],
   '{"title": "Lancaster Park: Orlando''s Quiet Southern Pocket", "excerpt": "A neighborhood that offers peace and convenience just south of the downtown bustle.", "image": "/api/places?query=Lancaster+Park+Orlando+FL&maxwidth=800", "category": "Neighborhood Spotlight", "date": "February 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'Wadeview Park', 'wadeview-park',
   'Centered around the community park of the same name, Wadeview Park is a family-oriented neighborhood with a mix of renovated bungalows and new construction. The park features a pool, playground, and sports fields that serve as the neighborhood''s social hub.',
   '/api/places?query=Wadeview+Park+Orlando+FL&maxwidth=1600',
   ARRAY['Family-Friendly','Parks','Renovated','Community'],
   '{"title": "Wadeview Park: Where the Pool Is the Community Center", "excerpt": "How a neighborhood park and pool became the social glue for this south Orlando community.", "image": "/api/places?query=Wadeview+Park+pool+Orlando+FL&maxwidth=800", "category": "Community", "date": "February 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'Conway Gardens', 'conway-gardens',
   'A residential area south of downtown near the Orlando International Airport corridor. Conway Gardens features affordable single-family homes and is popular with airport workers and young families looking for value close to the city.',
   '/api/places?query=Conway+Gardens+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Affordable','Residential','Convenient','Family-Friendly'],
   '{"title": "Conway Gardens: Real Homes at Real Prices Near Orlando", "excerpt": "How this unassuming neighborhood offers genuine affordability with city access.", "image": "/api/places?query=Conway+area+Orlando+FL&maxwidth=800", "category": "Real Estate", "date": "February 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'thornton-park'), 'Engelwood Park', 'engelwood-park',
   'A growing residential community south of downtown Orlando with a mix of older homes and new construction. Engelwood Park is seeing renewed interest from buyers priced out of more established neighborhoods closer to the core.',
   '/api/places?query=Engelwood+Park+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Growing','Affordable','Residential','New Construction'],
   '{"title": "Engelwood Park: A Fresh Start South of Downtown", "excerpt": "New investment and first-time buyers are breathing life into this south Orlando neighborhood.", "image": "/api/places?query=Engelwood+Park+Orlando+FL&maxwidth=800", "category": "Development", "date": "February 2026"}'::jsonb,
   10);


-- ============================================================
-- NEIGHBORHOODS - Mills 50 (10 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Mills 50 Main', 'mills-50-main',
   'The vibrant core of Orlando''s Mills 50 district, an officially designated Main Street District known for its Vietnamese restaurants, bubble tea shops, vintage stores, and eclectic arts scene. This is Orlando at its most authentically multicultural.',
   '/api/places?query=Mills+50+District+Orlando+FL&maxwidth=1600',
   ARRAY['Multicultural','Foodie','Eclectic','Arts'],
   '{"title": "Mills 50: Orlando''s Multicultural Soul Food District", "excerpt": "How Vietnamese pho shops and craft breweries created Orlando''s most eclectic neighborhood.", "image": "/api/places?query=Mills+Avenue+Orlando+FL&maxwidth=800", "category": "Food & Culture", "date": "February 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Colonialtown North', 'colonialtown-north',
   'A residential neighborhood with charming 1920s and 1930s bungalows adjacent to the Mills 50 dining corridor. Colonialtown North is one of Orlando''s most walkable residential areas, with craft breweries, coffee shops, and restaurants steps from front porches.',
   '/api/places?query=Colonialtown+North+Orlando+FL&maxwidth=1600',
   ARRAY['Bungalows','Walkable','Breweries','Historic'],
   '{"title": "Colonialtown North: Bungalow Life on the Mills 50 Border", "excerpt": "How 1920s charm and modern craft culture coexist in this walkable neighborhood.", "image": "/api/places?query=Colonialtown+Orlando+FL&maxwidth=800", "category": "Lifestyle", "date": "February 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Colonialtown South', 'colonialtown-south',
   'The southern half of the historic Colonialtown neighborhood, known for its proximity to Lake Highland and tree-lined residential streets. A popular choice for young professionals and families who want walkability to downtown and Mills 50 culture.',
   '/api/places?query=Colonialtown+South+Orlando+FL&maxwidth=1600',
   ARRAY['Residential','Young Professionals','Trees','Walkable'],
   '{"title": "Colonialtown South: The Neighborhood That Walks Everywhere", "excerpt": "Residents here can walk to downtown, Mills 50, and the lakes without breaking a sweat.", "image": "/api/places?query=Colonialtown+South+neighborhood+Orlando+FL&maxwidth=800", "category": "Neighborhood Spotlight", "date": "February 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Lake Highland', 'lake-highland',
   'Named after the prestigious Lake Highland Preparatory School, this neighborhood wraps around several scenic lakes and features a mix of historic homes and modern townhomes. It bridges downtown and Mills 50 with lakeside elegance.',
   '/api/places?query=Lake+Highland+Preparatory+School+Orlando+FL&maxwidth=1600',
   ARRAY['Lakeside','Schools','Historic','Elegant'],
   '{"title": "Lake Highland: Where Education Meets Lakefront Living", "excerpt": "How a prestigious prep school and scenic lakes define this central neighborhood.", "image": "/api/places?query=Lake+Highland+Orlando+FL&maxwidth=800", "category": "Education", "date": "February 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Audubon Park', 'audubon-park',
   'A beloved neighborhood centered around its community garden district and the Audubon Park Garden District commercial strip. Known for its weekly community market, farm-to-table restaurants, and strong locavore ethos, this is where Orlando goes green.',
   '/api/places?query=Audubon+Park+Garden+District+Orlando+FL&maxwidth=1600',
   ARRAY['Garden District','Farm-to-Table','Community Market','Green'],
   '{"title": "Audubon Park: Orlando''s Farm-to-Table Heart", "excerpt": "From community gardens to weekly markets, this neighborhood leads Orlando''s local food movement.", "image": "/api/places?query=Audubon+Park+Community+Market+Orlando+FL&maxwidth=800", "category": "Food", "date": "February 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Leu Gardens Area', 'leu-gardens-area',
   'The residential area surrounding the stunning Harry P. Leu Gardens, a 50-acre botanical oasis in the heart of Orlando. Homes here enjoy proximity to one of the Southeast''s finest botanical gardens and the scenic shores of Lake Rowena.',
   '/api/places?query=Harry+P+Leu+Gardens+Orlando+FL&maxwidth=1600',
   ARRAY['Botanical','Scenic','Nature','Peaceful'],
   '{"title": "Living Next to Leu Gardens: Orlando''s Botanical Paradise", "excerpt": "What it means to have 50 acres of world-class gardens as your neighborhood park.", "image": "/api/places?query=Leu+Gardens+Orlando+FL&maxwidth=800", "category": "Nature", "date": "February 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Coytown', 'coytown',
   'A small, eclectic neighborhood east of Mills Avenue with a mix of rentals and renovated homes. Coytown is popular with artists, musicians, and creative types who appreciate its funky character and proximity to the Mills 50 strip.',
   '/api/places?query=Coytown+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Eclectic','Creative','Funky','Artists'],
   '{"title": "Coytown: Orlando''s Creative Underground", "excerpt": "How artists and musicians found their home in this unassuming Mills 50 pocket.", "image": "/api/places?query=Coytown+Orlando+FL&maxwidth=800", "category": "Arts & Culture", "date": "February 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Rowena Gardens', 'rowena-gardens',
   'A quiet residential neighborhood near Lake Rowena and Leu Gardens with well-maintained mid-century homes. Rowena Gardens offers a suburban feel within the urban core, with lake access and botanical garden views just around the corner.',
   '/api/places?query=Rowena+Gardens+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Quiet','Mid-Century','Lake Access','Suburban Feel'],
   '{"title": "Rowena Gardens: Orlando''s Quiet Lake Life", "excerpt": "A neighborhood where mid-century homes and lakeside serenity coexist minutes from everything.", "image": "/api/places?query=Lake+Rowena+Orlando+FL&maxwidth=800", "category": "Neighborhood Spotlight", "date": "February 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Milk District', 'milk-district',
   'Named for the old T.G. Lee dairy that once anchored the area, the Milk District has become one of Orlando''s most exciting emerging neighborhoods. Craft breweries, independent restaurants, a monthly market, and growing street art scene define this gritty, authentic pocket.',
   '/api/places?query=Milk+District+Orlando+FL&maxwidth=1600',
   ARRAY['Craft Beer','Street Art','Gritty','Authentic'],
   '{"title": "The Milk District: From Dairy to Craft Beer Destination", "excerpt": "How a former dairy corridor became one of Orlando''s most exciting food and beer neighborhoods.", "image": "/api/places?query=Milk+District+market+Orlando+FL&maxwidth=800", "category": "Food & Drink", "date": "February 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'mills-50'), 'Pinecastle', 'pinecastle',
   'A historically working-class neighborhood southeast of downtown with affordable housing and a growing sense of community identity. Pinecastle is attracting attention from investors and first-time buyers as nearby areas continue to develop.',
   '/api/places?query=Pinecastle+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Affordable','Working-Class','Growing','Community'],
   '{"title": "Pinecastle: Affordability in Orlando''s Urban Core", "excerpt": "Why this historic working-class neighborhood is drawing new attention from buyers.", "image": "/api/places?query=Pinecastle+Orlando+FL&maxwidth=800", "category": "Real Estate", "date": "February 2026"}'::jsonb,
   10);


-- ============================================================
-- NEIGHBORHOODS - College Park / Edgewater (10 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'college-park'), 'College Park Main', 'college-park-main',
   'One of Orlando''s most charming and established neighborhoods, known for its tree-canopied Edgewater Drive commercial strip, independent restaurants, and beautifully maintained 1920s bungalows. College Park is where Old Orlando charm lives on.',
   '/api/places?query=College+Park+Edgewater+Drive+Orlando+FL&maxwidth=1600',
   ARRAY['Charming','Historic Bungalows','Independent Dining','Oak-Canopied'],
   '{"title": "College Park: Orlando''s Most Charming Neighborhood", "excerpt": "How 1920s bungalows and an independent dining strip created the neighborhood everyone wants to live in.", "image": "/api/places?query=Edgewater+Drive+College+Park+Orlando+FL&maxwidth=800", "category": "Lifestyle", "date": "February 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'college-park'), 'Edgewater Heights', 'edgewater-heights',
   'A residential neighborhood along the Edgewater Drive corridor north of College Park proper. Edgewater Heights features a mix of mid-century homes and newer construction, with easy access to the shops and restaurants that make this corridor famous.',
   '/api/places?query=Edgewater+Heights+Orlando+FL&maxwidth=1600',
   ARRAY['Residential','Mid-Century','Dining Corridor','Central'],
   '{"title": "Edgewater Heights: Living on Orlando''s Best Food Street", "excerpt": "Why residents never leave this restaurant-rich corridor.", "image": "/api/places?query=Edgewater+Drive+restaurants+Orlando+FL&maxwidth=800", "category": "Food", "date": "February 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'college-park'), 'Lake Adair', 'lake-adair',
   'A scenic residential neighborhood wrapped around the shores of Lake Adair, one of Orlando''s most picturesque urban lakes. Joggers, dog walkers, and kayakers share the lake trail while historic homes and renovated bungalows line the surrounding streets.',
   '/api/places?query=Lake+Adair+Orlando+FL&maxwidth=1600',
   ARRAY['Lakeside','Active','Scenic','Historic'],
   '{"title": "Lake Adair: Where Orlando Goes to Unplug", "excerpt": "The lakeside loop that draws joggers, kayakers, and nature lovers to this urban oasis.", "image": "/api/places?query=Lake+Adair+Park+Orlando+FL&maxwidth=800", "category": "Outdoors", "date": "February 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'college-park'), 'Dubsdread', 'dubsdread',
   'Named after the historic Dubsdread Golf Course, Orlando''s oldest public golf course. This neighborhood combines the green fairways with charming residential streets, making it a favorite for golfers and families who appreciate the open space and community events.',
   '/api/places?query=Dubsdread+Golf+Course+Orlando+FL&maxwidth=1600',
   ARRAY['Golf','Historic','Community','Green Space'],
   '{"title": "Dubsdread: Orlando''s Golf Course Neighborhood", "excerpt": "How Orlando''s oldest public course shapes the character of its surrounding community.", "image": "/api/places?query=Dubsdread+Golf+Course+Orlando+FL&maxwidth=800", "category": "Recreation", "date": "February 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'college-park'), 'Rock Lake', 'rock-lake',
   'A residential neighborhood surrounding Rock Lake with a mix of original cottages and renovated homes. Rock Lake offers a quiet, friendly atmosphere with easy access to College Park''s Edgewater Drive restaurants and shops.',
   '/api/places?query=Rock+Lake+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Lakeside','Cottage-Style','Friendly','Quiet'],
   '{"title": "Rock Lake: Cottage Living in the Heart of Orlando", "excerpt": "How lakeside cottages and friendly neighbors create small-town charm in the city.", "image": "/api/places?query=Rock+Lake+Orlando+FL&maxwidth=800", "category": "Community", "date": "February 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'college-park'), 'Princeton', 'princeton',
   'A quiet residential area west of College Park proper with affordable homes and family-friendly streets. Princeton offers a more relaxed pace while keeping residents close to the Edgewater Drive corridor and downtown Orlando.',
   '/api/places?query=Princeton+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Affordable','Family-Friendly','Quiet','Relaxed'],
   '{"title": "Princeton: College Park Living at a Friendlier Price", "excerpt": "How this western pocket delivers the College Park lifestyle at more accessible prices.", "image": "/api/places?query=Princeton+Orlando+FL&maxwidth=800", "category": "Real Estate", "date": "February 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'college-park'), 'College Park West', 'college-park-west',
   'The western extension of the College Park neighborhood with slightly larger lots and a more suburban feel. College Park West retains the community character and oak canopy of its more urban counterpart while offering more space and affordability.',
   '/api/places?query=College+Park+West+Orlando+FL&maxwidth=1600',
   ARRAY['Suburban Feel','Spacious','Oak-Canopied','Community'],
   '{"title": "College Park West: More Space, Same Charm", "excerpt": "Why families choose the western side for bigger yards and the same great community.", "image": "/api/places?query=College+Park+Orlando+FL&maxwidth=800", "category": "Family", "date": "February 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'college-park'), 'Lake Formosa', 'lake-formosa',
   'A hidden gem neighborhood tucked around Lake Formosa with lakefront homes and a mix of renovated bungalows. Lake Formosa sits at the crossroads of College Park, Mills 50, and downtown, giving residents access to three of Orlando''s best neighborhoods.',
   '/api/places?query=Lake+Formosa+Orlando+FL&maxwidth=1600',
   ARRAY['Hidden Gem','Lakefront','Central','Renovated'],
   '{"title": "Lake Formosa: The Three-Neighborhood Sweet Spot", "excerpt": "How this lakeside pocket offers access to College Park, Mills 50, and downtown all at once.", "image": "/api/places?query=Lake+Formosa+neighborhood+Orlando+FL&maxwidth=800", "category": "Neighborhood Spotlight", "date": "February 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'college-park'), 'Wychwood', 'wychwood',
   'A small, exclusive residential enclave in the College Park area with custom homes and a strong neighborhood identity. Wychwood is known for its annual events, involved residents, and the kind of neighborly spirit that defines classic Orlando living.',
   '/api/places?query=Wychwood+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Exclusive','Custom Homes','Neighborly','Events'],
   '{"title": "Wychwood: Where Every Neighbor Knows Your Name", "excerpt": "Inside one of Orlando''s most tight-knit and involved residential communities.", "image": "/api/places?query=Wychwood+Orlando+FL&maxwidth=800", "category": "Community", "date": "February 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'college-park'), 'Westfield', 'westfield',
   'A residential neighborhood on the western edge of the College Park area with affordable single-family homes and a growing community identity. Westfield is drawing young families who want the College Park zip code without stretching their budget.',
   '/api/places?query=Westfield+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Affordable','Family-Friendly','Growing','Residential'],
   '{"title": "Westfield: The Affordable Edge of College Park", "excerpt": "Young families are finding value on the western frontier of one of Orlando''s best neighborhoods.", "image": "/api/places?query=Westfield+Orlando+FL&maxwidth=800", "category": "Real Estate", "date": "February 2026"}'::jsonb,
   10);


-- ============================================================
-- NEIGHBORHOODS - International Drive (10 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'international-drive'), 'ICON Park Area', 'icon-park-area',
   'The entertainment epicenter of I-Drive, anchored by the 400-foot Orlando Eye observation wheel, Madame Tussauds, and SEA LIFE Aquarium. ICON Park draws tourists and locals alike with its dining, attractions, and vibrant nighttime energy.',
   '/api/places?query=ICON+Park+Orlando+FL&maxwidth=1600',
   ARRAY['Entertainment','Attractions','Nightlife','Tourist Hub'],
   '{"title": "ICON Park: I-Drive''s Glowing Centerpiece", "excerpt": "How the Orlando Eye and its surrounding complex became the new heart of International Drive.", "image": "/api/places?query=Orlando+Eye+ICON+Park+FL&maxwidth=800", "category": "Entertainment", "date": "February 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'international-drive'), 'I-Drive Central', 'i-drive-central',
   'The bustling core of International Drive featuring hotels, restaurants, outlet shopping, and entertainment venues. I-Drive Central is the commercial heart of Orlando''s tourism corridor, where visitors from around the world experience the city''s famous hospitality.',
   '/api/places?query=International+Drive+Orlando+FL&maxwidth=1600',
   ARRAY['Tourism','Shopping','Hotels','International'],
   '{"title": "I-Drive Central: The Boulevard That Feeds Orlando''s Economy", "excerpt": "How this famous strip generates billions and shapes the city''s identity worldwide.", "image": "/api/places?query=International+Drive+shopping+Orlando+FL&maxwidth=800", "category": "Business", "date": "February 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'international-drive'), 'I-Drive South', 'i-drive-south',
   'The southern stretch of International Drive near the Orange County Convention Center, featuring major hotels, restaurants, and attractions. This area is undergoing significant development as new projects aim to elevate the corridor''s appeal.',
   '/api/places?query=I-Drive+South+Orlando+FL&maxwidth=1600',
   ARRAY['Convention Center','Hotels','Development','Dining'],
   '{"title": "I-Drive South: A $4 Billion Facelift", "excerpt": "Inside the massive redevelopment reshaping the southern end of Orlando''s famous strip.", "image": "/api/places?query=Orange+County+Convention+Center+Orlando+FL&maxwidth=800", "category": "Development", "date": "February 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'international-drive'), 'Convention Center District', 'convention-center-district',
   'Home to the Orange County Convention Center, the second-largest convention facility in the United States. This district is a powerhouse of business tourism, surrounded by major hotels, restaurants, and the Pointe Orlando entertainment complex.',
   '/api/places?query=Orange+County+Convention+Center+Orlando+FL&maxwidth=1600',
   ARRAY['Business','Conventions','Hotels','Corporate'],
   '{"title": "The Convention Center District: Orlando''s Business Engine", "excerpt": "How the nation''s second-largest convention center drives billions into the local economy.", "image": "/api/places?query=Orange+County+Convention+Center+West+Orlando+FL&maxwidth=800", "category": "Business", "date": "February 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'international-drive'), 'Universal Boulevard', 'universal-boulevard',
   'The corridor connecting International Drive to Universal Orlando Resort, lined with resort hotels, dining, and entertainment options. Universal Boulevard is evolving from a service road into a destination in its own right with new mixed-use projects.',
   '/api/places?query=Universal+Boulevard+Orlando+FL&maxwidth=1600',
   ARRAY['Theme Parks','Resorts','Entertainment','Evolving'],
   '{"title": "Universal Boulevard: More Than a Road to the Parks", "excerpt": "How this corridor is becoming a destination beyond the theme park gates.", "image": "/api/places?query=Universal+Orlando+Resort+FL&maxwidth=800", "category": "Development", "date": "February 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'international-drive'), 'Sand Lake Corridor', 'sand-lake-corridor',
   'The legendary Restaurant Row of Orlando, where Sand Lake Road intersects International Drive. This corridor is packed with some of Orlando''s finest dining, from sushi to steak, making it the metro area''s most concentrated food destination.',
   '/api/places?query=Sand+Lake+Road+Restaurant+Row+Orlando+FL&maxwidth=1600',
   ARRAY['Restaurant Row','Fine Dining','Foodie','International Cuisine'],
   '{"title": "Sand Lake Road: Orlando''s Original Restaurant Row", "excerpt": "A culinary journey down the road where Orlando''s finest restaurants cluster.", "image": "/api/places?query=Restaurant+Row+Sand+Lake+Orlando+FL&maxwidth=800", "category": "Food", "date": "February 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'international-drive'), 'Fun Spot Area', 'fun-spot-area',
   'The northern stretch of I-Drive near Fun Spot America, featuring go-karts, roller coasters, and family attractions. This area offers a more classic, carnival-style entertainment experience compared to the southern corridor''s upscale developments.',
   '/api/places?query=Fun+Spot+America+Orlando+FL&maxwidth=1600',
   ARRAY['Family Fun','Attractions','Classic','Affordable Entertainment'],
   '{"title": "Fun Spot Area: I-Drive''s Old-School Family Fun Zone", "excerpt": "Where go-karts, mini-golf, and classic attractions keep the family fun tradition alive.", "image": "/api/places?query=Fun+Spot+America+International+Drive+Orlando+FL&maxwidth=800", "category": "Entertainment", "date": "February 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'international-drive'), 'Turkey Lake', 'turkey-lake',
   'A nature-focused area west of I-Drive centered around Turkey Lake Park, a 300-acre oasis offering fishing, hiking, and picnicking. This pocket provides a surprising escape from the tourism corridor''s neon glow.',
   '/api/places?query=Turkey+Lake+Park+Orlando+FL&maxwidth=1600',
   ARRAY['Nature','Parks','Fishing','Escape'],
   '{"title": "Turkey Lake: 300 Acres of Quiet Next to I-Drive''s Chaos", "excerpt": "How this massive park offers nature therapy steps from the tourism corridor.", "image": "/api/places?query=Bill+Frederick+Park+Turkey+Lake+Orlando+FL&maxwidth=800", "category": "Outdoors", "date": "February 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'international-drive'), 'Tangelo Park', 'tangelo-park',
   'A residential community near I-Drive famous for the Tangelo Park Program, a pioneering initiative providing free preschool and college scholarships funded by philanthropist Harris Rosen. This tight-knit neighborhood is a national model for community investment.',
   '/api/places?query=Tangelo+Park+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Community','Education','Pioneering','Residential'],
   '{"title": "Tangelo Park: The Neighborhood That Proves Investment Works", "excerpt": "How one philanthropist''s vision transformed an entire community through education.", "image": "/api/places?query=Tangelo+Park+Orlando+FL&maxwidth=800", "category": "Education", "date": "February 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'international-drive'), 'Pointe Orlando', 'point-orlando',
   'An upscale entertainment and dining complex on International Drive featuring restaurants, nightclubs, a comedy club, and a movie theater. Pointe Orlando is the I-Drive corridor''s most polished nightlife and dining destination.',
   '/api/places?query=Pointe+Orlando+International+Drive+FL&maxwidth=1600',
   ARRAY['Upscale Dining','Nightlife','Entertainment','Polished'],
   '{"title": "Pointe Orlando: I-Drive''s Upscale Evening Destination", "excerpt": "Where International Drive puts on its best face for dinner and a night out.", "image": "/api/places?query=Pointe+Orlando+FL&maxwidth=800", "category": "Nightlife", "date": "February 2026"}'::jsonb,
   10);


-- ============================================================
-- NEIGHBORHOODS - Dr. Phillips / Restaurant Row (10 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Restaurant Row', 'restaurant-row',
   'The epicenter of Orlando''s dining scene, stretching along Sand Lake Road with over 100 restaurants representing cuisines from around the globe. From celebrity chef outposts to authentic family-run eateries, this is where Orlando eats.',
   '/api/places?query=Restaurant+Row+Dr+Phillips+Orlando+FL&maxwidth=1600',
   ARRAY['World-Class Dining','International Cuisine','Foodie Capital','Celebrity Chefs'],
   '{"title": "Restaurant Row: The Street That Made Orlando a Food City", "excerpt": "How Sand Lake Road became one of America''s most diverse dining destinations.", "image": "/api/places?query=Sand+Lake+Road+dining+Orlando+FL&maxwidth=800", "category": "Food", "date": "February 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Bay Hill', 'bay-hill',
   'An exclusive golf community built around Arnold Palmer''s Bay Hill Club and Lodge, home to the annual Arnold Palmer Invitational. Bay Hill features luxury estates, championship golf, and a country club lifestyle in the heart of southwest Orlando.',
   '/api/places?query=Bay+Hill+Club+and+Lodge+Orlando+FL&maxwidth=1600',
   ARRAY['Golf','Luxury','Exclusive','Country Club'],
   '{"title": "Bay Hill: Arnold Palmer''s Orlando Legacy", "excerpt": "How the King of Golf created one of Central Florida''s most prestigious communities.", "image": "/api/places?query=Arnold+Palmer+Bay+Hill+Golf+Orlando+FL&maxwidth=800", "category": "Golf", "date": "February 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Dr. Phillips Proper', 'dr-phillips-proper',
   'The residential core of the Dr. Phillips community, featuring well-maintained subdivisions, excellent schools, and convenient access to Restaurant Row. Named after the citrus magnate who once owned this land, Dr. Phillips is one of Orlando''s most desirable family neighborhoods.',
   '/api/places?query=Dr+Phillips+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Family-Friendly','Schools','Suburban','Convenient'],
   '{"title": "Dr. Phillips: Orlando''s Premier Family Suburb", "excerpt": "Why families consistently rank this as one of the best places to raise kids in Central Florida.", "image": "/api/places?query=Dr+Phillips+Orlando+FL&maxwidth=800", "category": "Family", "date": "February 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Windermere', 'windermere',
   'An affluent lakeside town known for its chain of butler lakes, luxury estates, and celebrity residents. Windermere offers a small-town charm with a downtown that still feels like old Florida, even as mega-mansions line the lakeshores.',
   '/api/places?query=Windermere+FL+lakefront&maxwidth=1600',
   ARRAY['Affluent','Lakeside','Celebrity Homes','Old Florida'],
   '{"title": "Windermere: Where Orlando''s Elite Call Home", "excerpt": "Inside the lakeside town that attracts athletes, executives, and celebrities.", "image": "/api/places?query=Town+of+Windermere+FL&maxwidth=800", "category": "Luxury Living", "date": "February 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Sand Lake Hills', 'sand-lake-hills',
   'A well-established residential community near Sand Lake Road with mature landscaping and a mix of housing styles. Sand Lake Hills provides a stable, community-oriented setting with quick access to Restaurant Row and major theme parks.',
   '/api/places?query=Sand+Lake+Hills+Orlando+FL&maxwidth=1600',
   ARRAY['Established','Residential','Mature','Convenient'],
   '{"title": "Sand Lake Hills: The Neighborhood Behind Restaurant Row", "excerpt": "How this established community thrives in the shadow of Orlando''s dining capital.", "image": "/api/places?query=Sand+Lake+Hills+neighborhood+Orlando+FL&maxwidth=800", "category": "Community", "date": "February 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Phillips Bay', 'phillips-bay',
   'A lakeside residential community in the Dr. Phillips area featuring waterfront homes, community pools, and a family-friendly atmosphere. Phillips Bay offers the lakeside lifestyle that defines southwest Orlando living.',
   '/api/places?query=Phillips+Bay+Dr+Phillips+Orlando+FL&maxwidth=1600',
   ARRAY['Lakeside','Family-Friendly','Waterfront','Community'],
   '{"title": "Phillips Bay: Lakeside Living in Dr. Phillips", "excerpt": "How waterfront homes and community amenities create the ideal family setting.", "image": "/api/places?query=Phillips+Bay+community+Orlando+FL&maxwidth=800", "category": "Family", "date": "February 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Grande Pines', 'grande-pines',
   'A resort-style community in the Dr. Phillips area featuring a golf course, spa, and luxury accommodations. Grande Pines blends resort living with residential options, offering a vacation lifestyle as an everyday experience.',
   '/api/places?query=Grande+Pines+Golf+Club+Orlando+FL&maxwidth=1600',
   ARRAY['Resort-Style','Golf','Luxury','Spa'],
   '{"title": "Grande Pines: Living the Resort Life Every Day", "excerpt": "Where the line between vacation and home life disappears entirely.", "image": "/api/places?query=Grande+Pines+Golf+Orlando+FL&maxwidth=800", "category": "Luxury Living", "date": "February 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Osprey Ridge', 'osprey-ridge',
   'A nature-forward residential community in the Dr. Phillips corridor named for the ospreys that nest near its wetlands and lakes. Osprey Ridge offers newer homes with conservation views and a peaceful setting near the bustle of Restaurant Row.',
   '/api/places?query=Osprey+Ridge+Dr+Phillips+Orlando+FL&maxwidth=1600',
   ARRAY['Nature','Conservation','Newer Homes','Peaceful'],
   '{"title": "Osprey Ridge: Wildlife and Suburban Living in Harmony", "excerpt": "How this community balances new development with Central Florida''s natural landscape.", "image": "/api/places?query=Osprey+Ridge+community+Orlando+FL&maxwidth=800", "category": "Nature", "date": "February 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Meadow Woods', 'meadow-woods',
   'A large, diverse residential community south of the Dr. Phillips area with affordable homes and growing amenities. Meadow Woods is one of Orlando''s most multicultural neighborhoods, with a mix of families from across Latin America, Asia, and the Caribbean.',
   '/api/places?query=Meadow+Woods+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Diverse','Affordable','Multicultural','Growing'],
   '{"title": "Meadow Woods: Orlando''s Most Diverse Zip Code", "excerpt": "How this multicultural community reflects Orlando''s evolving identity.", "image": "/api/places?query=Meadow+Woods+Orlando+FL&maxwidth=800", "category": "Community", "date": "February 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'dr-phillips'), 'Isleworth', 'isleworth',
   'One of Central Florida''s most exclusive gated communities, home to professional athletes, executives, and celebrities. Isleworth features a world-class golf course, lakefront estates, and the kind of privacy that comes with a prestigious address.',
   '/api/places?query=Isleworth+Country+Club+Windermere+FL&maxwidth=1600',
   ARRAY['Ultra-Exclusive','Gated','Estates','Celebrity Homes'],
   '{"title": "Isleworth: Inside Orlando''s Most Exclusive Gates", "excerpt": "A rare glimpse behind the walls of one of America''s most prestigious residential communities.", "image": "/api/places?query=Isleworth+Golf+Windermere+FL&maxwidth=800", "category": "Luxury Living", "date": "February 2026"}'::jsonb,
   10);


-- ============================================================
-- NEIGHBORHOODS - East Orlando / UCF (10 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'east-orlando'), 'UCF Area', 'ucf-area',
   'The vibrant corridor surrounding the University of Central Florida, one of the nation''s largest universities. The UCF area buzzes with student energy, affordable dining, nightlife, and the entrepreneurial spirit of a growing tech and research hub.',
   '/api/places?query=University+of+Central+Florida+campus+Orlando+FL&maxwidth=1600',
   ARRAY['College Town','Nightlife','Tech Hub','Young Energy'],
   '{"title": "UCF Area: Where 70,000 Students Shape a Community", "excerpt": "How the nation''s largest university campus drives the culture of East Orlando.", "image": "/api/places?query=UCF+Student+Union+Orlando+FL&maxwidth=800", "category": "Education", "date": "February 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'east-orlando'), 'Waterford Lakes', 'waterford-lakes',
   'A major retail and residential hub in East Orlando centered around the Waterford Lakes Town Center. This master-planned community offers suburban conveniences, diverse dining, and a strong sense of neighborhood identity among its thousands of families.',
   '/api/places?query=Waterford+Lakes+Town+Center+Orlando+FL&maxwidth=1600',
   ARRAY['Shopping','Family-Friendly','Suburban','Town Center'],
   '{"title": "Waterford Lakes: East Orlando''s All-in-One Neighborhood", "excerpt": "How a town center and master-planned community created East Orlando''s social hub.", "image": "/api/places?query=Waterford+Lakes+Town+Center+shopping+Orlando+FL&maxwidth=800", "category": "Lifestyle", "date": "February 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'east-orlando'), 'Alafaya Corridor', 'alafaya-corridor',
   'The commercial spine of East Orlando running along Alafaya Trail from UCF south to Lake Nona. This rapidly developing corridor features new apartments, restaurants, medical facilities, and retail serving the booming east side population.',
   '/api/places?query=Alafaya+Trail+Orlando+FL&maxwidth=1600',
   ARRAY['Rapidly Growing','Commercial','Diverse','Convenient'],
   '{"title": "Alafaya Corridor: East Orlando''s Rapidly Evolving Spine", "excerpt": "From UCF to Lake Nona, this corridor is where East Orlando''s growth story unfolds.", "image": "/api/places?query=Alafaya+Trail+corridor+Orlando+FL&maxwidth=800", "category": "Development", "date": "February 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'east-orlando'), 'Avalon Park', 'avalon-park',
   'A large master-planned community in East Orlando designed around New Urbanist principles, featuring a walkable town center, community events, diverse housing, and top-rated schools. Avalon Park is a self-contained village with its own distinct identity.',
   '/api/places?query=Avalon+Park+Town+Center+Orlando+FL&maxwidth=1600',
   ARRAY['Master-Planned','Town Center','Schools','Community Events'],
   '{"title": "Avalon Park: The Town Within a City", "excerpt": "How this master-planned community built its own Main Street and identity from scratch.", "image": "/api/places?query=Avalon+Park+Orlando+FL&maxwidth=800", "category": "Community", "date": "February 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'east-orlando'), 'Eastwood', 'eastwood',
   'An established residential community in East Orlando with mature trees, well-maintained homes, and a family-oriented atmosphere. Eastwood is one of the area''s original planned communities, offering stability and value in a rapidly growing corridor.',
   '/api/places?query=Eastwood+community+Orlando+FL&maxwidth=1600',
   ARRAY['Established','Family-Oriented','Mature','Stable'],
   '{"title": "Eastwood: The Original East Orlando Community", "excerpt": "How this established neighborhood maintains its identity amid rapid east-side growth.", "image": "/api/places?query=Eastwood+neighborhood+East+Orlando+FL&maxwidth=800", "category": "Neighborhood Spotlight", "date": "February 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'east-orlando'), 'Innovation Way', 'innovation-way',
   'A technology and research corridor connecting UCF to the Central Florida Research Park and beyond. Innovation Way is the backbone of Orlando''s growing tech sector, with simulation, defense, and gaming companies clustered along this futuristic corridor.',
   '/api/places?query=Central+Florida+Research+Park+Orlando+FL&maxwidth=1600',
   ARRAY['Tech','Research','Innovation','Futuristic'],
   '{"title": "Innovation Way: Orlando''s Silicon Alley", "excerpt": "Inside the tech corridor where simulation, gaming, and defense industries converge.", "image": "/api/places?query=Innovation+Way+UCF+Research+Park+Orlando+FL&maxwidth=800", "category": "Innovation", "date": "February 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'east-orlando'), 'Lake Nona', 'lake-nona',
   'Orlando''s most ambitious planned community, designed as a health and wellness hub. Lake Nona is home to the UCF medical school, VA hospital, USTA national campus, and a growing town center. It represents the future of how American communities are built.',
   '/api/places?query=Lake+Nona+Town+Center+Orlando+FL&maxwidth=1600',
   ARRAY['Health & Wellness','Medical Hub','Sports','Futuristic'],
   '{"title": "Lake Nona: Orlando''s City of the Future", "excerpt": "How a 17-square-mile community became a national model for health, wellness, and innovation.", "image": "/api/places?query=Lake+Nona+Medical+City+Orlando+FL&maxwidth=800", "category": "Innovation", "date": "February 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'east-orlando'), 'Moss Park', 'moss-park',
   'A nature-rich area east of Orlando near the Moss Park Preserve, offering hiking trails, camping, and lakeside recreation. The surrounding residential communities provide a semi-rural lifestyle with access to Orlando''s urban amenities.',
   '/api/places?query=Moss+Park+Preserve+Orlando+FL&maxwidth=1600',
   ARRAY['Nature','Trails','Semi-Rural','Outdoors'],
   '{"title": "Moss Park: Where Orlando Meets the Wilderness", "excerpt": "How this preserve and its surrounding communities offer a different kind of Orlando living.", "image": "/api/places?query=Moss+Park+trails+Orlando+FL&maxwidth=800", "category": "Outdoors", "date": "February 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'east-orlando'), 'Timber Springs', 'timber-springs',
   'A residential community in the Alafaya corridor with family-friendly homes, community pools, and proximity to top-rated schools. Timber Springs is a popular choice for families who want East Orlando convenience with a neighborhood feel.',
   '/api/places?query=Timber+Springs+community+Orlando+FL&maxwidth=1600',
   ARRAY['Family-Friendly','Schools','Community Pools','Residential'],
   '{"title": "Timber Springs: East Orlando''s Family Favorite", "excerpt": "Why families keep choosing this well-rounded community for its schools and amenities.", "image": "/api/places?query=Timber+Springs+Orlando+FL&maxwidth=800", "category": "Family", "date": "February 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'east-orlando'), 'Stoneybrook', 'stoneybrook',
   'A master-planned golf community in East Orlando featuring a championship golf course, resort-style amenities, and diverse housing options. Stoneybrook offers a country club lifestyle with the convenience of East Orlando''s retail and dining.',
   '/api/places?query=Stoneybrook+East+Golf+Club+Orlando+FL&maxwidth=1600',
   ARRAY['Golf','Country Club','Master-Planned','Resort-Style'],
   '{"title": "Stoneybrook: Golf Course Living in East Orlando", "excerpt": "How this championship golf community became one of East Orlando''s most coveted addresses.", "image": "/api/places?query=Stoneybrook+Golf+Orlando+FL&maxwidth=800", "category": "Golf", "date": "February 2026"}'::jsonb,
   10);


-- ============================================================
-- NEIGHBORHOODS - North Orlando / Maitland (10 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'north-orlando'), 'Maitland Center', 'maitland-center',
   'A major business park and commercial district in the heart of Maitland, home to corporate offices, tech companies, and growing mixed-use development. Maitland Center is the professional hub of North Orlando with increasing residential options.',
   '/api/places?query=Maitland+Center+FL&maxwidth=1600',
   ARRAY['Business Park','Corporate','Mixed-Use','Professional'],
   '{"title": "Maitland Center: The Office Park That''s Becoming a Neighborhood", "excerpt": "How mixed-use development is transforming this corporate campus into a live-work community.", "image": "/api/places?query=Maitland+Center+Parkway+FL&maxwidth=800", "category": "Development", "date": "February 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'north-orlando'), 'Maitland Historic', 'maitland-historic',
   'The charming historic core of Maitland featuring the Maitland Art Center (a National Historic Landmark), Lake Lily Park, and tree-lined streets with homes dating to the early 1900s. This is Old Florida at its most refined.',
   '/api/places?query=Maitland+Art+Center+FL&maxwidth=1600',
   ARRAY['Historic','Art Center','Lakeside','Charming'],
   '{"title": "Maitland Historic: Art, Architecture, and Old Florida Charm", "excerpt": "How a National Historic Landmark and lakeside park define this northern enclave.", "image": "/api/places?query=Lake+Lily+Park+Maitland+FL&maxwidth=800", "category": "Arts & Culture", "date": "February 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'north-orlando'), 'Altamonte Springs', 'altamonte-springs',
   'A thriving suburban city north of Orlando known for the Altamonte Mall, Cranes Roost Park, and its annual Red Hot & Boom Fourth of July celebration. Altamonte Springs offers urban amenities with a suburban pace and strong community programming.',
   '/api/places?query=Cranes+Roost+Park+Altamonte+Springs+FL&maxwidth=1600',
   ARRAY['Suburban','Shopping','Events','Community'],
   '{"title": "Altamonte Springs: North Orlando''s Complete Community", "excerpt": "How this suburban city delivers small-town events with big-city conveniences.", "image": "/api/places?query=Altamonte+Mall+Altamonte+Springs+FL&maxwidth=800", "category": "Lifestyle", "date": "February 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'north-orlando'), 'Casselberry', 'casselberry',
   'A lakeside city in North Orlando surrounded by beautiful freshwater lakes. Casselberry offers affordable living, excellent lake access for fishing and kayaking, and a growing downtown with local restaurants and community events.',
   '/api/places?query=Casselberry+FL+lakeside&maxwidth=1600',
   ARRAY['Lakeside','Affordable','Fishing','Small-Town'],
   '{"title": "Casselberry: Orlando''s Lakeside Retreat", "excerpt": "How this lake-studded city offers outdoor living at accessible prices.", "image": "/api/places?query=Secret+Lake+Park+Casselberry+FL&maxwidth=800", "category": "Outdoors", "date": "February 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'north-orlando'), 'Eatonville', 'eatonville',
   'The oldest incorporated African American municipality in the United States, established in 1887. Eatonville is the childhood home of author Zora Neale Hurston and hosts the annual ZORA! Festival celebrating African American art, literature, and culture.',
   '/api/places?query=Eatonville+FL+historic+town&maxwidth=1600',
   ARRAY['Historic','Literary','Cultural Heritage','Pioneering'],
   '{"title": "Eatonville: America''s Oldest Black Town and Its Living Legacy", "excerpt": "How the birthplace of Zora Neale Hurston preserves its pioneering heritage.", "image": "/api/places?query=Zora+Neale+Hurston+Museum+Eatonville+FL&maxwidth=800", "category": "History", "date": "February 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'north-orlando'), 'Fern Park', 'fern-park',
   'An unincorporated community in Seminole County known for its flea markets, antique shops, and affordable living. Fern Park is a no-frills, authentic slice of Central Florida life with convenient access to I-4 and the North Orlando corridor.',
   '/api/places?query=Fern+Park+FL&maxwidth=1600',
   ARRAY['Affordable','Flea Markets','Antiques','Authentic'],
   '{"title": "Fern Park: Treasure Hunting in North Orlando", "excerpt": "How flea markets and antique shops define this unassuming community''s character.", "image": "/api/places?query=Flea+World+Fern+Park+FL&maxwidth=800", "category": "Shopping", "date": "February 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'north-orlando'), 'Lockhart', 'lockhart',
   'An unincorporated community northwest of Orlando with affordable housing and a diverse population. Lockhart is a working-class neighborhood that offers genuine affordability close to the urban core, attracting first-time buyers and small families.',
   '/api/places?query=Lockhart+neighborhood+Orlando+FL&maxwidth=1600',
   ARRAY['Affordable','Diverse','Working-Class','Accessible'],
   '{"title": "Lockhart: Real Affordability Near Orlando", "excerpt": "How this working-class community provides a gateway to Orlando homeownership.", "image": "/api/places?query=Lockhart+Orlando+FL&maxwidth=800", "category": "Real Estate", "date": "February 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'north-orlando'), 'Lake Weston', 'lake-weston',
   'A residential area surrounding Lake Weston in the North Orlando corridor with lakeside homes and quiet streets. Lake Weston offers a peaceful living environment with water views and easy commuting access to downtown Orlando and Maitland.',
   '/api/places?query=Lake+Weston+Maitland+FL&maxwidth=1600',
   ARRAY['Lakeside','Quiet','Residential','Commuter-Friendly'],
   '{"title": "Lake Weston: North Orlando''s Lakeside Calm", "excerpt": "How lakeside living and easy commuting make this a smart choice for professionals.", "image": "/api/places?query=Lake+Weston+neighborhood+Orlando+FL&maxwidth=800", "category": "Neighborhood Spotlight", "date": "February 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'north-orlando'), 'Bear Lake', 'bear-lake',
   'A laid-back lakeside community in the Apopka/Maitland area with a mix of waterfront and residential properties. Bear Lake is popular with fishing enthusiasts and families who want lake life without the price tag of Winter Park or Windermere.',
   '/api/places?query=Bear+Lake+Apopka+FL&maxwidth=1600',
   ARRAY['Lakeside','Fishing','Laid-Back','Affordable'],
   '{"title": "Bear Lake: Affordable Lake Living in North Orlando", "excerpt": "How this community delivers the lakeside lifestyle at prices that make sense.", "image": "/api/places?query=Bear+Lake+Park+Apopka+FL&maxwidth=800", "category": "Outdoors", "date": "February 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'north-orlando'), 'Dommerich Estates', 'dommerich-estates',
   'An upscale residential neighborhood in Maitland known for the highly rated Dommerich Elementary School and its tree-canopied streets. Dommerich Estates is one of North Orlando''s most sought-after family neighborhoods, prized for its schools and community feel.',
   '/api/places?query=Dommerich+Elementary+School+Maitland+FL&maxwidth=1600',
   ARRAY['Upscale','Top Schools','Family-Friendly','Tree-Canopied'],
   '{"title": "Dommerich Estates: Where Families Move for the Schools", "excerpt": "How a top-rated elementary school anchors one of North Orlando''s most coveted neighborhoods.", "image": "/api/places?query=Dommerich+Estates+Maitland+FL&maxwidth=800", "category": "Education", "date": "February 2026"}'::jsonb,
   10);


-- ============================================================
-- SPOTLIGHT PROPERTIES (sample Orlando listings)
-- ============================================================
INSERT INTO spotlight_properties (title, address, neighborhood, price, bedrooms, bathrooms, sqft, image_url, description, zillow_url, featured) VALUES
  ('Modern Lake Eola Condo', '123 Eola Dr, Orlando FL 32801', 'South Eola', '$425,000', 2, 2, 1200,
   '/api/places?query=Lake+Eola+condos+Downtown+Orlando+FL&maxwidth=800',
   'Stunning downtown condo with panoramic Lake Eola views, floor-to-ceiling windows, and a private balcony overlooking the iconic fountain. Walk to Thornton Park dining and the Sunday farmers market.',
   'https://www.zillow.com/orlando-fl/', true),

  ('Renovated College Park Bungalow', '456 Edgewater Dr, Orlando FL 32804', 'College Park Main', '$389,000', 3, 2, 1450,
   '/api/places?query=College+Park+bungalow+Edgewater+Drive+Orlando+FL&maxwidth=800',
   'Beautifully renovated 1926 bungalow on tree-canopied Edgewater Drive with original hardwood floors, updated kitchen, and a screened porch. Steps from College Park''s best restaurants and shops.',
   'https://www.zillow.com/orlando-fl/', true),

  ('Winter Park Lakefront Estate', '789 Lake Sue Ln, Winter Park FL 32789', 'Lake Sue', '$1,850,000', 5, 4, 4200,
   '/api/places?query=Lake+Sue+lakefront+Winter+Park+FL&maxwidth=800',
   'Elegant lakefront estate on the Winter Park chain of lakes with private dock, resort-style pool, and lush tropical landscaping. Minutes from Park Avenue''s boutiques and Rollins College.',
   'https://www.zillow.com/winter-park-fl/', true),

  ('Lake Nona Smart Home', '321 Laureate Blvd, Orlando FL 32827', 'Lake Nona', '$575,000', 4, 3, 2400,
   '/api/places?query=Lake+Nona+Laureate+Park+Orlando+FL&maxwidth=800',
   'Energy-efficient smart home in Lake Nona''s innovation community with open floor plan, home office, and community access to the USTA tennis campus, trails, and Town Center dining.',
   'https://www.zillow.com/orlando-fl/', true),

  ('Mills 50 Historic Craftsman', '210 N Mills Ave, Orlando FL 32803', 'Colonialtown North', '$349,000', 2, 1, 1100,
   '/api/places?query=North+Mills+Avenue+Colonialtown+Orlando+FL&maxwidth=800',
   'Charming 1930s Craftsman bungalow in the heart of the Mills 50 district with original wood details, updated systems, and a detached garage. Walk to Orlando''s best pho, breweries, and vintage shops.',
   'https://www.zillow.com/orlando-fl/', false);
