
// ── Supabase Configuration ───────────────────────────────────────
// Replace these two values with your project's URL and anon key.
// Find them in: Supabase Dashboard → Project Settings → API
const SUPABASE_URL     = 'https://rlngdkazplakhtknchtp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsbmdka2F6cGxha2h0a25jaHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMDkwOTgsImV4cCI6MjA5NDg4NTA5OH0.aBjGgQgVYgCwPYwPyQ_zNmrjwikMH7rK31fHTmjnZqc';

const _dbReady = SUPABASE_URL !== 'YOUR_PROJECT_URL' && typeof window.supabase !== 'undefined';
const db = _dbReady ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// ── Default Data (fallback when DB is not yet configured) ────────
const DEFAULT_DATA = {
  hero:{
    tag:"Fine Dining Experience",tag_ar:"تجربة طعام راقية",
    title:"Where Every Bite<br>Tells a <em>Story</em>",title_ar:"حيث كل لقمة<br>تحكي <em>قصة</em>",
    sub:"A culinary journey through bold flavors, crafted with passion and served with elegance — from the heart of Palestine to the world.",
    sub_ar:"رحلة طهي عبر نكهات جريئة، مصنوعة بشغف وتُقدَّم بأناقة — من قلب فلسطين إلى العالم."
  },
  about:{
    year:"2020",yearLabel:"Est. Year",yearLabel_ar:"سنة التأسيس",
    title:"Born from Passion,<br>Built on <em>Flavor</em>",
    title_ar:"وُلِد من شغف،<br>وبُني على <em>النكهة</em>",
    p1:"Crepello was born from a simple belief: that food is more than nourishment — it is culture, memory, and connection. Founded in the heart of Nablus, Palestine, we set out to create a space where culinary creativity meets warm hospitality.",
    p1_ar:"وُلِد كريبيلو من إيمان بسيط: أن الطعام أكثر من مجرد غذاء — إنه ثقافة وذاكرة وارتباط. تأسس في قلب نابلس، فلسطين، سعينا لخلق مكان يلتقي فيه الإبداع الطهوي بالضيافة الدافئة.",
    p2:"Our kitchen draws inspiration from global cuisines — from the creaminess of classic European stroganoffs to the vibrant spice of tacos — all crafted with premium local ingredients and a dedication to quality that defines every plate.",
    p2_ar:"تستلهم مطبخنا من المأكولات العالمية — من كريمية الستروغانوف الأوروبي إلى توابل التاكو النابضة بالحياة — كلها مصنوعة بمكونات محلية فاخرة وتفانٍ في الجودة يميّز كل طبق.",
    s1n:"3+",s1l:"Branches",s1l_ar:"فروع",
    s2n:"50+",s2l:"Menu Items",s2l_ar:"صنف في القائمة",
    s3n:"100K+",s3l:"Happy Guests",s3l_ar:"ضيف سعيد",
    s4n:"7",s4l:"Years of Excellence",s4l_ar:"سنوات من التميز"
  },
  branches:[
    {id:1,city:"Nablus — Main Branch",city_ar:"نابلس — الفرع الرئيسي",address:"City Center, Al-Makhfiyya St., Nablus, Palestine",address_ar:"وسط المدينة، شارع المخفية، نابلس، فلسطين",hours:"10:00 AM – 12:00 AM",hours_ar:"١٠:٠٠ ص – ١٢:٠٠ ص",status:"open",imgKey:"interior"},
    {id:2,city:"Ramallah",city_ar:"رام الله",address:"Al-Irsal St., near Municipality Circle, Ramallah",address_ar:"شارع الإرسال، بالقرب من دوار البلدية، رام الله",hours:"11:00 AM – 11:00 PM",hours_ar:"١١:٠٠ ص – ١١:٠٠ م",status:"open",imgKey:"steak_salmon"},
    {id:3,city:"Jerusalem",city_ar:"القدس",address:"Salah Al-Din St., East Jerusalem, Palestine",address_ar:"شارع صلاح الدين، القدس الشرقية، فلسطين",hours:"11:00 AM – 10:00 PM",hours_ar:"١١:٠٠ ص – ١٠:٠٠ م",status:"open",imgKey:"chicken_scallop"},
    {id:4,city:"Amman, Jordan",city_ar:"عمّان، الأردن",address:"Sweifieh District, Amman, Jordan",address_ar:"حي الصويفية، عمّان، الأردن",hours:"12:00 PM – 12:00 AM",hours_ar:"١٢:٠٠ ظ – ١٢:٠٠ ص",status:"soon",imgKey:""}
  ],
  hours:[
    {id:1,day:"Saturday",day_ar:"السبت",time:"10:00 AM – 12:00 AM",closed:false},
    {id:2,day:"Sunday",day_ar:"الأحد",time:"10:00 AM – 12:00 AM",closed:false},
    {id:3,day:"Monday",day_ar:"الإثنين",time:"10:00 AM – 12:00 AM",closed:false},
    {id:4,day:"Tuesday",day_ar:"الثلاثاء",time:"10:00 AM – 12:00 AM",closed:false},
    {id:5,day:"Wednesday",day_ar:"الأربعاء",time:"10:00 AM – 12:00 AM",closed:false},
    {id:6,day:"Thursday",day_ar:"الخميس",time:"10:00 AM – 1:00 AM",closed:false},
    {id:7,day:"Friday",day_ar:"الجمعة",time:"Closed",closed:true}
  ],
  contact:{
    phone1:"+970 9 234 5678",phone2:"+970 59 123 4567",email:"hello@crepello.ps",
    instagram:"https://instagram.com/crepello.ps",
    facebook:"https://facebook.com/crepello.ps",
    tiktok:"https://tiktok.com/@crepello.ps"
  },
  menu:[
    {id:1,cat:"food",sub:"Stroganoffs",name:"Beef Stroganoff",desc:"Tender beef strips in a rich, velvety cream sauce with mushrooms, peppers, and basmati rice.",price:"42",imgKey:"beef_stroganoff"},
    {id:2,cat:"food",sub:"Stroganoffs",name:"Chicken Stroganoff",desc:"Juicy chicken in our signature cream sauce with garden vegetables and fluffy basmati rice.",price:"38",imgKey:"chicken_stroganoff"},
    {id:3,cat:"food",sub:"Steaks and Grills",name:"Steak Salmon",desc:"Atlantic salmon fillet seasoned with herbs and spices, served with rice, asparagus and broccoli.",price:"65",imgKey:"steak_salmon"},
    {id:4,cat:"food",sub:"Steaks and Grills",name:"Steak Chicken Lemon Sauce",desc:"Grilled chicken breast with lemon herb sauce, roasted potatoes, fluffy rice and garden greens.",price:"48",imgKey:"steak_chicken"},
    {id:5,cat:"food",sub:"Mains",name:"Chicken Scallop",desc:"Crispy breaded chicken topped with melted mozzarella and mushroom sauce, served with fresh vegetables.",price:"52",imgKey:"chicken_scallop"},
    {id:6,cat:"food",sub:"Mains",name:"Risotto Balls",desc:"Golden crispy arancini stuffed with creamy risotto, served in a rich tomato sauce with parmesan.",price:"44",imgKey:"risotto"},
    {id:7,cat:"food",sub:"Mains",name:"Dinamit Shrimps Taco",desc:"Three crunchy tacos loaded with seasoned shrimp, guacamole, fresh tomato and jalapeño pickles.",price:"46",imgKey:"shrimp_taco"},
    {id:8,cat:"food",sub:"Mains",name:"Margarita Pizza",desc:"Thin crust pizza with rich tomato sauce, fresh mozzarella and aromatic herbs. Generously cheesy.",price:"40",imgKey:"margarita_pizza"},
    {id:9,cat:"food",sub:"Salads",name:"Haloomi Salad",desc:"Grilled halloumi on mixed greens, cherry tomatoes, cucumber, corn with balsamic glaze.",price:"32",imgKey:"haloomi_salad"},
    {id:10,cat:"food",sub:"Salads",name:"Caesar Salad",desc:"Classic romaine with Caesar dressing, croutons, parmesan shavings and grilled chicken.",price:"28",imgKey:""},
    {id:11,cat:"sweets",sub:"Oriental Sweets",name:"Chocolate Kunafa",desc:"Crispy kunafa strands filled with warm cream, drizzled with Nutella and crushed pistachio.",price:"28",imgKey:"dessert_kunafa"},
    {id:12,cat:"sweets",sub:"Oriental Sweets",name:"Cheese Kunafa",desc:"Classic warm kunafa with stretchy white cheese, drizzled with sugar syrup and rose water.",price:"24",imgKey:""},
    {id:13,cat:"sweets",sub:"Western Desserts",name:"Tiramisu",desc:"Espresso-soaked ladyfingers with mascarpone cream, dusted with fine cocoa powder.",price:"26",imgKey:""},
    {id:14,cat:"sweets",sub:"Western Desserts",name:"Cheesecake",desc:"New York style baked cheesecake on a butter biscuit base, served with berry compote.",price:"24",imgKey:""},
    {id:15,cat:"sweets",sub:"Western Desserts",name:"Chocolate Lava",desc:"Warm dark chocolate fondant with a molten center, served with vanilla ice cream.",price:"26",imgKey:""},
    {id:16,cat:"sweets",sub:"Ice Cream",name:"Scoops Selection",desc:"Three scoops of premium ice cream. Choose from Vanilla, Chocolate, Strawberry, Pistachio, or Lotus.",price:"18",imgKey:""},
    {id:17,cat:"drinks",sub:"Hot Drinks",name:"Turkish Coffee",desc:"Freshly brewed traditional Turkish coffee, served with a piece of dark chocolate.",price:"12",imgKey:""},
    {id:18,cat:"drinks",sub:"Hot Drinks",name:"Espresso",desc:"Single or double shot of premium arabica espresso.",price:"10",imgKey:""},
    {id:19,cat:"drinks",sub:"Hot Drinks",name:"Cappuccino",desc:"Double espresso with steamed milk foam, topped with cocoa powder.",price:"14",imgKey:""},
    {id:20,cat:"drinks",sub:"Hot Drinks",name:"Mint Tea",desc:"Fresh spearmint steeped in hot water, sweetened to taste.",price:"10",imgKey:""},
    {id:21,cat:"drinks",sub:"Cold Drinks",name:"Lemonade with Mint",desc:"Freshly squeezed lemon juice with mint, sugar and sparkling water.",price:"14",imgKey:""},
    {id:22,cat:"drinks",sub:"Cold Drinks",name:"Fresh Orange Juice",desc:"Cold-pressed 100% orange juice — no added sugar.",price:"16",imgKey:""},
    {id:23,cat:"drinks",sub:"Cold Drinks",name:"Watermelon Juice",desc:"Chilled watermelon blended fresh to order.",price:"14",imgKey:""},
    {id:24,cat:"drinks",sub:"Cold Drinks",name:"Sparkling Water",desc:"Still or sparkling mineral water (500ml).",price:"8",imgKey:""},
    {id:25,cat:"drinks",sub:"Shakes and Smoothies",name:"Nutella Shake",desc:"Blended milk, Nutella, banana and vanilla ice cream — the ultimate indulgence.",price:"22",imgKey:""},
    {id:26,cat:"drinks",sub:"Shakes and Smoothies",name:"Strawberry Smoothie",desc:"Fresh strawberries blended with yogurt, honey and a hint of vanilla.",price:"20",imgKey:""},
    {id:27,cat:"drinks",sub:"Shakes and Smoothies",name:"Mango Lassi",desc:"Ripe mango puree blended with creamy yogurt and a pinch of cardamom.",price:"20",imgKey:""},
    {id:28,cat:"hookah",sub:"Fruity",name:"Double Apple",desc:"A classic blend of sweet red apple and green apple — smooth and refreshing.",price:"35",imgKey:""},
    {id:29,cat:"hookah",sub:"Fruity",name:"Grape Mint",desc:"Concord grape with a cooling mint exhale.",price:"35",imgKey:""},
    {id:30,cat:"hookah",sub:"Fruity",name:"Strawberry Watermelon",desc:"Sweet summer blend of ripe strawberry and fresh watermelon.",price:"35",imgKey:""},
    {id:31,cat:"hookah",sub:"Fruity",name:"Peach Lychee",desc:"Tropical fusion of juicy peach and delicate lychee.",price:"37",imgKey:""},
    {id:32,cat:"hookah",sub:"Mint and Fresh",name:"Double Mint",desc:"Intense spearmint and peppermint blend for a powerful cool hit.",price:"35",imgKey:""},
    {id:33,cat:"hookah",sub:"Mint and Fresh",name:"Blueberry Mint",desc:"Sweet blueberry paired with a fresh mint breeze.",price:"37",imgKey:""},
    {id:34,cat:"hookah",sub:"Special Mix",name:"Crepello Special",desc:"Our signature house blend — a secret mix of fruits and cool mint. Ask your server.",price:"42",imgKey:""},
    {id:35,cat:"hookah",sub:"Special Mix",name:"Gummy Bear",desc:"Candy-sweet blend inspired by your favorite gummy candies.",price:"40",imgKey:""}
  ],
  categories:[
    {key:"food",   label:"Food",    icon:"🍽"},
    {key:"sweets", label:"Sweets",  icon:"🍰"},
    {key:"drinks", label:"Drinks",  icon:"🥤"},
    {key:"hookah", label:"Hookah",  icon:"💨"}
  ],
  subcategories:{
    food:    ["Stroganoffs","Steaks and Grills","Mains","Salads"],
    sweets:  ["Oriental Sweets","Western Desserts","Ice Cream"],
    drinks:  ["Hot Drinks","Cold Drinks","Shakes and Smoothies"],
    hookah:  ["Fruity","Mint and Fresh","Special Mix"]
  },
  bookings:[]
};

