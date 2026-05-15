
const DEFAULT_DATA = {
  hero:{
    tag:"Fine Dining Experience",
    title:"Where Every Bite<br>Tells a <em>Story</em>",
    sub:"A culinary journey through bold flavors, crafted with passion and served with elegance — from the heart of Palestine to the world."
  },
  about:{
    year:"2020",yearLabel:"Est. Year",
    title:"Born from Passion,<br>Built on <em>Flavor</em>",
    p1:"Crepello was born from a simple belief: that food is more than nourishment — it is culture, memory, and connection. Founded in the heart of Nablus, Palestine, we set out to create a space where culinary creativity meets warm hospitality.",
    p2:"Our kitchen draws inspiration from global cuisines — from the creaminess of classic European stroganoffs to the vibrant spice of tacos — all crafted with premium local ingredients and a dedication to quality that defines every plate.",
    s1n:"3+",s1l:"Branches",s2n:"50+",s2l:"Menu Items",s3n:"100K+",s3l:"Happy Guests",s4n:"7",s4l:"Years of Excellence"
  },
  branches:[
    {id:1,city:"Nablus — Main Branch",address:"City Center, Al-Makhfiyya St., Nablus, Palestine",hours:"10:00 AM – 12:00 AM",status:"open",imgKey:"interior"},
    {id:2,city:"Ramallah",address:"Al-Irsal St., near Municipality Circle, Ramallah",hours:"11:00 AM – 11:00 PM",status:"open",imgKey:"steak_salmon"},
    {id:3,city:"Jerusalem",address:"Salah Al-Din St., East Jerusalem, Palestine",hours:"11:00 AM – 10:00 PM",status:"open",imgKey:"chicken_scallop"},
    {id:4,city:"Amman, Jordan",address:"Sweifieh District, Amman, Jordan",hours:"12:00 PM – 12:00 AM",status:"soon",imgKey:""}
  ],
  hours:[
    {day:"Saturday",time:"10:00 AM – 12:00 AM",closed:false},
    {day:"Sunday",time:"10:00 AM – 12:00 AM",closed:false},
    {day:"Monday",time:"10:00 AM – 12:00 AM",closed:false},
    {day:"Tuesday",time:"10:00 AM – 12:00 AM",closed:false},
    {day:"Wednesday",time:"10:00 AM – 12:00 AM",closed:false},
    {day:"Thursday",time:"10:00 AM – 1:00 AM",closed:false},
    {day:"Friday",time:"Closed",closed:true}
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
  bookings:[]
};

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


const ADMIN_PASS = "crepello2024";
const CAT_ICONS  = {food:"🍽", sweets:"🍰", drinks:"🥤", hookah:"💨"};
const CAT_LABELS = {food:"Food", sweets:"Sweets", drinks:"Drinks", hookah:"Hookah"};
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
Object.assign(IMG, JSON.parse(localStorage.getItem("customImgs")||"{}"));

// ── Storage ──
function gs(k,def){try{const v=localStorage.getItem("crp_"+k);return v?JSON.parse(v):def;}catch{return def;}}
function ss(k,v){try{localStorage.setItem("crp_"+k,JSON.stringify(v));}catch{}}

function loadData(){
  return {
    hero:     gs("hero",    DEFAULT_DATA.hero),
    about:    gs("about",   DEFAULT_DATA.about),
    branches: gs("branches",DEFAULT_DATA.branches),
    hours:    gs("hours",   DEFAULT_DATA.hours),
    contact:  gs("contact", DEFAULT_DATA.contact),
    menu:     gs("menu",    DEFAULT_DATA.menu),
    bookings: gs("bookings",[])
  };
}

let DATA = loadData();
let nextId = Math.max(0,...DATA.menu.map(m=>m.id),...DATA.branches.map(b=>b.id)) + 1;

// ── Helpers ──
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

// ── Loading screen ──
window.addEventListener("load",()=>{
  setTimeout(()=>{
    const l=document.getElementById("loader");
    l.classList.add("hide");
    setTimeout(()=>l.remove(),700);
  },800);
});

// ── Progress bar ──
const progressBar=document.getElementById("progressBar");
window.addEventListener("scroll",()=>{
  const h=document.documentElement;
  const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
  progressBar.style.width=pct+"%";
  document.getElementById("scrollTop").classList.toggle("show",h.scrollTop>400);
});
document.getElementById("scrollTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

// ── Nav ──
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

// ── Hero slideshow ──
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

// ── Hero text ──
function renderHeroText(){
  const h=DATA.hero;
  const tag=document.getElementById("heroTag"); if(tag) tag.textContent=h.tag||"";
  const sub=document.getElementById("heroSub"); if(sub) sub.textContent=h.sub||"";
  const title=document.getElementById("heroTitle"); if(title) title.innerHTML=h.title||"";
}

// ── About ──
function renderAbout(){
  const a=DATA.about;
  const se=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v||"";};
  const si=(id,v)=>{const e=document.getElementById(id);if(e)e.innerHTML=v||"";};
  se("aboutYear",a.year); se("aboutYearLabel",a.yearLabel);
  si("aboutTitle",a.title); se("aboutP1",a.p1); se("aboutP2",a.p2);
  se("stat1Num",a.s1n); se("stat1Label",a.s1l);
  se("stat2Num",a.s2n); se("stat2Label",a.s2l);
  se("stat3Num",a.s3n); se("stat3Label",a.s3l);
  se("stat4Num",a.s4n); se("stat4Label",a.s4l);
}

// ── Gallery ──
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

// ── Lightbox ──
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

// ── Branches ──
function renderBranches(){
  const g=document.getElementById("branchesGrid");
  if(!g) return;
  g.innerHTML=DATA.branches.map(b=>`
    <div class="branch-card fi">
      <div class="branch-img">
        ${b.imgKey&&IMG[b.imgKey]?`<img src="${IMG[b.imgKey]}" alt="${b.city}" loading="lazy"/>`:'<div class="branch-img-ph">📍</div>'}
        <div class="branch-status ${b.status==="open"?"st-open":"st-soon"}">${b.status==="open"?"● Open":"Coming Soon"}</div>
      </div>
      <div class="branch-body">
        <div class="branch-city">${b.city}</div>
        <div class="branch-address">${b.address}</div>
        <div class="branch-hours">${b.hours}</div>
      </div>
    </div>`).join("");
  observeFI();
}

// ── Hours ──
function renderHours(){
  const el=document.getElementById("hoursList");
  if(!el) return;
  el.innerHTML=DATA.hours.map(h=>`
    <div class="hours-row">
      <span class="hours-day">${h.day}</span>
      <span class="${h.closed?"hours-closed":"hours-time"}">${h.time}</span>
    </div>`).join("");
}

// ── Menu ──
let activeCat="food", activeSubs={};
function renderMenu(){
  const catsEl=document.getElementById("menuCats");
  const subsEl=document.getElementById("menuSubs");
  const panelsEl=document.getElementById("menuPanels");
  if(!catsEl||!subsEl||!panelsEl) return;
  const cats=[...new Set(DATA.menu.map(m=>m.cat))];
  catsEl.innerHTML=cats.map(c=>`
    <button class="menu-cat-btn${c===activeCat?" active":""}" onclick="switchCat('${c}')">
      ${CAT_ICONS[c]||""} ${CAT_LABELS[c]||c}
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
  subsEl.innerHTML=subs.map(s=>`
    <button class="menu-sub-btn${s===activeSub?" active":""}" onclick="switchSub('${s}')">${s}</button>`).join("");
  panelsEl.innerHTML=subs.map(s=>{
    const items=catItems.filter(m=>m.sub===s);
    const pid="sp_"+slug(s);
    return `<div class="menu-sub-panel${s===activeSub?" active":""}" id="${pid}">
      ${items.map(item=>{
        const src=item.imgKey&&IMG[item.imgKey]?IMG[item.imgKey]:null;
        return `<div class="menu-card" onclick="${src?`openLightbox('${item.imgKey}','${item.name.replace(/'/g,"\'")}')`:""}" style="${src?"":"cursor:default"}">
          <div class="menu-card-img">
            ${src?`<img src="${src}" alt="${item.name}" loading="lazy"/><div class="menu-zoom-icon">🔍</div>`:'<div class="menu-card-img-ph">✦</div>'}
          </div>
          <div class="menu-card-body">
            <div class="menu-card-name">${item.name}</div>
            <div class="menu-card-desc">${item.desc}</div>
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
    b.classList.toggle("active",b.textContent.trim().includes(CAT_LABELS[cat]||cat));
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

// ── Search ──
function handleMenuSearch(e){
  const q=e.target.value.trim().toLowerCase();
  if(!q){renderMenuSubs();return;}
  const panelsEl=document.getElementById("menuPanels");
  const subsEl=document.getElementById("menuSubs");
  subsEl.innerHTML="";
  const results=DATA.menu.filter(m=>
    m.name.toLowerCase().includes(q)||m.desc.toLowerCase().includes(q)||m.sub.toLowerCase().includes(q)
  );
  if(!results.length){panelsEl.innerHTML='<div class="menu-no-results">No items found for "'+q+'"</div>';return;}
  panelsEl.innerHTML=`<div class="menu-sub-panel active">${results.map(item=>{
    const src=item.imgKey&&IMG[item.imgKey]?IMG[item.imgKey]:null;
    return `<div class="menu-card">
      <div class="menu-card-img">
        ${src?`<img src="${src}" alt="${item.name}" loading="lazy"/>`:'<div class="menu-card-img-ph">✦</div>'}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <div class="menu-card-price">₪${item.price}</div>
          <div class="menu-card-tag">${CAT_LABELS[item.cat]||item.cat} · ${item.sub}</div>
        </div>
      </div>
    </div>`;
  }).join("")}</div>`;
}

// ── Find Us ──
function renderFindUs(){
  const locsEl=document.getElementById("findusLocs");
  if(locsEl) locsEl.innerHTML=DATA.branches.filter(b=>b.status==="open").map(b=>`
    <div class="findus-loc">
      <div class="findus-loc-city">${b.city}</div>
      <div class="findus-loc-addr">${b.address}</div>
      <div class="findus-loc-hours">${b.hours}</div>
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

// ── Booking ──
function submitBooking(){
  const fields=[
    {id:"fName",  err:"fNameErr",  ok:v=>v.trim().length>=2},
    {id:"fPhone", err:"fPhoneErr", ok:v=>v.trim().length>=7},
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
  const bk={
    id:Date.now(),
    name:document.getElementById("fName").value.trim(),
    phone:document.getElementById("fPhone").value.trim(),
    day:document.getElementById("fDay").value,
    time:document.getElementById("fTime").value,
    guests:document.getElementById("fGuests").value,
    submittedAt:new Date().toLocaleString("en-GB"),
    status:"pending"
  };
  DATA.bookings.unshift(bk);
  ss("bookings",DATA.bookings);
  document.getElementById("bookingFormInner").style.display="none";
  document.getElementById("bookingSuccess").classList.add("show");
}

// ── Counter animation ──
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

// ── Fade-in observer ──
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

// ══════════════ ADMIN PANEL ══════════════
function openAdmin(){
  document.getElementById("adminOverlay").classList.add("open");
  document.getElementById("adminLoginWrap").style.display="flex";
  document.getElementById("adminMain").classList.remove("show");
  setTimeout(()=>document.getElementById("alInput").focus(),100);
}
function closeAdmin(){document.getElementById("adminOverlay").classList.remove("open");}
function doAdminLogin(){
  if(document.getElementById("alInput").value===ADMIN_PASS){
    document.getElementById("adminLoginWrap").style.display="none";
    document.getElementById("adminMain").classList.add("show");
    showAdminPage("bookings");
  } else {
    document.getElementById("alErr").classList.add("show");
    document.getElementById("alInput").value="";
    document.getElementById("alInput").focus();
  }
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
  ({bookings:renderAdminBookings, menu:renderAdminMenu, branches:renderAdminBranches,
    hours:renderAdminHours, contact:renderAdminContact, hero:renderAdminHero,
    images:renderAdminImages})[page]?.();
}

// Bookings
function renderAdminBookings(){
  DATA.bookings=gs("bookings",[]);
  const el=document.getElementById("ap-bookings-body");
  if(!el) return;
  const total=DATA.bookings.length;
  const pending=DATA.bookings.filter(b=>b.status==="pending").length;
  const confirmed=DATA.bookings.filter(b=>b.status==="confirmed").length;
  el.innerHTML=`<div class="admin-stat-row">
    <div class="admin-stat"><div class="admin-stat-num">${total}</div><div class="admin-stat-lbl">Total</div></div>
    <div class="admin-stat"><div class="admin-stat-num">${pending}</div><div class="admin-stat-lbl">Pending</div></div>
    <div class="admin-stat"><div class="admin-stat-num">${confirmed}</div><div class="admin-stat-lbl">Confirmed</div></div>
  </div>`+(total?`<div style="overflow-x:auto"><table class="at">
    <thead><tr><th>#</th><th>Name</th><th>Phone</th><th>Day</th><th>Time</th><th>Guests</th><th>Submitted</th><th>Status</th><th>Actions</th></tr></thead>
    <tbody>${DATA.bookings.map((b,i)=>`
      <tr id="bkrow_${b.id}">
        <td style="color:var(--muted)">${i+1}</td>
        <td style="color:var(--cream)">${b.name}</td>
        <td>${b.phone}</td>
        <td>${b.day}</td>
        <td>${b.time}</td>
        <td>${b.guests}</td>
        <td style="color:var(--muted);font-size:.72rem">${b.submittedAt}</td>
        <td><span class="bk-badge bk-${b.status}">${b.status}</span></td>
        <td style="display:flex;gap:6px;flex-wrap:wrap">
          ${b.status!=="confirmed"?`<button class="confirm-btn" onclick="updateBooking(${b.id},'confirmed')">✓ Confirm</button>`:""}
          ${b.status!=="cancelled"?`<button class="cancel-btn" onclick="updateBooking(${b.id},'cancelled')">✕ Cancel</button>`:""}
          <button class="del-btn" onclick="deleteBooking(${b.id})">Delete</button>
        </td>
      </tr>`).join("")}
    </tbody></table></div>`
  :'<div class="empty-msg">No reservations yet. They will appear here once customers submit the booking form.</div>');
}

function updateBooking(id,status){
  const bk=DATA.bookings.find(b=>b.id===id);
  if(bk){bk.status=status;ss("bookings",DATA.bookings);renderAdminBookings();toast("Booking marked as "+status);}
}
function deleteBooking(id){
  if(!confirm("Delete this booking?")) return;
  DATA.bookings=DATA.bookings.filter(b=>b.id!==id);
  ss("bookings",DATA.bookings);renderAdminBookings();toast("Booking deleted");
}

// Menu
function renderAdminMenu(){
  const el=document.getElementById("ap-menu-body");
  if(!el) return;
  const cats=[...new Set(DATA.menu.map(m=>m.cat))];
  const catOpts=cats.map(c=>`<option value="${c}">${CAT_LABELS[c]||c}</option>`).join("");
  const imgOpts=`<option value="">— no image —</option>`+Object.keys(IMG).map(k=>`<option value="${k}">${k}</option>`).join("");
  el.innerHTML=`<div style="overflow-x:auto"><table class="at" style="min-width:680px">
    <thead><tr><th>Name</th><th>Category</th><th>Sub</th><th>Description</th><th>Price ₪</th><th>Image</th><th>Actions</th></tr></thead>
    <tbody>${DATA.menu.map(item=>`
      <tr id="mrow_${item.id}">
        <td><input class="ei" id="mn_${item.id}" value="${escH(item.name)}" style="min-width:120px"/></td>
        <td><select class="es" id="mc_${item.id}">${cats.map(c=>`<option value="${c}"${c===item.cat?" selected":""}>${CAT_LABELS[c]||c}</option>`).join("")}</select></td>
        <td><input class="ei" id="ms_${item.id}" value="${escH(item.sub)}" style="min-width:100px"/></td>
        <td><input class="ei" id="md_${item.id}" value="${escH(item.desc)}" style="min-width:180px"/></td>
        <td><input class="ei" id="mp_${item.id}" value="${escH(item.price)}" style="width:60px"/></td>
        <td><select class="es" id="mi_${item.id}" style="min-width:110px">
          ${`<option value="">— none —</option>`+Object.keys(IMG).map(k=>`<option value="${k}"${k===item.imgKey?" selected":""}>${k}</option>`).join("")}
        </select></td>
        <td style="display:flex;gap:5px;align-items:center;white-space:nowrap">
          <button class="save-btn" onclick="saveMenuItem(${item.id})">Save</button>
          <button class="del-btn" onclick="deleteMenuItem(${item.id})">✕</button>
        </td>
      </tr>`).join("")}
    </tbody></table></div>`;
}

function saveMenuItem(id){
  const item=DATA.menu.find(m=>m.id===id);if(!item) return;
  item.name  = document.getElementById("mn_"+id)?.value||item.name;
  item.cat   = document.getElementById("mc_"+id)?.value||item.cat;
  item.sub   = document.getElementById("ms_"+id)?.value||item.sub;
  item.desc  = document.getElementById("md_"+id)?.value||item.desc;
  item.price = document.getElementById("mp_"+id)?.value||item.price;
  item.imgKey= document.getElementById("mi_"+id)?.value||"";
  ss("menu",DATA.menu);renderMenu();flashRow("mrow_"+id);toast("Menu item saved ✓");
}
function deleteMenuItem(id){
  if(!confirm("Delete this menu item?")) return;
  DATA.menu=DATA.menu.filter(m=>m.id!==id);
  ss("menu",DATA.menu);renderAdminMenu();renderMenu();toast("Item deleted");
}
function addMenuItem(){
  DATA.menu.push({id:nextId++,cat:"food",sub:"Mains",name:"New Item",desc:"Item description",price:"30",imgKey:""});
  ss("menu",DATA.menu);renderAdminMenu();renderMenu();toast("New item added — scroll down to edit");
}

// Branches
function renderAdminBranches(){
  const el=document.getElementById("ap-branches-body");
  if(!el) return;
  const imgOpts=`<option value="">— none —</option>`+Object.keys(IMG).map(k=>`<option value="${k}">${k}</option>`).join("");
  el.innerHTML=`<div style="overflow-x:auto"><table class="at" style="min-width:600px">
    <thead><tr><th>City / Name</th><th>Address</th><th>Hours</th><th>Status</th><th>Image</th><th>Actions</th></tr></thead>
    <tbody>${DATA.branches.map(b=>`
      <tr id="brrow_${b.id}">
        <td><input class="ei" id="bc_${b.id}" value="${escH(b.city)}" style="min-width:120px"/></td>
        <td><input class="ei" id="ba_${b.id}" value="${escH(b.address)}" style="min-width:160px"/></td>
        <td><input class="ei" id="bh_${b.id}" value="${escH(b.hours)}" style="min-width:130px"/></td>
        <td><select class="es" id="bs_${b.id}" style="width:90px">
          <option value="open"${b.status==="open"?" selected":""}>Open</option>
          <option value="soon"${b.status==="soon"?" selected":""}>Coming Soon</option>
        </select></td>
        <td><select class="es" id="bi_${b.id}" style="min-width:100px">
          ${`<option value="">— none —</option>`+Object.keys(IMG).map(k=>`<option value="${k}"${k===b.imgKey?" selected":""}>${k}</option>`).join("")}
        </select></td>
        <td style="display:flex;gap:5px">
          <button class="save-btn" onclick="saveBranch(${b.id})">Save</button>
          <button class="del-btn" onclick="deleteBranch(${b.id})">✕</button>
        </td>
      </tr>`).join("")}
    </tbody></table></div>`;
}

function saveBranch(id){
  const b=DATA.branches.find(x=>x.id===id);if(!b) return;
  b.city   =document.getElementById("bc_"+id)?.value||b.city;
  b.address=document.getElementById("ba_"+id)?.value||b.address;
  b.hours  =document.getElementById("bh_"+id)?.value||b.hours;
  b.status =document.getElementById("bs_"+id)?.value||b.status;
  b.imgKey =document.getElementById("bi_"+id)?.value||"";
  ss("branches",DATA.branches);renderBranches();renderFindUs();flashRow("brrow_"+id);toast("Branch saved ✓");
}
function deleteBranch(id){
  if(!confirm("Delete this branch?")) return;
  DATA.branches=DATA.branches.filter(b=>b.id!==id);
  ss("branches",DATA.branches);renderAdminBranches();renderBranches();renderFindUs();toast("Branch deleted");
}
function addBranch(){
  DATA.branches.push({id:nextId++,city:"New City",address:"Address, City, Country",hours:"10:00 AM – 10:00 PM",status:"soon",imgKey:""});
  ss("branches",DATA.branches);renderAdminBranches();renderBranches();renderFindUs();toast("Branch added");
}

// Hours
function renderAdminHours(){
  const el=document.getElementById("ap-hours-body");
  if(!el) return;
  el.innerHTML=`<table class="at"><thead><tr><th>Day</th><th>Time / Label</th><th>Closed?</th><th></th></tr></thead>
    <tbody>${DATA.hours.map((h,i)=>`
      <tr id="hrow_${i}">
        <td><input class="ei" id="hd_${i}" value="${escH(h.day)}" style="width:110px"/></td>
        <td><input class="ei" id="ht_${i}" value="${escH(h.time)}"/></td>
        <td><select class="es" id="hc_${i}" style="width:80px">
          <option value="0"${!h.closed?" selected":""}>Open</option>
          <option value="1"${h.closed?" selected":""}>Closed</option>
        </select></td>
        <td><button class="save-btn" onclick="saveHour(${i})">Save</button></td>
      </tr>`).join("")}
    </tbody></table>`;
}

function saveHour(i){
  DATA.hours[i].day   =document.getElementById("hd_"+i)?.value||DATA.hours[i].day;
  DATA.hours[i].time  =document.getElementById("ht_"+i)?.value||DATA.hours[i].time;
  DATA.hours[i].closed=document.getElementById("hc_"+i)?.value==="1";
  ss("hours",DATA.hours);renderHours();flashRow("hrow_"+i);toast("Hours saved ✓");
}

// Contact
function renderAdminContact(){
  const el=document.getElementById("ap-contact-body");
  if(!el) return;
  const c=DATA.contact;
  const rows=[["phone1","Phone 1",c.phone1],["phone2","Phone 2",c.phone2],["email","Email",c.email],
    ["instagram","Instagram URL",c.instagram],["facebook","Facebook URL",c.facebook],["tiktok","TikTok URL",c.tiktok]];
  el.innerHTML=`<table class="at"><thead><tr><th>Field</th><th>Value</th><th></th></tr></thead>
    <tbody>${rows.map(([k,lbl,val])=>`
      <tr id="crow_${k}">
        <td style="color:var(--gold);width:130px">${lbl}</td>
        <td><input class="ei" id="cv_${k}" value="${escH(val)}"/></td>
        <td><button class="save-btn" onclick="saveContact('${k}')">Save</button></td>
      </tr>`).join("")}
    </tbody></table>`;
}

function saveContact(k){
  DATA.contact[k]=document.getElementById("cv_"+k)?.value||DATA.contact[k];
  ss("contact",DATA.contact);renderFindUs();flashRow("crow_"+k);toast("Contact saved ✓");
}

// Hero
function renderAdminHero(){
  const el=document.getElementById("ap-hero-body");
  if(!el) return;
  const h=DATA.hero;
  const rows=[["tag","Top Tag",h.tag],["title","Title (HTML)",h.title],["sub","Subtitle",h.sub]];
  el.innerHTML=`<p style="font-size:.78rem;color:var(--muted);margin-bottom:16px">
    Use &lt;em&gt; for italic gold text. E.g. "Crafted with &lt;em&gt;Love&lt;/em&gt;"</p>
    <table class="at"><thead><tr><th>Field</th><th>Value</th><th></th></tr></thead>
    <tbody>${rows.map(([k,lbl,val])=>`
      <tr id="hrow_${k}">
        <td style="color:var(--gold);width:120px">${lbl}</td>
        <td><input class="ei" id="hv_${k}" value="${escH(val)}"/></td>
        <td><button class="save-btn" onclick="saveHero('${k}')">Save</button></td>
      </tr>`).join("")}
    </tbody></table>`;
}

function saveHero(k){
  DATA.hero[k]=document.getElementById("hv_"+k)?.value||DATA.hero[k];
  ss("hero",DATA.hero);renderHeroText();flashRow("hrow_"+k);toast("Hero text updated ✓");
}

// ── Admin Images ──
function renderAdminImages(){
  const el=document.getElementById("ap-images-body");
  if(!el) return;
  const custom=JSON.parse(localStorage.getItem("customImgs")||"{}");
  const keys=Object.keys(custom);
  el.innerHTML=`
    <div style="display:flex;gap:12px;align-items:flex-end;flex-wrap:wrap;margin-bottom:26px;padding:18px;background:var(--bg2);border:1px solid var(--border);border-radius:6px">
      <div>
        <div class="form-label" style="margin-bottom:6px">Image Key</div>
        <input class="ei" id="imgKeyInput" placeholder="e.g. amman_branch" style="width:180px"/>
      </div>
      <div>
        <div class="form-label" style="margin-bottom:6px">Image File</div>
        <input type="file" id="imgFileInput" accept="image/*" style="color:var(--text);font-size:.8rem;padding:4px 0"/>
      </div>
      <button class="save-btn" onclick="uploadCustomImage()">Upload</button>
    </div>
    ${keys.length===0
      ? '<div class="empty-msg">No custom images uploaded yet.</div>'
      : `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px">
          ${keys.map(k=>`
            <div style="background:var(--bg2);border:1px solid var(--border);border-radius:6px;overflow:hidden">
              <img src="${custom[k]}" alt="${k}" style="width:100%;height:110px;object-fit:cover"/>
              <div style="padding:10px 12px">
                <div style="font-size:.72rem;color:var(--gold);margin-bottom:7px;word-break:break-all">${k}</div>
                <button class="del-btn" onclick="deleteCustomImage('${k}')">Delete</button>
              </div>
            </div>`).join("")}
         </div>`}`;
}

function uploadCustomImage(){
  const key=document.getElementById("imgKeyInput")?.value.trim().replace(/\s+/g,"_").toLowerCase();
  const file=document.getElementById("imgFileInput")?.files[0];
  if(!key){toast("Enter an image key","error");return;}
  if(!file){toast("Select an image file","error");return;}
  if(IMG[key]){toast("Key already exists — choose a different name","error");return;}
  const reader=new FileReader();
  reader.onload=e=>{
    const custom=JSON.parse(localStorage.getItem("customImgs")||"{}");
    custom[key]=e.target.result;
    localStorage.setItem("customImgs",JSON.stringify(custom));
    IMG[key]=e.target.result;
    document.getElementById("imgKeyInput").value="";
    document.getElementById("imgFileInput").value="";
    renderAdminImages();
    toast("Image uploaded ✓");
  };
  reader.readAsDataURL(file);
}

function deleteCustomImage(key){
  if(!confirm(`Delete image "${key}"?`)) return;
  const custom=JSON.parse(localStorage.getItem("customImgs")||"{}");
  delete custom[key];
  localStorage.setItem("customImgs",JSON.stringify(custom));
  delete IMG[key];
  renderAdminImages();
  toast("Image deleted");
}

// ── INIT ──
document.addEventListener("DOMContentLoaded",()=>{
  DATA=loadData();
  renderHeroText();
  renderAbout();
  renderGallery();
  renderBranches();
  renderHours();
  renderMenu();
  renderFindUs();
  observeFI();
  observeStats();
  document.getElementById("footerYear").textContent=new Date().getFullYear();
});
