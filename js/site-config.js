/**
 * Site Configuration — City-Agnostic Content Platform
 *
 * This single config file drives ALL city-specific content.
 * To deploy for a different city, change values here — no other files need editing.
 */

const SiteConfig = {
  // ============================================
  // SITE IDENTITY
  // ============================================
  site: {
    name: 'Orlando Vibes',
    tagline: 'Culture Blog & Vlog Magazine',
    domain: 'orlvibes.com',
    logoText: 'Orlando Vibes',
    description: 'Your guide to Orlando\'s neighborhoods, businesses, events, and culture.',
    email: 'hello@orlvibes.com'
  },

  // ============================================
  // CITY CONFIGURATION
  // ============================================
  city: {
    name: 'Orlando',
    nameShort: '407',
    state: 'Florida',
    stateCode: 'FL',
    country: 'US',
    coordinates: { lat: 28.5383, lng: -81.3792 },
    timezone: 'America/New_York',
    metroArea: 'Metro Orlando'
  },

  // ============================================
  // THEME
  // ============================================
  theme: {
    colors: {
      primaryGold: '#FF6B35',
      primaryBlue: '#1E293B',
      accentBlue: '#E8530E',
      secondaryGold: '#FFF5F0',
      textDark: '#1E293B',
      textLight: '#64748B',
      borderColor: '#E2E8F0',
      bgLight: '#FFFFFF',
      bgDark: '#1E293B',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444'
    },
    fonts: {
      heading: "'Poppins', sans-serif",
      body: "'Poppins', sans-serif",
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap'
    }
  },

  // ============================================
  // AREAS (top-level city zones)
  // ============================================
  areas: [
    {
      id: 'downtown-orlando',
      name: 'Downtown Orlando',
      slug: 'downtown-orlando',
      tagline: 'Urban Core & Lake Eola',
      description: 'Orlando\'s vibrant urban center anchored by Lake Eola, with a thriving arts scene, nightlife, and growing residential community.',
      image: '/api/places?query=Lake+Eola+Park+Orlando+FL&maxwidth=1600',
      vibes: ['Urban', 'Lakeside', 'Nightlife', 'Arts'],
      page: 'downtown-orlando.html'
    },
    {
      id: 'winter-park',
      name: 'Winter Park',
      slug: 'winter-park',
      tagline: 'Upscale Charm & Culture',
      description: 'A refined city-within-a-city known for Park Avenue boutiques, Rollins College, world-class museums, and tree-canopied streets.',
      image: '/api/places?query=Park+Avenue+Winter+Park+FL&maxwidth=1600',
      vibes: ['Upscale', 'Culture', 'Boutiques', 'Parks'],
      page: 'winter-park.html'
    },
    {
      id: 'thornton-park',
      name: 'Thornton Park / SoDo',
      slug: 'thornton-park',
      tagline: 'Historic & Emerging',
      description: 'Charming brick-street neighborhoods south and east of downtown with eclectic dining, local boutiques, and emerging development.',
      image: '/api/places?query=Thornton+Park+District+Orlando+FL&maxwidth=1600',
      vibes: ['Historic', 'Dining', 'Walkable', 'Emerging'],
      page: 'thornton-park.html'
    },
    {
      id: 'mills-50',
      name: 'Mills 50',
      slug: 'mills-50',
      tagline: 'Eclectic & Arts',
      description: 'Orlando\'s creative district blending Vietnamese culture, indie art galleries, vintage shops, and one of Florida\'s best food scenes.',
      image: '/api/places?query=Mills+50+District+Orlando+FL&maxwidth=1600',
      vibes: ['Creative', 'Diverse', 'Food', 'Arts'],
      page: 'mills-50.html'
    },
    {
      id: 'college-park',
      name: 'College Park / Edgewater',
      slug: 'college-park',
      tagline: 'Trendy & Local',
      description: 'Hip neighborhoods west of downtown with craft breweries, local eateries, and a strong sense of community identity.',
      image: '/api/places?query=College+Park+Orlando+FL&maxwidth=1600',
      vibes: ['Trendy', 'Local', 'Breweries', 'Community'],
      page: 'college-park.html'
    },
    {
      id: 'international-drive',
      name: 'International Drive',
      slug: 'international-drive',
      tagline: 'Entertainment & Tourism',
      description: 'Orlando\'s world-famous entertainment corridor with theme parks, attractions, dining, and the Orange County Convention Center.',
      image: '/api/places?query=ICON+Park+Orlando+FL&maxwidth=1600',
      vibes: ['Entertainment', 'Tourism', 'Dining', 'Attractions'],
      page: 'international-drive.html'
    },
    {
      id: 'dr-phillips',
      name: 'Dr. Phillips / Restaurant Row',
      slug: 'dr-phillips',
      tagline: 'Dining & Upscale',
      description: 'Orlando\'s premier dining destination with Restaurant Row, upscale residential communities, and proximity to theme parks.',
      image: '/api/places?query=Restaurant+Row+Dr+Phillips+Orlando+FL&maxwidth=1600',
      vibes: ['Dining', 'Upscale', 'Family', 'Suburban'],
      page: 'dr-phillips.html'
    },
    {
      id: 'east-orlando',
      name: 'East Orlando / UCF',
      slug: 'east-orlando',
      tagline: 'College & Growth',
      description: 'A rapidly growing corridor anchored by the University of Central Florida, with master-planned communities and Lake Nona\'s medical city.',
      image: '/api/places?query=University+of+Central+Florida+Orlando+FL&maxwidth=1600',
      vibes: ['College', 'Growth', 'Innovation', 'Family'],
      page: 'east-orlando.html'
    },
    {
      id: 'north-orlando',
      name: 'North Orlando / Maitland',
      slug: 'north-orlando',
      tagline: 'Suburban & Connected',
      description: 'Suburban communities north of Orlando with corporate offices, excellent schools, and diverse dining along the I-4 corridor.',
      image: '/api/places?query=Maitland+Art+Center+Florida&maxwidth=1600',
      vibes: ['Suburban', 'Schools', 'Dining', 'Parks'],
      page: 'north-orlando.html'
    }
  ],

  // ============================================
  // NAVIGATION
  // ============================================
  nav: {
    main: [
      { label: 'Home', href: 'index.html' },
      { label: 'Areas', href: '#areas', dropdown: true },
      { label: 'Events', href: 'events.html' },
      { label: 'Directory', href: 'directory.html' },
      { label: 'Properties', href: 'properties.html' },
      { label: 'Development', href: 'development.html' },
      { label: 'Submit', href: 'submit.html' }
    ],
    footer: [
      { label: 'About', href: 'about.html' },
      { label: 'Contact', href: 'contact.html' },
      { label: 'Advertise', href: 'advertise.html' },
      { label: 'Media Kit', href: 'media-kit.html' },
      { label: 'Support', href: 'support.html' },
      { label: 'Terms', href: 'terms.html' },
      { label: 'Privacy', href: 'privacy.html' },
      { label: 'Cookies', href: 'cookies.html' }
    ]
  },

  // ============================================
  // BUSINESS CATEGORIES
  // ============================================
  businessCategories: [
    'Restaurant', 'Bar & Lounge', 'Cafe & Coffee', 'Retail & Shopping',
    'Health & Wellness', 'Beauty & Salon', 'Fitness & Gym', 'Entertainment',
    'Professional Services', 'Home Services', 'Automotive', 'Education',
    'Real Estate', 'Technology', 'Arts & Culture', 'Non-Profit', 'Other'
  ],

  // ============================================
  // EVENT CATEGORIES
  // ============================================
  eventCategories: [
    'Music & Concerts', 'Food & Drink', 'Arts & Culture', 'Sports & Fitness',
    'Community', 'Business & Networking', 'Education & Workshops',
    'Family & Kids', 'Nightlife', 'Festivals', 'Markets & Fairs',
    'Tech & Innovation', 'Charity & Fundraising', 'Other'
  ],

  // ============================================
  // SPOTLIGHT PROPERTIES (admin-managed)
  // ============================================
  spotlightProperties: [],

  // ============================================
  // RSS FEED SOURCES
  // ============================================
  rssFeeds: {
    development: [
      { name: 'Orlando Business Journal', url: 'https://www.bizjournals.com/orlando/news.rss' },
      { name: 'GrowthSpotter', url: 'https://www.growthspotter.com/feed/' }
    ],
    events: [
      { name: 'Visit Orlando', url: 'https://www.visitorlando.com/events/rss/' },
      { name: 'Orlando Weekly', url: 'https://www.orlandoweekly.com/orlando/Rss.xml' }
    ],
    restaurants: [
      { name: 'Bungalower', url: 'https://bungalower.com/feed/' },
      { name: 'Orlando Weekly Food', url: 'https://www.orlandoweekly.com/orlando/Rss.xml?category=food' }
    ]
  },

  // ============================================
  // SUPABASE
  // ============================================
  supabase: {
    url: '', // Set via environment or manually
    anonKey: '' // Set via environment or manually
  },

  // ============================================
  // AI / CONTENT PIPELINE
  // ============================================
  ai: {
    ingestEndpoint: '/api/ingest',
    batchIngestEndpoint: '/api/ingest-batch',
    contentTypes: ['business', 'event', 'article', 'neighborhood_update'],
    defaultStatus: 'pending',
    scrapingSources: {
      businesses: ['yelp', 'google_places'],
      events: ['eventbrite', 'meetup'],
      articles: ['ai_generated']
    }
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.SiteConfig = SiteConfig;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SiteConfig;
}