// ── Local image map (served from the images/ folder) ────────────
// Custom images uploaded via the CMS are overlaid on top of these
// at runtime once loadData() fetches them from Supabase Storage.
const IMG = {
  beef_stroganoff: "images/beef.PNG",
  chicken_stroganoff: "images/chickenst.PNG",
  chicken_scallop: "images/chickensc.PNG",
  steak_salmon: "images/steaksal.PNG",
  margarita_pizza: "images/pizza.PNG",
  shrimp_taco: "images/taco.PNG",
  haloomi_salad: "images/salad.PNG",
  steak_chicken: "images/stakechi.PNG",
  risotto: "images/rissioto.PNG",
  interior: "images/IMG_0791.PNG",
  dessert_kunafa: "images/taco.PNG",
  ramallah: "images/ramallah.png",
  irbid: "images/irbid.png",
  istanbul: "images/istanbual.png",
};

const CAT_ICONS  = {food:"🍽", sweets:"🍰", drinks:"🥤", hookah:"💨"};
const CAT_LABELS = {food:"Food", sweets:"Sweets", drinks:"Drinks", hookah:"Hookah"};

// ── i18n ──────────────────────────────────────────────────────────
const TRANSLATIONS = {
  en:{
    nav_about:"About", nav_branches:"Branches", nav_menu:"Menu",
    nav_reserve:"Reserve", nav_findus:"Find Us", nav_book:"Book a Table",
    hero_explore:"Explore Our Menu", hero_reserve:"Reserve a Table", hero_scroll:"Scroll",
    about_tag:"Our Story",
    gallery_tag:"Visual Experience",
    gallery_title:"A Feast for the <em>Eyes</em>",
    gallery_sub:"Every dish, every corner — crafted to be as beautiful as it is delicious. Click any image to view full screen.",
    branches_tag:"Our Locations",
    branches_title:"Find Us <em>Everywhere</em>",
    branch_open:"● Open", branch_soon:"Coming Soon",
    menu_tag:"What We Serve",
    menu_title:"Our <em>Menu</em>",
    menu_sub:"From hearty mains and indulgent sweets to refreshing drinks and premium hookah — explore our full selection.",
    menu_search_ph:"🔍 Search menu items…",
    menu_browse:"Browse",
    menu_no_results:"No items found for",
    cat_food:"Food", cat_sweets:"Sweets", cat_drinks:"Drinks", cat_hookah:"Hookah",
    testi_tag:"What Guests Say",
    testi_title:"Loved by <em>Everyone</em>",
    testi_sub:"Real experiences from guests who've visited our branches across Palestine and beyond.",
    testi1_quote:'"The Beef Stroganoff is something I think about constantly. The cream sauce is perfect — rich, balanced, and utterly satisfying. Crepello has become my family\'s go-to restaurant."',
    testi1_name:"Sara Al-Khalidi", testi1_loc:"Nablus, Palestine",
    testi2_quote:'"The atmosphere is incredible — warm, sophisticated, and welcoming. The Chicken Scallop with melted mozzarella is a work of art. Five stars without hesitation."',
    testi2_name:"Ahmad Barakat", testi2_loc:"Ramallah, Palestine",
    testi3_quote:'"Crepello brought something truly different to Ramallah. The Chocolate Kunafa is divine — crispy outside, creamy inside, and that Nutella drizzle is perfection. Must-visit."',
    testi3_name:"Lana Mansour", testi3_loc:"Jerusalem, Palestine",
    book_tag:"Reservations", book_title:"Reserve Your <em>Table</em>",
    book_sub:"Secure your spot and let us prepare an unforgettable dining experience for you and your guests.",
    book_hours:"Opening Hours", book_form_title:"Book a Table",
    book_form_sub:"All fields are required. We'll confirm your reservation within 2 hours.",
    book_name_lbl:"Full Name *", book_name_ph:"Your full name", book_name_err:"Please enter your full name.",
    book_phone_lbl:"Phone Number *", book_phone_ph:"+970 5XX XXX XXX", book_phone_err:"Please enter a valid phone number.",
    book_day_lbl:"Day *", book_day_default:"Select Day", book_day_err:"Please select a day.",
    book_time_lbl:"Time *", book_time_default:"Select Time", book_time_err:"Please select a time.",
    book_guests_lbl:"Number of Guests *", book_guests_default:"Select number of guests", book_guests_err:"Please select number of guests.",
    book_guests_1:"1 Person", book_guests_2:"2 People", book_guests_3:"3 People",
    book_guests_4:"4 People", book_guests_5:"5 People", book_guests_6:"6 People",
    book_guests_710:"7–10 People", book_guests_group:"10+ People (Group)",
    day_sat:"Saturday", day_sun:"Sunday", day_mon:"Monday", day_tue:"Tuesday",
    day_wed:"Wednesday", day_thu:"Thursday", day_fri:"Friday",
    book_submit:"Confirm Reservation",
    book_success_title:"Reservation Received!",
    book_success_msg:"Thank you! We've received your booking request and will confirm within 2 hours. We look forward to welcoming you to Crepello.",
    findus_tag:"Get in Touch", findus_title:"Find <em>Us</em>",
    findus_sub:"Visit any of our locations or reach out through the channels below — we'd love to hear from you.",
    findus_follow:"Follow Us",
    hours_closed:"Closed",
    footer_copy:"Crepello™ — All rights reserved.",
    footer_tm:"Crepello is a registered trademark. Unauthorized use is prohibited.",
    footer_dev:"Crafted by",
    admin_cms_title:"⚙ Crepello CMS",
    admin_cms_sub:"Content Management System<br>Authorized Personnel Only",
    admin_email_ph:"Admin email", admin_pass_ph:"Password",
    admin_login_btn:"Access Dashboard",
    admin_login_err:"Incorrect credentials. Please try again.",
    admin_hint:"Press Ctrl + Shift + A to open · Esc to close",
    admin_dash_title:"⚙ Crepello CMS Dashboard",
    admin_logout:"Logout", admin_close:"✕ Close",
    admin_nav_bookings:"📋 Bookings", admin_nav_menu:"🍽 Menu Items",
    admin_nav_cats:"🗂 Categories", admin_nav_branches:"📍 Branches",
    admin_nav_hours:"🕐 Hours", admin_nav_contact:"📞 Contact",
    admin_nav_hero:"🖼 Hero Text", admin_nav_images:"📁 Images",
    ap_bookings_title:"Reservations",
    ap_bookings_sub:"All booking requests submitted via the website. Confirm, cancel, or delete entries.",
    ap_bookings_loading:"Loading…",
    ap_bookings_empty:"No reservations yet. They will appear here once customers submit the booking form.",
    ap_menu_title:"Menu Items",
    ap_menu_sub:"Edit name, category, description, price and image. Changes update the live site instantly.",
    ap_cats_title:"Categories & Subcategories",
    ap_cats_sub:"Manage menu categories and their subcategories. New categories and subcategories appear in the menu item editor.",
    ap_branches_title:"Branches",
    ap_branches_sub:"Manage all branch locations. Changes reflect on the Branches and Find Us sections.",
    ap_hours_title:"Opening Hours",
    ap_hours_sub:"Set the hours shown in the Reservations section. Mark any day as Closed.",
    ap_contact_title:"Contact Information",
    ap_contact_sub:"Update phone numbers, email, and social media links.",
    ap_hero_title:"Hero Section Text",
    ap_hero_sub:"Edit the main landing page copy. Use &lt;em&gt; tags for italic gold text.",
    ap_hero_note:'Use &lt;em&gt; for italic gold text. E.g. "Crafted with &lt;em&gt;Love&lt;/em&gt;"',
    ap_images_title:"Images",
    ap_images_sub:"Upload images from your device. Once uploaded, their key appears in the image dropdown for branches and menu items.",
    th_name:"Name", th_cat:"Category", th_sub:"Sub", th_desc:"Description",
    th_price:"Price ₪", th_image:"Image", th_actions:"Actions",
    th_total:"Total", th_pending:"Pending", th_confirmed:"Confirmed",
    th_num:"#", th_phone:"Phone", th_day:"Day", th_time:"Time",
    th_guests:"Guests", th_submitted:"Submitted", th_status:"Status",
    th_city:"City / Name", th_address:"Address", th_hours:"Hours", th_closed:"Closed?",
    th_field:"Field", th_value:"Value",
    btn_save:"Save", btn_del:"✕", btn_confirm_bk:"✓ Confirm", btn_cancel_bk:"✕ Cancel",
    btn_upload:"Upload", btn_add_item:"+ Add New Item", btn_add_branch:"+ Add Branch",
    btn_add_cat:"+ Add Category", btn_add_sub:"+ Add Sub",
    bk_status_pending:"pending", bk_status_confirmed:"confirmed", bk_status_cancelled:"cancelled",
    br_status_open:"Open", br_status_soon:"Coming Soon",
    hr_open:"Open", hr_closed:"Closed",
    ct_phone1:"Phone 1", ct_phone2:"Phone 2", ct_email:"Email",
    ct_instagram:"Instagram URL", ct_facebook:"Facebook URL", ct_tiktok:"TikTok URL",
    hero_lbl_tag:"Top Tag", hero_lbl_title:"Title (HTML)", hero_lbl_sub:"Subtitle",
    hero_lbl_tag_ar:"Top Tag (Arabic)", hero_lbl_title_ar:"Title (Arabic)", hero_lbl_sub_ar:"Subtitle (Arabic)",
    th_name_ar:"Name (AR)", th_desc_ar:"Desc (AR)",
    th_city_ar:"City (AR)", th_address_ar:"Address (AR)", th_hours_ar:"Hours (AR)", th_day_ar:"Day (AR)",
    img_key_lbl:"Image Key", img_file_lbl:"Image File",
    img_key_ph:"e.g. amman_branch", img_none:"— none —",
    img_no_custom:"No custom images uploaded yet.",
    cat_add_title:"Add New Category",
    cat_key_lbl:"Key (lowercase only)", cat_key_ph:"e.g. specials",
    cat_label_lbl:"Label", cat_label_ph:"e.g. Specials",
    cat_icon_lbl:"Icon (emoji)",
    cat_subs_lbl:"Subcategories", cat_no_subs:"No subcategories yet",
    cat_new_sub_ph:"New subcategory name",
    toast_item_saved:"Menu item saved ✓", toast_item_deleted:"Item deleted",
    toast_item_added:"New item added — scroll down to edit",
    toast_branch_saved:"Branch saved ✓", toast_branch_deleted:"Branch deleted", toast_branch_added:"Branch added",
    toast_hours_saved:"Hours saved ✓", toast_contact_saved:"Contact saved ✓",
    toast_hero_saved:"Hero text updated ✓",
    toast_img_uploaded:"Image uploaded ✓", toast_img_deleted:"Image deleted",
    toast_cat_added:"Category added ✓", toast_cat_saved:"Category saved ✓", toast_cat_deleted:"Category deleted",
    toast_sub_added:"Subcategory added ✓", toast_sub_removed:"Subcategory removed",
    toast_bk_confirmed:"Booking marked as confirmed", toast_bk_cancelled:"Booking marked as cancelled",
    toast_bk_deleted:"Booking deleted",
    toast_booking_unavail:"Booking service is not available yet",
    err_db:"Database not configured", err_save:"Save failed: ", err_upload:"Upload failed: ",
    err_img_key:"Enter an image key", err_img_file:"Select an image file",
    err_img_exists:"Key already exists — choose a different name",
    err_cat_key:"Enter a category key", err_cat_label:"Enter a category label",
    err_cat_exists:"Category key already exists",
    err_sub_enter:"Enter a subcategory name", err_sub_exists:"Subcategory already exists",
    err_update:"Update failed", err_add_item:"Failed to add item", err_add_branch:"Failed to add branch",
    confirm_del_item:"Delete this menu item?", confirm_del_branch:"Delete this branch?",
    confirm_del_booking:"Delete this booking?", confirm_del_img:"Delete image",
    confirm_del_cat:"Delete this category?",
    confirm_cat_has_items:" item(s) in this category. Delete anyway?",
    confirm_sub_has_items:" menu item(s). Remove subcategory?",
    lang_switch:"عربي",
  },
  ar:{
    nav_about:"عن كريبيلو", nav_branches:"الفروع", nav_menu:"القائمة",
    nav_reserve:"احجز", nav_findus:"اجدنا", nav_book:"احجز طاولة",
    hero_explore:"استكشف قائمتنا", hero_reserve:"احجز طاولة", hero_scroll:"اكتشف",
    about_tag:"قصتنا",
    gallery_tag:"تجربة بصرية",
    gallery_title:"مأدبة للعيون <em>والحواس</em>",
    gallery_sub:"كل طبق، كل زاوية — صُمِّمت لتكون جميلة بقدر ما هي لذيذة. انقر على أي صورة لعرضها.",
    branches_tag:"مواقعنا",
    branches_title:"اجدنا <em>في كل مكان</em>",
    branch_open:"● مفتوح", branch_soon:"قريباً",
    menu_tag:"ما نقدمه",
    menu_title:"قائمة <em>طعامنا</em>",
    menu_sub:"من الوجبات الرئيسية والحلويات الفاخرة إلى المشروبات المنعشة والأرجيلة الراقية — استكشف تشكيلتنا الكاملة.",
    menu_search_ph:"🔍 ابحث عن أصناف…",
    menu_browse:"تصفح",
    menu_no_results:"لا توجد نتائج لـ",
    cat_food:"أكل", cat_sweets:"حلويات", cat_drinks:"مشروبات", cat_hookah:"أرجيلة",
    testi_tag:"ماذا يقول ضيوفنا",
    testi_title:"محبوب من <em>الجميع</em>",
    testi_sub:"تجارب حقيقية من ضيوف زاروا فروعنا في فلسطين وخارجها.",
    testi1_quote:'"البيف ستروغانوف شيء أفكر فيه باستمرار. الصلصة الكريمية مثالية — غنية، متوازنة، ومُرضية تماماً. أصبح كريبيلو المطعم المفضل لعائلتي."',
    testi1_name:"سارة الخالدي", testi1_loc:"نابلس، فلسطين",
    testi2_quote:'"الأجواء رائعة — دافئة وراقية ومرحبة. دجاج السكالوب مع الموزاريلا المذابة تحفة فنية. خمس نجوم بلا تردد."',
    testi2_name:"أحمد بركات", testi2_loc:"رام الله، فلسطين",
    testi3_quote:'"قدّم كريبيلو شيئاً مختلفاً حقاً. الكنافة بالشوكولاتة إلهية — مقرمشة من الخارج، كريمية من الداخل، وتلك الزخرفة من النوتيلا هي الكمال بعينه."',
    testi3_name:"لنا منصور", testi3_loc:"القدس، فلسطين",
    book_tag:"الحجوزات", book_title:"احجز <em>طاولتك</em>",
    book_sub:"احجز مكانك ودعنا نُعدّ لك تجربة طعام لا تُنسى.",
    book_hours:"أوقات العمل", book_form_title:"احجز طاولة",
    book_form_sub:"جميع الحقول مطلوبة. سنؤكد حجزك في غضون ساعتين.",
    book_name_lbl:"الاسم الكامل *", book_name_ph:"أدخل اسمك الكامل", book_name_err:"يرجى إدخال اسمك الكامل.",
    book_phone_lbl:"رقم الهاتف *", book_phone_ph:"+970 5XX XXX XXX", book_phone_err:"يرجى إدخال رقم هاتف صحيح.",
    book_day_lbl:"اليوم *", book_day_default:"اختر اليوم", book_day_err:"يرجى اختيار اليوم.",
    book_time_lbl:"الوقت *", book_time_default:"اختر الوقت", book_time_err:"يرجى اختيار الوقت.",
    book_guests_lbl:"عدد الأشخاص *", book_guests_default:"اختر عدد الأشخاص", book_guests_err:"يرجى اختيار عدد الأشخاص.",
    book_guests_1:"شخص واحد", book_guests_2:"شخصان", book_guests_3:"٣ أشخاص",
    book_guests_4:"٤ أشخاص", book_guests_5:"٥ أشخاص", book_guests_6:"٦ أشخاص",
    book_guests_710:"٧–١٠ أشخاص", book_guests_group:"١٠+ (مجموعة)",
    day_sat:"السبت", day_sun:"الأحد", day_mon:"الإثنين", day_tue:"الثلاثاء",
    day_wed:"الأربعاء", day_thu:"الخميس", day_fri:"الجمعة",
    book_submit:"تأكيد الحجز",
    book_success_title:"تم استلام حجزك!",
    book_success_msg:"شكراً! لقد استلمنا طلب حجزك وسنؤكده في غضون ساعتين. نتطلع إلى استقبالك في كريبيلو.",
    findus_tag:"تواصل معنا", findus_title:"اجدنا <em>هنا</em>",
    findus_sub:"زر أياً من مواقعنا أو تواصل معنا عبر القنوات أدناه — يسعدنا الاستماع إليك.",
    findus_follow:"تابعنا",
    hours_closed:"مغلق",
    footer_copy:"Crepello™ — جميع الحقوق محفوظة.",
    footer_tm:"كريبيلو علامة تجارية مسجلة. يُحظر الاستخدام غير المرخص.",
    footer_dev:"تطوير",
    admin_cms_title:"⚙ كريبيلو CMS",
    admin_cms_sub:"نظام إدارة المحتوى<br>للموظفين المخولين فقط",
    admin_email_ph:"البريد الإلكتروني", admin_pass_ph:"كلمة المرور",
    admin_login_btn:"الدخول إلى لوحة التحكم",
    admin_login_err:"بيانات الدخول غير صحيحة. حاول مجدداً.",
    admin_hint:"اضغط Ctrl + Shift + A للفتح · Esc للإغلاق",
    admin_dash_title:"⚙ لوحة تحكم كريبيلو",
    admin_logout:"تسجيل الخروج", admin_close:"✕ إغلاق",
    admin_nav_bookings:"📋 الحجوزات", admin_nav_menu:"🍽 أصناف القائمة",
    admin_nav_cats:"🗂 الفئات", admin_nav_branches:"📍 الفروع",
    admin_nav_hours:"🕐 أوقات العمل", admin_nav_contact:"📞 معلومات الاتصال",
    admin_nav_hero:"🖼 نص الرئيسية", admin_nav_images:"📁 الصور",
    ap_bookings_title:"الحجوزات",
    ap_bookings_sub:"جميع طلبات الحجز المقدمة عبر الموقع. تأكيد أو إلغاء أو حذف الطلبات.",
    ap_bookings_loading:"جاري التحميل…",
    ap_bookings_empty:"لا توجد حجوزات بعد. ستظهر هنا بمجرد تقديم العملاء لطلبات الحجز.",
    ap_menu_title:"أصناف القائمة",
    ap_menu_sub:"عدّل الاسم والفئة والوصف والسعر والصورة. التغييرات تنعكس فوراً على الموقع.",
    ap_cats_title:"الفئات والفئات الفرعية",
    ap_cats_sub:"إدارة فئات القائمة والفئات الفرعية. الفئات الجديدة تظهر في محرر أصناف القائمة.",
    ap_branches_title:"الفروع",
    ap_branches_sub:"إدارة جميع مواقع الفروع. التغييرات تنعكس على قسمي الفروع وتواصل معنا.",
    ap_hours_title:"أوقات العمل",
    ap_hours_sub:"حدد أوقات العمل المعروضة في قسم الحجوزات. يمكنك وضع علامة مغلق لأي يوم.",
    ap_contact_title:"معلومات الاتصال",
    ap_contact_sub:"تحديث أرقام الهاتف والبريد الإلكتروني وروابط التواصل الاجتماعي.",
    ap_hero_title:"نص قسم الرئيسية",
    ap_hero_sub:"عدّل نص صفحة الهبوط الرئيسية. استخدم وسوم &lt;em&gt; للنص المائل الذهبي.",
    ap_hero_note:"استخدم &lt;em&gt; للنص المائل الذهبي. مثال: \"مصنوع بـ&lt;em&gt;شغف&lt;/em&gt;\"",
    ap_images_title:"الصور",
    ap_images_sub:"ارفع الصور من جهازك. بعد الرفع، يظهر المفتاح في قوائم الصور للفروع والأصناف.",
    th_name:"الاسم", th_cat:"الفئة", th_sub:"الفرعية", th_desc:"الوصف",
    th_price:"السعر ₪", th_image:"الصورة", th_actions:"إجراءات",
    th_total:"المجموع", th_pending:"انتظار", th_confirmed:"مؤكد",
    th_num:"#", th_phone:"الهاتف", th_day:"اليوم", th_time:"الوقت",
    th_guests:"الأشخاص", th_submitted:"تاريخ الإرسال", th_status:"الحالة",
    th_city:"المدينة / الاسم", th_address:"العنوان", th_hours:"الأوقات", th_closed:"مغلق؟",
    th_field:"الحقل", th_value:"القيمة",
    btn_save:"حفظ", btn_del:"✕", btn_confirm_bk:"✓ تأكيد", btn_cancel_bk:"✕ إلغاء",
    btn_upload:"رفع", btn_add_item:"+ إضافة صنف", btn_add_branch:"+ إضافة فرع",
    btn_add_cat:"+ إضافة فئة", btn_add_sub:"+ فرعية",
    bk_status_pending:"انتظار", bk_status_confirmed:"مؤكد", bk_status_cancelled:"ملغى",
    br_status_open:"مفتوح", br_status_soon:"قريباً",
    hr_open:"مفتوح", hr_closed:"مغلق",
    ct_phone1:"هاتف ١", ct_phone2:"هاتف ٢", ct_email:"البريد الإلكتروني",
    ct_instagram:"رابط إنستغرام", ct_facebook:"رابط فيسبوك", ct_tiktok:"رابط تيك توك",
    hero_lbl_tag:"الوسم العلوي", hero_lbl_title:"العنوان (HTML)", hero_lbl_sub:"العنوان الفرعي",
    hero_lbl_tag_ar:"الوسم (عربي)", hero_lbl_title_ar:"العنوان (عربي)", hero_lbl_sub_ar:"الفرعي (عربي)",
    th_name_ar:"الاسم (عر)", th_desc_ar:"الوصف (عر)",
    th_city_ar:"المدينة (عر)", th_address_ar:"العنوان (عر)", th_hours_ar:"الأوقات (عر)", th_day_ar:"اليوم (عر)",
    img_key_lbl:"مفتاح الصورة", img_file_lbl:"ملف الصورة",
    img_key_ph:"مثال: amman_branch", img_none:"— بدون —",
    img_no_custom:"لم يتم رفع صور مخصصة بعد.",
    cat_add_title:"إضافة فئة جديدة",
    cat_key_lbl:"المفتاح (أحرف صغيرة)", cat_key_ph:"مثال: specials",
    cat_label_lbl:"التسمية", cat_label_ph:"مثال: عروض خاصة",
    cat_icon_lbl:"الأيقونة (إيموجي)",
    cat_subs_lbl:"الفئات الفرعية", cat_no_subs:"لا توجد فئات فرعية بعد",
    cat_new_sub_ph:"اسم الفئة الفرعية الجديدة",
    toast_item_saved:"تم حفظ الصنف ✓", toast_item_deleted:"تم حذف الصنف",
    toast_item_added:"تمت الإضافة — قم بالتمرير للتعديل",
    toast_branch_saved:"تم حفظ الفرع ✓", toast_branch_deleted:"تم حذف الفرع", toast_branch_added:"تمت إضافة الفرع",
    toast_hours_saved:"تم حفظ الأوقات ✓", toast_contact_saved:"تم حفظ معلومات الاتصال ✓",
    toast_hero_saved:"تم تحديث نص الرئيسية ✓",
    toast_img_uploaded:"تم رفع الصورة ✓", toast_img_deleted:"تم حذف الصورة",
    toast_cat_added:"تمت إضافة الفئة ✓", toast_cat_saved:"تم حفظ الفئة ✓", toast_cat_deleted:"تم حذف الفئة",
    toast_sub_added:"تمت إضافة الفئة الفرعية ✓", toast_sub_removed:"تم حذف الفئة الفرعية",
    toast_bk_confirmed:"تم تأكيد الحجز", toast_bk_cancelled:"تم إلغاء الحجز",
    toast_bk_deleted:"تم حذف الحجز",
    toast_booking_unavail:"خدمة الحجز غير متاحة حالياً",
    err_db:"قاعدة البيانات غير مهيأة", err_save:"فشل الحفظ: ", err_upload:"فشل الرفع: ",
    err_img_key:"أدخل مفتاح الصورة", err_img_file:"اختر ملف صورة",
    err_img_exists:"المفتاح موجود بالفعل — اختر اسماً مختلفاً",
    err_cat_key:"أدخل مفتاح الفئة", err_cat_label:"أدخل تسمية الفئة",
    err_cat_exists:"مفتاح الفئة موجود بالفعل",
    err_sub_enter:"أدخل اسم الفئة الفرعية", err_sub_exists:"الفئة الفرعية موجودة بالفعل",
    err_update:"فشل التحديث", err_add_item:"فشل في إضافة الصنف", err_add_branch:"فشل في إضافة الفرع",
    confirm_del_item:"هل تريد حذف هذا الصنف؟", confirm_del_branch:"هل تريد حذف هذا الفرع؟",
    confirm_del_booking:"هل تريد حذف هذا الحجز؟", confirm_del_img:"حذف الصورة",
    confirm_del_cat:"هل تريد حذف هذه الفئة؟",
    confirm_cat_has_items:" صنف في هذه الفئة. هل تريد الحذف رغم ذلك؟",
    confirm_sub_has_items:" صنف في هذه الفئة الفرعية. هل تريد الحذف؟",
    lang_switch:"English",
  }
};

