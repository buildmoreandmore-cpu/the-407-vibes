/**
 * Orlando Neighborhoods Data
 * Used for client-side rendering when Supabase is unavailable
 */
const NeighborhoodsData = {
  'downtown-orlando': [
    { name: 'Lake Eola Heights', slug: 'lake-eola-heights', vibes: ['Lakefront', 'Urban', 'Iconic'] },
    { name: 'Church Street District', slug: 'church-street', vibes: ['Entertainment', 'Historic', 'Nightlife'] },
    { name: 'Parramore', slug: 'parramore', vibes: ['Historic', 'Creative', 'Renaissance'] },
    { name: 'North Quarter', slug: 'north-quarter', vibes: ['Creative', 'Emerging', 'Galleries'] }
  ],
  'winter-park': [
    { name: 'Park Avenue', slug: 'park-avenue', vibes: ['Shopping', 'Dining', 'Charming'] },
    { name: 'Hannibal Square', slug: 'hannibal-square', vibes: ['Historic', 'Dining', 'Heritage'] },
    { name: 'Via Tuscany / Ravaudage', slug: 'via-tuscany', vibes: ['Development', 'Upscale', 'Modern'] }
  ],
  'thornton-park': [
    { name: 'Thornton Park District', slug: 'thornton-park-district', vibes: ['Wine Bars', 'Galleries', 'Village'] }
  ],
  'mills-50': [
    { name: 'Mills 50 Main District', slug: 'mills-50-main', vibes: ['Vietnamese', 'Indie', 'Food'] },
    { name: 'Milk District', slug: 'milk-district', vibes: ['Craft Beer', 'Arts', 'Market'] }
  ],
  'college-park': [
    { name: 'Edgewater Drive', slug: 'edgewater-drive', vibes: ['Walkable', 'Local', 'Dining'] },
    { name: 'SODO', slug: 'sodo', vibes: ['Emerging', 'Commercial', 'Urban'] }
  ],
  'lake-nona': [
    { name: 'Medical City', slug: 'medical-city', vibes: ['Medical', 'Innovation', 'Research'] },
    { name: 'Lake Nona Town Center', slug: 'lake-nona-town-center', vibes: ['Walkable', 'Dining', 'Modern'] }
  ],
  'dr-phillips': [
    { name: 'Restaurant Row', slug: 'restaurant-row', vibes: ['Dining', 'International', 'Culinary'] }
  ],
  'baldwin-park': [
    { name: 'Baldwin Park Village Center', slug: 'baldwin-village', vibes: ['Village', 'Dining', 'New Urbanism'] }
  ],
  'ivanhoe-village': [
    { name: 'Ivanhoe Row', slug: 'ivanhoe-row', vibes: ['Antiques', 'Vintage', 'Breweries'] }
  ],
  'audubon-park': [
    { name: 'Audubon Park Garden District', slug: 'audubon-garden', vibes: ['Market', 'Coffee', 'Community'] }
  ]
};

if (typeof window !== 'undefined') window.NeighborhoodsData = NeighborhoodsData;
if (typeof module !== 'undefined' && module.exports) module.exports = NeighborhoodsData;
