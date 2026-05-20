# Crepello — Backend Setup Guide

Follow these steps once to connect the site to a real database.
Everything after this is managed through the CMS panel (Ctrl + Shift + A).

---

## Step 1 — Create a Supabase Project

1. Go to **https://supabase.com** and sign up (free).
2. Click **New Project**.
3. Choose a name (e.g. `crepello`), set a strong database password, pick the closest region, then click **Create Project**.
4. Wait ~2 minutes for the project to finish provisioning.

---

## Step 2 — Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor** (left sidebar).
2. Click **New query**.
3. Open the file `schema.sql` from this project folder, copy all its contents, and paste them into the editor.
4. Click **Run**.

You should see "Success. No rows returned."

---

## Step 3 — Seed Initial Data

1. In the SQL Editor, click **New query** again.
2. Open `seed.sql`, copy all its contents, paste and click **Run**.

This populates all 35 menu items, 4 branches, opening hours, and site settings.

---

## Step 4 — Create the Storage Bucket

1. Go to **Storage** in the left sidebar.
2. Click **New bucket**.
3. Name it exactly: `restaurant-images`
4. Toggle **Public bucket** ON.
5. Click **Save**.

Now add the storage policies using SQL (much easier than the UI):

1. Go to **SQL Editor** → **New query**.
2. Paste the following and click **Run**:

```sql
CREATE POLICY "Public can download images"
ON storage.objects FOR SELECT
USING (bucket_id = 'restaurant-images');

CREATE POLICY "Admin can upload images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'restaurant-images' AND auth.role() = 'authenticated');

CREATE POLICY "Admin can delete images"
ON storage.objects FOR DELETE
USING (bucket_id = 'restaurant-images' AND auth.role() = 'authenticated');
```

That's it — all three policies are created in one step.

---

## Step 5 — Create the Admin User

1. Go to **Authentication** → **Users** in the sidebar.
2. Click **Invite user** (or **Add user** → **Create new user**).
3. Enter the admin email and a strong password.
4. Click **Create user**.

This email + password is what you'll use to log into the CMS panel.

---

## Step 6 — Get Your API Keys

1. Go to **Project Settings** (gear icon) → **API**.
2. Copy:
   - **Project URL** — looks like `https://xxxxxxxxxxxx.supabase.co`
   - **anon / public key** — the long string under "Project API keys"

---

## Step 7 — Connect the Site

Open `index.js` and replace the two placeholder values at the very top:

```js
const SUPABASE_URL     = 'https://xxxxxxxxxxxx.supabase.co';   // ← your Project URL
const SUPABASE_ANON_KEY = 'eyJhbGci...';                        // ← your anon key
```

Save the file. The site is now connected.

---

## Step 8 — Deploy / Host the Site

The site is plain HTML — no build step required. Upload the entire project folder to any static host:

| Host | How |
|---|---|
| **Netlify** | Drag-and-drop the folder at app.netlify.com/drop |
| **Vercel** | `npx vercel` in this folder |
| **GitHub Pages** | Push to a repo, enable Pages in Settings |
| **Any web server** | Upload via FTP/cPanel as normal |

Make sure all files are uploaded, including the `images/` folder.

---

## How It All Works Now

| Feature | Where data lives |
|---|---|
| Menu items | Supabase `menu_items` table |
| Branches | Supabase `branches` table |
| Opening hours | Supabase `opening_hours` table |
| Hero / About / Contact text | Supabase `site_settings` table |
| Booking reservations | Supabase `bookings` table |
| Uploaded images | Supabase Storage → `restaurant-images` bucket |
| Booking form submissions | No login required — anyone can submit |
| CMS edits | Require admin login via Supabase Auth |

---

## Accessing the CMS

From any browser viewing the site:
- Press **Ctrl + Shift + A** to open the CMS login panel
- Enter the admin email and password you created in Step 5
- Your session persists — you won't need to log in again unless you click Logout

---

## Troubleshooting

**"Database not configured" message**
→ You haven't replaced the placeholder values in `index.js` yet (Step 7).

**Login fails with correct credentials**
→ Check that you created the user in Supabase Auth (Step 5), not just in the database.

**Bookings aren't saving**
→ Make sure the `public_insert_booking` RLS policy was created (it's in `schema.sql`).

**Images fail to upload**
→ Confirm the storage bucket is named exactly `restaurant-images` (case-sensitive) and that the INSERT policy is in place.

**Site shows default data after setup**
→ The tables might be empty — re-run `seed.sql`. Also check browser console for any Supabase errors.