let currentLang = localStorage.getItem('crepello_lang') || 'en';

function t(key){ return TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.en[key] ?? key; }

function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v=t(el.dataset.i18n); if(v!==undefined) el.textContent=v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const v=t(el.dataset.i18nHtml); if(v!==undefined) el.innerHTML=v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const v=t(el.dataset.i18nPh); if(v!==undefined) el.placeholder=v;
  });
  document.querySelectorAll('.lang-btn').forEach(b=>b.textContent=t('lang_switch'));
  // Re-render select options in booking form
  const fd=document.getElementById('fDay');
  if(fd){
    const dayKeys=['day_sat','day_sun','day_mon','day_tue','day_wed','day_thu','day_fri'];
    const dayVals=['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
    fd.options[0].textContent=t('book_day_default');
    dayKeys.forEach((k,i)=>{if(fd.options[i+1]) fd.options[i+1].textContent=t(k);});
  }
  const ft=document.getElementById('fTime');
  if(ft) ft.options[0].textContent=t('book_time_default');
  const fg=document.getElementById('fGuests');
  if(fg){
    const gKeys=['book_guests_1','book_guests_2','book_guests_3','book_guests_4',
                 'book_guests_5','book_guests_6','book_guests_710','book_guests_group'];
    fg.options[0].textContent=t('book_guests_default');
    gKeys.forEach((k,i)=>{if(fg.options[i+1]) fg.options[i+1].textContent=t(k);});
  }
  // Update footer copy
  const fc=document.getElementById('footerCopy');
  if(fc) fc.textContent='© '+new Date().getFullYear()+' '+t('footer_copy');
  const fd2=document.getElementById('footerDev');
  if(fd2) fd2.innerHTML=t('footer_dev')+' <a href="https://hktechnologie.com/" target="_blank">HK Technologies</a>';
}

