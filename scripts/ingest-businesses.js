#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

// Configuration
const SUPABASE_URL = 'https://ottaaklorclfbzztpsrm.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90dGFha2xvcmNsZmJ6enRwc3JtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTQ2NDIzMiwiZXhwIjoyMDg3MDQwMjMyfQ._edSkk1n-A9ELjNtb0ulVTo0931QwMMG612PcnooAp8';
const GOOGLE_MAPS_API_KEY = 'AIzaSyB1Et0TpTJaGLD8I6_XB7T4zs0o0y6H5cA';

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Search queries mapped to area slugs
const SEARCH_QUERIES = [
  { query: 'restaurants Thornton Park Orlando FL', areaSlug: 'thornton-park' },
  { query: 'restaurants Winter Park FL', areaSlug: 'winter-park' },
  { query: 'restaurants Mills 50 Orlando FL', areaSlug: 'mills-50' },
  { query: 'restaurants College Park Orlando FL', areaSlug: 'college-park' },
  { query: 'restaurants Ivanhoe Village Orlando FL', areaSlug: 'ivanhoe-village' },
  { query: 'restaurants Lake Nona Orlando FL', areaSlug: 'lake-nona' },
  { query: 'restaurants Restaurant Row Dr Phillips Orlando FL', areaSlug: 'dr-phillips' },
  { query: 'restaurants Baldwin Park Orlando FL', areaSlug: 'baldwin-park' },
  { query: 'cafes Orlando downtown FL', areaSlug: 'downtown-orlando' },
  { query: 'bars Orlando FL', areaSlug: 'downtown-orlando' }
];

// Utility function to create slug from name
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

// Utility function to delay execution
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to get area IDs from Supabase
async function getAreaIds() {
  console.log('Fetching area IDs from Supabase...');
  const { data, error } = await supabase
    .from('areas')
    .select('id, slug');

  if (error) {
    console.error('Error fetching areas:', error);
    throw error;
  }

  const areaMap = {};
  data.forEach(area => {
    areaMap[area.slug] = area.id;
  });

  console.log('Area mapping:', areaMap);
  return areaMap;
}

// Function to search places using Google Places API Text Search
async function searchPlaces(query) {
  console.log(`Searching for: "${query}"`);
  
  const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
  const params = {
    query: query,
    key: GOOGLE_MAPS_API_KEY,
    type: 'restaurant|food|establishment',
    region: 'us'
  };

  try {
    const response = await axios.get(url, { params });
    
    if (response.data.status !== 'OK') {
      console.error(`Places API error for "${query}":`, response.data.status);
      return [];
    }

    console.log(`Found ${response.data.results.length} places for "${query}"`);
    return response.data.results.slice(0, 5); // Top 5 results
  } catch (error) {
    console.error(`Error searching places for "${query}":`, error.message);
    return [];
  }
}

// Function to get place details
async function getPlaceDetails(placeId) {
  console.log(`Getting details for place ID: ${placeId}`);
  
  const url = 'https://maps.googleapis.com/maps/api/place/details/json';
  const params = {
    place_id: placeId,
    key: GOOGLE_MAPS_API_KEY,
    fields: 'name,formatted_address,formatted_phone_number,website,rating,user_ratings_total,opening_hours,photos,reviews,geometry,address_components'
  };

  try {
    const response = await axios.get(url, { params });
    
    if (response.data.status !== 'OK') {
      console.error(`Place Details API error for ${placeId}:`, response.data.status);
      return null;
    }

    return response.data.result;
  } catch (error) {
    console.error(`Error getting place details for ${placeId}:`, error.message);
    return null;
  }
}

