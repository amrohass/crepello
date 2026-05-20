-- ═══════════════════════════════════════════════════════════════
--  Crepello — Database Schema
--  Run this entire file in the Supabase SQL Editor first,
--  then run seed.sql to populate initial data.
-- ═══════════════════════════════════════════════════════════════

-- ── Tables ──────────────────────────────────────────────────────

-- Site-wide content: hero text, about section, contact info
CREATE TABLE IF NOT EXISTS site_settings (
  key   TEXT PRIMARY KEY,
  value JSONB NOT NULL
);

-- Restaurant branches / locations
CREATE TABLE IF NOT EXISTS branches (
  id         BIGSERIAL PRIMARY KEY,
  city       TEXT    NOT NULL,
  address    TEXT    NOT NULL DEFAULT '',
  hours      TEXT    NOT NULL DEFAULT '',
  status     TEXT    NOT NULL DEFAULT 'open',
  img_key    TEXT    NOT NULL DEFAULT '',
  sort_order INT     NOT NULL DEFAULT 0
);

-- Weekly opening hours
CREATE TABLE IF NOT EXISTS opening_hours (
  id         BIGSERIAL PRIMARY KEY,
  day        TEXT    NOT NULL,
  time       TEXT    NOT NULL,
  closed     BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order INT     NOT NULL DEFAULT 0
);

-- Menu items (food, sweets, drinks, hookah)
CREATE TABLE IF NOT EXISTS menu_items (
  id          BIGSERIAL PRIMARY KEY,
  cat         TEXT    NOT NULL DEFAULT 'food',
  sub         TEXT    NOT NULL DEFAULT 'Mains',
  name        TEXT    NOT NULL,
  description TEXT    NOT NULL DEFAULT '',
  price       TEXT    NOT NULL DEFAULT '0',
  img_key     TEXT    NOT NULL DEFAULT '',
  sort_order  INT     NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Customer reservations submitted via the booking form
CREATE TABLE IF NOT EXISTS bookings (
  id           BIGSERIAL PRIMARY KEY,
  name         TEXT NOT NULL,
  phone        TEXT NOT NULL,
  day          TEXT NOT NULL,
  time         TEXT NOT NULL,
  guests       TEXT NOT NULL,
  submitted_at TEXT,
  status       TEXT NOT NULL DEFAULT 'pending',
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Custom images uploaded via the CMS (key → Supabase Storage URL)
CREATE TABLE IF NOT EXISTS images (
  id         BIGSERIAL PRIMARY KEY,
  img_key    TEXT UNIQUE NOT NULL,
  url        TEXT NOT NULL,
  file_path  TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);


-- ── Row Level Security ───────────────────────────────────────────

ALTER TABLE site_settings  ENABLE ROW LEVEL SECURITY;
ALTER TABLE branches       ENABLE ROW LEVEL SECURITY;
ALTER TABLE opening_hours  ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items     ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings       ENABLE ROW LEVEL SECURITY;
ALTER TABLE images         ENABLE ROW LEVEL SECURITY;

-- Public read access (site visitors)
CREATE POLICY "public_read_settings"   ON site_settings  FOR SELECT USING (true);
CREATE POLICY "public_read_branches"   ON branches       FOR SELECT USING (true);
CREATE POLICY "public_read_hours"      ON opening_hours  FOR SELECT USING (true);
CREATE POLICY "public_read_menu"       ON menu_items     FOR SELECT USING (true);
CREATE POLICY "public_read_images"     ON images         FOR SELECT USING (true);

-- Anyone (including unauthenticated visitors) can submit a booking
CREATE POLICY "public_insert_booking"  ON bookings FOR INSERT WITH CHECK (true);

-- Authenticated admin has full access to all tables
CREATE POLICY "admin_all_settings"     ON site_settings  FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_branches"     ON branches       FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_hours"        ON opening_hours  FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_menu"         ON menu_items     FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_all_images"       ON images         FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "admin_read_bookings"    ON bookings FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "admin_update_bookings"  ON bookings FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "admin_delete_bookings"  ON bookings FOR DELETE USING (auth.role() = 'authenticated');


-- ── Storage bucket (manual step — cannot be created via SQL) ────
-- After running this file, go to: Supabase Dashboard → Storage → New Bucket
--   Name:   restaurant-images
--   Public: YES (toggle on)
-- Then add these storage policies under the bucket's "Policies" tab:
--
--   Policy 1 — Allow public downloads:
--     Name:      "Public can download images"
--     Allowed:   SELECT
--     Target:    bucket_id = 'restaurant-images'
--     Using:     true
--
--   Policy 2 — Allow authenticated uploads:
--     Name:      "Admin can upload images"
--     Allowed:   INSERT
--     Target:    bucket_id = 'restaurant-images'
--     Using:     auth.role() = 'authenticated'
--
--   Policy 3 — Allow authenticated deletes:
--     Name:      "Admin can delete images"
--     Allowed:   DELETE
--     Target:    bucket_id = 'restaurant-images'
--     Using:     auth.role() = 'authenticated'