function setLang(lang){
  currentLang=lang;
  localStorage.setItem('crepello_lang',lang);
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  applyTranslations();
  renderHeroText();
  renderAbout();
  renderMenu();
  renderBranches();
  renderHours();
  renderFindUs();
}
const GALLERY_ORDER = [
  {key:"interior",label:"Our Space"},
  {key:"chicken_scallop",label:"Chicken Scallop"},
  {key:"steak_salmon",label:"Steak Salmon"},
  {key:"beef_stroganoff",label:"Beef Stroganoff"},
  {key:"margarita_pizza",label:"Margarita Pizza"},
  {key:"dessert_kunafa",label:"Chocolate Kunafa"},
  {key:"haloomi_salad",label:"Haloomi Salad"},
  {key:"shrimp_taco",label:"Shrimp Taco"},
  {key:"steak_chicken",label:"Steak Chicken"},
  {key:"risotto",label:"Risotto"},
  {key:"chicken_stroganoff",label:"Chicken Stroganoff"}
];
const GALLERY_CLASSES = ["tall wide","","","tall","","wide","","","","",""];

// ── State ────────────────────────────────────────────────────────
let DATA = {};

// ── Data Loading ─────────────────────────────────────────────────
async function loadData() {
  if (!db) {
    DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
    return;
  }
  try {
    const [settingsRes, branchesRes, hoursRes, menuRes, imagesRes] = await Promise.all([
      db.from('site_settings').select('key, value'),
      db.from('branches').select('*').order('sort_order'),
      db.from('opening_hours').select('*').order('sort_order'),
      db.from('menu_items').select('*').order('sort_order'),
      db.from('images').select('img_key, url')
    ]);

    if (settingsRes.data?.length) {
      settingsRes.data.forEach(s => { DATA[s.key] = s.value; });
    } else {
      DATA.hero    = { ...DEFAULT_DATA.hero };
      DATA.about   = { ...DEFAULT_DATA.about };
      DATA.contact = { ...DEFAULT_DATA.contact };
    }

    DATA.branches = (branchesRes.data?.length ? branchesRes.data : DEFAULT_DATA.branches)
      .map(b => ({ ...b, imgKey: b.img_key ?? b.imgKey ?? '' }));

    DATA.hours = hoursRes.data?.length ? hoursRes.data : DEFAULT_DATA.hours;

    DATA.menu = (menuRes.data?.length ? menuRes.data : DEFAULT_DATA.menu)
      .map(m => ({ ...m, desc: m.description ?? m.desc ?? '', desc_ar: m.description_ar ?? m.desc_ar ?? '', imgKey: m.img_key ?? m.imgKey ?? '' }));

    if (!DATA.categories) DATA.categories = DEFAULT_DATA.categories;
    if (!DATA.subcategories) {
      DATA.subcategories = {};
      DEFAULT_DATA.subcategories && Object.assign(DATA.subcategories, JSON.parse(JSON.stringify(DEFAULT_DATA.subcategories)));
      DATA.menu.forEach(m => {
        if (!DATA.subcategories[m.cat]) DATA.subcategories[m.cat] = [];
        if (m.sub && !DATA.subcategories[m.cat].includes(m.sub)) DATA.subcategories[m.cat].push(m.sub);
      });
    }

    DATA.bookings = [];

    if (imagesRes.data) {
      imagesRes.data.forEach(img => { IMG[img.img_key] = img.url; });
    }
  } catch (e) {
    console.warn('DB load failed, using defaults:', e);
    DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

function getCatIcon(key) {
  const cat = (DATA.categories||[]).find(c=>c.key===key);
  return cat ? cat.icon : (CAT_ICONS[key]||"");
}
function getCatLabel(key) {
  const tkey='cat_'+key;
  if(TRANSLATIONS[currentLang]?.[tkey]) return t(tkey);
  const cat = (DATA.categories||[]).find(c=>c.key===key);
  return cat ? cat.label : (CAT_LABELS[key]||key);
}

// ── Helpers ──────────────────────────────────────────────────────
function escH(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function slug(s){return s.replace(/[^a-z0-9]/gi,"_").toLowerCase();}
function toast(msg,isErr){
  const c=document.getElementById("toastContainer");
  const t=document.createElement("div");
  t.className="toast"+(isErr?" error":"");
  t.innerHTML=`<span class="toast-icon">${isErr?"✕":"✓"}</span>${msg}`;
  c.appendChild(t);
  setTimeout(()=>{t.style.opacity="0";t.style.transform="translateX(20px)";t.style.transition="all .3s";setTimeout(()=>t.remove(),350)},2500);
}
function flashRow(id){const el=document.getElementById(id);if(!el)return;el.style.background="rgba(201,169,110,.12)";setTimeout(()=>el.style.background="",700);}
function loc(item,field){if(currentLang==='ar'){const v=item[field+'_ar'];if(v)return v;}return item[field]||'';}

// ── Loading screen ───────────────────────────────────────────────
window.addEventListener("load",()=>{
  setTimeout(()=>{
    const l=document.getElementById("loader");
    l.classList.add("hide");
    setTimeout(()=>l.remove(),700);
  },800);
});

// ── Progress bar ─────────────────────────────────────────────────
const progressBar=document.getElementById("progressBar");
window.addEventListener("scroll",()=>{
  const h=document.documentElement;
  const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
  progressBar.style.width=pct+"%";
  document.getElementById("scrollTop").classList.toggle("show",h.scrollTop>400);
});
document.getElementById("scrollTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

// ── Nav ──────────────────────────────────────────────────────────
window.addEventListener("scroll",()=>{
  document.getElementById("mainNav").classList.toggle("scrolled",window.scrollY>60);
},true);
function toggleMobile(){
  document.getElementById("mobileMenu").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
function closeMobile(){
  document.getElementById("mobileMenu").classList.remove("open");
  document.getElementById("hamburgerBtn").classList.remove("open");
}

// ── Hero slideshow ───────────────────────────────────────────────
let heroIdx=0;
const heroSlides=document.querySelectorAll(".hero-slide");
const heroDots=document.querySelectorAll(".hero-dot");
function goToSlide(i){
  heroSlides[heroIdx].classList.remove("active");
  heroDots[heroIdx]?.classList.remove("active");
  heroIdx=i;
  heroSlides[heroIdx].classList.add("active");
  heroDots[heroIdx]?.classList.add("active");
}
setInterval(()=>goToSlide((heroIdx+1)%heroSlides.length),4800);
heroDots.forEach((d,i)=>d.addEventListener("click",()=>goToSlide(i)));

// ── Hero text ────────────────────────────────────────────────────
function renderHeroText(){
  const h=DATA.hero;
  const tag=document.getElementById("heroTag"); if(tag) tag.textContent=loc(h,'tag');
  const sub=document.getElementById("heroSub"); if(sub) sub.textContent=loc(h,'sub');
  const title=document.getElementById("heroTitle"); if(title) title.innerHTML=loc(h,'title');
}

// ── About ────────────────────────────────────────────────────────
function renderAbout(){
  const a=DATA.about;
  const se=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v||"";};
  const si=(id,v)=>{const e=document.getElementById(id);if(e)e.innerHTML=v||"";};
  se("aboutYear",a.year); se("aboutYearLabel",loc(a,'yearLabel'));
  si("aboutTitle",loc(a,'title')); se("aboutP1",loc(a,'p1')); se("aboutP2",loc(a,'p2'));
  se("stat1Num",a.s1n); se("stat1Label",loc(a,'s1l'));
  se("stat2Num",a.s2n); se("stat2Label",loc(a,'s2l'));
  se("stat3Num",a.s3n); se("stat3Label",loc(a,'s3l'));
  se("stat4Num",a.s4n); se("stat4Label",loc(a,'s4l'));
}

// ── Gallery ──────────────────────────────────────────────────────
function renderGallery(){
  const g=document.getElementById("galleryGrid");
  if(!g) return;
  g.innerHTML=GALLERY_ORDER.map((item,i)=>{
    const src=IMG[item.key];
    if(!src) return "";
    return `<div class="gallery-item ${GALLERY_CLASSES[i]||""}" onclick="openLightbox('${item.key}','${item.label}')">
      <img src="${src}" alt="${item.label}" loading="lazy"/>
      <div class="gallery-label">${item.label}</div>
    </div>`;
  }).join("");
}

// ── Lightbox ─────────────────────────────────────────────────────
function openLightbox(key,label){
  const lb=document.getElementById("lightbox");
  const img=document.getElementById("lbImg");
  const cap=document.getElementById("lbCaption");
  img.src=IMG[key]||"";
  cap.textContent=label||"";
  lb.classList.add("open");
}
function closeLightbox(){document.getElementById("lightbox").classList.remove("open");}
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    closeLightbox();
    if(document.getElementById("adminOverlay").classList.contains("open")) closeAdmin();
  }
});

// ── Branches ─────────────────────────────────────────────────────
function renderBranches(){
  const g=document.getElementById("branchesGrid");
  if(!g) return;
  g.innerHTML=DATA.branches.map(b=>`
    <div class="branch-card fi">
      <div class="branch-img">
        ${b.imgKey&&IMG[b.imgKey]?`<img src="${IMG[b.imgKey]}" alt="${loc(b,'city')}" loading="lazy"/>`:'<div class="branch-img-ph">📍</div>'}
        <div class="branch-status ${b.status==="open"?"st-open":"st-soon"}">${b.status==="open"?t('branch_open'):t('branch_soon')}</div>
      </div>
      <div class="branch-body">
        <div class="branch-city">${loc(b,'city')}</div>
        <div class="branch-address">${loc(b,'address')}</div>
        <div class="branch-hours">${loc(b,'hours')}</div>
      </div>
    </div>`).join("");
  observeFI();
}

// ── Hours ────────────────────────────────────────────────────────
function renderHours(){
  const el=document.getElementById("hoursList");
  if(!el) return;
  el.innerHTML=DATA.hours.map(h=>`
    <div class="hours-row">
      <span class="hours-day">${loc(h,'day')}</span>
      <span class="${h.closed?"hours-closed":"hours-time"}">${h.closed?t('hours_closed'):h.time}</span>
    </div>`).join("");
}

// ── Menu ─────────────────────────────────────────────────────────
let activeCat="food", activeSubs={};
function renderMenu(){
  const catsEl=document.getElementById("menuCats");
  const subsEl=document.getElementById("menuSubs");
  const panelsEl=document.getElementById("menuPanels");
  if(!catsEl||!subsEl||!panelsEl) return;
  const cats=[...new Set(DATA.menu.map(m=>m.cat))];
  catsEl.innerHTML=cats.map(c=>`
    <button class="menu-cat-btn${c===activeCat?" active":""}" onclick="switchCat('${c}')">
      ${getCatIcon(c)} ${getCatLabel(c)}
    </button>`).join("");
  renderMenuSubs();
}

function renderMenuSubs(){
  const subsEl=document.getElementById("menuSubs");
  const panelsEl=document.getElementById("menuPanels");
  const catItems=DATA.menu.filter(m=>m.cat===activeCat);
  const subs=[...new Set(catItems.map(m=>m.sub))];
  if(!activeSubs[activeCat]) activeSubs[activeCat]=subs[0]||"";
  const activeSub=activeSubs[activeCat];
  subsEl.innerHTML=`<div class="menu-subs-label">${t('menu_browse')}</div>`+subs.map(s=>`
    <button class="menu-sub-btn${s===activeSub?" active":""}" onclick="switchSub('${s}')">${s}</button>`).join("");
  panelsEl.innerHTML=subs.map(s=>{
    const items=catItems.filter(m=>m.sub===s);
    const pid="sp_"+slug(s);
    return `<div class="menu-sub-panel${s===activeSub?" active":""}" id="${pid}">
      ${items.map(item=>{
        const src=item.imgKey&&IMG[item.imgKey]?IMG[item.imgKey]:null;
        const displayName=loc(item,'name');
        const displayDesc=loc(item,'desc');
        return `<div class="menu-card" onclick="${src?`openLightbox('${item.imgKey}','${displayName.replace(/'/g,"\'")}')`:""}" style="${src?"":"cursor:default"}">
          <div class="menu-card-img">
            ${src?`<img src="${src}" alt="${displayName}" loading="lazy"/><div class="menu-zoom-icon">🔍</div>`:'<div class="menu-card-img-ph">✦</div>'}
          </div>
          <div class="menu-card-body">
            <div class="menu-card-name">${displayName}</div>
            <div class="menu-card-desc">${displayDesc}</div>
            <div class="menu-card-footer">
              <div class="menu-card-price">₪${item.price}</div>
              <div class="menu-card-tag">${item.sub}</div>
            </div>
          </div>
        </div>`;
      }).join("")}
    </div>`;
  }).join("");
}

function switchCat(cat){
  activeCat=cat;
  document.querySelectorAll(".menu-cat-btn").forEach(b=>{
    b.classList.toggle("active",b.textContent.trim().includes(getCatLabel(cat)));
  });
  renderMenuSubs();
}
function switchSub(sub){
  activeSubs[activeCat]=sub;
  document.querySelectorAll(".menu-sub-btn").forEach(b=>b.classList.toggle("active",b.textContent.trim()===sub));
  document.querySelectorAll(".menu-sub-panel").forEach(p=>p.classList.remove("active"));
  const t=document.getElementById("sp_"+slug(sub));
  if(t) t.classList.add("active");
}

// ── Search ───────────────────────────────────────────────────────
function handleMenuSearch(e){
  const q=e.target.value.trim().toLowerCase();
  if(!q){renderMenuSubs();document.getElementById("menuSubs").style.display="";return;}
  const panelsEl=document.getElementById("menuPanels");
  const subsEl=document.getElementById("menuSubs");
  subsEl.innerHTML="";
  subsEl.style.display="none";
  const results=DATA.menu.filter(m=>
    m.name.toLowerCase().includes(q)||m.desc.toLowerCase().includes(q)||m.sub.toLowerCase().includes(q)||
    (m.name_ar||'').includes(q)||(m.desc_ar||'').includes(q)
  );
  if(!results.length){panelsEl.innerHTML='<div class="menu-no-results">'+t('menu_no_results')+' "'+q+'"</div>';return;}
  panelsEl.innerHTML=`<div class="menu-sub-panel active">${results.map(item=>{
    const src=item.imgKey&&IMG[item.imgKey]?IMG[item.imgKey]:null;
    return `<div class="menu-card">
      <div class="menu-card-img">
        ${src?`<img src="${src}" alt="${loc(item,'name')}" loading="lazy"/>`:'<div class="menu-card-img-ph">✦</div>'}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${loc(item,'name')}</div>
        <div class="menu-card-desc">${loc(item,'desc')}</div>
        <div class="menu-card-footer">
          <div class="menu-card-price">₪${item.price}</div>
          <div class="menu-card-tag">${getCatLabel(item.cat)} · ${item.sub}</div>
        </div>
      </div>
    </div>`;
  }).join("")}</div>`;
}

// ── Find Us ──────────────────────────────────────────────────────
function renderFindUs(){
  const locsEl=document.getElementById("findusLocs");
  if(locsEl) locsEl.innerHTML=DATA.branches.filter(b=>b.status==="open").map(b=>`
    <div class="findus-loc">
      <div class="findus-loc-city">${loc(b,'city')}</div>
      <div class="findus-loc-addr">${loc(b,'address')}</div>
      <div class="findus-loc-hours">${loc(b,'hours')}</div>
    </div>`).join("");
  const c=DATA.contact;
  const cEl=document.getElementById("findusContacts");
  if(cEl) cEl.innerHTML=`
    <div class="contact-row"><div class="contact-ico">📞</div><div class="contact-val"><a href="tel:${c.phone1}">${c.phone1}</a></div></div>
    <div class="contact-row"><div class="contact-ico">📱</div><div class="contact-val"><a href="tel:${c.phone2}">${c.phone2}</a></div></div>
    <div class="contact-row"><div class="contact-ico">✉</div><div class="contact-val"><a href="mailto:${c.email}">${c.email}</a></div></div>`;
  const sEl=document.getElementById("findusSocial");
  if(sEl) sEl.innerHTML=`
    <a href="${c.instagram}" target="_blank" class="social-link">📷</a>
    <a href="${c.facebook}" target="_blank" class="social-link">📘</a>
    <a href="${c.tiktok}" target="_blank" class="social-link">🎵</a>`;
  const fSoc=document.getElementById("footerSocial");
  if(fSoc) fSoc.innerHTML=`
    <a href="${c.instagram}" target="_blank" class="footer-soc">📷</a>
    <a href="${c.facebook}" target="_blank" class="footer-soc">📘</a>
    <a href="${c.tiktok}" target="_blank" class="footer-soc">🎵</a>`;
}

// ── Booking ──────────────────────────────────────────────────────
async function submitBooking(){
  const fields=[
    {id:"fName",  err:"fNameErr",  ok:v=>v.trim().length>=4},
    {id:"fPhone", err:"fPhoneErr", ok:v=>v.trim().length>=9},
    {id:"fDay",   err:"fDayErr",   ok:v=>v!==""},
    {id:"fTime",  err:"fTimeErr",  ok:v=>v!==""},
    {id:"fGuests",err:"fGuestsErr",ok:v=>v!==""},
  ];
  let valid=true;
  fields.forEach(f=>{
    const el=document.getElementById(f.id);
    const errEl=document.getElementById(f.err);
    const ok=el&&f.ok(el.value);
    if(el) el.classList.toggle("err",!ok);
    if(errEl) errEl.classList.toggle("show",!ok);
    if(!ok) valid=false;
  });
  if(!valid) return;

  if(!db){toast(t('toast_booking_unavail'),true);return;}

  const bk={
    name:document.getElementById("fName").value.trim(),
    phone:document.getElementById("fPhone").value.trim(),
    day:document.getElementById("fDay").value,
    time:document.getElementById("fTime").value,
    guests:document.getElementById("fGuests").value,
    submitted_at:new Date().toLocaleString("en-GB"),
    status:"pending"
  };
  const {error}=await db.from('bookings').insert(bk);
  if(error){toast("Error: "+error.message,true);console.error("Booking insert error:",error);return;}
  document.getElementById("bookingFormInner").style.display="none";
  document.getElementById("bookingSuccess").classList.add("show");
}

// ── Counter animation ────────────────────────────────────────────
function animateCounter(el,targetStr){
  const match=targetStr.match(/[\d,]+/);
  if(!match){el.textContent=targetStr;return;}
  const target=parseInt(match[0].replace(/,/g,""));
  const suffix=targetStr.replace(match[0],"");
  let start=0;
  const dur=1400;
  const step=timestamp=>{
    if(!start) start=timestamp;
    const progress=Math.min((timestamp-start)/dur,1);
    const ease=1-Math.pow(1-progress,3);
    const current=Math.round(ease*target);
    el.textContent=(current>=1000?current.toLocaleString():current)+suffix;
    if(progress<1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ── Fade-in observer ─────────────────────────────────────────────
function observeFI(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add("vis"),i*70);
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.1});
  document.querySelectorAll(".fi:not(.vis)").forEach(el=>obs.observe(el));
}

// Stats counter observer
function observeStats(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const nums=e.target.querySelectorAll(".stat-num");
        nums.forEach(n=>animateCounter(n,n.textContent));
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.4});
  const statsEl=document.querySelector(".about-stats");
  if(statsEl) obs.observe(statsEl);
}

// ══════════════ ADMIN PANEL ══════════════════════════════════════

async function openAdmin(){
  document.getElementById("adminOverlay").classList.add("open");
  if(db){
    const {data:{session}}=await db.auth.getSession();
    if(session){
      document.getElementById("adminLoginWrap").style.display="none";
      document.getElementById("adminMain").classList.add("show");
      showAdminPage("bookings");
      return;
    }
  }
  document.getElementById("adminLoginWrap").style.display="flex";
  document.getElementById("adminMain").classList.remove("show");
  setTimeout(()=>document.getElementById("alInput").focus(),100);
}

function closeAdmin(){document.getElementById("adminOverlay").classList.remove("open");}

async function doAdminLogin(){
  if(!db){toast("Database not configured",true);return;}
  const email=document.getElementById("alEmail").value.trim();
  const password=document.getElementById("alInput").value;
  const {error}=await db.auth.signInWithPassword({email,password});
  if(error){
    document.getElementById("alErr").classList.add("show");
    document.getElementById("alInput").value="";
    document.getElementById("alInput").focus();
  } else {
    document.getElementById("adminLoginWrap").style.display="none";
    document.getElementById("adminMain").classList.add("show");
    showAdminPage("bookings");
  }
}

async function doAdminLogout(){
  if(db) await db.auth.signOut();
  closeAdmin();
}

document.addEventListener("keydown",e=>{
  if(e.ctrlKey&&e.shiftKey&&e.key==="A"){e.preventDefault();openAdmin();}
  if(e.key==="Enter"&&document.getElementById("adminLoginWrap")?.style.display!=="none"
     &&document.getElementById("adminOverlay").classList.contains("open")) doAdminLogin();
});

function showAdminPage(page){
  document.querySelectorAll(".ap").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".am-nav").forEach(n=>n.classList.toggle("active",n.dataset.page===page));
  const pg=document.getElementById("ap-"+page);
  if(pg) pg.classList.add("active");
  ({bookings:renderAdminBookings, menu:renderAdminMenu, categories:renderAdminCategories,
    branches:renderAdminBranches, hours:renderAdminHours, contact:renderAdminContact,
    hero:renderAdminHero, images:renderAdminImages})[page]?.();
}

// ── Admin: Bookings ──────────────────────────────────────────────
async function renderAdminBookings(){
  const el=document.getElementById("ap-bookings-body");
  if(!el) return;
  if(!db){el.innerHTML=`<div class="empty-msg">${t('ap_bookings_loading')}</div>`;return;}
  el.innerHTML=`<div class="empty-msg">${t('ap_bookings_loading')}</div>`;

  const {data:bookings,error}=await db.from('bookings').select('*').order('created_at',{ascending:false});
  if(error){el.innerHTML=`<div class="empty-msg">Failed to load bookings: ${error.message}</div>`;return;}

  DATA.bookings=bookings||[];
  const total=DATA.bookings.length;
  const pending=DATA.bookings.filter(b=>b.status==="pending").length;
  const confirmed=DATA.bookings.filter(b=>b.status==="confirmed").length;
  el.innerHTML=`<div class="admin-stat-row">
    <div class="admin-stat"><div class="admin-stat-num">${total}</div><div class="admin-stat-lbl">${t('th_total')}</div></div>
    <div class="admin-stat"><div class="admin-stat-num">${pending}</div><div class="admin-stat-lbl">${t('th_pending')}</div></div>
    <div class="admin-stat"><div class="admin-stat-num">${confirmed}</div><div class="admin-stat-lbl">${t('th_confirmed')}</div></div>
  </div>`+(total?`<div style="overflow-x:auto"><table class="at">
    <thead><tr><th>${t('th_num')}</th><th>${t('th_name')}</th><th>${t('th_phone')}</th><th>${t('th_day')}</th><th>${t('th_time')}</th><th>${t('th_guests')}</th><th>${t('th_submitted')}</th><th>${t('th_status')}</th><th>${t('th_actions')}</th></tr></thead>
    <tbody>${DATA.bookings.map((b,i)=>`
      <tr id="bkrow_${b.id}">
        <td style="color:var(--muted)">${i+1}</td>
        <td style="color:var(--cream)">${b.name}</td>
        <td>${b.phone}</td>
        <td>${b.day}</td>
        <td>${b.time}</td>
        <td>${b.guests}</td>
        <td style="color:var(--muted);font-size:.72rem">${b.submitted_at||''}</td>
        <td><span class="bk-badge bk-${b.status}">${t('bk_status_'+b.status)||b.status}</span></td>
        <td style="display:flex;gap:6px;flex-wrap:wrap">
          ${b.status!=="confirmed"?`<button class="confirm-btn" onclick="updateBooking(${b.id},'confirmed')">${t('btn_confirm_bk')}</button>`:""}
          ${b.status!=="cancelled"?`<button class="cancel-btn" onclick="updateBooking(${b.id},'cancelled')">${t('btn_cancel_bk')}</button>`:""}
          <button class="del-btn" onclick="deleteBooking(${b.id})">${t('btn_del')}</button>
        </td>
      </tr>`).join("")}
    </tbody></table></div>`
  :`<div class="empty-msg">${t('ap_bookings_empty')}</div>`);
}

async function updateBooking(id,status){
  if(!db) return;
  const{error}=await db.from('bookings').update({status}).eq('id',id);
  if(!error){renderAdminBookings();toast(t('toast_bk_'+status));}
  else toast(t('err_update'),true);
}

async function deleteBooking(id){
  if(!confirm(t('confirm_del_booking'))) return;
  if(!db) return;
  await db.from('bookings').delete().eq('id',id);
  renderAdminBookings();
  toast(t('toast_bk_deleted'));
}

// ── Admin: Menu ──────────────────────────────────────────────────
function renderAdminMenu(){
  const el=document.getElementById("ap-menu-body");
  if(!el) return;
  const cats=DATA.categories||[...new Set(DATA.menu.map(m=>m.cat))].map(k=>({key:k,label:getCatLabel(k)}));
  el.innerHTML=`<div style="overflow-x:auto"><table class="at" style="min-width:680px">
    <thead><tr><th>${t('th_name')}</th><th>${t('th_cat')}</th><th>${t('th_sub')}</th><th>${t('th_desc')}</th><th>${t('th_price')}</th><th>${t('th_image')}</th><th>${t('th_actions')}</th></tr></thead>
    <tbody>${DATA.menu.map(item=>`
      <tr id="mrow_${item.id}">
        <td>
          <input class="ei" id="mn_${item.id}" value="${escH(item.name)}" style="min-width:120px" placeholder="English"/>
          <input class="ei" id="mn_ar_${item.id}" value="${escH(item.name_ar||'')}" style="min-width:120px;margin-top:4px;border-color:var(--muted)" placeholder="${t('th_name_ar')}…" dir="rtl"/>
        </td>
        <td><select class="es" id="mc_${item.id}" onchange="refreshSubDatalist(${item.id})">${cats.map(c=>`<option value="${c.key||c}"${(c.key||c)===item.cat?" selected":""}>${c.label||getCatLabel(c)}</option>`).join("")}</select></td>
        <td>
          <input class="ei" id="ms_${item.id}" value="${escH(item.sub)}" style="min-width:100px" list="sdl_${item.id}"/>
          <datalist id="sdl_${item.id}">${(DATA.subcategories[item.cat]||[]).map(s=>`<option value="${escH(s)}"></option>`).join("")}</datalist>
        </td>
        <td>
          <input class="ei" id="md_${item.id}" value="${escH(item.desc)}" style="min-width:180px" placeholder="English"/>
          <input class="ei" id="md_ar_${item.id}" value="${escH(item.desc_ar||'')}" style="min-width:180px;margin-top:4px;border-color:var(--muted)" placeholder="${t('th_desc_ar')}…" dir="rtl"/>
        </td>
        <td><input class="ei" id="mp_${item.id}" value="${escH(item.price)}" style="width:60px"/></td>
        <td><select class="es" id="mi_${item.id}" style="min-width:110px">
          ${`<option value="">— none —</option>`+Object.keys(IMG).map(k=>`<option value="${k}"${k===item.imgKey?" selected":""}>${k}</option>`).join("")}
        </select></td>
        <td style="display:flex;gap:5px;align-items:center;white-space:nowrap">
          <button class="save-btn" onclick="saveMenuItem(${item.id})">${t('btn_save')}</button>
          <button class="del-btn" onclick="deleteMenuItem(${item.id})">${t('btn_del')}</button>
        </td>
      </tr>`).join("")}
    </tbody></table></div>`;
}

async function saveMenuItem(id){
  if(!db){toast(t('err_db'),true);return;}
  const item=DATA.menu.find(m=>m.id===id);if(!item) return;
  const name   =document.getElementById("mn_"+id)?.value||item.name;
  const nameAr =document.getElementById("mn_ar_"+id)?.value??item.name_ar??'';
  const cat    =document.getElementById("mc_"+id)?.value||item.cat;
  const sub    =document.getElementById("ms_"+id)?.value||item.sub;
  const desc   =document.getElementById("md_"+id)?.value||item.desc;
  const descAr =document.getElementById("md_ar_"+id)?.value??item.desc_ar??'';
  const price  =document.getElementById("mp_"+id)?.value||item.price;
  const imgKey =document.getElementById("mi_"+id)?.value||"";
  const{error}=await db.from('menu_items').update({name,name_ar:nameAr,cat,sub,description:desc,description_ar:descAr,price,img_key:imgKey}).eq('id',id);
  if(!error){
    Object.assign(item,{name,name_ar:nameAr,cat,sub,desc,desc_ar:descAr,price,imgKey});
    renderMenu();flashRow("mrow_"+id);toast(t('toast_item_saved'));
  } else toast(t('err_save')+error.message,true);
}

async function deleteMenuItem(id){
  if(!confirm(t('confirm_del_item'))) return;
  if(!db) return;
  await db.from('menu_items').delete().eq('id',id);
  DATA.menu=DATA.menu.filter(m=>m.id!==id);
  renderAdminMenu();renderMenu();toast(t('toast_item_deleted'));
}

function refreshSubDatalist(id){
  const catEl=document.getElementById("mc_"+id);
  const dl=document.getElementById("sdl_"+id);
  if(!catEl||!dl) return;
  const subs=DATA.subcategories[catEl.value]||[];
  dl.innerHTML=subs.map(s=>`<option value="${escH(s)}"></option>`).join("");
}

async function addMenuItem(){
  if(!db){toast("Database not configured",true);return;}
  const firstCat=(DATA.categories&&DATA.categories[0]?.key)||'food';
  const firstSub=(DATA.subcategories[firstCat]&&DATA.subcategories[firstCat][0])||'Mains';
  const maxSort=DATA.menu.length?Math.max(...DATA.menu.map(m=>m.sort_order||0)):0;
  const{data,error}=await db.from('menu_items').insert({
    cat:firstCat,sub:firstSub,name:'New Item',name_ar:'',description:'Item description',description_ar:'',price:'30',img_key:'',sort_order:maxSort+1
  }).select().single();
  if(error||!data){toast(t('err_add_item'),true);return;}
  DATA.menu.push({...data,desc:data.description,desc_ar:data.description_ar||'',imgKey:data.img_key});
  renderAdminMenu();renderMenu();toast(t('toast_item_added'));
}

// ── Admin: Branches ──────────────────────────────────────────────
function renderAdminBranches(){
  const el=document.getElementById("ap-branches-body");
  if(!el) return;
  el.innerHTML=`<div style="overflow-x:auto"><table class="at" style="min-width:600px">
    <thead><tr><th>${t('th_city')}</th><th>${t('th_address')}</th><th>${t('th_hours')}</th><th>${t('th_status')}</th><th>${t('th_image')}</th><th>${t('th_actions')}</th></tr></thead>
    <tbody>${DATA.branches.map(b=>`
      <tr id="brrow_${b.id}">
        <td>
          <input class="ei" id="bc_${b.id}" value="${escH(b.city)}" style="min-width:120px" placeholder="English"/>
          <input class="ei" id="bc_ar_${b.id}" value="${escH(b.city_ar||'')}" style="min-width:120px;margin-top:4px;border-color:var(--muted)" placeholder="${t('th_city_ar')}…" dir="rtl"/>
        </td>
        <td>
          <input class="ei" id="ba_${b.id}" value="${escH(b.address)}" style="min-width:160px" placeholder="English"/>
          <input class="ei" id="ba_ar_${b.id}" value="${escH(b.address_ar||'')}" style="min-width:160px;margin-top:4px;border-color:var(--muted)" placeholder="${t('th_address_ar')}…" dir="rtl"/>
        </td>
        <td>
          <input class="ei" id="bh_${b.id}" value="${escH(b.hours)}" style="min-width:130px" placeholder="English"/>
          <input class="ei" id="bh_ar_${b.id}" value="${escH(b.hours_ar||'')}" style="min-width:130px;margin-top:4px;border-color:var(--muted)" placeholder="${t('th_hours_ar')}…" dir="rtl"/>
        </td>
        <td><select class="es" id="bs_${b.id}" style="width:90px">
          <option value="open"${b.status==="open"?" selected":""}>${t('br_status_open')}</option>
          <option value="soon"${b.status==="soon"?" selected":""}>${t('br_status_soon')}</option>
        </select></td>
        <td><select class="es" id="bi_${b.id}" style="min-width:100px">
          ${`<option value="">${t('img_none')}</option>`+Object.keys(IMG).map(k=>`<option value="${k}"${k===b.imgKey?" selected":""}>${k}</option>`).join("")}
        </select></td>
        <td style="display:flex;gap:5px">
          <button class="save-btn" onclick="saveBranch(${b.id})">${t('btn_save')}</button>
          <button class="del-btn" onclick="deleteBranch(${b.id})">${t('btn_del')}</button>
        </td>
      </tr>`).join("")}
    </tbody></table></div>`;
}

async function saveBranch(id){
  if(!db){toast(t('err_db'),true);return;}
  const b=DATA.branches.find(x=>x.id===id);if(!b) return;
  const city     =document.getElementById("bc_"+id)?.value||b.city;
  const cityAr   =document.getElementById("bc_ar_"+id)?.value??b.city_ar??'';
  const address  =document.getElementById("ba_"+id)?.value||b.address;
  const addressAr=document.getElementById("ba_ar_"+id)?.value??b.address_ar??'';
  const hours    =document.getElementById("bh_"+id)?.value||b.hours;
  const hoursAr  =document.getElementById("bh_ar_"+id)?.value??b.hours_ar??'';
  const status   =document.getElementById("bs_"+id)?.value||b.status;
  const imgKey   =document.getElementById("bi_"+id)?.value||"";
  const{error}=await db.from('branches').update({city,city_ar:cityAr,address,address_ar:addressAr,hours,hours_ar:hoursAr,status,img_key:imgKey}).eq('id',id);
  if(!error){
    Object.assign(b,{city,city_ar:cityAr,address,address_ar:addressAr,hours,hours_ar:hoursAr,status,imgKey});
    renderBranches();renderFindUs();flashRow("brrow_"+id);toast(t('toast_branch_saved'));
  } else toast(t('err_save')+error.message,true);
}

async function deleteBranch(id){
  if(!confirm(t('confirm_del_branch'))) return;
  if(!db) return;
  await db.from('branches').delete().eq('id',id);
  DATA.branches=DATA.branches.filter(b=>b.id!==id);
  renderAdminBranches();renderBranches();renderFindUs();toast(t('toast_branch_deleted'));
}

async function addBranch(){
  if(!db){toast(t('err_db'),true);return;}
  const maxSort=DATA.branches.length?Math.max(...DATA.branches.map(b=>b.sort_order||0)):0;
  const{data,error}=await db.from('branches').insert({
    city:'New City',city_ar:'',address:'Address, City, Country',address_ar:'',hours:'10:00 AM – 10:00 PM',hours_ar:'',status:'soon',img_key:'',sort_order:maxSort+1
  }).select().single();
  if(error||!data){toast(t('err_add_branch'),true);return;}
  DATA.branches.push({...data,imgKey:data.img_key});
  renderAdminBranches();renderBranches();renderFindUs();toast(t('toast_branch_added'));
}

// ── Admin: Hours ─────────────────────────────────────────────────
function renderAdminHours(){
  const el=document.getElementById("ap-hours-body");
  if(!el) return;
  el.innerHTML=`<table class="at"><thead><tr><th>${t('th_day')}</th><th>${t('th_day_ar')}</th><th>${t('th_time')}</th><th>${t('th_closed')}</th><th></th></tr></thead>
    <tbody>${DATA.hours.map(h=>`
      <tr id="hrow_${h.id}">
        <td><input class="ei" id="hd_${h.id}" value="${escH(h.day)}" style="width:110px"/></td>
        <td><input class="ei" id="hd_ar_${h.id}" value="${escH(h.day_ar||'')}" style="width:110px" dir="rtl" placeholder="${t('th_day_ar')}…"/></td>
        <td><input class="ei" id="ht_${h.id}" value="${escH(h.time)}"/></td>
        <td><select class="es" id="hc_${h.id}" style="width:80px">
          <option value="0"${!h.closed?" selected":""}>${t('hr_open')}</option>
          <option value="1"${h.closed?" selected":""}>${t('hr_closed')}</option>
        </select></td>
        <td><button class="save-btn" onclick="saveHour(${h.id})">${t('btn_save')}</button></td>
      </tr>`).join("")}
    </tbody></table>`;
}

async function saveHour(id){
  if(!db){toast("Database not configured",true);return;}
  const h=DATA.hours.find(x=>x.id===id);if(!h) return;
  const day   =document.getElementById("hd_"+id)?.value||h.day;
  const dayAr =document.getElementById("hd_ar_"+id)?.value??h.day_ar??'';
  const time  =document.getElementById("ht_"+id)?.value||h.time;
  const closed=document.getElementById("hc_"+id)?.value==="1";
  const{error}=await db.from('opening_hours').update({day,day_ar:dayAr,time,closed}).eq('id',id);
  if(!error){
    Object.assign(h,{day,day_ar:dayAr,time,closed});
    renderHours();flashRow("hrow_"+id);toast(t('toast_hours_saved'));
  } else toast(t('err_save')+error.message,true);
}

// ── Admin: Contact ───────────────────────────────────────────────
function renderAdminContact(){
  const el=document.getElementById("ap-contact-body");
  if(!el) return;
  const c=DATA.contact;
  const rows=[["phone1",t('ct_phone1'),c.phone1],["phone2",t('ct_phone2'),c.phone2],["email",t('ct_email'),c.email],
    ["instagram",t('ct_instagram'),c.instagram],["facebook",t('ct_facebook'),c.facebook],["tiktok",t('ct_tiktok'),c.tiktok]];
  el.innerHTML=`<table class="at"><thead><tr><th>${t('th_field')}</th><th>${t('th_value')}</th><th></th></tr></thead>
    <tbody>${rows.map(([k,lbl,val])=>`
      <tr id="crow_${k}">
        <td style="color:var(--gold);width:130px">${lbl}</td>
        <td><input class="ei" id="cv_${k}" value="${escH(val)}"/></td>
        <td><button class="save-btn" onclick="saveContact('${k}')">${t('btn_save')}</button></td>
      </tr>`).join("")}
    </tbody></table>`;
}

async function saveContact(k){
  if(!db){toast("Database not configured",true);return;}
  const val=document.getElementById("cv_"+k)?.value;
  if(val===undefined) return;
  DATA.contact[k]=val;
  const{error}=await db.from('site_settings').upsert({key:'contact',value:DATA.contact});
  if(!error){renderFindUs();flashRow("crow_"+k);toast(t('toast_contact_saved'));}
  else toast(t('err_save')+error.message,true);
}

// ── Admin: Hero ──────────────────────────────────────────────────
function renderAdminHero(){
  const el=document.getElementById("ap-hero-body");
  if(!el) return;
  const h=DATA.hero;
  const rows=[
    ["tag",  t('hero_lbl_tag'),  h.tag||'',  t('hero_lbl_tag_ar'),  h.tag_ar||''],
    ["title",t('hero_lbl_title'),h.title||'',t('hero_lbl_title_ar'),h.title_ar||''],
    ["sub",  t('hero_lbl_sub'),  h.sub||'',  t('hero_lbl_sub_ar'),  h.sub_ar||'']
  ];
  el.innerHTML=`<p style="font-size:.78rem;color:var(--muted);margin-bottom:16px">${t('ap_hero_note')}</p>
    <table class="at"><thead><tr><th>${t('th_field')}</th><th>${t('th_value')} (EN)</th><th>${t('th_value')} (AR)</th><th></th></tr></thead>
    <tbody>${rows.map(([k,lbl,val,lblAr,valAr])=>`
      <tr id="hrow_${k}">
        <td style="color:var(--gold);width:120px">${lbl}</td>
        <td><input class="ei" id="hv_${k}" value="${escH(val)}" placeholder="English"/></td>
        <td><input class="ei" id="hv_ar_${k}" value="${escH(valAr)}" placeholder="${escH(lblAr)}…" dir="rtl"/></td>
        <td><button class="save-btn" onclick="saveHero('${k}')">${t('btn_save')}</button></td>
      </tr>`).join("")}
    </tbody></table>`;
}

async function saveHero(k){
  if(!db){toast("Database not configured",true);return;}
  const val=document.getElementById("hv_"+k)?.value;
  const valAr=document.getElementById("hv_ar_"+k)?.value;
  if(val===undefined) return;
  DATA.hero[k]=val;
  if(valAr!==undefined) DATA.hero[k+'_ar']=valAr;
  const{error}=await db.from('site_settings').upsert({key:'hero',value:DATA.hero});
  if(!error){renderHeroText();flashRow("hrow_"+k);toast(t('toast_hero_saved'));}
  else toast(t('err_save')+error.message,true);
}

// ── Admin: Images ────────────────────────────────────────────────
async function renderAdminImages(){
  const el=document.getElementById("ap-images-body");
  if(!el) return;
  if(!db){el.innerHTML='<div class="empty-msg">Database not configured. See SETUP.md to get started.</div>';return;}

  const{data:images}=await db.from('images').select('*').order('created_at',{ascending:false});
  const imgList=images||[];

  el.innerHTML=`
    <div style="display:flex;gap:12px;align-items:flex-end;flex-wrap:wrap;margin-bottom:26px;padding:18px;background:var(--bg2);border:1px solid var(--border);border-radius:6px">
      <div>
        <div class="form-label" style="margin-bottom:6px">${t('img_key_lbl')}</div>
        <input class="ei" id="imgKeyInput" placeholder="${t('img_key_ph')}" style="width:180px"/>
      </div>
      <div>
        <div class="form-label" style="margin-bottom:6px">${t('img_file_lbl')}</div>
        <input type="file" id="imgFileInput" accept="image/*" style="color:var(--text);font-size:.8rem;padding:4px 0"/>
      </div>
      <button class="save-btn" onclick="uploadCustomImage()">${t('btn_upload')}</button>
    </div>
    ${imgList.length===0
      ?`<div class="empty-msg">${t('img_no_custom')}</div>`
      :`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px">
          ${imgList.map(img=>`
            <div style="background:var(--bg2);border:1px solid var(--border);border-radius:6px;overflow:hidden">
              <img src="${img.url}" alt="${img.img_key}" style="width:100%;height:110px;object-fit:cover"/>
              <div style="padding:10px 12px">
                <div style="font-size:.72rem;color:var(--gold);margin-bottom:7px;word-break:break-all">${img.img_key}</div>
                <button class="del-btn" onclick="deleteCustomImage('${img.img_key}')">Delete</button>
              </div>
            </div>`).join("")}
         </div>`}`;
}

async function uploadCustomImage(){
  if(!db){toast(t('err_db'),true);return;}
  const key=document.getElementById("imgKeyInput")?.value.trim().replace(/\s+/g,"_").toLowerCase();
  const file=document.getElementById("imgFileInput")?.files[0];
  if(!key){toast(t('err_img_key'),true);return;}
  if(!file){toast(t('err_img_file'),true);return;}
  if(IMG[key]){toast(t('err_img_exists'),true);return;}

  const ext=file.name.split('.').pop().toLowerCase();
  const fileName=`${key}_${Date.now()}.${ext}`;

  const{error:upErr}=await db.storage.from('restaurant-images').upload(fileName,file,{cacheControl:'3600',upsert:false});
  if(upErr){toast(t('err_upload')+upErr.message,true);return;}

  const{data:{publicUrl}}=db.storage.from('restaurant-images').getPublicUrl(fileName);

  const{error:dbErr}=await db.from('images').insert({img_key:key,url:publicUrl,file_path:fileName});
  if(dbErr){toast(t('err_upload')+'record',true);return;}

  IMG[key]=publicUrl;
  document.getElementById("imgKeyInput").value="";
  document.getElementById("imgFileInput").value="";
  renderAdminImages();
  toast(t('toast_img_uploaded'));
}

async function deleteCustomImage(key){
  if(!confirm(`${t('confirm_del_img')} "${key}"?`)) return;
  if(!db) return;
  const{data}=await db.from('images').select('file_path').eq('img_key',key).single();
  if(data?.file_path){
    await db.storage.from('restaurant-images').remove([data.file_path]);
  }
  await db.from('images').delete().eq('img_key',key);
  delete IMG[key];
  renderAdminImages();
  toast(t('toast_img_deleted'));
}

// ── Admin: Categories ────────────────────────────────────────────
function renderAdminCategories(){
  const el=document.getElementById("ap-categories-body");
  if(!el) return;
  const cats=DATA.categories||[];
  const subs=DATA.subcategories||{};
  el.innerHTML=`
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:20px;margin-bottom:28px">
      <div style="font-size:.85rem;color:var(--gold);font-weight:600;margin-bottom:14px">${t('cat_add_title')}</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end">
        <div>
          <div class="form-label" style="margin-bottom:4px;font-size:.72rem">${t('cat_key_lbl')}</div>
          <input class="ei" id="newCatKey" placeholder="${t('cat_key_ph')}" style="width:130px"/>
        </div>
        <div>
          <div class="form-label" style="margin-bottom:4px;font-size:.72rem">${t('cat_label_lbl')}</div>
          <input class="ei" id="newCatLabel" placeholder="${t('cat_label_ph')}" style="width:130px"/>
        </div>
        <div>
          <div class="form-label" style="margin-bottom:4px;font-size:.72rem">${t('cat_icon_lbl')}</div>
          <input class="ei" id="newCatIcon" placeholder="🍴" style="width:64px;text-align:center"/>
        </div>
        <button class="add-btn" onclick="addCategory()">${t('btn_add_cat')}</button>
      </div>
    </div>
    ${cats.map(cat=>`
      <div id="catblock_${cat.key}" style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:20px;margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:18px">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
            <input class="ei" id="catIcon_${cat.key}" value="${escH(cat.icon)}" style="width:54px;text-align:center;font-size:1.1rem"/>
            <input class="ei" id="catLabel_${cat.key}" value="${escH(cat.label)}" style="width:140px"/>
            <span style="color:var(--muted);font-size:.72rem;font-style:italic">key: ${cat.key}</span>
          </div>
          <div style="display:flex;gap:7px">
            <button class="save-btn" onclick="saveCategory('${cat.key}')">${t('btn_save')}</button>
            <button class="del-btn" onclick="deleteCategory('${cat.key}')">${t('btn_del')}</button>
          </div>
        </div>
        <div style="border-top:1px solid var(--border);padding-top:14px">
          <div style="font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);margin-bottom:10px">${t('cat_subs_lbl')}</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px">
            ${(subs[cat.key]||[]).map(s=>`
              <div style="display:inline-flex;align-items:center;gap:5px;background:var(--bg3);border:1px solid var(--border);border-radius:4px;padding:5px 10px;font-size:.78rem">
                ${escH(s)}
                <button onclick="deleteSubcategory('${cat.key}','${s.replace(/'/g,"\\'")}')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:1rem;line-height:1;padding:0 2px">×</button>
              </div>`).join("")||`<span style="color:var(--muted);font-size:.78rem;font-style:italic">${t('cat_no_subs')}</span>`}
          </div>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <input class="ei" id="newSub_${cat.key}" placeholder="${t('cat_new_sub_ph')}" style="width:210px"/>
            <button class="save-btn" onclick="addSubcategory('${cat.key}')">${t('btn_add_sub')}</button>
          </div>
        </div>
      </div>`).join("")}`;
}

async function addCategory(){
  const key=(document.getElementById("newCatKey")?.value||"").trim().toLowerCase().replace(/[^a-z0-9]/g,"");
  const label=(document.getElementById("newCatLabel")?.value||"").trim();
  const icon=(document.getElementById("newCatIcon")?.value||"🍽").trim();
  if(!key){toast(t('err_cat_key'),true);return;}
  if(!label){toast(t('err_cat_label'),true);return;}
  if((DATA.categories||[]).find(c=>c.key===key)){toast(t('err_cat_exists'),true);return;}
  if(!DATA.categories) DATA.categories=[];
  if(!DATA.subcategories) DATA.subcategories={};
  DATA.categories.push({key,label,icon});
  DATA.subcategories[key]=[];
  await saveCategoriesToDB();
  document.getElementById("newCatKey").value="";
  document.getElementById("newCatLabel").value="";
  document.getElementById("newCatIcon").value="";
  renderAdminCategories();renderMenu();
  toast(t('toast_cat_added'));
}

async function saveCategory(key){
  const cat=(DATA.categories||[]).find(c=>c.key===key);
  if(!cat) return;
  cat.icon=document.getElementById("catIcon_"+key)?.value||cat.icon;
  cat.label=document.getElementById("catLabel_"+key)?.value||cat.label;
  await saveCategoriesToDB();
  renderMenu();
  document.getElementById("catblock_"+key)?.style&&(document.getElementById("catblock_"+key).style.background="rgba(201,169,110,.08)");
  setTimeout(()=>{const el=document.getElementById("catblock_"+key);if(el)el.style.background="";},700);
  toast(t('toast_cat_saved'));
}

async function deleteCategory(key){
  const itemCount=DATA.menu.filter(m=>m.cat===key).length;
  const msg=itemCount>0
    ?`${itemCount}${t('confirm_cat_has_items')}`
    :t('confirm_del_cat');
  if(!confirm(msg)) return;
  DATA.categories=(DATA.categories||[]).filter(c=>c.key!==key);
  delete (DATA.subcategories||{})[key];
  await saveCategoriesToDB();
  renderAdminCategories();renderMenu();
  toast(t('toast_cat_deleted'));
}

async function addSubcategory(catKey){
  const input=document.getElementById("newSub_"+catKey);
  const subName=(input?.value||"").trim();
  if(!subName){toast(t('err_sub_enter'),true);return;}
  if(!DATA.subcategories) DATA.subcategories={};
  if(!DATA.subcategories[catKey]) DATA.subcategories[catKey]=[];
  if(DATA.subcategories[catKey].includes(subName)){toast(t('err_sub_exists'),true);return;}
  DATA.subcategories[catKey].push(subName);
  await saveCategoriesToDB();
  if(input) input.value="";
  renderAdminCategories();
  toast(t('toast_sub_added'));
}

async function deleteSubcategory(catKey,subName){
  const itemCount=DATA.menu.filter(m=>m.cat===catKey&&m.sub===subName).length;
  if(itemCount>0&&!confirm(`"${subName}": ${itemCount}${t('confirm_sub_has_items')}`)) return;
  if(!DATA.subcategories||!DATA.subcategories[catKey]) return;
  DATA.subcategories[catKey]=DATA.subcategories[catKey].filter(s=>s!==subName);
  await saveCategoriesToDB();
  renderAdminCategories();
  toast(t('toast_sub_removed'));
}

async function saveCategoriesToDB(){
  if(!db) return;
  await Promise.all([
    db.from('site_settings').upsert({key:'categories',value:DATA.categories}),
    db.from('site_settings').upsert({key:'subcategories',value:DATA.subcategories})
  ]);
}

// ── INIT ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded",async()=>{
  await loadData();
  renderHeroText();
  renderAbout();
  renderGallery();
  renderBranches();
  renderHours();
  renderMenu();
  renderFindUs();
  observeFI();
  observeStats();
  setLang(currentLang);
});