// Function to get photo URL
function getPhotoUrl(photoReference, maxWidth = 800) {
  if (!photoReference) return null;
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&photo_reference=${photoReference}&key=${GOOGLE_MAPS_API_KEY}`;
}

// Function to parse address components
function parseAddress(addressComponents) {
  const address = {
    street: '',
    city: 'Orlando',
    state: 'FL',
    zip: ''
  };

  addressComponents.forEach(component => {
    const types = component.types;
    
    if (types.includes('street_number') || types.includes('route')) {
      address.street += component.long_name + ' ';
    }
    if (types.includes('locality')) {
      address.city = component.long_name;
    }
    if (types.includes('administrative_area_level_1')) {
      address.state = component.short_name;
    }
    if (types.includes('postal_code')) {
      address.zip = component.long_name;
    }
  });

  address.street = address.street.trim();
  return address;
}

// Function to determine business category
function determineCategory(name, types) {
  const lowerName = name.toLowerCase();
  
  if (types.includes('bar') || lowerName.includes('bar') || lowerName.includes('brewery') || lowerName.includes('pub')) {
    return 'Bar & Lounge';
  }
  if (types.includes('cafe') || lowerName.includes('coffee') || lowerName.includes('cafe')) {
    return 'Cafe & Coffee';
  }
  if (types.includes('restaurant') || types.includes('food') || types.includes('meal_takeaway')) {
    return 'Restaurant';
  }
  
  return 'Restaurant'; // Default fallback
}

// Function to format opening hours
function formatOpeningHours(openingHours) {
  if (!openingHours || !openingHours.weekday_text) {
    return null;
  }

  const hours = {};
  openingHours.weekday_text.forEach(dayText => {
    const parts = dayText.split(': ');
    if (parts.length === 2) {
      const day = parts[0].toLowerCase();
      const timeText = parts[1];
      hours[day] = timeText === 'Closed' ? null : timeText;
    }
  });

  return hours;
}

// Function to insert business into Supabase
async function insertBusiness(businessData) {
  console.log(`Inserting business: ${businessData.name}`);
  
  const { data, error } = await supabase
    .from('businesses')
    .insert([businessData])
    .select();

  if (error) {
    console.error(`Error inserting business "${businessData.name}":`, error);
    return null;
  }

  console.log(`✅ Successfully inserted: ${businessData.name}`);
  return data[0];
}

// Main function
async function main() {
  console.log('🚀 Starting business ingestion pipeline...\n');

  try {
    // Get area IDs
    const areaMap = await getAreaIds();
    let totalInserted = 0;

    // Process each search query
    for (const searchItem of SEARCH_QUERIES) {
      const { query, areaSlug } = searchItem;
      const areaId = areaMap[areaSlug];

      if (!areaId) {
        console.error(`❌ Area not found for slug: ${areaSlug}`);
        continue;
      }

      console.log(`\n📍 Processing area: ${areaSlug} (ID: ${areaId})`);

      // Search for places
      const places = await searchPlaces(query);
      await delay(1000); // Rate limiting

      // Process each place
      for (const place of places) {
        try {
          // Get detailed information
          const details = await getPlaceDetails(place.place_id);
          await delay(1000); // Rate limiting

          if (!details) continue;

          // Parse address
          const address = details.address_components 
            ? parseAddress(details.address_components)
            : { street: details.formatted_address || '', city: 'Orlando', state: 'FL', zip: '' };

          // Get photo URL
          let imageUrl = null;
          if (details.photos && details.photos.length > 0) {
            imageUrl = getPhotoUrl(details.photos[0].photo_reference);
          }

          // Prepare business data
          const businessData = {
            id: uuidv4(),
            name: details.name,
            slug: createSlug(details.name),
            description: null, // Will be AI-generated later
            category: determineCategory(details.name, place.types || []),
            area_id: areaId,
            neighborhood_id: null, // Optional for now
            street: address.street,
            city: address.city,
            state: address.state,
            zip: address.zip,
            latitude: details.geometry?.location?.lat || null,
            longitude: details.geometry?.location?.lng || null,
            phone: details.formatted_phone_number || null,
            email: null,
            website: details.website || null,
            image_url: imageUrl,
            images: details.photos ? details.photos.slice(0, 5).map(photo => getPhotoUrl(photo.photo_reference)) : [],
            hours: formatOpeningHours(details.opening_hours),
            social: {},
            rating_avg: details.rating || null,
            rating_count: details.user_ratings_total || null,
            featured: false,
            status: 'approved',
            source: 'ai_scraped'
          };

          // Insert into database
          const inserted = await insertBusiness(businessData);
          if (inserted) {
            totalInserted++;
          }

          await delay(500); // Brief pause between inserts

        } catch (error) {
          console.error(`❌ Error processing place "${place.name}":`, error.message);
        }
      }

      // Pause between areas
      await delay(2000);
    }

    console.log(`\n✅ Business ingestion complete!`);
    console.log(`📊 Total businesses inserted: ${totalInserted}`);

  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}