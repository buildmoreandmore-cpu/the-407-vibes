/**
 * Site Configuration — The 407 Vibes
 * Orlando City Media + Storytelling Platform
 */

const SiteConfig = {
  // ============================================
  // SITE IDENTITY
  // ============================================
  site: {
    name: 'The 407 Vibes',
    tagline: 'Orlando Culture, Neighborhoods & City Intelligence',
    domain: 'the-407-vibes.vercel.app',
    logoText: 'The 407 Vibes',
    description: 'Orlando\'s neighborhood guide, culture magazine, and city intelligence platform. Documenting the City Beautiful\'s growth, one story at a time.',
    email: 'hello@the407vibes.com'
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
    metroArea: 'Greater Orlando'
  },

  // ============================================
  // THEME
  // ============================================
  theme: {
    colors: {
      primaryBlue: '#1B3A5C',
      primaryOrange: '#E8713A',
      accentTeal: '#2A9D8F',
      secondaryWarm: '#FFF8F0',
      textDark: '#0F1923',
      textLight: '#6B7280',
      borderColor: '#E5E7EB',
      bgLight: '#FAFAFA',
      bgDark: '#0F1923',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444'
    },
    fonts: {
      heading: "'Source Sans 3', sans-serif",
      body: "'Source Sans 3', sans-serif",
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700;900&display=swap'
    }
  },

  // ============================================
  // AREAS (Orlando zones)
  // ============================================
  areas: [
    {
      id: 'downtown-orlando',
      name: 'Downtown Orlando',
      slug: 'downtown-orlando',
      tagline: 'The Heart of the City Beautiful',
      description: 'Orlando\'s urban core — Lake Eola, Church Street, and the growing creative district where history meets high-rises.',
      image: 'https://images.unsplash.com/photo-1575089776834-8be34c8a652f?w=1600',
      vibes: ['Urban', 'Lakefront', 'Nightlife', 'Arts'],
      page: 'downtown-orlando.html'
    },
    {
      id: 'winter-park',
      name: 'Winter Park',
      slug: 'winter-park',
      tagline: 'Old Florida Charm & Culture',
      description: 'Tree-lined Park Avenue, Rollins College, world-class museums, and some of the best dining in Central Florida.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
      vibes: ['Charming', 'Culture', 'Dining', 'Historic'],
      page: 'winter-park.html'
    },
    {
      id: 'thornton-park',
      name: 'Thornton Park',
      slug: 'thornton-park',
      tagline: 'Walkable Urban Village',
      description: 'Orlando\'s most walkable neighborhood — brick streets, local boutiques, wine bars, and Lake Eola views.',
      image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
      vibes: ['Walkable', 'Boutique', 'Dining', 'Village'],
      page: 'thornton-park.html'
    },
    {
      id: 'mills-50',
      name: 'Mills 50 / Milk District',
      slug: 'mills-50',
      tagline: 'Creative & Multicultural',
      description: 'Orlando\'s vibrant Vietnamese food corridor meets indie arts scene. Murals, pho, craft beer, and community.',
      image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1600',
      vibes: ['Multicultural', 'Food', 'Arts', 'Indie'],
      page: 'mills-50.html'
    },
    {
      id: 'college-park',
      name: 'College Park',
      slug: 'college-park',
      tagline: 'Historic Bungalows & Local Flavor',
      description: 'One of Orlando\'s oldest neighborhoods with Craftsman bungalows, Edgewater Drive\'s local shops, and serious community pride.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
      vibes: ['Historic', 'Walkable', 'Community', 'Local'],
      page: 'college-park.html'
    },
    {
      id: 'lake-nona',
      name: 'Lake Nona',
      slug: 'lake-nona',
      tagline: 'Innovation & Modern Living',
      description: 'Orlando\'s planned community of the future — Medical City, smart home tech, and the USTA National Campus.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
      vibes: ['Innovation', 'Health', 'Modern', 'Sports'],
      page: 'lake-nona.html'
    },
    {
      id: 'dr-phillips',
      name: 'Dr. Phillips',
      slug: 'dr-phillips',
      tagline: 'Restaurant Row & Family Living',
      description: 'Orlando\'s culinary epicenter on Sand Lake Road, plus top-rated schools and the Dr. Phillips Center for the Performing Arts.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600',
      vibes: ['Dining', 'Family', 'Entertainment', 'Suburban'],
      page: 'dr-phillips.html'
    },
    {
      id: 'baldwin-park',
      name: 'Baldwin Park',
      slug: 'baldwin-park',
      tagline: 'New Urbanism Done Right',
      description: 'A master-planned community built on the former Naval Training Center — walkable streets, village center, and lakefront living.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600',
      vibes: ['New Urbanism', 'Walkable', 'Lakefront', 'Family'],
      page: 'baldwin-park.html'
    },
    {
      id: 'ivanhoe-village',
      name: 'Ivanhoe Village',
      slug: 'ivanhoe-village',
      tagline: 'Antiques, Art & Lakeside Living',
      description: 'Orlando\'s antique row meets emerging arts district along the shores of Lake Ivanhoe. Eclectic, creative, and growing.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600',
      vibes: ['Eclectic', 'Arts', 'Antiques', 'Lakefront'],
      page: 'ivanhoe-village.html'
    },
    {
      id: 'audubon-park',
      name: 'Audubon Park',
      slug: 'audubon-park',
      tagline: 'Garden District Vibes',
      description: 'Orlando\'s garden district — community market, local coffee, East End Market, and tree-canopied streets full of character.',
      image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
      vibes: ['Garden', 'Market', 'Community', 'Walkable'],
      page: 'audubon-park.html'
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
  // SUPABASE
  // ============================================
  supabase: {
    url: 'https://ottaaklorclfbzztpsrm.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90dGFha2xvcmNsZmJ6enRwc3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NjQyMzIsImV4cCI6MjA4NzA0MDIzMn0.qLff-CNx8KDjhvPzhS_m-KkGAfF0qQCFd768Co83AG4'
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
