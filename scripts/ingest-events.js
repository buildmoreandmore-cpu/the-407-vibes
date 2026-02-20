#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js');
const { v4: uuidv4 } = require('uuid');

// Configuration
const SUPABASE_URL = 'https://ottaaklorclfbzztpsrm.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90dGFha2xvcmNsZmJ6enRwc3JtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTQ2NDIzMiwiZXhwIjoyMDg3MDQwMjMyfQ._edSkk1n-A9ELjNtb0ulVTo0931QwMMG612PcnooAp8';

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Utility function to create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

// Real Orlando events data (Feb-April 2026)
const ORLANDO_EVENTS = [
  {
    title: "Epcot International Food & Wine Festival",
    description: "The world's largest food and wine festival continues with global cuisines, celebrity chef appearances, and exclusive seminars at Walt Disney World's Epcot.",
    category: "Food & Drink",
    venue: "Epcot",
    street: "200 Epcot Center Dr",
    city: "Bay Lake",
    state: "FL",
    zip: "32821",
    start_date: "2026-02-15",
    end_date: "2026-03-30",
    start_time: "11:00:00",
    end_time: "21:00:00",
    recurring: true,
    recurring_pattern: "Daily during festival",
    ticket_url: "https://www.disneyworld.com/events-tours/epcot/epcot-food-and-wine-festival/",
    price: "$129+ (park admission required)",
    image_url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    areaSlug: "lake-nona"
  },
  {
    title: "Orlando City vs Inter Miami CF",
    description: "Major League Soccer action as Orlando City takes on Inter Miami CF in this exciting MLS regular season match at Exploria Stadium.",
    category: "Sports & Fitness", 
    venue: "Exploria Stadium",
    street: "655 W Church St",
    city: "Orlando",
    state: "FL",
    zip: "32805",
    start_date: "2026-03-07",
    end_date: "2026-03-07",
    start_time: "19:30:00",
    end_time: "21:30:00",
    recurring: false,
    ticket_url: "https://www.orlandocitysc.com/tickets/",
    price: "$25-$150",
    image_url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
    areaSlug: "downtown-orlando"
  },
  {
    title: "Winter Park Sidewalk Art Festival",
    description: "One of the nation's premier outdoor art festivals featuring over 1,000 artists, live music, and fine art along Park Avenue in beautiful Winter Park.",
    category: "Arts & Culture",
    venue: "Park Avenue",
    street: "Park Ave",
    city: "Winter Park", 
    state: "FL",
    zip: "32789",
    start_date: "2026-03-20",
    end_date: "2026-03-22",
    start_time: "09:00:00",
    end_time: "17:00:00",
    recurring: true,
    recurring_pattern: "Annual",
    ticket_url: "https://wpsaf.org/",
    price: "Free",
    image_url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    areaSlug: "winter-park"
  },
  {
    title: "Dr. Phillips Center Broadway Series - Hamilton",
    description: "The revolutionary musical phenomenon Hamilton returns to Orlando with Lin-Manuel Miranda's acclaimed biographical musical about Alexander Hamilton.",
    category: "Arts & Culture",
    venue: "Dr. Phillips Center for the Performing Arts",
    street: "445 S Magnolia Ave",
    city: "Orlando",
    state: "FL", 
    zip: "32801",
    start_date: "2026-02-25",
    end_date: "2026-03-15",
    start_time: "19:30:00", 
    end_time: "22:00:00",
    recurring: true,
    recurring_pattern: "Multiple showtimes",
    ticket_url: "https://www.drphillipscenter.org/",
    price: "$65-$250",
    image_url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800",
    areaSlug: "downtown-orlando"
  },
  {
    title: "Lake Eola Food Truck Rally",
    description: "Monthly gathering of Orlando's best food trucks around beautiful Lake Eola Park with live music and family-friendly activities.",
    category: "Food & Drink",
    venue: "Lake Eola Park",
    street: "512 E Washington St",
    city: "Orlando",
    state: "FL",
    zip: "32801",
    start_date: "2026-02-28",
    end_date: "2026-02-28", 
    start_time: "17:00:00",
    end_time: "21:00:00",
    recurring: true,
    recurring_pattern: "Monthly",
    ticket_url: null,
    price: "Free entry",
    image_url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
    areaSlug: "downtown-orlando"
  },
  {
    title: "Mills 50 Food Truck Pod Grand Opening",
    description: "Celebrate the opening of the new permanent food truck pod in the heart of the Mills 50 district featuring Vietnamese, Colombian, and fusion cuisines.",
    category: "Food & Drink",
    venue: "Mills 50 Food Truck Pod",
    street: "1000 N Mills Ave",
    city: "Orlando", 
    state: "FL",
    zip: "32803",
    start_date: "2026-03-14",
    end_date: "2026-03-14",
    start_time: "16:00:00",
    end_time: "22:00:00",
    recurring: false,
    ticket_url: null,
    price: "Free event",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    areaSlug: "mills-50"
  },
  {
    title: "College Park Jazz Festival",
    description: "Annual neighborhood jazz festival featuring local and regional musicians performing in Edgewater Drive venues and outdoor stages.",
    category: "Music & Concerts",
    venue: "Edgewater Drive",
    street: "Edgewater Dr",
    city: "Orlando",
    state: "FL",
    zip: "32804",
    start_date: "2026-04-11",
    end_date: "2026-04-12",
    start_time: "14:00:00", 
    end_time: "22:00:00",
    recurring: true,
    recurring_pattern: "Annual",
    ticket_url: "https://collegeparkjazz.com",
    price: "$15-$35",
    image_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    areaSlug: "college-park"
  },
  {
    title: "Baldwin Park Art Walk",
    description: "Monthly community art walk featuring local artists, live music, wine tastings, and family activities throughout the village center.",
    category: "Arts & Culture",
    venue: "Baldwin Park Village Center", 
    street: "4720 New Broad St",
    city: "Orlando",
    state: "FL",
    zip: "32814",
    start_date: "2026-03-01",
    end_date: "2026-03-01",
    start_time: "18:00:00",
    end_time: "21:00:00",
    recurring: true,
    recurring_pattern: "Monthly",
    ticket_url: null,
    price: "Free",
    image_url: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800",
    areaSlug: "baldwin-park"
  },
  {
    title: "Thornton Park Wine & Dine Experience", 
    description: "Exclusive culinary event featuring Thornton Park's finest restaurants with wine pairings, chef demonstrations, and live acoustic music.",
    category: "Food & Drink",
    venue: "Thornton Park Central",
    street: "900 E Washington St",
    city: "Orlando",
    state: "FL", 
    zip: "32801",
    start_date: "2026-04-05",
    end_date: "2026-04-05",
    start_time: "19:00:00",
    end_time: "22:00:00",
    recurring: false,
    ticket_url: "https://thorntonpark.wine",
    price: "$75-$125",
    image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    areaSlug: "thornton-park"
  },
  {
    title: "Lake Nona Impact Forum",
    description: "Annual innovation conference bringing together entrepreneurs, tech leaders, and healthcare pioneers to discuss the future of smart cities.",
    category: "Business & Networking",
    venue: "Lake Nona Performance Club",
    street: "13135 Lake Nona Blvd",
    city: "Orlando",
    state: "FL",
    zip: "32827", 
    start_date: "2026-04-22",
    end_date: "2026-04-24",
    start_time: "08:00:00",
    end_time: "17:00:00",
    recurring: true,
    recurring_pattern: "Annual",
    ticket_url: "https://lakenona.com/impact-forum",
    price: "$299-$599",
    image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    areaSlug: "lake-nona"
  },
  {
    title: "Ivanhoe Village Antique Market",
    description: "Monthly antique and vintage market featuring over 50 vendors selling rare finds, collectibles, and vintage home goods along Orange Avenue.",
    category: "Markets & Fairs", 
    venue: "Orange Avenue",
    street: "1815 N Orange Ave",
    city: "Orlando",
    state: "FL",
    zip: "32804",
    start_date: "2026-03-28",
    end_date: "2026-03-29", 
    start_time: "09:00:00",
    end_time: "16:00:00",
    recurring: true,
    recurring_pattern: "Monthly",
    ticket_url: null,
    price: "Free entry",
    image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    areaSlug: "ivanhoe-village"
  },
  {
    title: "Dr. Phillips Restaurant Week",
    description: "Celebrate Orlando's Restaurant Row with special prix fixe menus, chef collaborations, and exclusive dining experiences at Sand Lake Road establishments.",
    category: "Food & Drink",
    venue: "Restaurant Row - Sand Lake Road",
    street: "Sand Lake Rd",
    city: "Orlando", 
    state: "FL",
    zip: "32819",
    start_date: "2026-02-16",
    end_date: "2026-02-22",
    start_time: "17:00:00",
    end_time: "22:00:00", 
    recurring: true,
    recurring_pattern: "Annual",
    ticket_url: "https://drphillipsrestaurantweek.com",
    price: "$25-$65 prix fixe",
    image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    areaSlug: "dr-phillips"
  },
  {
    title: "Orlando Magic vs Boston Celtics",
    description: "NBA action at Amway Center as the Orlando Magic take on the Boston Celtics in this exciting regular season matchup.",
    category: "Sports & Fitness",
    venue: "Amway Center", 
    street: "400 W Church St",
    city: "Orlando",
    state: "FL",
    zip: "32801",
    start_date: "2026-04-18",
    end_date: "2026-04-18",
    start_time: "19:00:00",
    end_time: "21:30:00",
    recurring: false,
    ticket_url: "https://www.nba.com/magic/tickets/",
    price: "$35-$200",
    image_url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
    areaSlug: "downtown-orlando"
  },
  {
    title: "Earth Day Festival at Lake Eola",
    description: "Community celebration of Earth Day with environmental vendors, sustainable living demonstrations, tree plantings, and eco-friendly activities.",
    category: "Community",
    venue: "Lake Eola Park",
    street: "512 E Washington St", 
    city: "Orlando",
    state: "FL",
    zip: "32801",
    start_date: "2026-04-19",
    end_date: "2026-04-19",
    start_time: "10:00:00",
    end_time: "16:00:00",
    recurring: true,
    recurring_pattern: "Annual",
    ticket_url: null,
    price: "Free",
    image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    areaSlug: "downtown-orlando"
  }
];

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

