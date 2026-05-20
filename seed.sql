-- ═══════════════════════════════════════════════════════════════
--  Crepello — Seed Data
--  Run this AFTER schema.sql. Populates all initial content.
--  Safe to re-run: uses ON CONFLICT DO NOTHING / DO UPDATE.
-- ═══════════════════════════════════════════════════════════════

-- ── Site Settings ────────────────────────────────────────────────

INSERT INTO site_settings (key, value) VALUES
(
  'hero',
  '{"tag":"Fine Dining Experience","title":"Where Every Bite<br>Tells a <em>Story</em>","sub":"A culinary journey through bold flavors, crafted with passion and served with elegance — from the heart of Palestine to the world."}'::jsonb
),
(
  'about',
  '{"year":"2020","yearLabel":"Est. Year","title":"Born from Passion,<br>Built on <em>Flavor</em>","p1":"Crepello was born from a simple belief: that food is more than nourishment — it is culture, memory, and connection. Founded in the heart of Nablus, Palestine, we set out to create a space where culinary creativity meets warm hospitality.","p2":"Our kitchen draws inspiration from global cuisines — from the creaminess of classic European stroganoffs to the vibrant spice of tacos — all crafted with premium local ingredients and a dedication to quality that defines every plate.","s1n":"3+","s1l":"Branches","s2n":"50+","s2l":"Menu Items","s3n":"100K+","s3l":"Happy Guests","s4n":"7","s4l":"Years of Excellence"}'::jsonb
),
(
  'contact',
  '{"phone1":"+970 9 234 5678","phone2":"+970 59 123 4567","email":"hello@crepello.ps","instagram":"https://instagram.com/crepello.ps","facebook":"https://facebook.com/crepello.ps","tiktok":"https://tiktok.com/@crepello.ps"}'::jsonb
)
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;


-- ── Branches ─────────────────────────────────────────────────────

INSERT INTO branches (city, address, hours, status, img_key, sort_order) VALUES
('Nablus — Main Branch', 'City Center, Al-Makhfiyya St., Nablus, Palestine', '10:00 AM – 12:00 AM', 'open',  'interior',       1),
('Ramallah',                  'Al-Irsal St., near Municipality Circle, Ramallah',   '11:00 AM – 11:00 PM', 'open',  'steak_salmon',   2),
('Jerusalem',                 'Salah Al-Din St., East Jerusalem, Palestine',         '11:00 AM – 10:00 PM', 'open',  'chicken_scallop',3),
('Amman, Jordan',             'Sweifieh District, Amman, Jordan',                   '12:00 PM – 12:00 AM', 'soon',  '',               4);


-- ── Opening Hours ─────────────────────────────────────────────────

INSERT INTO opening_hours (day, time, closed, sort_order) VALUES
('Saturday',  '10:00 AM – 12:00 AM', false, 1),
('Sunday',    '10:00 AM – 12:00 AM', false, 2),
('Monday',    '10:00 AM – 12:00 AM', false, 3),
('Tuesday',   '10:00 AM – 12:00 AM', false, 4),
('Wednesday', '10:00 AM – 12:00 AM', false, 5),
('Thursday',  '10:00 AM – 1:00 AM',  false, 6),
('Friday',    'Closed',                   true,  7);


-- ── Menu Items ───────────────────────────────────────────────────

INSERT INTO menu_items (cat, sub, name, description, price, img_key, sort_order) VALUES

-- Food: Stroganoffs
('food', 'Stroganoffs', 'Beef Stroganoff',
 'Tender beef strips in a rich, velvety cream sauce with mushrooms, peppers, and basmati rice.',
 '42', 'beef_stroganoff', 1),
('food', 'Stroganoffs', 'Chicken Stroganoff',
 'Juicy chicken in our signature cream sauce with garden vegetables and fluffy basmati rice.',
 '38', 'chicken_stroganoff', 2),

-- Food: Steaks and Grills
('food', 'Steaks and Grills', 'Steak Salmon',
 'Atlantic salmon fillet seasoned with herbs and spices, served with rice, asparagus and broccoli.',
 '65', 'steak_salmon', 3),
('food', 'Steaks and Grills', 'Steak Chicken Lemon Sauce',
 'Grilled chicken breast with lemon herb sauce, roasted potatoes, fluffy rice and garden greens.',
 '48', 'steak_chicken', 4),

-- Food: Mains
('food', 'Mains', 'Chicken Scallop',
 'Crispy breaded chicken topped with melted mozzarella and mushroom sauce, served with fresh vegetables.',
 '52', 'chicken_scallop', 5),
('food', 'Mains', 'Risotto Balls',
 'Golden crispy arancini stuffed with creamy risotto, served in a rich tomato sauce with parmesan.',
 '44', 'risotto', 6),
('food', 'Mains', 'Dinamit Shrimps Taco',
 'Three crunchy tacos loaded with seasoned shrimp, guacamole, fresh tomato and jalapeno pickles.',
 '46', 'shrimp_taco', 7),
