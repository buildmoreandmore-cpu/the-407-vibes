-- ============================================================
-- Orlando Vibes - Complete Supabase Schema Migration
-- ============================================================
-- 9 tables, indexes, RLS policies, triggers, and auto-newsletter
-- ============================================================

-- ============================================================
-- 1. AREAS - Top-level city zones
-- ============================================================
CREATE TABLE areas (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT,
  description TEXT,
  image_url TEXT,
  vibes TEXT[],
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- 2. NEIGHBORHOODS - Sub-areas within zones
-- ============================================================
CREATE TABLE neighborhoods (
  id SERIAL PRIMARY KEY,
  area_id INT REFERENCES areas(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  vibes TEXT[],
  featured_story JSONB,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- 3. BUSINESSES - Business listings
-- ============================================================
CREATE TABLE businesses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT,
  description TEXT,
  category TEXT,
  area_id INT REFERENCES areas(id) ON DELETE SET NULL,
  neighborhood_id INT REFERENCES neighborhoods(id) ON DELETE SET NULL,
  street TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  latitude DECIMAL(10,7),
  longitude DECIMAL(10,7),
  phone TEXT,
  email TEXT,
  website TEXT,
  image_url TEXT,
  images JSONB,
  hours JSONB,
  social JSONB,
  rating_avg DECIMAL(3,2) DEFAULT 0,
  rating_count INT DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  source TEXT DEFAULT 'manual' CHECK (source IN ('manual','user_submitted','ai_scraped','import')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- 4. EVENTS - Event listings
-- ============================================================
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT,
  description TEXT,
  category TEXT,
  area_id INT REFERENCES areas(id) ON DELETE SET NULL,
  neighborhood_id INT REFERENCES neighborhoods(id) ON DELETE SET NULL,
  venue TEXT,
  street TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  start_date DATE,
  end_date DATE,
  start_time TIME,
  end_time TIME,
  recurring BOOLEAN DEFAULT false,
  recurring_pattern TEXT,
  ticket_url TEXT,
  price TEXT DEFAULT 'Free',
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  source TEXT DEFAULT 'manual' CHECK (source IN ('manual','user_submitted','ai_scraped','import')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- 5. ARTICLES - Content / blog posts
-- ============================================================
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  content TEXT,
  excerpt TEXT,
  category TEXT,
  area_id INT REFERENCES areas(id) ON DELETE SET NULL,
  neighborhood_id INT REFERENCES neighborhoods(id) ON DELETE SET NULL,
  image_url TEXT,
  author TEXT,
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft','published','archived')),
  source TEXT DEFAULT 'manual' CHECK (source IN ('manual','ai_generated','import')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- 6. FORM_SUBMISSIONS - All form data (replaces HubSpot)
-- ============================================================
CREATE TABLE form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  form_type TEXT NOT NULL CHECK (form_type IN ('contact','newsletter','business','event','support')),
  data JSONB NOT NULL,
  email TEXT,
  ip_address TEXT,
  page_uri TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new','read','replied','archived')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- 7. NEWSLETTER_SUBSCRIBERS - Extracted from form submissions
-- ============================================================
CREATE TABLE newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMPTZ DEFAULT now(),
  unsubscribed_at TIMESTAMPTZ
);

-- ============================================================
-- 8. AI_INGEST_LOG - Audit trail for AI-generated content
-- ============================================================
CREATE TABLE ai_ingest_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content_type TEXT NOT NULL,
  source TEXT,
  payload JSONB NOT NULL,
  target_table TEXT,
  target_id UUID,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','processed','failed','rejected')),
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  processed_at TIMESTAMPTZ
);


-- ============================================================
-- 9. SPOTLIGHT_PROPERTIES - Featured real estate listings
-- ============================================================
CREATE TABLE spotlight_properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  address TEXT,
  neighborhood TEXT,
  price TEXT,
  bedrooms INT,
  bathrooms INT,
  sqft INT,
  image_url TEXT,
  description TEXT,
  zillow_url TEXT,
  featured BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);


-- ============================================================
-- INDEXES
-- ============================================================

-- areas
CREATE INDEX idx_areas_slug ON areas(slug);

-- neighborhoods
CREATE INDEX idx_neighborhoods_area_id ON neighborhoods(area_id);
CREATE INDEX idx_neighborhoods_slug ON neighborhoods(slug);

-- businesses
CREATE INDEX idx_businesses_area_id ON businesses(area_id);
CREATE INDEX idx_businesses_neighborhood_id ON businesses(neighborhood_id);
CREATE INDEX idx_businesses_status ON businesses(status);
CREATE INDEX idx_businesses_slug ON businesses(slug);
CREATE INDEX idx_businesses_category ON businesses(category);
CREATE INDEX idx_businesses_featured ON businesses(featured) WHERE featured = true;

-- events
CREATE INDEX idx_events_area_id ON events(area_id);
CREATE INDEX idx_events_neighborhood_id ON events(neighborhood_id);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_slug ON events(slug);
CREATE INDEX idx_events_category ON events(category);
CREATE INDEX idx_events_start_date ON events(start_date);
CREATE INDEX idx_events_featured ON events(featured) WHERE featured = true;

-- articles
CREATE INDEX idx_articles_area_id ON articles(area_id);
CREATE INDEX idx_articles_neighborhood_id ON articles(neighborhood_id);
CREATE INDEX idx_articles_status ON articles(status);
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_category ON articles(category);
CREATE INDEX idx_articles_featured ON articles(featured) WHERE featured = true;

-- form_submissions
CREATE INDEX idx_form_submissions_form_type ON form_submissions(form_type);
CREATE INDEX idx_form_submissions_email ON form_submissions(email);
CREATE INDEX idx_form_submissions_status ON form_submissions(status);
CREATE INDEX idx_form_submissions_created_at ON form_submissions(created_at DESC);

-- newsletter_subscribers
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_subscribers_is_active ON newsletter_subscribers(is_active) WHERE is_active = true;

-- ai_ingest_log
CREATE INDEX idx_ai_ingest_log_status ON ai_ingest_log(status);
CREATE INDEX idx_ai_ingest_log_content_type ON ai_ingest_log(content_type);
CREATE INDEX idx_ai_ingest_log_target ON ai_ingest_log(target_table, target_id);

-- spotlight_properties
CREATE INDEX idx_spotlight_properties_featured ON spotlight_properties(featured) WHERE featured = true;
CREATE INDEX idx_spotlight_properties_neighborhood ON spotlight_properties(neighborhood);
CREATE INDEX idx_spotlight_properties_created_at ON spotlight_properties(created_at DESC);


-- ============================================================
-- UPDATED_AT TRIGGER FUNCTION
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger to all tables that have the column
CREATE TRIGGER trigger_areas_updated_at
  BEFORE UPDATE ON areas
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_neighborhoods_updated_at
  BEFORE UPDATE ON neighborhoods
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_businesses_updated_at
  BEFORE UPDATE ON businesses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trigger_spotlight_properties_updated_at
  BEFORE UPDATE ON spotlight_properties
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ============================================================
-- AUTO-INSERT NEWSLETTER SUBSCRIBER ON FORM SUBMISSION
-- ============================================================
-- When a form_submission with form_type = 'newsletter' is inserted
-- and it contains an email, upsert into newsletter_subscribers.
-- ============================================================
CREATE OR REPLACE FUNCTION handle_newsletter_submission()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.form_type = 'newsletter' AND NEW.email IS NOT NULL AND NEW.email <> '' THEN
    INSERT INTO newsletter_subscribers (email, source)
    VALUES (NEW.email, 'newsletter_form')
    ON CONFLICT (email) DO UPDATE
      SET is_active = true,
          unsubscribed_at = NULL,
          subscribed_at = CASE
            WHEN newsletter_subscribers.is_active = false THEN now()
            ELSE newsletter_subscribers.subscribed_at
          END;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trigger_newsletter_auto_subscribe
  AFTER INSERT ON form_submissions
  FOR EACH ROW EXECUTE FUNCTION handle_newsletter_submission();


-- ============================================================
-- ENABLE ROW LEVEL SECURITY ON ALL TABLES
-- ============================================================
ALTER TABLE areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE neighborhoods ENABLE ROW LEVEL SECURITY;
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_ingest_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE spotlight_properties ENABLE ROW LEVEL SECURITY;


-- ============================================================
-- RLS POLICIES
-- ============================================================

-- ----------------------------------------------------------
-- AREAS: public read access (all rows are public content)
-- ----------------------------------------------------------
CREATE POLICY "areas_public_select"
  ON areas FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "areas_service_all"
  ON areas FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ----------------------------------------------------------
-- NEIGHBORHOODS: public read access
-- ----------------------------------------------------------
CREATE POLICY "neighborhoods_public_select"
  ON neighborhoods FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "neighborhoods_service_all"
  ON neighborhoods FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ----------------------------------------------------------
-- BUSINESSES: public can read approved only
-- ----------------------------------------------------------
CREATE POLICY "businesses_public_select"
  ON businesses FOR SELECT
  TO anon, authenticated
  USING (status = 'approved');

CREATE POLICY "businesses_service_all"
  ON businesses FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ----------------------------------------------------------
-- EVENTS: public can read approved only
-- ----------------------------------------------------------
CREATE POLICY "events_public_select"
  ON events FOR SELECT
  TO anon, authenticated
  USING (status = 'approved');

CREATE POLICY "events_service_all"
  ON events FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ----------------------------------------------------------
-- ARTICLES: public can read published only
-- ----------------------------------------------------------
CREATE POLICY "articles_public_select"
  ON articles FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

CREATE POLICY "articles_service_all"
  ON articles FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ----------------------------------------------------------
-- FORM_SUBMISSIONS: public can insert, service role full access
-- ----------------------------------------------------------
CREATE POLICY "form_submissions_public_insert"
  ON form_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "form_submissions_service_all"
  ON form_submissions FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ----------------------------------------------------------
-- NEWSLETTER_SUBSCRIBERS: public can insert, service role full access
-- ----------------------------------------------------------
CREATE POLICY "newsletter_subscribers_public_insert"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "newsletter_subscribers_service_all"
  ON newsletter_subscribers FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ----------------------------------------------------------
-- AI_INGEST_LOG: service role only (no public access)
-- ----------------------------------------------------------
CREATE POLICY "ai_ingest_log_service_all"
  ON ai_ingest_log FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ----------------------------------------------------------
-- SPOTLIGHT_PROPERTIES: public read featured, service role full access
-- ----------------------------------------------------------
CREATE POLICY "spotlight_properties_public_select"
  ON spotlight_properties FOR SELECT
  TO anon, authenticated
  USING (featured = true);

CREATE POLICY "spotlight_properties_service_all"
  ON spotlight_properties FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