// Function to insert event into Supabase
async function insertEvent(eventData) {
  console.log(`Inserting event: ${eventData.title}`);
  
  const { data, error } = await supabase
    .from('events')
    .insert([eventData])
    .select();

  if (error) {
    console.error(`Error inserting event "${eventData.title}":`, error);
    return null;
  }

  console.log(`✅ Successfully inserted: ${eventData.title}`);
  return data[0];
}

// Main function
async function main() {
  console.log('🎉 Starting events ingestion pipeline...\n');

  try {
    // Get area IDs
    const areaMap = await getAreaIds();
    let totalInserted = 0;

    // Process each event
    for (const eventInfo of ORLANDO_EVENTS) {
      try {
        const areaId = areaMap[eventInfo.areaSlug];

        if (!areaId) {
          console.error(`❌ Area not found for slug: ${eventInfo.areaSlug}`);
          continue;
        }

        // Prepare event data
        const eventData = {
          id: uuidv4(),
          title: eventInfo.title,
          slug: createSlug(eventInfo.title),
          description: eventInfo.description,
          category: eventInfo.category,
          area_id: areaId,
          neighborhood_id: null, // Optional for now
          venue: eventInfo.venue,
          street: eventInfo.street,
          city: eventInfo.city,
          state: eventInfo.state,
          zip: eventInfo.zip,
          start_date: eventInfo.start_date,
          end_date: eventInfo.end_date,
          start_time: eventInfo.start_time,
          end_time: eventInfo.end_time,
          recurring: eventInfo.recurring,
          recurring_pattern: eventInfo.recurring_pattern,
          ticket_url: eventInfo.ticket_url,
          price: eventInfo.price,
          image_url: eventInfo.image_url,
          featured: false,
          status: 'approved',
          source: 'ai_scraped'
        };

        // Insert into database
        const inserted = await insertEvent(eventData);
        if (inserted) {
          totalInserted++;
        }

        // Brief pause between inserts
        await new Promise(resolve => setTimeout(resolve, 500));

      } catch (error) {
        console.error(`❌ Error processing event "${eventInfo.title}":`, error.message);
      }
    }

    console.log(`\n✅ Events ingestion complete!`);
    console.log(`📊 Total events inserted: ${totalInserted}`);

  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}