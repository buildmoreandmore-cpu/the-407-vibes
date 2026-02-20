/**
 * Orlando Vibes - Comprehensive Neighborhood Data
 * Used by neighborhood.html template to dynamically load neighborhood content
 */

const neighborhoodsData = {
  // ===== DOWNTOWN ORLANDO NEIGHBORHOODS =====
  'lake-eola-heights': {
    name: 'Lake Eola Heights',
    area: 'downtown-orlando',
    areaName: 'Downtown Orlando',
    description: 'The crown jewel of Downtown Orlando, centered around the iconic Lake Eola Park with its famous fountain. This walkable neighborhood blends high-rise living with lakeside leisure, farmers markets, and swan boat rides. It is the postcard image of Orlando that locals actually live in.',
    image: '/api/places?query=Lake+Eola+Heights+Orlando+FL&maxwidth=1600',
    vibes: ['Lakeside', 'Walkable', 'Urban', 'Iconic'],
    featuredStory: {
      title: 'Lake Eola: The Heart That Keeps Downtown Orlando Beating',
      excerpt: 'How this urban lake became the soul of a city and the anchor of a thriving residential neighborhood.',
      image: '/api/places?query=Lake+Eola+Park+Fountain+Orlando+FL&maxwidth=800',
      category: 'Neighborhood Spotlight',
      date: 'February 2026'
    }
  },
  'parramore': {
    name: 'Parramore',
    area: 'downtown-orlando',
    areaName: 'Downtown Orlando',
    description: 'Orlando\'s historic African American neighborhood undergoing a transformative renaissance. Parramore is home to the Dr. Phillips Center for the Performing Arts, Creative Village, and a rich cultural heritage that stretches back over a century. New investment meets deep community roots.',
    image: '/api/places?query=Parramore+Downtown+Orlando+FL&maxwidth=1600',
    vibes: ['Historic', 'Cultural', 'Emerging', 'Arts'],
    featuredStory: {
      title: 'Parramore Rising: Honoring History While Building the Future',
      excerpt: 'Inside the community-driven transformation of Orlando\'s most historic neighborhood.',
      image: '/api/places?query=Dr+Phillips+Center+Performing+Arts+Orlando+FL&maxwidth=800',
      category: 'Development',
      date: 'February 2026'
    }
  },
  'church-street-district': {
    name: 'Church Street District',
    area: 'downtown-orlando',
    areaName: 'Downtown Orlando',
    description: 'The entertainment backbone of Downtown Orlando, anchored by the historic Church Street Station. This district pulses with nightlife, restaurants, and event venues, making it ground zero for Orlando\'s urban social scene after dark.',
    image: '/api/places?query=Church+Street+District+Orlando+FL&maxwidth=1600',
    vibes: ['Nightlife', 'Entertainment', 'Historic', 'Social'],
    featuredStory: {
      title: 'Church Street After Dark: Orlando\'s Original Entertainment District',
      excerpt: 'How this historic corridor continues to reinvent itself as the pulse of downtown nightlife.',
      image: '/api/places?query=Church+Street+Station+Orlando+FL&maxwidth=800',
      category: 'Nightlife',
      date: 'February 2026'
    }
  },
  'creative-village': {
    name: 'Creative Village',
    area: 'downtown-orlando',
    areaName: 'Downtown Orlando',
    description: 'A bold mixed-use innovation district rising on the former Amway Arena site. Creative Village brings together UCF\'s downtown campus, Valencia College, tech startups, and modern apartments in a walkable urban hub designed for the knowledge economy.',
    image: '/api/places?query=Creative+Village+Downtown+Orlando+FL&maxwidth=1600',
    vibes: ['Innovation', 'Education', 'Tech', 'Modern'],
    featuredStory: {
      title: 'Creative Village: Where Orlando\'s Tech Future Takes Shape',
      excerpt: 'How a university campus and innovation hub are redefining what downtown Orlando can be.',
      image: '/api/places?query=UCF+Downtown+Campus+Orlando+FL&maxwidth=800',
      category: 'Innovation',
      date: 'February 2026'
    }
  },
  'north-quarter': {
    name: 'North Quarter',
    area: 'downtown-orlando',
    areaName: 'Downtown Orlando',
    description: 'The emerging northern edge of downtown featuring adaptive reuse projects and new residential towers. North Quarter is quickly becoming a favorite for young professionals who want urban living with a quieter, more residential feel than the core.',
    image: '/api/places?query=North+Quarter+Downtown+Orlando+FL&maxwidth=1600',
    vibes: ['Emerging', 'Residential', 'Young Professionals', 'Adaptive Reuse'],
    featuredStory: {
      title: 'North Quarter: The Quiet Rise of Downtown\'s New Frontier',
      excerpt: 'Young professionals are discovering this evolving pocket just north of the urban core.',
      image: '/api/places?query=North+Quarter+Lofts+Orlando+FL&maxwidth=800',
      category: 'Real Estate',
      date: 'February 2026'
    }
  },
  'south-eola': {
    name: 'South Eola',
    area: 'downtown-orlando',
    areaName: 'Downtown Orlando',
    description: 'A sophisticated residential enclave on the southern shore of Lake Eola. South Eola is known for its upscale condos, tree-lined streets, and proximity to both the lake and Thornton Park\'s dining scene. Quiet elegance in the heart of the city.',
    image: '/api/places?query=South+Eola+Downtown+Orlando+FL&maxwidth=1600',
    vibes: ['Upscale', 'Lakeside', 'Residential', 'Elegant'],
    featuredStory: {
      title: 'South Eola Living: Lakefront Luxury in Downtown Orlando',
      excerpt: 'Why discerning buyers are choosing the southern shore of Lake Eola for upscale urban living.',
      image: '/api/places?query=South+Eola+Lake+Eola+Orlando+FL&maxwidth=800',
      category: 'Luxury Living',
      date: 'February 2026'
    }
  },
  'lake-cherokee': {
    name: 'Lake Cherokee',
    area: 'downtown-orlando',
    areaName: 'Downtown Orlando',
    description: 'A quiet residential neighborhood wrapped around a beautiful chain of lakes just south of downtown. Lake Cherokee features charming bungalows, mature oak canopies, and a tight-knit community feel that belies its proximity to the urban core.',
    image: '/api/places?query=Lake+Cherokee+Orlando+FL&maxwidth=1600',
    vibes: ['Lakeside', 'Bungalows', 'Quiet', 'Community'],
    featuredStory: {
      title: 'Lake Cherokee: Orlando\'s Hidden Lakeside Village',
      excerpt: 'Discovering the bungalow-lined streets and serene lakes just minutes from downtown.',
      image: '/api/places?query=Lake+Cherokee+Park+Orlando+FL&maxwidth=800',
      category: 'Neighborhood Spotlight',
      date: 'February 2026'
    }
  },
  'signal-hill': {
    name: 'Signal Hill',
    area: 'downtown-orlando',
    areaName: 'Downtown Orlando',
    description: 'A small but proud residential neighborhood on the western edge of downtown. Signal Hill offers affordable homeownership near the urban core with a diverse, close-knit community that has been the backbone of this area for decades.',
    image: '/api/places?query=Signal+Hill+Downtown+Orlando+FL&maxwidth=1600',
    vibes: ['Affordable', 'Diverse', 'Community', 'Residential'],
    featuredStory: {
      title: 'Signal Hill: Affordable Living Steps from Downtown',
      excerpt: 'How this tight-knit neighborhood offers real community near Orlando\'s urban center.',
      image: '/api/places?query=Signal+Hill+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Community',
      date: 'February 2026'
    }
  },
  'south-division': {
    name: 'South Division',
    area: 'downtown-orlando',
    areaName: 'Downtown Orlando',
    description: 'An up-and-coming pocket south of the downtown core where new mixed-use projects are blending with established residential streets. South Division is attracting attention for its walkability and proximity to both the SoDo retail district and downtown.',
    image: '/api/places?query=South+Division+Downtown+Orlando+FL&maxwidth=1600',
    vibes: ['Walkable', 'Mixed-Use', 'Up-and-Coming', 'Urban'],
    featuredStory: {
      title: 'South Division: Orlando\'s Next Great Walkable Neighborhood',
      excerpt: 'New development and old charm are meeting in this overlooked downtown pocket.',
      image: '/api/places?query=SoDo+District+Orlando+FL&maxwidth=800',
      category: 'Development',
      date: 'February 2026'
    }
  },
  'callahan': {
    name: 'Callahan',
    area: 'downtown-orlando',
    areaName: 'Downtown Orlando',
    description: 'A historic neighborhood on the northwest edge of downtown with deep roots in Orlando\'s African American community. Callahan is experiencing new interest as downtown expands, while longtime residents work to preserve the area\'s cultural identity.',
    image: '/api/places?query=Callahan+Neighborhood+Downtown+Orlando+FL&maxwidth=1600',
    vibes: ['Historic', 'Cultural Heritage', 'Emerging', 'Community'],
    featuredStory: {
      title: 'Callahan: Preserving Culture as Downtown Grows',
      excerpt: 'Longtime residents balance new development with the neighborhood\'s rich cultural legacy.',
      image: '/api/places?query=Callahan+Historic+Orlando+FL&maxwidth=800',
      category: 'History',
      date: 'February 2026'
    }
  },

  // ===== WINTER PARK NEIGHBORHOODS =====
  'park-avenue-district': {
    name: 'Park Avenue District',
    area: 'winter-park',
    areaName: 'Winter Park',
    description: 'The elegant main street of Winter Park, lined with boutique shops, sidewalk cafes, and oak-canopied charm. Park Avenue is Central Florida\'s premier walkable shopping district, anchored by the Charles Hosmer Morse Museum of American Art and Central Park.',
    image: '/api/places?query=Park+Avenue+Winter+Park+FL&maxwidth=1600',
    vibes: ['Boutique Shopping', 'Walkable', 'Charming', 'Cultural'],
    featuredStory: {
      title: 'Park Avenue: Central Florida\'s Most Charming Main Street',
      excerpt: 'How Winter Park\'s signature boulevard maintains its independent character in the age of big retail.',
      image: '/api/places?query=Central+Park+Winter+Park+FL&maxwidth=800',
      category: 'Lifestyle',
      date: 'February 2026'
    }
  },
  'hannibal-square': {
    name: 'Hannibal Square',
    area: 'winter-park',
    areaName: 'Winter Park',
    description: 'Winter Park\'s historic African American neighborhood, now a vibrant dining and cultural destination. Hannibal Square blends its deep heritage with acclaimed restaurants, the Hannibal Square Heritage Center, and a community that has shaped the city for over a century.',
    image: '/api/places?query=Hannibal+Square+Winter+Park+FL&maxwidth=1600',
    vibes: ['Historic', 'Dining', 'Cultural Heritage', 'Vibrant'],
    featuredStory: {
      title: 'Hannibal Square: Where Heritage Meets the Table',
      excerpt: 'The rich cultural history and booming restaurant scene of Winter Park\'s most storied neighborhood.',
      image: '/api/places?query=Hannibal+Square+Heritage+Center+Winter+Park+FL&maxwidth=800',
      category: 'Food & Culture',
      date: 'February 2026'
    }
  },
  'winter-park-village': {
    name: 'Winter Park Village',
    area: 'winter-park',
    areaName: 'Winter Park',
    description: 'A popular open-air lifestyle center featuring restaurants, a movie theater, and retail shops in an upscale outdoor setting. The Village serves as a modern gathering spot for Winter Park residents who want convenience without sacrificing charm.',
    image: '/api/places?query=Winter+Park+Village+FL&maxwidth=1600',
    vibes: ['Shopping', 'Dining', 'Lifestyle', 'Modern'],
    featuredStory: {
      title: 'Winter Park Village: The Outdoor Living Room of the City',
      excerpt: 'How this open-air center became the go-to gathering spot for Winter Park locals.',
      image: '/api/places?query=Winter+Park+Village+Shops+FL&maxwidth=800',
      category: 'Lifestyle',
      date: 'February 2026'
    }
  },
  'lake-virginia': {
    name: 'Lake Virginia',
    area: 'winter-park',
    areaName: 'Winter Park',
    description: 'Home to Rollins College and the scenic shores of Lake Virginia, this neighborhood embodies the intellectual and natural beauty of Winter Park. Stately homes with lake views sit alongside the campus, creating a tranquil, prestigious setting.',
    image: '/api/places?query=Lake+Virginia+Winter+Park+FL&maxwidth=1600',
    vibes: ['Lakefront', 'College Town', 'Prestigious', 'Tranquil'],
    featuredStory: {
      title: 'Lake Virginia: Where Rollins College Meets Lakefront Living',
      excerpt: 'The serene intersection of academic life and waterfront elegance in Winter Park.',
      image: '/api/places?query=Rollins+College+Winter+Park+FL&maxwidth=800',
      category: 'Education',
      date: 'February 2026'
    }
  },
  'orwin-manor': {
    name: 'Orwin Manor',
    area: 'winter-park',
    areaName: 'Winter Park',
    description: 'A mid-century neighborhood with tree-canopied streets and well-maintained ranch homes. Orwin Manor offers an accessible entry point to Winter Park living with a friendly, established community feel and easy access to Park Avenue.',
    image: '/api/places?query=Orwin+Manor+Winter+Park+FL&maxwidth=1600',
    vibes: ['Mid-Century', 'Family-Friendly', 'Established', 'Accessible'],
    featuredStory: {
      title: 'Orwin Manor: Winter Park Living Without the Premium',
      excerpt: 'How this friendly mid-century neighborhood offers real Winter Park charm at attainable prices.',
      image: '/api/places?query=Orwin+Manor+Neighborhood+Winter+Park+FL&maxwidth=800',
      category: 'Real Estate',
      date: 'February 2026'
    }
  },
  'bryn-mawr': {
    name: 'Bryn Mawr',
    area: 'winter-park',
    areaName: 'Winter Park',
    description: 'An upscale residential enclave with gracious homes on large lots shaded by mature oaks. Bryn Mawr is one of Winter Park\'s most sought-after addresses, prized for its quiet streets, manicured landscapes, and proximity to top-rated schools.',
    image: '/api/places?query=Bryn+Mawr+Winter+Park+FL&maxwidth=1600',
    vibes: ['Upscale', 'Quiet', 'Schools', 'Oak-Canopied'],
    featuredStory: {
      title: 'Bryn Mawr: Under the Oaks of Winter Park\'s Finest',
      excerpt: 'Inside one of Central Florida\'s most coveted residential enclaves.',
      image: '/api/places?query=Bryn+Mawr+Neighborhood+Winter+Park+FL&maxwidth=800',
      category: 'Luxury Living',
      date: 'February 2026'
    }
  },
  'temple-trail': {
    name: 'Temple Trail',
    area: 'winter-park',
    areaName: 'Winter Park',
    description: 'A quiet residential neighborhood south of Aloma Avenue featuring mid-century homes and a strong neighborhood association. Temple Trail is popular with families who appreciate its community events, safe streets, and Winter Park schools.',
    image: '/api/places?query=Temple+Trail+Winter+Park+FL&maxwidth=1600',
    vibes: ['Family-Friendly', 'Mid-Century', 'Community', 'Safe'],
    featuredStory: {
      title: 'Temple Trail: Where Neighbors Still Borrow Sugar',
      excerpt: 'Inside one of Winter Park\'s most tight-knit family neighborhoods.',
      image: '/api/places?query=Temple+Trail+Neighborhood+Winter+Park+FL&maxwidth=800',
      category: 'Community',
      date: 'February 2026'
    }
  },
  'windsong': {
    name: 'Windsong',
    area: 'winter-park',
    areaName: 'Winter Park',
    description: 'A peaceful residential pocket in Winter Park with winding streets and mature landscaping. Windsong offers a tucked-away feeling with convenient access to shopping, dining, and the Winter Park chain of lakes.',
    image: '/api/places?query=Windsong+Winter+Park+FL&maxwidth=1600',
    vibes: ['Peaceful', 'Residential', 'Tucked-Away', 'Convenient'],
    featuredStory: {
      title: 'Windsong: Winter Park\'s Quiet Escape',
      excerpt: 'How this hidden pocket offers serenity minutes from everything.',
      image: '/api/places?query=Windsong+Neighborhood+Winter+Park+FL&maxwidth=800',
      category: 'Neighborhood Spotlight',
      date: 'February 2026'
    }
  },
  'lake-sue': {
    name: 'Lake Sue',
    area: 'winter-park',
    areaName: 'Winter Park',
    description: 'An exclusive lakefront neighborhood wrapped around the scenic Lake Sue, part of Winter Park\'s famous chain of lakes. Grand homes with private docks and lush tropical landscaping define this premier residential address.',
    image: '/api/places?query=Lake+Sue+Winter+Park+FL&maxwidth=1600',
    vibes: ['Lakefront', 'Exclusive', 'Grand Homes', 'Scenic'],
    featuredStory: {
      title: 'Lake Sue: Living on Winter Park\'s Chain of Lakes',
      excerpt: 'Lakefront luxury along one of Central Florida\'s most beautiful waterways.',
      image: '/api/places?query=Winter+Park+Chain+of+Lakes+FL&maxwidth=800',
      category: 'Luxury Living',
      date: 'February 2026'
    }
  },
  'baldwin-park': {
    name: 'Baldwin Park',
    area: 'winter-park',
    areaName: 'Winter Park',
    description: 'A master-planned new urbanist community built on the former Orlando Naval Training Center. Baldwin Park features tree-lined streets, a town center with shops and restaurants, lakes, parks, and a diverse mix of housing from apartments to estate homes.',
    image: '/api/places?query=Baldwin+Park+Orlando+FL&maxwidth=1600',
    vibes: ['New Urbanism', 'Town Center', 'Walkable', 'Mixed Housing'],
    featuredStory: {
      title: 'Baldwin Park: From Military Base to Model Community',
      excerpt: 'How a former naval training center became one of Orlando\'s most desirable neighborhoods.',
      image: '/api/places?query=Baldwin+Park+Village+Center+Orlando+FL&maxwidth=800',
      category: 'Development',
      date: 'February 2026'
    }
  },

  // ===== THORNTON PARK / SODO NEIGHBORHOODS =====
  'thornton-park-district': {
    name: 'Thornton Park District',
    area: 'thornton-park',
    areaName: 'Thornton Park / SoDo',
    description: 'Orlando\'s most walkable neighborhood, known for its brick-lined streets, independent restaurants, wine bars, and boutique shops along Washington Street. Thornton Park is where Orlando feels most like a proper city, with a European-inspired pedestrian vibe.',
    image: '/api/places?query=Thornton+Park+District+Orlando+FL&maxwidth=1600',
    vibes: ['Walkable', 'Dining', 'Boutiques', 'European Vibe'],
    featuredStory: {
      title: 'Thornton Park: Orlando\'s Most Walkable Block Party',
      excerpt: 'How brick streets and independent restaurants created Central Florida\'s finest urban neighborhood.',
      image: '/api/places?query=Thornton+Park+Washington+Street+Orlando+FL&maxwidth=800',
      category: 'Lifestyle',
      date: 'February 2026'
    }
  },
  'sodo': {
    name: 'SoDo',
    area: 'thornton-park',
    areaName: 'Thornton Park / SoDo',
    description: 'South of Downtown Orlando, SoDo is a rapidly evolving commercial and residential district anchored by the SoDo shopping center and Orlando Health campus. New apartments and mixed-use projects are transforming this corridor into a vibrant urban neighborhood.',
    image: '/api/places?query=SoDo+South+Downtown+Orlando+FL&maxwidth=1600',
    vibes: ['Evolving', 'Mixed-Use', 'Shopping', 'Urban'],
    featuredStory: {
      title: 'SoDo: Orlando\'s Fastest-Changing Corridor',
      excerpt: 'New development is turning this commercial strip into a genuine neighborhood.',
      image: '/api/places?query=SoDo+Shopping+Center+Orlando+FL&maxwidth=800',
      category: 'Development',
      date: 'February 2026'
    }
  },
  'delaney-park': {
    name: 'Delaney Park',
    area: 'thornton-park',
    areaName: 'Thornton Park / SoDo',
    description: 'A beloved residential neighborhood anchored by the 10-acre Delaney Park, one of Orlando\'s oldest public parks. Craftsman bungalows and renovated cottages line the streets, and families gather at the playground, dog park, and community center.',
    image: '/api/places?query=Delaney+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Family-Friendly', 'Parks', 'Bungalows', 'Community'],
    featuredStory: {
      title: 'Delaney Park: The Front Yard of South Orlando',
      excerpt: 'How a ten-acre park became the heart of one of Orlando\'s most family-friendly neighborhoods.',
      image: '/api/places?query=Delaney+Park+Playground+Orlando+FL&maxwidth=800',
      category: 'Parks',
      date: 'February 2026'
    }
  },
  'lawsona-fern-creek': {
    name: 'Lawsona / Fern Creek',
    area: 'thornton-park',
    areaName: 'Thornton Park / SoDo',
    description: 'A diverse residential neighborhood east of downtown with affordable bungalows and growing investment. Lawsona/Fern Creek is attracting first-time buyers who want walkability to Thornton Park and downtown without the premium prices.',
    image: '/api/places?query=Lawsona+Fern+Creek+Orlando+FL&maxwidth=1600',
    vibes: ['Diverse', 'Affordable', 'Walkable', 'Up-and-Coming'],
    featuredStory: {
      title: 'Lawsona/Fern Creek: Where Orlando\'s Next Wave Is Buying',
      excerpt: 'First-time homebuyers are discovering real value in this downtown-adjacent neighborhood.',
      image: '/api/places?query=Fern+Creek+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Real Estate',
      date: 'February 2026'
    }
  },
  'eola-heights': {
    name: 'Eola Heights',
    area: 'thornton-park',
    areaName: 'Thornton Park / SoDo',
    description: 'A historic neighborhood on the eastern shore of Lake Eola featuring some of Orlando\'s oldest and most charming homes. Eola Heights is a walkable, tree-shaded residential area with direct access to the lake and Thornton Park\'s restaurants.',
    image: '/api/places?query=Eola+Heights+Orlando+FL&maxwidth=1600',
    vibes: ['Historic', 'Lakeside', 'Charming', 'Walkable'],
    featuredStory: {
      title: 'Eola Heights: Orlando\'s Original Lakeside Living',
      excerpt: 'The historic homes and tree-canopied streets that make this neighborhood a downtown treasure.',
      image: '/api/places?query=Eola+Heights+Lake+Eola+Orlando+FL&maxwidth=800',
      category: 'History',
      date: 'February 2026'
    }
  },
  'east-central-park': {
    name: 'East Central Park',
    area: 'thornton-park',
    areaName: 'Thornton Park / SoDo',
    description: 'A transitional neighborhood along East Colonial Drive with a mix of commercial activity and residential pockets. East Central Park is benefiting from the overall momentum of the Thornton Park area as new investment flows east.',
    image: '/api/places?query=East+Central+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Transitional', 'Investment', 'Mixed-Use', 'Emerging'],
    featuredStory: {
      title: 'East Central Park: Riding the Wave of Eastside Growth',
      excerpt: 'How spillover from Thornton Park is reshaping this Colonial Drive corridor.',
      image: '/api/places?query=East+Colonial+Drive+Orlando+FL&maxwidth=800',
      category: 'Development',
      date: 'February 2026'
    }
  },
  'lancaster-park': {
    name: 'Lancaster Park',
    area: 'thornton-park',
    areaName: 'Thornton Park / SoDo',
    description: 'A quiet residential neighborhood south of downtown with modest homes and a strong community feel. Lancaster Park offers a laid-back pace of life with easy access to SoDo shopping and the Orlando Health medical campus.',
    image: '/api/places?query=Lancaster+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Quiet', 'Residential', 'Laid-Back', 'Convenient'],
    featuredStory: {
      title: 'Lancaster Park: Orlando\'s Quiet Southern Pocket',
      excerpt: 'A neighborhood that offers peace and convenience just south of the downtown bustle.',
      image: '/api/places?query=Lancaster+Park+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Neighborhood Spotlight',
      date: 'February 2026'
    }
  },
  'wadeview-park': {
    name: 'Wadeview Park',
    area: 'thornton-park',
    areaName: 'Thornton Park / SoDo',
    description: 'Centered around the community park of the same name, Wadeview Park is a family-oriented neighborhood with a mix of renovated bungalows and new construction. The park features a pool, playground, and sports fields that serve as the neighborhood\'s social hub.',
    image: '/api/places?query=Wadeview+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Family-Friendly', 'Parks', 'Renovated', 'Community'],
    featuredStory: {
      title: 'Wadeview Park: Where the Pool Is the Community Center',
      excerpt: 'How a neighborhood park and pool became the social glue for this south Orlando community.',
      image: '/api/places?query=Wadeview+Park+Pool+Orlando+FL&maxwidth=800',
      category: 'Community',
      date: 'February 2026'
    }
  },
  'conway-gardens': {
    name: 'Conway Gardens',
    area: 'thornton-park',
    areaName: 'Thornton Park / SoDo',
    description: 'A residential area south of downtown near the Orlando International Airport corridor. Conway Gardens features affordable single-family homes and is popular with airport workers and young families looking for value close to the city.',
    image: '/api/places?query=Conway+Gardens+Orlando+FL&maxwidth=1600',
    vibes: ['Affordable', 'Residential', 'Convenient', 'Family-Friendly'],
    featuredStory: {
      title: 'Conway Gardens: Real Homes at Real Prices Near Orlando',
      excerpt: 'How this unassuming neighborhood offers genuine affordability with city access.',
      image: '/api/places?query=Conway+Area+Orlando+FL&maxwidth=800',
      category: 'Real Estate',
      date: 'February 2026'
    }
  },
  'engelwood-park': {
    name: 'Engelwood Park',
    area: 'thornton-park',
    areaName: 'Thornton Park / SoDo',
    description: 'A growing residential community south of downtown Orlando with a mix of older homes and new construction. Engelwood Park is seeing renewed interest from buyers priced out of more established neighborhoods closer to the core.',
    image: '/api/places?query=Engelwood+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Growing', 'Affordable', 'Residential', 'New Construction'],
    featuredStory: {
      title: 'Engelwood Park: A Fresh Start South of Downtown',
      excerpt: 'New investment and first-time buyers are breathing life into this south Orlando neighborhood.',
      image: '/api/places?query=Engelwood+Park+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Development',
      date: 'February 2026'
    }
  },

  // ===== MILLS 50 NEIGHBORHOODS =====
  'mills-50-main': {
    name: 'Mills 50 Main',
    area: 'mills-50',
    areaName: 'Mills 50',
    description: 'The vibrant core of Orlando\'s Mills 50 district, an officially designated Main Street District known for its Vietnamese restaurants, bubble tea shops, vintage stores, and eclectic arts scene. This is Orlando at its most authentically multicultural.',
    image: '/api/places?query=Mills+50+District+Orlando+FL&maxwidth=1600',
    vibes: ['Multicultural', 'Foodie', 'Eclectic', 'Arts'],
    featuredStory: {
      title: 'Mills 50: Orlando\'s Multicultural Soul Food District',
      excerpt: 'How Vietnamese pho shops and craft breweries created Orlando\'s most eclectic neighborhood.',
      image: '/api/places?query=Mills+Avenue+Vietnamese+District+Orlando+FL&maxwidth=800',
      category: 'Food & Culture',
      date: 'February 2026'
    }
  },
  'colonialtown-north': {
    name: 'Colonialtown North',
    area: 'mills-50',
    areaName: 'Mills 50',
    description: 'A residential neighborhood with charming 1920s and 1930s bungalows adjacent to the Mills 50 dining corridor. Colonialtown North is one of Orlando\'s most walkable residential areas, with craft breweries, coffee shops, and restaurants steps from front porches.',
    image: '/api/places?query=Colonialtown+North+Orlando+FL&maxwidth=1600',
    vibes: ['Bungalows', 'Walkable', 'Breweries', 'Historic'],
    featuredStory: {
      title: 'Colonialtown North: Bungalow Life on the Mills 50 Border',
      excerpt: 'How 1920s charm and modern craft culture coexist in this walkable neighborhood.',
      image: '/api/places?query=Colonialtown+Bungalows+Orlando+FL&maxwidth=800',
      category: 'Lifestyle',
      date: 'February 2026'
    }
  },
  'colonialtown-south': {
    name: 'Colonialtown South',
    area: 'mills-50',
    areaName: 'Mills 50',
    description: 'The southern half of the historic Colonialtown neighborhood, known for its proximity to Lake Highland and tree-lined residential streets. A popular choice for young professionals and families who want walkability to downtown and Mills 50 culture.',
    image: '/api/places?query=Colonialtown+South+Orlando+FL&maxwidth=1600',
    vibes: ['Residential', 'Young Professionals', 'Trees', 'Walkable'],
    featuredStory: {
      title: 'Colonialtown South: The Neighborhood That Walks Everywhere',
      excerpt: 'Residents here can walk to downtown, Mills 50, and the lakes without breaking a sweat.',
      image: '/api/places?query=Colonialtown+South+Lake+Highland+Orlando+FL&maxwidth=800',
      category: 'Neighborhood Spotlight',
      date: 'February 2026'
    }
  },
  'lake-highland': {
    name: 'Lake Highland',
    area: 'mills-50',
    areaName: 'Mills 50',
    description: 'Named after the prestigious Lake Highland Preparatory School, this neighborhood wraps around several scenic lakes and features a mix of historic homes and modern townhomes. It bridges downtown and Mills 50 with lakeside elegance.',
    image: '/api/places?query=Lake+Highland+Orlando+FL&maxwidth=1600',
    vibes: ['Lakeside', 'Schools', 'Historic', 'Elegant'],
    featuredStory: {
      title: 'Lake Highland: Where Education Meets Lakefront Living',
      excerpt: 'How a prestigious prep school and scenic lakes define this central neighborhood.',
      image: '/api/places?query=Lake+Highland+Preparatory+School+Orlando+FL&maxwidth=800',
      category: 'Education',
      date: 'February 2026'
    }
  },
  'audubon-park': {
    name: 'Audubon Park',
    area: 'mills-50',
    areaName: 'Mills 50',
    description: 'A beloved neighborhood centered around its community garden district and the Audubon Park Garden District commercial strip. Known for its weekly community market, farm-to-table restaurants, and strong locavore ethos, this is where Orlando goes green.',
    image: '/api/places?query=Audubon+Park+Garden+District+Orlando+FL&maxwidth=1600',
    vibes: ['Garden District', 'Farm-to-Table', 'Community Market', 'Green'],
    featuredStory: {
      title: 'Audubon Park: Orlando\'s Farm-to-Table Heart',
      excerpt: 'From community gardens to weekly markets, this neighborhood leads Orlando\'s local food movement.',
      image: '/api/places?query=Audubon+Park+Community+Market+Orlando+FL&maxwidth=800',
      category: 'Food',
      date: 'February 2026'
    }
  },
  'leu-gardens-area': {
    name: 'Leu Gardens Area',
    area: 'mills-50',
    areaName: 'Mills 50',
    description: 'The residential area surrounding the stunning Harry P. Leu Gardens, a 50-acre botanical oasis in the heart of Orlando. Homes here enjoy proximity to one of the Southeast\'s finest botanical gardens and the scenic shores of Lake Rowena.',
    image: '/api/places?query=Harry+P+Leu+Gardens+Orlando+FL&maxwidth=1600',
    vibes: ['Botanical', 'Scenic', 'Nature', 'Peaceful'],
    featuredStory: {
      title: 'Living Next to Leu Gardens: Orlando\'s Botanical Paradise',
      excerpt: 'What it means to have 50 acres of world-class gardens as your neighborhood park.',
      image: '/api/places?query=Leu+Gardens+Botanical+Orlando+FL&maxwidth=800',
      category: 'Nature',
      date: 'February 2026'
    }
  },
  'coytown': {
    name: 'Coytown',
    area: 'mills-50',
    areaName: 'Mills 50',
    description: 'A small, eclectic neighborhood east of Mills Avenue with a mix of rentals and renovated homes. Coytown is popular with artists, musicians, and creative types who appreciate its funky character and proximity to the Mills 50 strip.',
    image: '/api/places?query=Coytown+Mills+50+Orlando+FL&maxwidth=1600',
    vibes: ['Eclectic', 'Creative', 'Funky', 'Artists'],
    featuredStory: {
      title: 'Coytown: Orlando\'s Creative Underground',
      excerpt: 'How artists and musicians found their home in this unassuming Mills 50 pocket.',
      image: '/api/places?query=Coytown+Arts+District+Orlando+FL&maxwidth=800',
      category: 'Arts & Culture',
      date: 'February 2026'
    }
  },
  'rowena-gardens': {
    name: 'Rowena Gardens',
    area: 'mills-50',
    areaName: 'Mills 50',
    description: 'A quiet residential neighborhood near Lake Rowena and Leu Gardens with well-maintained mid-century homes. Rowena Gardens offers a suburban feel within the urban core, with lake access and botanical garden views just around the corner.',
    image: '/api/places?query=Rowena+Gardens+Orlando+FL&maxwidth=1600',
    vibes: ['Quiet', 'Mid-Century', 'Lake Access', 'Suburban Feel'],
    featuredStory: {
      title: 'Rowena Gardens: Orlando\'s Quiet Lake Life',
      excerpt: 'A neighborhood where mid-century homes and lakeside serenity coexist minutes from everything.',
      image: '/api/places?query=Lake+Rowena+Orlando+FL&maxwidth=800',
      category: 'Neighborhood Spotlight',
      date: 'February 2026'
    }
  },
  'milk-district': {
    name: 'Milk District',
    area: 'mills-50',
    areaName: 'Mills 50',
    description: 'Named for the old T.G. Lee dairy that once anchored the area, the Milk District has become one of Orlando\'s most exciting emerging neighborhoods. Craft breweries, independent restaurants, a monthly market, and growing street art scene define this gritty, authentic pocket.',
    image: '/api/places?query=Milk+District+Orlando+FL&maxwidth=1600',
    vibes: ['Craft Beer', 'Street Art', 'Gritty', 'Authentic'],
    featuredStory: {
      title: 'The Milk District: From Dairy to Craft Beer Destination',
      excerpt: 'How a former dairy corridor became one of Orlando\'s most exciting food and beer neighborhoods.',
      image: '/api/places?query=Milk+District+Market+Orlando+FL&maxwidth=800',
      category: 'Food & Drink',
      date: 'February 2026'
    }
  },
  'pinecastle': {
    name: 'Pinecastle',
    area: 'mills-50',
    areaName: 'Mills 50',
    description: 'A historically working-class neighborhood southeast of downtown with affordable housing and a growing sense of community identity. Pinecastle is attracting attention from investors and first-time buyers as nearby areas continue to develop.',
    image: '/api/places?query=Pinecastle+Orlando+FL&maxwidth=1600',
    vibes: ['Affordable', 'Working-Class', 'Growing', 'Community'],
    featuredStory: {
      title: 'Pinecastle: Affordability in Orlando\'s Urban Core',
      excerpt: 'Why this historic working-class neighborhood is drawing new attention from buyers.',
      image: '/api/places?query=Pinecastle+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Real Estate',
      date: 'February 2026'
    }
  },

  // ===== COLLEGE PARK / EDGEWATER NEIGHBORHOODS =====
  'college-park-main': {
    name: 'College Park Main',
    area: 'college-park',
    areaName: 'College Park / Edgewater',
    description: 'One of Orlando\'s most charming and established neighborhoods, known for its tree-canopied Edgewater Drive commercial strip, independent restaurants, and beautifully maintained 1920s bungalows. College Park is where Old Orlando charm lives on.',
    image: '/api/places?query=College+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Charming', 'Historic Bungalows', 'Independent Dining', 'Oak-Canopied'],
    featuredStory: {
      title: 'College Park: Orlando\'s Most Charming Neighborhood',
      excerpt: 'How 1920s bungalows and an independent dining strip created the neighborhood everyone wants to live in.',
      image: '/api/places?query=Edgewater+Drive+College+Park+Orlando+FL&maxwidth=800',
      category: 'Lifestyle',
      date: 'February 2026'
    }
  },
  'edgewater-heights': {
    name: 'Edgewater Heights',
    area: 'college-park',
    areaName: 'College Park / Edgewater',
    description: 'A residential neighborhood along the Edgewater Drive corridor north of College Park proper. Edgewater Heights features a mix of mid-century homes and newer construction, with easy access to the shops and restaurants that make this corridor famous.',
    image: '/api/places?query=Edgewater+Heights+Orlando+FL&maxwidth=1600',
    vibes: ['Residential', 'Mid-Century', 'Dining Corridor', 'Central'],
    featuredStory: {
      title: 'Edgewater Heights: Living on Orlando\'s Best Food Street',
      excerpt: 'Why residents never leave this restaurant-rich corridor.',
      image: '/api/places?query=Edgewater+Drive+Restaurants+Orlando+FL&maxwidth=800',
      category: 'Food',
      date: 'February 2026'
    }
  },
  'lake-adair': {
    name: 'Lake Adair',
    area: 'college-park',
    areaName: 'College Park / Edgewater',
    description: 'A scenic residential neighborhood wrapped around the shores of Lake Adair, one of Orlando\'s most picturesque urban lakes. Joggers, dog walkers, and kayakers share the lake trail while historic homes and renovated bungalows line the surrounding streets.',
    image: '/api/places?query=Lake+Adair+Orlando+FL&maxwidth=1600',
    vibes: ['Lakeside', 'Active', 'Scenic', 'Historic'],
    featuredStory: {
      title: 'Lake Adair: Where Orlando Goes to Unplug',
      excerpt: 'The lakeside loop that draws joggers, kayakers, and nature lovers to this urban oasis.',
      image: '/api/places?query=Lake+Adair+Park+Orlando+FL&maxwidth=800',
      category: 'Outdoors',
      date: 'February 2026'
    }
  },
  'dubsdread': {
    name: 'Dubsdread',
    area: 'college-park',
    areaName: 'College Park / Edgewater',
    description: 'Named after the historic Dubsdread Golf Course, Orlando\'s oldest public golf course. This neighborhood combines the green fairways with charming residential streets, making it a favorite for golfers and families who appreciate the open space and community events.',
    image: '/api/places?query=Dubsdread+Golf+Course+Orlando+FL&maxwidth=1600',
    vibes: ['Golf', 'Historic', 'Community', 'Green Space'],
    featuredStory: {
      title: 'Dubsdread: Orlando\'s Golf Course Neighborhood',
      excerpt: 'How Orlando\'s oldest public course shapes the character of its surrounding community.',
      image: '/api/places?query=Dubsdread+Clubhouse+Orlando+FL&maxwidth=800',
      category: 'Recreation',
      date: 'February 2026'
    }
  },
  'rock-lake': {
    name: 'Rock Lake',
    area: 'college-park',
    areaName: 'College Park / Edgewater',
    description: 'A residential neighborhood surrounding Rock Lake with a mix of original cottages and renovated homes. Rock Lake offers a quiet, friendly atmosphere with easy access to College Park\'s Edgewater Drive restaurants and shops.',
    image: '/api/places?query=Rock+Lake+College+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Lakeside', 'Cottage-Style', 'Friendly', 'Quiet'],
    featuredStory: {
      title: 'Rock Lake: Cottage Living in the Heart of Orlando',
      excerpt: 'How lakeside cottages and friendly neighbors create small-town charm in the city.',
      image: '/api/places?query=Rock+Lake+Orlando+FL&maxwidth=800',
      category: 'Community',
      date: 'February 2026'
    }
  },
  'princeton': {
    name: 'Princeton',
    area: 'college-park',
    areaName: 'College Park / Edgewater',
    description: 'A quiet residential area west of College Park proper with affordable homes and family-friendly streets. Princeton offers a more relaxed pace while keeping residents close to the Edgewater Drive corridor and downtown Orlando.',
    image: '/api/places?query=Princeton+Neighborhood+Orlando+FL&maxwidth=1600',
    vibes: ['Affordable', 'Family-Friendly', 'Quiet', 'Relaxed'],
    featuredStory: {
      title: 'Princeton: College Park Living at a Friendlier Price',
      excerpt: 'How this western pocket delivers the College Park lifestyle at more accessible prices.',
      image: '/api/places?query=Princeton+College+Park+Orlando+FL&maxwidth=800',
      category: 'Real Estate',
      date: 'February 2026'
    }
  },
  'college-park-west': {
    name: 'College Park West',
    area: 'college-park',
    areaName: 'College Park / Edgewater',
    description: 'The western extension of the College Park neighborhood with slightly larger lots and a more suburban feel. College Park West retains the community character and oak canopy of its more urban counterpart while offering more space and affordability.',
    image: '/api/places?query=College+Park+West+Orlando+FL&maxwidth=1600',
    vibes: ['Suburban Feel', 'Spacious', 'Oak-Canopied', 'Community'],
    featuredStory: {
      title: 'College Park West: More Space, Same Charm',
      excerpt: 'Why families choose the western side for bigger yards and the same great community.',
      image: '/api/places?query=College+Park+West+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Family',
      date: 'February 2026'
    }
  },
  'lake-formosa': {
    name: 'Lake Formosa',
    area: 'college-park',
    areaName: 'College Park / Edgewater',
    description: 'A hidden gem neighborhood tucked around Lake Formosa with lakefront homes and a mix of renovated bungalows. Lake Formosa sits at the crossroads of College Park, Mills 50, and downtown, giving residents access to three of Orlando\'s best neighborhoods.',
    image: '/api/places?query=Lake+Formosa+Orlando+FL&maxwidth=1600',
    vibes: ['Hidden Gem', 'Lakefront', 'Central', 'Renovated'],
    featuredStory: {
      title: 'Lake Formosa: The Three-Neighborhood Sweet Spot',
      excerpt: 'How this lakeside pocket offers access to College Park, Mills 50, and downtown all at once.',
      image: '/api/places?query=Lake+Formosa+Park+Orlando+FL&maxwidth=800',
      category: 'Neighborhood Spotlight',
      date: 'February 2026'
    }
  },
  'wychwood': {
    name: 'Wychwood',
    area: 'college-park',
    areaName: 'College Park / Edgewater',
    description: 'A small, exclusive residential enclave in the College Park area with custom homes and a strong neighborhood identity. Wychwood is known for its annual events, involved residents, and the kind of neighborly spirit that defines classic Orlando living.',
    image: '/api/places?query=Wychwood+College+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Exclusive', 'Custom Homes', 'Neighborly', 'Events'],
    featuredStory: {
      title: 'Wychwood: Where Every Neighbor Knows Your Name',
      excerpt: 'Inside one of Orlando\'s most tight-knit and involved residential communities.',
      image: '/api/places?query=Wychwood+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Community',
      date: 'February 2026'
    }
  },
  'westfield': {
    name: 'Westfield',
    area: 'college-park',
    areaName: 'College Park / Edgewater',
    description: 'A residential neighborhood on the western edge of the College Park area with affordable single-family homes and a growing community identity. Westfield is drawing young families who want the College Park zip code without stretching their budget.',
    image: '/api/places?query=Westfield+College+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Affordable', 'Family-Friendly', 'Growing', 'Residential'],
    featuredStory: {
      title: 'Westfield: The Affordable Edge of College Park',
      excerpt: 'Young families are finding value on the western frontier of one of Orlando\'s best neighborhoods.',
      image: '/api/places?query=Westfield+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Real Estate',
      date: 'February 2026'
    }
  },

  // ===== INTERNATIONAL DRIVE NEIGHBORHOODS =====
  'icon-park-area': {
    name: 'ICON Park Area',
    area: 'international-drive',
    areaName: 'International Drive',
    description: 'The entertainment epicenter of I-Drive, anchored by the 400-foot Orlando Eye observation wheel, Madame Tussauds, and SEA LIFE Aquarium. ICON Park draws tourists and locals alike with its dining, attractions, and vibrant nighttime energy.',
    image: '/api/places?query=ICON+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Entertainment', 'Attractions', 'Nightlife', 'Tourist Hub'],
    featuredStory: {
      title: 'ICON Park: I-Drive\'s Glowing Centerpiece',
      excerpt: 'How the Orlando Eye and its surrounding complex became the new heart of International Drive.',
      image: '/api/places?query=Orlando+Eye+ICON+Park+FL&maxwidth=800',
      category: 'Entertainment',
      date: 'February 2026'
    }
  },
  'i-drive-central': {
    name: 'I-Drive Central',
    area: 'international-drive',
    areaName: 'International Drive',
    description: 'The bustling core of International Drive featuring hotels, restaurants, outlet shopping, and entertainment venues. I-Drive Central is the commercial heart of Orlando\'s tourism corridor, where visitors from around the world experience the city\'s famous hospitality.',
    image: '/api/places?query=International+Drive+Orlando+FL&maxwidth=1600',
    vibes: ['Tourism', 'Shopping', 'Hotels', 'International'],
    featuredStory: {
      title: 'I-Drive Central: The Boulevard That Feeds Orlando\'s Economy',
      excerpt: 'How this famous strip generates billions and shapes the city\'s identity worldwide.',
      image: '/api/places?query=International+Drive+Shopping+Orlando+FL&maxwidth=800',
      category: 'Business',
      date: 'February 2026'
    }
  },
  'i-drive-south': {
    name: 'I-Drive South',
    area: 'international-drive',
    areaName: 'International Drive',
    description: 'The southern stretch of International Drive near the Orange County Convention Center, featuring major hotels, restaurants, and attractions. This area is undergoing significant development as new projects aim to elevate the corridor\'s appeal.',
    image: '/api/places?query=I-Drive+South+Convention+Center+Orlando+FL&maxwidth=1600',
    vibes: ['Convention Center', 'Hotels', 'Development', 'Dining'],
    featuredStory: {
      title: 'I-Drive South: A $4 Billion Facelift',
      excerpt: 'Inside the massive redevelopment reshaping the southern end of Orlando\'s famous strip.',
      image: '/api/places?query=South+International+Drive+Orlando+FL&maxwidth=800',
      category: 'Development',
      date: 'February 2026'
    }
  },
  'convention-center-district': {
    name: 'Convention Center District',
    area: 'international-drive',
    areaName: 'International Drive',
    description: 'Home to the Orange County Convention Center, the second-largest convention facility in the United States. This district is a powerhouse of business tourism, surrounded by major hotels, restaurants, and the Pointe Orlando entertainment complex.',
    image: '/api/places?query=Orange+County+Convention+Center+Orlando+FL&maxwidth=1600',
    vibes: ['Business', 'Conventions', 'Hotels', 'Corporate'],
    featuredStory: {
      title: 'The Convention Center District: Orlando\'s Business Engine',
      excerpt: 'How the nation\'s second-largest convention center drives billions into the local economy.',
      image: '/api/places?query=Orange+County+Convention+Center+West+Orlando+FL&maxwidth=800',
      category: 'Business',
      date: 'February 2026'
    }
  },
  'universal-boulevard': {
    name: 'Universal Boulevard',
    area: 'international-drive',
    areaName: 'International Drive',
    description: 'The corridor connecting International Drive to Universal Orlando Resort, lined with resort hotels, dining, and entertainment options. Universal Boulevard is evolving from a service road into a destination in its own right with new mixed-use projects.',
    image: '/api/places?query=Universal+Boulevard+Orlando+FL&maxwidth=1600',
    vibes: ['Theme Parks', 'Resorts', 'Entertainment', 'Evolving'],
    featuredStory: {
      title: 'Universal Boulevard: More Than a Road to the Parks',
      excerpt: 'How this corridor is becoming a destination beyond the theme park gates.',
      image: '/api/places?query=Universal+Orlando+Resort+FL&maxwidth=800',
      category: 'Development',
      date: 'February 2026'
    }
  },
  'sand-lake-corridor': {
    name: 'Sand Lake Corridor',
    area: 'international-drive',
    areaName: 'International Drive',
    description: 'The legendary Restaurant Row of Orlando, where Sand Lake Road intersects International Drive. This corridor is packed with some of Orlando\'s finest dining, from sushi to steak, making it the metro area\'s most concentrated food destination.',
    image: '/api/places?query=Sand+Lake+Road+Restaurant+Row+Orlando+FL&maxwidth=1600',
    vibes: ['Restaurant Row', 'Fine Dining', 'Foodie', 'International Cuisine'],
    featuredStory: {
      title: 'Sand Lake Road: Orlando\'s Original Restaurant Row',
      excerpt: 'A culinary journey down the road where Orlando\'s finest restaurants cluster.',
      image: '/api/places?query=Restaurant+Row+Sand+Lake+Orlando+FL&maxwidth=800',
      category: 'Food',
      date: 'February 2026'
    }
  },
  'fun-spot-area': {
    name: 'Fun Spot Area',
    area: 'international-drive',
    areaName: 'International Drive',
    description: 'The northern stretch of I-Drive near Fun Spot America, featuring go-karts, roller coasters, and family attractions. This area offers a more classic, carnival-style entertainment experience compared to the southern corridor\'s upscale developments.',
    image: '/api/places?query=Fun+Spot+America+Orlando+FL&maxwidth=1600',
    vibes: ['Family Fun', 'Attractions', 'Classic', 'Affordable Entertainment'],
    featuredStory: {
      title: 'Fun Spot Area: I-Drive\'s Old-School Family Fun Zone',
      excerpt: 'Where go-karts, mini-golf, and classic attractions keep the family fun tradition alive.',
      image: '/api/places?query=Fun+Spot+International+Drive+Orlando+FL&maxwidth=800',
      category: 'Entertainment',
      date: 'February 2026'
    }
  },
  'turkey-lake': {
    name: 'Turkey Lake',
    area: 'international-drive',
    areaName: 'International Drive',
    description: 'A nature-focused area west of I-Drive centered around Turkey Lake Park, a 300-acre oasis offering fishing, hiking, and picnicking. This pocket provides a surprising escape from the tourism corridor\'s neon glow.',
    image: '/api/places?query=Turkey+Lake+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Nature', 'Parks', 'Fishing', 'Escape'],
    featuredStory: {
      title: 'Turkey Lake: 300 Acres of Quiet Next to I-Drive\'s Chaos',
      excerpt: 'How this massive park offers nature therapy steps from the tourism corridor.',
      image: '/api/places?query=Bill+Frederick+Park+Turkey+Lake+Orlando+FL&maxwidth=800',
      category: 'Outdoors',
      date: 'February 2026'
    }
  },
  'tangelo-park': {
    name: 'Tangelo Park',
    area: 'international-drive',
    areaName: 'International Drive',
    description: 'A residential community near I-Drive famous for the Tangelo Park Program, a pioneering initiative providing free preschool and college scholarships funded by philanthropist Harris Rosen. This tight-knit neighborhood is a national model for community investment.',
    image: '/api/places?query=Tangelo+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Community', 'Education', 'Pioneering', 'Residential'],
    featuredStory: {
      title: 'Tangelo Park: The Neighborhood That Proves Investment Works',
      excerpt: 'How one philanthropist\'s vision transformed an entire community through education.',
      image: '/api/places?query=Tangelo+Park+Community+Orlando+FL&maxwidth=800',
      category: 'Education',
      date: 'February 2026'
    }
  },
  'point-orlando': {
    name: 'Pointe Orlando',
    area: 'international-drive',
    areaName: 'International Drive',
    description: 'An upscale entertainment and dining complex on International Drive featuring restaurants, nightclubs, a comedy club, and a movie theater. Pointe Orlando is the I-Drive corridor\'s most polished nightlife and dining destination.',
    image: '/api/places?query=Pointe+Orlando+International+Drive+FL&maxwidth=1600',
    vibes: ['Upscale Dining', 'Nightlife', 'Entertainment', 'Polished'],
    featuredStory: {
      title: 'Pointe Orlando: I-Drive\'s Upscale Evening Destination',
      excerpt: 'Where International Drive puts on its best face for dinner and a night out.',
      image: '/api/places?query=Pointe+Orlando+Dining+FL&maxwidth=800',
      category: 'Nightlife',
      date: 'February 2026'
    }
  },

  // ===== DR. PHILLIPS / RESTAURANT ROW NEIGHBORHOODS =====
  'restaurant-row': {
    name: 'Restaurant Row',
    area: 'dr-phillips',
    areaName: 'Dr. Phillips / Restaurant Row',
    description: 'The epicenter of Orlando\'s dining scene, stretching along Sand Lake Road with over 100 restaurants representing cuisines from around the globe. From celebrity chef outposts to authentic family-run eateries, this is where Orlando eats.',
    image: '/api/places?query=Restaurant+Row+Dr+Phillips+Orlando+FL&maxwidth=1600',
    vibes: ['World-Class Dining', 'International Cuisine', 'Foodie Capital', 'Celebrity Chefs'],
    featuredStory: {
      title: 'Restaurant Row: The Street That Made Orlando a Food City',
      excerpt: 'How Sand Lake Road became one of America\'s most diverse dining destinations.',
      image: '/api/places?query=Sand+Lake+Road+Restaurants+Orlando+FL&maxwidth=800',
      category: 'Food',
      date: 'February 2026'
    }
  },
  'bay-hill': {
    name: 'Bay Hill',
    area: 'dr-phillips',
    areaName: 'Dr. Phillips / Restaurant Row',
    description: 'An exclusive golf community built around Arnold Palmer\'s Bay Hill Club and Lodge, home to the annual Arnold Palmer Invitational. Bay Hill features luxury estates, championship golf, and a country club lifestyle in the heart of southwest Orlando.',
    image: '/api/places?query=Bay+Hill+Club+Lodge+Orlando+FL&maxwidth=1600',
    vibes: ['Golf', 'Luxury', 'Exclusive', 'Country Club'],
    featuredStory: {
      title: 'Bay Hill: Arnold Palmer\'s Orlando Legacy',
      excerpt: 'How the King of Golf created one of Central Florida\'s most prestigious communities.',
      image: '/api/places?query=Arnold+Palmer+Bay+Hill+Golf+Orlando+FL&maxwidth=800',
      category: 'Golf',
      date: 'February 2026'
    }
  },
  'dr-phillips-proper': {
    name: 'Dr. Phillips Proper',
    area: 'dr-phillips',
    areaName: 'Dr. Phillips / Restaurant Row',
    description: 'The residential core of the Dr. Phillips community, featuring well-maintained subdivisions, excellent schools, and convenient access to Restaurant Row. Named after the citrus magnate who once owned this land, Dr. Phillips is one of Orlando\'s most desirable family neighborhoods.',
    image: '/api/places?query=Dr+Phillips+Orlando+FL&maxwidth=1600',
    vibes: ['Family-Friendly', 'Schools', 'Suburban', 'Convenient'],
    featuredStory: {
      title: 'Dr. Phillips: Orlando\'s Premier Family Suburb',
      excerpt: 'Why families consistently rank this as one of the best places to raise kids in Central Florida.',
      image: '/api/places?query=Dr+Phillips+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Family',
      date: 'February 2026'
    }
  },
  'windermere': {
    name: 'Windermere',
    area: 'dr-phillips',
    areaName: 'Dr. Phillips / Restaurant Row',
    description: 'An affluent lakeside town known for its chain of butler lakes, luxury estates, and celebrity residents. Windermere offers a small-town charm with a downtown that still feels like old Florida, even as mega-mansions line the lakeshores.',
    image: '/api/places?query=Windermere+Florida+Lakefront&maxwidth=1600',
    vibes: ['Affluent', 'Lakeside', 'Celebrity Homes', 'Old Florida'],
    featuredStory: {
      title: 'Windermere: Where Orlando\'s Elite Call Home',
      excerpt: 'Inside the lakeside town that attracts athletes, executives, and celebrities.',
      image: '/api/places?query=Downtown+Windermere+FL&maxwidth=800',
      category: 'Luxury Living',
      date: 'February 2026'
    }
  },
  'sand-lake-hills': {
    name: 'Sand Lake Hills',
    area: 'dr-phillips',
    areaName: 'Dr. Phillips / Restaurant Row',
    description: 'A well-established residential community near Sand Lake Road with mature landscaping and a mix of housing styles. Sand Lake Hills provides a stable, community-oriented setting with quick access to Restaurant Row and major theme parks.',
    image: '/api/places?query=Sand+Lake+Hills+Orlando+FL&maxwidth=1600',
    vibes: ['Established', 'Residential', 'Mature', 'Convenient'],
    featuredStory: {
      title: 'Sand Lake Hills: The Neighborhood Behind Restaurant Row',
      excerpt: 'How this established community thrives in the shadow of Orlando\'s dining capital.',
      image: '/api/places?query=Sand+Lake+Hills+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Community',
      date: 'February 2026'
    }
  },
  'phillips-bay': {
    name: 'Phillips Bay',
    area: 'dr-phillips',
    areaName: 'Dr. Phillips / Restaurant Row',
    description: 'A lakeside residential community in the Dr. Phillips area featuring waterfront homes, community pools, and a family-friendly atmosphere. Phillips Bay offers the lakeside lifestyle that defines southwest Orlando living.',
    image: '/api/places?query=Phillips+Bay+Dr+Phillips+Orlando+FL&maxwidth=1600',
    vibes: ['Lakeside', 'Family-Friendly', 'Waterfront', 'Community'],
    featuredStory: {
      title: 'Phillips Bay: Lakeside Living in Dr. Phillips',
      excerpt: 'How waterfront homes and community amenities create the ideal family setting.',
      image: '/api/places?query=Phillips+Bay+Community+Orlando+FL&maxwidth=800',
      category: 'Family',
      date: 'February 2026'
    }
  },
  'grande-pines': {
    name: 'Grande Pines',
    area: 'dr-phillips',
    areaName: 'Dr. Phillips / Restaurant Row',
    description: 'A resort-style community in the Dr. Phillips area featuring a golf course, spa, and luxury accommodations. Grande Pines blends resort living with residential options, offering a vacation lifestyle as an everyday experience.',
    image: '/api/places?query=Grande+Pines+Golf+Club+Orlando+FL&maxwidth=1600',
    vibes: ['Resort-Style', 'Golf', 'Luxury', 'Spa'],
    featuredStory: {
      title: 'Grande Pines: Living the Resort Life Every Day',
      excerpt: 'Where the line between vacation and home life disappears entirely.',
      image: '/api/places?query=Grande+Pines+Resort+Orlando+FL&maxwidth=800',
      category: 'Luxury Living',
      date: 'February 2026'
    }
  },
  'osprey-ridge': {
    name: 'Osprey Ridge',
    area: 'dr-phillips',
    areaName: 'Dr. Phillips / Restaurant Row',
    description: 'A nature-forward residential community in the Dr. Phillips corridor named for the ospreys that nest near its wetlands and lakes. Osprey Ridge offers newer homes with conservation views and a peaceful setting near the bustle of Restaurant Row.',
    image: '/api/places?query=Osprey+Ridge+Dr+Phillips+Orlando+FL&maxwidth=1600',
    vibes: ['Nature', 'Conservation', 'Newer Homes', 'Peaceful'],
    featuredStory: {
      title: 'Osprey Ridge: Wildlife and Suburban Living in Harmony',
      excerpt: 'How this community balances new development with Central Florida\'s natural landscape.',
      image: '/api/places?query=Osprey+Ridge+Community+Orlando+FL&maxwidth=800',
      category: 'Nature',
      date: 'February 2026'
    }
  },
  'meadow-woods': {
    name: 'Meadow Woods',
    area: 'dr-phillips',
    areaName: 'Dr. Phillips / Restaurant Row',
    description: 'A large, diverse residential community south of the Dr. Phillips area with affordable homes and growing amenities. Meadow Woods is one of Orlando\'s most multicultural neighborhoods, with a mix of families from across Latin America, Asia, and the Caribbean.',
    image: '/api/places?query=Meadow+Woods+Orlando+FL&maxwidth=1600',
    vibes: ['Diverse', 'Affordable', 'Multicultural', 'Growing'],
    featuredStory: {
      title: 'Meadow Woods: Orlando\'s Most Diverse Zip Code',
      excerpt: 'How this multicultural community reflects Orlando\'s evolving identity.',
      image: '/api/places?query=Meadow+Woods+Community+Orlando+FL&maxwidth=800',
      category: 'Community',
      date: 'February 2026'
    }
  },
  'isleworth': {
    name: 'Isleworth',
    area: 'dr-phillips',
    areaName: 'Dr. Phillips / Restaurant Row',
    description: 'One of Central Florida\'s most exclusive gated communities, home to professional athletes, executives, and celebrities. Isleworth features a world-class golf course, lakefront estates, and the kind of privacy that comes with a prestigious address.',
    image: '/api/places?query=Isleworth+Golf+Country+Club+Windermere+FL&maxwidth=1600',
    vibes: ['Ultra-Exclusive', 'Gated', 'Estates', 'Celebrity Homes'],
    featuredStory: {
      title: 'Isleworth: Inside Orlando\'s Most Exclusive Gates',
      excerpt: 'A rare glimpse behind the walls of one of America\'s most prestigious residential communities.',
      image: '/api/places?query=Isleworth+Community+Windermere+FL&maxwidth=800',
      category: 'Luxury Living',
      date: 'February 2026'
    }
  },

  // ===== EAST ORLANDO / UCF NEIGHBORHOODS =====
  'ucf-area': {
    name: 'UCF Area',
    area: 'east-orlando',
    areaName: 'East Orlando / UCF',
    description: 'The vibrant corridor surrounding the University of Central Florida, one of the nation\'s largest universities. The UCF area buzzes with student energy, affordable dining, nightlife, and the entrepreneurial spirit of a growing tech and research hub.',
    image: '/api/places?query=University+Central+Florida+UCF+Orlando+FL&maxwidth=1600',
    vibes: ['College Town', 'Nightlife', 'Tech Hub', 'Young Energy'],
    featuredStory: {
      title: 'UCF Area: Where 70,000 Students Shape a Community',
      excerpt: 'How the nation\'s largest university campus drives the culture of East Orlando.',
      image: '/api/places?query=UCF+Campus+Orlando+FL&maxwidth=800',
      category: 'Education',
      date: 'February 2026'
    }
  },
  'waterford-lakes': {
    name: 'Waterford Lakes',
    area: 'east-orlando',
    areaName: 'East Orlando / UCF',
    description: 'A major retail and residential hub in East Orlando centered around the Waterford Lakes Town Center. This master-planned community offers suburban conveniences, diverse dining, and a strong sense of neighborhood identity among its thousands of families.',
    image: '/api/places?query=Waterford+Lakes+Town+Center+Orlando+FL&maxwidth=1600',
    vibes: ['Shopping', 'Family-Friendly', 'Suburban', 'Town Center'],
    featuredStory: {
      title: 'Waterford Lakes: East Orlando\'s All-in-One Neighborhood',
      excerpt: 'How a town center and master-planned community created East Orlando\'s social hub.',
      image: '/api/places?query=Waterford+Lakes+Shopping+Orlando+FL&maxwidth=800',
      category: 'Lifestyle',
      date: 'February 2026'
    }
  },
  'alafaya-corridor': {
    name: 'Alafaya Corridor',
    area: 'east-orlando',
    areaName: 'East Orlando / UCF',
    description: 'The commercial spine of East Orlando running along Alafaya Trail from UCF south to Lake Nona. This rapidly developing corridor features new apartments, restaurants, medical facilities, and retail serving the booming east side population.',
    image: '/api/places?query=Alafaya+Trail+East+Orlando+FL&maxwidth=1600',
    vibes: ['Rapidly Growing', 'Commercial', 'Diverse', 'Convenient'],
    featuredStory: {
      title: 'Alafaya Corridor: East Orlando\'s Rapidly Evolving Spine',
      excerpt: 'From UCF to Lake Nona, this corridor is where East Orlando\'s growth story unfolds.',
      image: '/api/places?query=Alafaya+Corridor+Orlando+FL&maxwidth=800',
      category: 'Development',
      date: 'February 2026'
    }
  },
  'avalon-park': {
    name: 'Avalon Park',
    area: 'east-orlando',
    areaName: 'East Orlando / UCF',
    description: 'A large master-planned community in East Orlando designed around New Urbanist principles, featuring a walkable town center, community events, diverse housing, and top-rated schools. Avalon Park is a self-contained village with its own distinct identity.',
    image: '/api/places?query=Avalon+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Master-Planned', 'Town Center', 'Schools', 'Community Events'],
    featuredStory: {
      title: 'Avalon Park: The Town Within a City',
      excerpt: 'How this master-planned community built its own Main Street and identity from scratch.',
      image: '/api/places?query=Avalon+Park+Town+Center+Orlando+FL&maxwidth=800',
      category: 'Community',
      date: 'February 2026'
    }
  },
  'eastwood': {
    name: 'Eastwood',
    area: 'east-orlando',
    areaName: 'East Orlando / UCF',
    description: 'An established residential community in East Orlando with mature trees, well-maintained homes, and a family-oriented atmosphere. Eastwood is one of the area\'s original planned communities, offering stability and value in a rapidly growing corridor.',
    image: '/api/places?query=Eastwood+Community+East+Orlando+FL&maxwidth=1600',
    vibes: ['Established', 'Family-Oriented', 'Mature', 'Stable'],
    featuredStory: {
      title: 'Eastwood: The Original East Orlando Community',
      excerpt: 'How this established neighborhood maintains its identity amid rapid east-side growth.',
      image: '/api/places?query=Eastwood+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Neighborhood Spotlight',
      date: 'February 2026'
    }
  },
  'innovation-way': {
    name: 'Innovation Way',
    area: 'east-orlando',
    areaName: 'East Orlando / UCF',
    description: 'A technology and research corridor connecting UCF to the Central Florida Research Park and beyond. Innovation Way is the backbone of Orlando\'s growing tech sector, with simulation, defense, and gaming companies clustered along this futuristic corridor.',
    image: '/api/places?query=Innovation+Way+Research+Park+Orlando+FL&maxwidth=1600',
    vibes: ['Tech', 'Research', 'Innovation', 'Futuristic'],
    featuredStory: {
      title: 'Innovation Way: Orlando\'s Silicon Alley',
      excerpt: 'Inside the tech corridor where simulation, gaming, and defense industries converge.',
      image: '/api/places?query=Central+Florida+Research+Park+Orlando+FL&maxwidth=800',
      category: 'Innovation',
      date: 'February 2026'
    }
  },
  'lake-nona': {
    name: 'Lake Nona',
    area: 'east-orlando',
    areaName: 'East Orlando / UCF',
    description: 'Orlando\'s most ambitious planned community, designed as a health and wellness hub. Lake Nona is home to the UCF medical school, VA hospital, USTA national campus, and a growing town center. It represents the future of how American communities are built.',
    image: '/api/places?query=Lake+Nona+Town+Center+Orlando+FL&maxwidth=1600',
    vibes: ['Health & Wellness', 'Medical Hub', 'Sports', 'Futuristic'],
    featuredStory: {
      title: 'Lake Nona: Orlando\'s City of the Future',
      excerpt: 'How a 17-square-mile community became a national model for health, wellness, and innovation.',
      image: '/api/places?query=Lake+Nona+Medical+City+Orlando+FL&maxwidth=800',
      category: 'Innovation',
      date: 'February 2026'
    }
  },
  'moss-park': {
    name: 'Moss Park',
    area: 'east-orlando',
    areaName: 'East Orlando / UCF',
    description: 'A nature-rich area east of Orlando near the Moss Park Preserve, offering hiking trails, camping, and lakeside recreation. The surrounding residential communities provide a semi-rural lifestyle with access to Orlando\'s urban amenities.',
    image: '/api/places?query=Moss+Park+Preserve+Orlando+FL&maxwidth=1600',
    vibes: ['Nature', 'Trails', 'Semi-Rural', 'Outdoors'],
    featuredStory: {
      title: 'Moss Park: Where Orlando Meets the Wilderness',
      excerpt: 'How this preserve and its surrounding communities offer a different kind of Orlando living.',
      image: '/api/places?query=Moss+Park+Trails+Orlando+FL&maxwidth=800',
      category: 'Outdoors',
      date: 'February 2026'
    }
  },
  'timber-springs': {
    name: 'Timber Springs',
    area: 'east-orlando',
    areaName: 'East Orlando / UCF',
    description: 'A residential community in the Alafaya corridor with family-friendly homes, community pools, and proximity to top-rated schools. Timber Springs is a popular choice for families who want East Orlando convenience with a neighborhood feel.',
    image: '/api/places?query=Timber+Springs+East+Orlando+FL&maxwidth=1600',
    vibes: ['Family-Friendly', 'Schools', 'Community Pools', 'Residential'],
    featuredStory: {
      title: 'Timber Springs: East Orlando\'s Family Favorite',
      excerpt: 'Why families keep choosing this well-rounded community for its schools and amenities.',
      image: '/api/places?query=Timber+Springs+Community+Orlando+FL&maxwidth=800',
      category: 'Family',
      date: 'February 2026'
    }
  },
  'stoneybrook': {
    name: 'Stoneybrook',
    area: 'east-orlando',
    areaName: 'East Orlando / UCF',
    description: 'A master-planned golf community in East Orlando featuring a championship golf course, resort-style amenities, and diverse housing options. Stoneybrook offers a country club lifestyle with the convenience of East Orlando\'s retail and dining.',
    image: '/api/places?query=Stoneybrook+East+Golf+Club+Orlando+FL&maxwidth=1600',
    vibes: ['Golf', 'Country Club', 'Master-Planned', 'Resort-Style'],
    featuredStory: {
      title: 'Stoneybrook: Golf Course Living in East Orlando',
      excerpt: 'How this championship golf community became one of East Orlando\'s most coveted addresses.',
      image: '/api/places?query=Stoneybrook+Golf+Community+Orlando+FL&maxwidth=800',
      category: 'Golf',
      date: 'February 2026'
    }
  },

  // ===== NORTH ORLANDO / MAITLAND NEIGHBORHOODS =====
  'maitland-center': {
    name: 'Maitland Center',
    area: 'north-orlando',
    areaName: 'North Orlando / Maitland',
    description: 'A major business park and commercial district in the heart of Maitland, home to corporate offices, tech companies, and growing mixed-use development. Maitland Center is the professional hub of North Orlando with increasing residential options.',
    image: '/api/places?query=Maitland+Center+FL&maxwidth=1600',
    vibes: ['Business Park', 'Corporate', 'Mixed-Use', 'Professional'],
    featuredStory: {
      title: 'Maitland Center: The Office Park That\'s Becoming a Neighborhood',
      excerpt: 'How mixed-use development is transforming this corporate campus into a live-work community.',
      image: '/api/places?query=Maitland+Center+Parkway+FL&maxwidth=800',
      category: 'Development',
      date: 'February 2026'
    }
  },
  'maitland-historic': {
    name: 'Maitland Historic',
    area: 'north-orlando',
    areaName: 'North Orlando / Maitland',
    description: 'The charming historic core of Maitland featuring the Maitland Art Center (a National Historic Landmark), Lake Lily Park, and tree-lined streets with homes dating to the early 1900s. This is Old Florida at its most refined.',
    image: '/api/places?query=Maitland+Art+Center+FL&maxwidth=1600',
    vibes: ['Historic', 'Art Center', 'Lakeside', 'Charming'],
    featuredStory: {
      title: 'Maitland Historic: Art, Architecture, and Old Florida Charm',
      excerpt: 'How a National Historic Landmark and lakeside park define this northern enclave.',
      image: '/api/places?query=Lake+Lily+Park+Maitland+FL&maxwidth=800',
      category: 'Arts & Culture',
      date: 'February 2026'
    }
  },
  'altamonte-springs': {
    name: 'Altamonte Springs',
    area: 'north-orlando',
    areaName: 'North Orlando / Maitland',
    description: 'A thriving suburban city north of Orlando known for the Altamonte Mall, Cranes Roost Park, and its annual Red Hot & Boom Fourth of July celebration. Altamonte Springs offers urban amenities with a suburban pace and strong community programming.',
    image: '/api/places?query=Altamonte+Springs+FL&maxwidth=1600',
    vibes: ['Suburban', 'Shopping', 'Events', 'Community'],
    featuredStory: {
      title: 'Altamonte Springs: North Orlando\'s Complete Community',
      excerpt: 'How this suburban city delivers small-town events with big-city conveniences.',
      image: '/api/places?query=Cranes+Roost+Park+Altamonte+Springs+FL&maxwidth=800',
      category: 'Lifestyle',
      date: 'February 2026'
    }
  },
  'casselberry': {
    name: 'Casselberry',
    area: 'north-orlando',
    areaName: 'North Orlando / Maitland',
    description: 'A lakeside city in North Orlando surrounded by beautiful freshwater lakes. Casselberry offers affordable living, excellent lake access for fishing and kayaking, and a growing downtown with local restaurants and community events.',
    image: '/api/places?query=Casselberry+FL&maxwidth=1600',
    vibes: ['Lakeside', 'Affordable', 'Fishing', 'Small-Town'],
    featuredStory: {
      title: 'Casselberry: Orlando\'s Lakeside Retreat',
      excerpt: 'How this lake-studded city offers outdoor living at accessible prices.',
      image: '/api/places?query=Secret+Lake+Park+Casselberry+FL&maxwidth=800',
      category: 'Outdoors',
      date: 'February 2026'
    }
  },
  'eatonville': {
    name: 'Eatonville',
    area: 'north-orlando',
    areaName: 'North Orlando / Maitland',
    description: 'The oldest incorporated African American municipality in the United States, established in 1887. Eatonville is the childhood home of author Zora Neale Hurston and hosts the annual ZORA! Festival celebrating African American art, literature, and culture.',
    image: '/api/places?query=Eatonville+Florida&maxwidth=1600',
    vibes: ['Historic', 'Literary', 'Cultural Heritage', 'Pioneering'],
    featuredStory: {
      title: 'Eatonville: America\'s Oldest Black Town and Its Living Legacy',
      excerpt: 'How the birthplace of Zora Neale Hurston preserves its pioneering heritage.',
      image: '/api/places?query=Zora+Neale+Hurston+Museum+Eatonville+FL&maxwidth=800',
      category: 'History',
      date: 'February 2026'
    }
  },
  'fern-park': {
    name: 'Fern Park',
    area: 'north-orlando',
    areaName: 'North Orlando / Maitland',
    description: 'An unincorporated community in Seminole County known for its flea markets, antique shops, and affordable living. Fern Park is a no-frills, authentic slice of Central Florida life with convenient access to I-4 and the North Orlando corridor.',
    image: '/api/places?query=Fern+Park+FL&maxwidth=1600',
    vibes: ['Affordable', 'Flea Markets', 'Antiques', 'Authentic'],
    featuredStory: {
      title: 'Fern Park: Treasure Hunting in North Orlando',
      excerpt: 'How flea markets and antique shops define this unassuming community\'s character.',
      image: '/api/places?query=Flea+World+Fern+Park+FL&maxwidth=800',
      category: 'Shopping',
      date: 'February 2026'
    }
  },
  'lockhart': {
    name: 'Lockhart',
    area: 'north-orlando',
    areaName: 'North Orlando / Maitland',
    description: 'An unincorporated community northwest of Orlando with affordable housing and a diverse population. Lockhart is a working-class neighborhood that offers genuine affordability close to the urban core, attracting first-time buyers and small families.',
    image: '/api/places?query=Lockhart+Orlando+FL&maxwidth=1600',
    vibes: ['Affordable', 'Diverse', 'Working-Class', 'Accessible'],
    featuredStory: {
      title: 'Lockhart: Real Affordability Near Orlando',
      excerpt: 'How this working-class community provides a gateway to Orlando homeownership.',
      image: '/api/places?query=Lockhart+Neighborhood+Orlando+FL&maxwidth=800',
      category: 'Real Estate',
      date: 'February 2026'
    }
  },
  'lake-weston': {
    name: 'Lake Weston',
    area: 'north-orlando',
    areaName: 'North Orlando / Maitland',
    description: 'A residential area surrounding Lake Weston in the North Orlando corridor with lakeside homes and quiet streets. Lake Weston offers a peaceful living environment with water views and easy commuting access to downtown Orlando and Maitland.',
    image: '/api/places?query=Lake+Weston+Orlando+FL&maxwidth=1600',
    vibes: ['Lakeside', 'Quiet', 'Residential', 'Commuter-Friendly'],
    featuredStory: {
      title: 'Lake Weston: North Orlando\'s Lakeside Calm',
      excerpt: 'How lakeside living and easy commuting make this a smart choice for professionals.',
      image: '/api/places?query=Lake+Weston+Park+Orlando+FL&maxwidth=800',
      category: 'Neighborhood Spotlight',
      date: 'February 2026'
    }
  },
  'bear-lake': {
    name: 'Bear Lake',
    area: 'north-orlando',
    areaName: 'North Orlando / Maitland',
    description: 'A laid-back lakeside community in the Apopka/Maitland area with a mix of waterfront and residential properties. Bear Lake is popular with fishing enthusiasts and families who want lake life without the price tag of Winter Park or Windermere.',
    image: '/api/places?query=Bear+Lake+Apopka+Orlando+FL&maxwidth=1600',
    vibes: ['Lakeside', 'Fishing', 'Laid-Back', 'Affordable'],
    featuredStory: {
      title: 'Bear Lake: Affordable Lake Living in North Orlando',
      excerpt: 'How this community delivers the lakeside lifestyle at prices that make sense.',
      image: '/api/places?query=Bear+Lake+Park+Apopka+FL&maxwidth=800',
      category: 'Outdoors',
      date: 'February 2026'
    }
  },
  'dommerich-estates': {
    name: 'Dommerich Estates',
    area: 'north-orlando',
    areaName: 'North Orlando / Maitland',
    description: 'An upscale residential neighborhood in Maitland known for the highly rated Dommerich Elementary School and its tree-canopied streets. Dommerich Estates is one of North Orlando\'s most sought-after family neighborhoods, prized for its schools and community feel.',
    image: '/api/places?query=Dommerich+Estates+Maitland+FL&maxwidth=1600',
    vibes: ['Upscale', 'Top Schools', 'Family-Friendly', 'Tree-Canopied'],
    featuredStory: {
      title: 'Dommerich Estates: Where Families Move for the Schools',
      excerpt: 'How a top-rated elementary school anchors one of North Orlando\'s most coveted neighborhoods.',
      image: '/api/places?query=Dommerich+Elementary+School+Maitland+FL&maxwidth=800',
      category: 'Education',
      date: 'February 2026'
    }
  }
};

if (typeof window !== 'undefined') {
  window.neighborhoodsData = neighborhoodsData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = neighborhoodsData;
}