('food', 'Mains', 'Margarita Pizza',
 'Thin crust pizza with rich tomato sauce, fresh mozzarella and aromatic herbs. Generously cheesy.',
 '40', 'margarita_pizza', 8),

-- Food: Salads
('food', 'Salads', 'Haloomi Salad',
 'Grilled halloumi on mixed greens, cherry tomatoes, cucumber, corn with balsamic glaze.',
 '32', 'haloomi_salad', 9),
('food', 'Salads', 'Caesar Salad',
 'Classic romaine with Caesar dressing, croutons, parmesan shavings and grilled chicken.',
 '28', '', 10),

-- Sweets: Oriental Sweets
('sweets', 'Oriental Sweets', 'Chocolate Kunafa',
 'Crispy kunafa strands filled with warm cream, drizzled with Nutella and crushed pistachio.',
 '28', 'dessert_kunafa', 11),
('sweets', 'Oriental Sweets', 'Cheese Kunafa',
 'Classic warm kunafa with stretchy white cheese, drizzled with sugar syrup and rose water.',
 '24', '', 12),

-- Sweets: Western Desserts
('sweets', 'Western Desserts', 'Tiramisu',
 'Espresso-soaked ladyfingers with mascarpone cream, dusted with fine cocoa powder.',
 '26', '', 13),
('sweets', 'Western Desserts', 'Cheesecake',
 'New York style baked cheesecake on a butter biscuit base, served with berry compote.',
 '24', '', 14),
('sweets', 'Western Desserts', 'Chocolate Lava',
 'Warm dark chocolate fondant with a molten center, served with vanilla ice cream.',
 '26', '', 15),

-- Sweets: Ice Cream
('sweets', 'Ice Cream', 'Scoops Selection',
 'Three scoops of premium ice cream. Choose from Vanilla, Chocolate, Strawberry, Pistachio, or Lotus.',
 '18', '', 16),

-- Drinks: Hot Drinks
('drinks', 'Hot Drinks', 'Turkish Coffee',
 'Freshly brewed traditional Turkish coffee, served with a piece of dark chocolate.',
 '12', '', 17),
('drinks', 'Hot Drinks', 'Espresso',
 'Single or double shot of premium arabica espresso.',
 '10', '', 18),
('drinks', 'Hot Drinks', 'Cappuccino',
 'Double espresso with steamed milk foam, topped with cocoa powder.',
 '14', '', 19),
('drinks', 'Hot Drinks', 'Mint Tea',
 'Fresh spearmint steeped in hot water, sweetened to taste.',
 '10', '', 20),

-- Drinks: Cold Drinks
('drinks', 'Cold Drinks', 'Lemonade with Mint',
 'Freshly squeezed lemon juice with mint, sugar and sparkling water.',
 '14', '', 21),
('drinks', 'Cold Drinks', 'Fresh Orange Juice',
 'Cold-pressed 100% orange juice — no added sugar.',
 '16', '', 22),
('drinks', 'Cold Drinks', 'Watermelon Juice',
 'Chilled watermelon blended fresh to order.',
 '14', '', 23),
('drinks', 'Cold Drinks', 'Sparkling Water',
 'Still or sparkling mineral water (500ml).',
 '8', '', 24),

-- Drinks: Shakes and Smoothies
('drinks', 'Shakes and Smoothies', 'Nutella Shake',
 'Blended milk, Nutella, banana and vanilla ice cream — the ultimate indulgence.',
 '22', '', 25),
('drinks', 'Shakes and Smoothies', 'Strawberry Smoothie',
 'Fresh strawberries blended with yogurt, honey and a hint of vanilla.',
 '20', '', 26),
('drinks', 'Shakes and Smoothies', 'Mango Lassi',
 'Ripe mango puree blended with creamy yogurt and a pinch of cardamom.',
 '20', '', 27),

-- Hookah: Fruity
('hookah', 'Fruity', 'Double Apple',
 'A classic blend of sweet red apple and green apple — smooth and refreshing.',
 '35', '', 28),
('hookah', 'Fruity', 'Grape Mint',
 'Concord grape with a cooling mint exhale.',
 '35', '', 29),
('hookah', 'Fruity', 'Strawberry Watermelon',
 'Sweet summer blend of ripe strawberry and fresh watermelon.',
 '35', '', 30),
('hookah', 'Fruity', 'Peach Lychee',
 'Tropical fusion of juicy peach and delicate lychee.',
 '37', '', 31),

-- Hookah: Mint and Fresh
('hookah', 'Mint and Fresh', 'Double Mint',
 'Intense spearmint and peppermint blend for a powerful cool hit.',
 '35', '', 32),
('hookah', 'Mint and Fresh', 'Blueberry Mint',
 'Sweet blueberry paired with a fresh mint breeze.',
 '37', '', 33),

-- Hookah: Special Mix
('hookah', 'Special Mix', 'Crepello Special',
 'Our signature house blend — a secret mix of fruits and cool mint. Ask your server.',
 '42', '', 34),
('hookah', 'Special Mix', 'Gummy Bear',
 'Candy-sweet blend inspired by your favorite gummy candies.',
 '40', '', 35);
