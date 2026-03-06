// ══════════════════════════════════════════
// REAL PRODUCT DATA with Unsplash Images
// ══════════════════════════════════════════
const CATS = [
  { name:'Mobiles',    img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=75' },
  { name:'Fashion',   img:'https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&q=75' },
  { name:'Home',      img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=75' },
  { name:'Grocery',   img:'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&q=75' },
  { name:'Beauty',    img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=75' },
  { name:'Books',     img:'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&q=75' },
  { name:'Health',    img:'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&q=75' },
  { name:'Sports',    img:'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&q=75' },
  { name:'Gaming',    img:'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=200&q=75' },
  { name:'Toys',      img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd58?w=200&q=75' },
  { name:'Automotive',img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&q=75' },
  { name:'Organic',   img:'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&q=75' },
  { name:'Baby',      img:'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=200&q=75' },
  { name:'Handicrafts',img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&q=75'},
  { name:'Pets',      img:'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&q=75' },
];

const PRODUCTS = [
  {
    id:1, name:'OnePlus 12R 5G — 128GB Natural Titanium', brand:'OnePlus', cat:'electronics',
    price:29999, old:39999, rating:4.7, reviews:8423, badge:'bestseller', gst:18,
    img:'https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/r/w/j/12r-cph2585-oneplus-original-imah9zk6nddhcbsh.jpeg?q=90',
    imgPad: true, desc:'Powerful flagship with Snapdragon 8 Gen 3 processor and stunning 6.7" AMOLED display. 50MP camera & 100W super fast charging for all your needs.'
  },
  {
    id:2, name:'Samsung Galaxy S24 Ultra 256GB Flagship', brand:'Samsung', cat:'electronics',
    price:94999, old:134999, rating:4.8, reviews:5621, badge:'new', gst:18,
    img:'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/303834_ate9jl.png',
    imgPad: true, desc:'Ultimate flagship with revolutionary AI features and titanium frame. 6.8" Dynamic AMOLED display with 120Hz refresh & incredible 200MP camera system.'
  },
  {
    id:3, name:'boAt Airdopes 141 — 42Hr Wireless Earbuds', brand:'boAt', cat:'electronics',
    price:899, old:2990, rating:4.3, reviews:54832, badge:'bestseller', gst:18,
    img:'https://m.media-amazon.com/images/I/71RFdy6y6LL.jpg',
    imgPad: true, desc:'True wireless earbuds with incredible 42-hour battery life & premium sound quality. Active noise cancellation & fast charging in elegant design.'
  },
  {
    id:4, name:'Apple MacBook Air M3 — 13" 8GB RAM 256GB', brand:'Apple', cat:'electronics',
    price:114900, old:134900, rating:4.9, reviews:3421, badge:'prime', gst:18,
    img:'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/305382_uvrdrb.png',
    imgPad: true, desc:'Lightweight & powerful with Apple M3 chip for effortless multitasking. Stunning Retina display & 15+ hours battery life in sleek aluminum design.'
  },
  {
    id:5, name:'Noise ColorFit Pro 5 AMOLED Smartwatch', brand:'Noise', cat:'electronics',
    price:3499, old:8999, rating:4.4, reviews:21423, badge:'deal', gst:18,
    img:'https://m.media-amazon.com/images/I/71PXkv-smcL.jpg',
    imgPad: true, desc:'Premium AMOLED display smartwatch with 100+ watch faces & health tracking. 7-day battery life, waterproof design & always-on display technology.'
  },
  {
    id:6, name:'Sony WH-1000XM5 Noise Cancelling Headphones', brand:'Sony', cat:'electronics',
    price:24990, old:34990, rating:4.8, reviews:12341, badge:'bestseller', gst:18,
    img:'https://m.media-amazon.com/images/I/61BGLYEN-xL._AC_UF1000,1000_QL80_.jpg',
    imgPad: true, desc:'Industry-leading noise cancellation with premium sound quality & 30-hour battery. Touch controls, multipoint connectivity & premium build quality.'
  },
  {
    id:7, name:'Fabindia Handwoven Pure Cotton Kurta — Festive', brand:'Fabindia', cat:'fashion',
    price:1299, old:2499, rating:4.4, reviews:7823, badge:'bestseller', gst:5,
    img:'https://www.bigrayn.com/cdn/shop/files/BigRayn_Odisha_Handloom_Sambalpuri_Mens_KurtaSet-8.jpg?v=1758803530&width=2048',
    imgPad: false, desc:'Authentic handwoven cotton kurta celebrating Indian craftsmanship & culture. Perfect for festive occasions with traditional patterns & breathable fabric.'
  },
  {
    id:8, name:'Nike Air Max 270 Running Shoes — All Colors', brand:'Nike', cat:'fashion',
    price:7495, old:12995, rating:4.5, reviews:5621, badge:'deal', gst:5,
    img:'https://m.media-amazon.com/images/I/818JA4FkS0L._AC_UY1000_.jpg',
    imgPad: false, desc:'Legendary Nike Air Max design with maximum comfort & style. Available in multiple colors with premium cushioning for all-day wear.'
  },
  {
    id:9, name:'Biba Anarkali Ethnic Suit — Festive Collection', brand:'Biba', cat:'fashion',
    price:2199, old:4999, rating:4.6, reviews:3241, badge:'new', gst:5,
    img:'https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwc8b7fbe5/images/aw23/skddrgtsa8919aw23red_1-1.jpg?sw=502&sh=753&q=100&strip=false',
    imgPad: false, desc:'Stunning Anarkali suit with intricate embroidery & elegant design. Perfect for weddings & festive events with comfortable fit & premium finishing.'
  },
  {
    id:10, name:'Patanjali Dant Kanti Advanced Toothpaste 200g ×2', brand:'Patanjali', cat:'indian',
    price:199, old:399, rating:4.5, reviews:23421, badge:'bestseller', gst:12,
    img:'https://www.patanjaliayurved.net/assets/product_images/400x500/1739430660DantKantiNatural200g-2(2).webp',
    imgPad: true, desc:'Ayurvedic toothpaste with 100% natural ingredients for strong teeth & healthy gums. Clinically proven & trusted by Indian families for generations.'
  },
  {
    id:11, name:'Amul Butter 500g + Cheese Slices Combo Pack', brand:'Amul', cat:'grocery',
    price:299, old:449, rating:4.8, reviews:9823, badge:'deal', gst:0,
    img:'https://dukaan.b-cdn.net/700x700/webp/master/products/amul-butter-500g.jpg',
    imgPad: false, desc:'Premium Amul butter with rich creaminess & cheese slices combo. Perfect for breakfast & cooking with guaranteed freshness & quality.'
  },
  {
    id:12, name:'Prestige Induction Cooktop Iris Plus 1200W', brand:'Prestige', cat:'home',
    price:2199, old:3999, rating:4.4, reviews:15432, badge:'bestseller', gst:18,
    img:'https://m.media-amazon.com/images/I/61Vu80YcolL._AC_UF894,1000_QL80_.jpg',
    imgPad: false, desc:'Fast & energy-efficient induction cooktop with precise temperature control. Auto shut-off feature & sleek design for modern kitchens.'
  },
  {
    id:13, name:'Dyson V15 Detect Absolute Cordless Vacuum', brand:'Dyson', cat:'home',
    price:54900, old:69900, rating:4.8, reviews:4231, badge:'new', gst:18,
    img:'https://m.media-amazon.com/images/I/61bXGHeYuhL.jpg',
    imgPad: true, desc:'Revolutionary cordless vacuum with laser dust detection & HEPA filtration. 60-minute runtime & intelligent adapts automatically for any surface.'
  },
  {
    id:14, name:'Tata Salt Lite + Tata Tea Gold Premium Combo', brand:'Tata', cat:'grocery',
    price:349, old:549, rating:4.7, reviews:32100, badge:'indian', gst:0,
    img:'https://m.media-amazon.com/images/I/71lJRO8s7qL._AC_UF350,350_QL80_.jpg',
    imgPad: false, desc:'Premium combo of reduced sodium salt & aromatic tea blend. India\'s most trusted brands ensuring quality & taste in every use.'
  },
  {
    id:15, name:'Sugar Cosmetics Matte Lipstick Set — 6 Shades', brand:'Sugar', cat:'fashion',
    price:1199, old:2399, rating:4.6, reviews:8932, badge:'new', gst:18,
    img:'https://images-static.nykaa.com/media/catalog/product/2/f/2fcdbc88904320721657a.png?tr=w-500',
    imgPad: false, desc:'Luxurious matte lipstick set with 6 carefully curated shades. Long-lasting formula with zero flake & comfortable wear all day.'
  },
  {
    id:16, name:'Nilkamal Freedom Plastic Chair — Set of 4', brand:'Nilkamal', cat:'home',
    price:3499, old:5999, rating:4.2, reviews:6732, badge:'bestseller', gst:18,
    img:'https://m.media-amazon.com/images/I/61GQygHMNDL._AC_UF894,1000_QL80_.jpg',
    imgPad: false, desc:'Durable plastic chairs set of 4 with ergonomic design & vibrant finish. Weather-resistant & lightweight perfect for indoor & outdoor use.'
  },
];

const RECENT = [
  { name:'JBL Tune 510BT Wireless', price:1999, img:'https://m.media-amazon.com/images/I/61kFL7ywsZS._AC_UF1000,1000_QL80_.jpg', pad:true },
  { name:'Mamaearth Onion Hair Oil', price:349, img:'https://images.mamaearth.in/catalog/product/_/o/_onion-oil-150ml__1.jpeg?format=auto&height=600', pad:false },
  { name:'Nilkamal Study Chair', price:2499, img:'https://www.nilkamalfurniture.com/cdn/shop/files/Alba_HB_LS.jpg?v=1691735735', pad:false },
  { name:'Bajaj Mixer Grinder 500W', price:1799, img:'https://m.media-amazon.com/images/I/61arz2nJBbL._AC_UF894,1000_QL80_.jpg', pad:false },
  { name:'Himalaya Face Wash 150ml', price:179, img:'https://www.jiomart.com/images/product/original/490819114/himalaya-purifying-neem-face-wash-150-ml-product-images-o490819114-p490819114-0-202410020349.jpg', pad:false },
  { name:'Puma Sports Cap', price:999, img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/023791/01/fnd/IND/fmt/png/Running-Cap', pad:false },
  { name:'Kindle Paperwhite 16GB', price:13999, img:'https://m.media-amazon.com/images/I/516ioi1kzGL._AC_UF894,1000_QL80_.jpg', pad:true },
];

// ══════════════════════════════════════════
// LANGUAGES (abridged — same 36 as before)
// ══════════════════════════════════════════
const LANGS = [
  {code:'hi',name:'Hindi',native:'हिंदी',flag:'🇮🇳',speakers:'528M',group:'scheduled',
   ui:{search:'खोजें products, brands और बहुत कुछ...',signIn:'नमस्ते, साइन इन',account:'खाता & सूची ▾',cart:'Cart',deals:'आज के Deals',allCat:'सभी Categories',sell:'Sell करें',festT:'दिवाली धमाका Sale!',festS:'80% तक छूट!',festBtn:'अभी Shop करें →',dealsT:'आज के Best Deals',catTitle:'Categories',recentT:'हाल में देखे',fd:'Free Delivery',cod:'Cash on Delivery',er:'Easy Returns',sec:'100% Secure',sup:'24/7 Support',cartTitle:'आपका Cart',sub:'Subtotal',tot:'कुल राशि',chk:'Checkout करें →',sa:'सभी देखें →',ac:'Cart में डालें',ad:'✓ Added!'}},
  {code:'en',name:'English',native:'English',flag:'🇬🇧',speakers:'125M',group:'national',
   ui:{search:'Search products, brands and more...',signIn:'Hello, Sign In',account:'Account & Lists ▾',cart:'Cart',deals:"Today's Deals",allCat:'All Categories',sell:'Sell',festT:'Diwali Dhamaka Sale!',festS:'Up to 80% off!',festBtn:'Shop Now →',dealsT:"Today's Best Deals",catTitle:'Categories',recentT:'Recently Viewed',fd:'Free Delivery',cod:'Cash on Delivery',er:'Easy Returns',sec:'100% Secure',sup:'24/7 Support',cartTitle:'Your Cart',sub:'Subtotal',tot:'Total',chk:'Proceed to Checkout →',sa:'See all →',ac:'Add to Cart',ad:'✓ Added!'}},
  {code:'bn',name:'Bengali',native:'বাংলা',flag:'🟢',speakers:'97M',group:'scheduled',
   ui:{search:'পণ্য, ব্র্যান্ড খুঁজুন...',signIn:'হ্যালো, সাইন ইন',account:'অ্যাকাউন্ট ▾',cart:'কার্ট',deals:'আজকের ডিল',allCat:'সব ক্যাটাগরি',sell:'বিক্রি করুন',festT:'দীপাবলি সেল!',festS:'৮০% ছাড়!',festBtn:'এখনই কিনুন →',dealsT:'আজকের সেরা ডিল',catTitle:'ক্যাটাগরি',recentT:'সম্প্রতি দেখা',fd:'বিনামূল্যে ডেলিভারি',cod:'ক্যাশ অন ডেলিভারি',er:'সহজ রিটার্ন',sec:'১০০% নিরাপদ',sup:'২৪/৭ সহায়তা',cartTitle:'আপনার কার্ট',sub:'সাবটোটাল',tot:'মোট',chk:'চেকআউট করুন →',sa:'সব দেখুন →',ac:'কার্টে যোগ করুন',ad:'✓ যোগ হয়েছে!'}},
  {code:'te',name:'Telugu',native:'తెలుగు',flag:'🟡',speakers:'83M',group:'scheduled',
   ui:{search:'ఉత్పత్తులు వెతకండి...',signIn:'నమస్తే, సైన్ ఇన్',account:'ఖాతా ▾',cart:'కార్ట్',deals:'నేటి డీల్స్',allCat:'అన్ని వర్గాలు',sell:'అమ్మండి',festT:'దీపావళి సేల్!',festS:'80% తగ్గింపు!',festBtn:'ఇప్పుడే కొనండి →',dealsT:'నేటి అత్యుత్తమ డీల్స్',catTitle:'వర్గాలు',recentT:'ఇటీవల చూసినవి',fd:'ఉచిత డెలివరీ',cod:'నగదు బట్వాడా',er:'సులభ రిటర్న్లు',sec:'100% సురక్షితం',sup:'24/7 మద్దతు',cartTitle:'మీ కార్ట్',sub:'సబ్‌టోటల్',tot:'మొత్తం',chk:'చెకౌట్ →',sa:'అన్నీ చూడండి →',ac:'కార్ట్‌కు జోడించు',ad:'✓ జోడించారు!'}},
  {code:'mr',name:'Marathi',native:'मराठी',flag:'🟠',speakers:'83M',group:'scheduled',
   ui:{search:'उत्पादने शोधा...',signIn:'नमस्कार, साइन इन',account:'खाते ▾',cart:'कार्ट',deals:'आजचे डील्स',allCat:'सर्व श्रेणी',sell:'विका',festT:'दिवाळी धमाका!',festS:'80% सूट!',festBtn:'आत्ताच खरेदी करा →',dealsT:'आजचे सर्वोत्तम डील्स',catTitle:'श्रेणी',recentT:'नुकतेच पाहिले',fd:'मोफत डिलिव्हरी',cod:'रोख वितरणावर',er:'सोपे परतावे',sec:'100% सुरक्षित',sup:'24/7 सहाय्य',cartTitle:'तुमची कार्ट',sub:'उपएकूण',tot:'एकूण',chk:'चेकआउट करा →',sa:'सर्व पहा →',ac:'कार्टमध्ये टाका',ad:'✓ जोडले!'}},
  {code:'ta',name:'Tamil',native:'தமிழ்',flag:'🔵',speakers:'77M',group:'scheduled',
   ui:{search:'தயாரிப்புகள் தேடுங்கள்...',signIn:'வணக்கம், உள்நுழைக',account:'கணக்கு ▾',cart:'கார்ட்',deals:'இன்றைய டீல்ஸ்',allCat:'அனைத்து வகைகள்',sell:'விற்கவும்',festT:'தீபாவளி சேல்!',festS:'80% தள்ளுபடி!',festBtn:'இப்போதே வாங்கவும் →',dealsT:'இன்றைய சிறந்த டீல்ஸ்',catTitle:'வகைகள்',recentT:'சமீபத்தில் பார்த்தவை',fd:'இலவச டெலிவரி',cod:'கேஷ் ஆன் டெலிவரி',er:'எளிய திரும்பல்',sec:'100% பாதுகாப்பு',sup:'24/7 ஆதரவு',cartTitle:'உங்கள் கார்ட்',sub:'துணை மொத்தம்',tot:'மொத்தம்',chk:'செக்அவுட் →',sa:'அனைத்தும் காண →',ac:'கார்ட்டில் சேர்',ad:'✓ சேர்க்கப்பட்டது!'}},
  {code:'gu',name:'Gujarati',native:'ગુજરાતી',flag:'🟤',speakers:'56M',group:'scheduled',
   ui:{search:'ઉત્પાદોશોધો...',signIn:'નમસ્તે, સાઇન ઇન',account:'ખાતું ▾',cart:'કાર્ટ',deals:'આજના ડીલ્સ',allCat:'બધી કેટેગરી',sell:'વેચો',festT:'દિવાળી ધમાકો!',festS:'80% ડિસ્કાઉન્ટ!',festBtn:'હમણાં ખરીદો →',dealsT:'આજના શ્રેષ્ઠ ડીલ્સ',catTitle:'કેટેગરી',recentT:'તાજેતરમાં જોયેલ',fd:'મફત ડિલિવરી',cod:'કેશ ઓન ડિલિવરી',er:'સરળ રિટર્ન',sec:'100% સુરક્ષિત',sup:'24/7 સહાય',cartTitle:'તમારી કાર્ટ',sub:'સબટોટલ',tot:'કુલ',chk:'ચેકઆઉટ →',sa:'બધું જુઓ →',ac:'કાર્ટમાં ઉમેરો',ad:'✓ ઉમેર્યું!'}},
  {code:'kn',name:'Kannada',native:'ಕನ್ನಡ',flag:'🟣',speakers:'44M',group:'scheduled',
   ui:{search:'ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ...',signIn:'ನಮಸ್ಕಾರ, ಸೈನ್ ಇನ್',account:'ಖಾತೆ ▾',cart:'ಕಾರ್ಟ್',deals:'ಇಂದಿನ ಡೀಲ್ಸ್',allCat:'ಎಲ್ಲಾ ವರ್ಗಗಳು',sell:'ಮಾರಾಟ ಮಾಡಿ',festT:'ದೀಪಾವಳಿ ಸೇಲ್!',festS:'80% ರಿಯಾಯಿತಿ!',festBtn:'ಈಗಲೇ ಕೊಳ್ಳಿ →',dealsT:'ಇಂದಿನ ಡೀಲ್ಸ್',catTitle:'ವರ್ಗಗಳು',recentT:'ಇತ್ತೀಚೆಗೆ ನೋಡಿದ',fd:'ಉಚಿತ ಡೆಲಿವರಿ',cod:'ನಗದು ವಿತರಣೆ',er:'ಸುಲಭ ರಿಟರ್ನ್',sec:'100% ಸುರಕ್ಷಿತ',sup:'24/7 ಬೆಂಬಲ',cartTitle:'ನಿಮ್ಮ ಕಾರ್ಟ್',sub:'ಉಪಮೊತ್ತ',tot:'ಒಟ್ಟು',chk:'ಚೆಕ್‌ಔಟ್ →',sa:'ಎಲ್ಲ ನೋಡಿ →',ac:'ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ',ad:'✓ ಸೇರಿಸಲಾಗಿದೆ!'}},
  {code:'ml',name:'Malayalam',native:'മലയാളം',flag:'🌴',speakers:'38M',group:'scheduled',
   ui:{search:'ഉൽപ്പന്നങ്ങൾ തിരയുക...',signIn:'നമസ്കാരം, സൈൻ ഇൻ',account:'അക്കൗണ്ട് ▾',cart:'കാർട്ട്',deals:'ഇന്നത്തെ ഡീലുകൾ',allCat:'എല്ലാ വിഭാഗങ്ങൾ',sell:'വിൽക്കുക',festT:'ദീപാവലി സേൽ!',festS:'80% കിഴിവ്!',festBtn:'ഇപ്പോൾ വാങ്ങൂ →',dealsT:'ഇന്നത്തെ ഡീലുകൾ',catTitle:'വിഭാഗങ്ങൾ',recentT:'അടുത്തിടെ കണ്ടത്',fd:'സൗജന്യ ഡെലിവറി',cod:'ക്യാഷ് ഓണ്ട് ഡെലിവറി',er:'എളുപ്പ റിട്ടേൺ',sec:'100% സുരക്ഷിതം',sup:'24/7 പിന്തുണ',cartTitle:'നിങ്ങളുടെ കാർട്ട്',sub:'സബ്ടോട്ടൽ',tot:'ആകെ',chk:'ചെക്ഔട്ട് →',sa:'എല്ലാം കാണൂ →',ac:'കാർട്ടിൽ ചേർക്കുക',ad:'✓ ചേർത്തു!'}},
  {code:'pa',name:'Punjabi',native:'ਪੰਜਾਬੀ',flag:'🟡',speakers:'33M',group:'scheduled',
   ui:{search:'ਉਤਪਾਦ ਲੱਭੋ...',signIn:'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ',account:'ਖਾਤਾ ▾',cart:'ਕਾਰਟ',deals:'ਅੱਜ ਦੇ ਡੀਲ',allCat:'ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ',sell:'ਵੇਚੋ',festT:'ਦੀਵਾਲੀ ਧਮਾਕਾ!',festS:'80% ਛੂਟ!',festBtn:'ਹੁਣੇ ਖਰੀਦੋ →',dealsT:'ਅੱਜ ਦੇ ਡੀਲ',catTitle:'ਸ਼੍ਰੇਣੀਆਂ',recentT:'ਹਾਲ ਵਿੱਚ ਦੇਖਿਆ',fd:'ਮੁਫ਼ਤ ਡਿਲੀਵਰੀ',cod:'ਕੈਸ਼ ਆਨ ਡਿਲੀਵਰੀ',er:'ਆਸਾਨ ਵਾਪਸੀ',sec:'100% ਸੁਰੱਖਿਅਤ',sup:'24/7 ਸਹਾਇਤਾ',cartTitle:'ਤੁਹਾਡੀ ਕਾਰਟ',sub:'ਉਪ-ਕੁੱਲ',tot:'ਕੁੱਲ',chk:'ਚੈੱਕਆਊਟ →',sa:'ਸਭ ਦੇਖੋ →',ac:'ਕਾਰਟ ਵਿੱਚ ਪਾਓ',ad:'✓ ਪਾਇਆ!'}},
  {code:'ur',name:'Urdu',native:'اردو',flag:'🌙',speakers:'52M',group:'scheduled',
   ui:{search:'پروڈکٹس تلاش کریں...',signIn:'آداب، سائن ان کریں',account:'اکاؤنٹ ▾',cart:'کارٹ',deals:'آج کی ڈیلز',allCat:'تمام زمرے',sell:'فروخت کریں',festT:'دیوالی دھماکہ!',festS:'80% چھوٹ!',festBtn:'ابھی خریدیں ←',dealsT:'آج کی بہترین ڈیلز',catTitle:'زمرے',recentT:'حال ہی میں دیکھا',fd:'مفت ڈیلیوری',cod:'نقد بڈلوی',er:'آسان واپسی',sec:'100% محفوظ',sup:'24/7 مدد',cartTitle:'آپ کا کارٹ',sub:'سب ٹوٹل',tot:'کل',chk:'چیک آؤٹ ←',sa:'سب دیکھیں ←',ac:'کارٹ میں ڈالیں',ad:'✓ شامل!'}},
  {code:'or',name:'Odia',native:'ଓଡ଼ିଆ',flag:'🟠',speakers:'35M',group:'scheduled',
   ui:{search:'ଉତ୍ପାଦ ଖୋଜନ୍ତୁ...',signIn:'ନମସ୍କାର, ସାଇନ ଇନ',account:'ଖାତା ▾',cart:'କାର୍ଟ',deals:'ଆଜର ଡିଲ',allCat:'ସମସ୍ତ ବର୍ଗ',sell:'ବିକ୍ରୟ',festT:'ଦୀପାବଳି ସେଲ!',festS:'80% ଛାଡ଼!',festBtn:'ଏବେ କିଣନ୍ତୁ →',dealsT:'ଆଜର ଡିଲ',catTitle:'ବର୍ଗ',recentT:'ହାଲ ଦୃଷ୍ଟ',fd:'ମାଗଣା ଡେଲିଭ',cod:'ନଗଦ ଡେଲିଭ',er:'ଫେରସ୍ତ',sec:'100% ସୁରକ୍ଷ',sup:'24/7 ସହ',cartTitle:'ଆପଣଙ୍କ କାର୍ଟ',sub:'ଉପ-ମୋଟ',tot:'ମୋଟ',chk:'ଚେକ ଆଉଟ →',sa:'ସବୁ ଦେଖ →',ac:'କାର୍ଟ ଯୋଡ',ad:'✓ ଯୋଡ!'}},
  {code:'as',name:'Assamese',native:'অসমীয়া',flag:'🟢',speakers:'15M',group:'scheduled',
   ui:{search:'সামগ্ৰী বিচাৰক...',signIn:'নমস্কাৰ, চাইন ইন',account:'একাউণ্ট ▾',cart:'কাৰ্ট',deals:'আজিৰ ডিল',allCat:'সকলো শ্ৰেণী',sell:'বিক্ৰী কৰক',festT:'দীপাৱলী সেল!',festS:'৮০% ছাড়!',festBtn:'এতিয়াই কিনক →',dealsT:'আজিৰ ডিল',catTitle:'শ্ৰেণী',recentT:'শেহতীয়া',fd:'বিনামূলীয়া',cod:'কেশ অন ডেলিভাৰি',er:'ঘূৰাই দিয়া',sec:'১০০% সুৰক্ষিত',sup:'२४/७ সহায়',cartTitle:'আপোনাৰ কাৰ্ট',sub:'উপ-মুঠ',tot:'মুঠ',chk:'চেকআউট →',sa:'সকলো →',ac:'কাৰ্টত যোগ',ad:'✓ যোগ!'}},
  {code:'mai',name:'Maithili',native:'मैथिली',flag:'🟡',speakers:'14M',group:'scheduled',
   ui:{search:'उत्पाद खोजू...',signIn:'प्रणाम, साइन इन',account:'खाता ▾',cart:'कार्ट',deals:'आजुक डील',allCat:'सभ श्रेणी',sell:'बेचू',festT:'दिवाली सेल!',festS:'80% छूट!',festBtn:'एखनि किनू →',dealsT:'आजुक डील',catTitle:'श्रेणी',recentT:'हाल देखल',fd:'मुफ्त डेलीवरी',cod:'कैश ऑन डेलीवरी',er:'आसान वापसी',sec:'100% सुरक्षित',sup:'24/7 सहयोग',cartTitle:'अहाँक कार्ट',sub:'उपयोग',tot:'कुल',chk:'चेकआउट →',sa:'सभ देखू →',ac:'कार्टमे राखू',ad:'✓ राखल!'}},
  {code:'sa',name:'Sanskrit',native:'संस्कृतम्',flag:'📿',speakers:'Classical',group:'scheduled',
   ui:{search:'उत्पादानि अन्वेषयतु...',signIn:'नमस्ते, प्रवेशं',account:'खाता ▾',cart:'क्रयपेटिका',deals:'अद्यतन',allCat:'सर्वाः',sell:'विक्रयम्',festT:'दीपावली महाविक्रयः!',festS:'80% छूटः!',festBtn:'अधुना क्रीणातु →',dealsT:'अद्य सौदाः',catTitle:'श्रेण्यः',recentT:'हालिदर्शितम्',fd:'निःशुल्क प्रेषणम्',cod:'प्रेषणे नगदम्',er:'प्रत्यागमनम्',sec:'सुरक्षितम्',sup:'सहायता',cartTitle:'क्रयपेटिका',sub:'उपयोगः',tot:'कुलम्',chk:'मूल्यं दत्त्वा →',sa:'सर्वं पश्यतु →',ac:'पेटिकायां योजयतु',ad:'✓ योजितम्!'}},
  {code:'ne',name:'Nepali',native:'नेपाली',flag:'🏔️',speakers:'3M',group:'scheduled',
   ui:{search:'उत्पाद खोज्नुहोस्...',signIn:'नमस्ते, साइन इन',account:'खाता ▾',cart:'कार्ट',deals:'आजका सौदा',allCat:'सबै श्रेणी',sell:'बेच्नुहोस्',festT:'दीपावली सेल!',festS:'80% छुट!',festBtn:'अहिले किन्नुहोस् →',dealsT:'आजका डिल',catTitle:'श्रेणी',recentT:'भर्खर हेरिएको',fd:'निःशुल्क डेलिभरी',cod:'क्यास अन डेलिभरी',er:'सजिलो फिर्ता',sec:'सुरक्षित',sup:'24/7 सहयोग',cartTitle:'तपाईंको कार्ट',sub:'उपकुल',tot:'जम्मा',chk:'चेकआउट →',sa:'सबै हेर →',ac:'कार्टमा थप',ad:'✓ थपियो!'}},
  {code:'kok',name:'Konkani',native:'कोंकणी',flag:'🌊',speakers:'7.6M',group:'scheduled',
   ui:{search:'उत्पादां सोद...',signIn:'नमस्कार',account:'खातें ▾',cart:'कार्ट',deals:'आजचे डील',allCat:'सगळ्यो',sell:'विकणे',festT:'दिवाळी सेल!',festS:'80% सूट!',festBtn:'आतां घे →',dealsT:'आजचे डील',catTitle:'श्रेणी',recentT:'हाल पळयिल्लें',fd:'फुकट डिलिव्हरी',cod:'कॅश ऑन',er:'परतावें',sec:'सुरक्षित',sup:'मदत',cartTitle:'तुमची कार्ट',sub:'उपएकूण',tot:'एकूण',chk:'चेकआउट →',sa:'सगळें →',ac:'कार्टांत घाल',ad:'✓ घातलें!'}},
  {code:'raj',name:'Rajasthani',native:'राजस्थानी',flag:'🏜️',speakers:'80M',group:'regional',
   ui:{search:'उत्पाद खोजो...',signIn:'खम्मा घणी',account:'खाता ▾',cart:'कार्ट',deals:'आज का डील',allCat:'सगला',sell:'बेचो',festT:'दीवाळी सेल!',festS:'80% छूट!',festBtn:'हाला खरीदो →',dealsT:'आज का डील',catTitle:'श्रेणी',recentT:'हाल देखो',fd:'मुफ्त डिलीवरी',cod:'कैश ऑन डिलीवरी',er:'वापसी',sec:'सुरक्षित',sup:'24/7 मदद',cartTitle:'थारा कार्ट',sub:'उप-कुल',tot:'कुल',chk:'चेकआउट →',sa:'सगला देखो →',ac:'कार्ट में डालो',ad:'✓ डालेओ!'}},
  {code:'bho',name:'Bhojpuri',native:'भोजपुरी',flag:'🌾',speakers:'60M',group:'regional',
   ui:{search:'सामान खोजल जाव...',signIn:'परणाम',account:'खाता ▾',cart:'कार्ट',deals:'आजु के डील',allCat:'सगरे',sell:'बेचीं',festT:'दीवाली सेल!',festS:'80% छूट!',festBtn:'अभिये खरीदीं →',dealsT:'आजु के डील',catTitle:'श्रेणी',recentT:'हाल देखल',fd:'मुफ्त डिलीवरी',cod:'कैश ऑन',er:'वापसी',sec:'सुरक्षित',sup:'24/7 मदद',cartTitle:'रउरे कार्ट',sub:'उप-जोड़',tot:'कुल',chk:'चेकआउट →',sa:'सगरे देखीं →',ac:'कार्ट में डालीं',ad:'✓ डालेनीं!'}},
  {code:'awa',name:'Awadhi',native:'अवधी',flag:'🕌',speakers:'40M',group:'regional',
   ui:{search:'उत्पाद खोजौ...',signIn:'राम राम',account:'खाता ▾',cart:'कार्ट',deals:'आज क डील',allCat:'सब',sell:'बेचौ',festT:'दिवाली सेल!',festS:'80% छूट!',festBtn:'अबहीं खरीदौ →',dealsT:'आज क डील',catTitle:'श्रेणी',recentT:'हाल देखेउ',fd:'मुफ्त डिलीवरी',cod:'कैश ऑन',er:'वापसी',sec:'सुरक्षित',sup:'24/7',cartTitle:'तोहार कार्ट',sub:'उप-जोड़',tot:'कुल',chk:'चेकआउट →',sa:'सब देखौ →',ac:'कार्ट म डारौ',ad:'✓ डारेउ!'}},
  {code:'hary',name:'Haryanvi',native:'हरियाणवी',flag:'🌾',speakers:'18M',group:'regional',
   ui:{search:'सामान ढूंढो...',signIn:'राम राम',account:'खाता ▾',cart:'कार्ट',deals:'आज के डील',allCat:'सारे',sell:'बेचो',festT:'दिवाली सेल!',festS:'80% छूट!',festBtn:'हाले खरीदो →',dealsT:'आज के डील',catTitle:'श्रेणी',recentT:'हाल म देखे',fd:'मुफ्त डिलीवरी',cod:'कैश ऑन',er:'वापसी',sec:'सुरक्षित',sup:'24/7',cartTitle:'थारी कार्ट',sub:'उप-जोड़',tot:'कुल',chk:'चेकआउट →',sa:'सारे देखो →',ac:'कार्ट में डालो',ad:'✓ डाल दिया!'}},
  {code:'cg',name:'Chhattisgarhi',native:'छत्तीसगढ़ी',flag:'🌴',speakers:'18M',group:'regional',
   ui:{search:'सामान खोजव...',signIn:'जोहार',account:'खाता ▾',cart:'कार्ट',deals:'आज के डील',allCat:'सब्बो',sell:'बेचव',festT:'दिवाली सेल!',festS:'80% छूट!',festBtn:'अब्बे खरीदव →',dealsT:'आज के डील',catTitle:'श्रेणी',recentT:'हाल म देखे',fd:'मुफ्त डिलीवरी',cod:'कैश ऑन',er:'वापसी',sec:'सुरक्षित',sup:'24/7',cartTitle:'तुंहर कार्ट',sub:'उप-जोड़',tot:'कुल',chk:'चेकआउट →',sa:'सब्बो देखव →',ac:'कार्ट म डारव',ad:'✓ डारे गेय!'}},
  {code:'mag',name:'Magahi',native:'मगही',flag:'🌿',speakers:'20M',group:'regional',
   ui:{search:'सामान खोजो...',signIn:'नमस्कार',account:'खाता ▾',cart:'कार्ट',deals:'आज के डील',allCat:'सब्बे',sell:'बेचो',festT:'दिवाली सेल!',festS:'80% छूट!',festBtn:'अब्बे खरीदो →',dealsT:'आज के डील',catTitle:'श्रेणी',recentT:'हाल देखल',fd:'मुफ्त डिलीवरी',cod:'कैश ऑन',er:'वापसी',sec:'सुरक्षित',sup:'24/7',cartTitle:'तोहर कार्ट',sub:'उप-जोड़',tot:'कुल',chk:'चेकआउट →',sa:'सब्बे →',ac:'कार्ट में डालो',ad:'✓ डालल!'}},
  {code:'mni',name:'Manipuri',native:'မ',flag:'🌸',speakers:'2M',group:'scheduled',
   ui:{search:'Products search...',signIn:'হায়জগল',account:'Account ▾',cart:'Cart',deals:'Deals',allCat:'Categories',sell:'চৎকৈ',festT:'Diwali Sale!',festS:'80% discount!',festBtn:'হায়না লেবিয়ু →',dealsT:'Best deals',catTitle:'Categories',recentT:'লাক্তাদা',fd:'Free delivery',cod:'Cash on delivery',er:'Easy return',sec:'100% safe',sup:'24/7 help',cartTitle:'Cart',sub:'Subtotal',tot:'Total',chk:'Checkout →',sa:'উবিয়ু →',ac:'Cart-তা চংবিয়ু',ad:'✓ চংখ্রে!'}},
  {code:'ks',name:'Kashmiri',native:'کٲشُر',flag:'❄️',speakers:'7M',group:'scheduled',
   ui:{search:'پرودکٹ ڈھونڈیں...',signIn:'آداب',account:'اکاونٹ ▾',cart:'کارٹ',deals:'ڈیلز',allCat:'تَمام',sell:'وکِن',festT:'دیوالی سیل!',festS:'80% چُھوٹ!',festBtn:'آژی خرید →',dealsT:'ڈیلز',catTitle:'کٹیگریز',recentT:'ہالہِ دیکھنہ',fd:'مفتہ ڈلیوری',cod:'کیش آن',er:'واپسی',sec:'محفوظ',sup:'24/7',cartTitle:'کارٹ',sub:'ٹوٹل',tot:'ٹوٹل',chk:'چیک آوٹ →',sa:'دیکھتھ →',ac:'کارٹس پاٹھ گنڈ',ad:'✓ گنڈتھ!'}},
  {code:'sd',name:'Sindhi',native:'سنڌي',flag:'🌅',speakers:'2.8M',group:'scheduled',
   ui:{search:'پراڊڪٽ ڳوليو...',signIn:'آداب',account:'اڪائونٽ ▾',cart:'ڪارٽ',deals:'ڊيل',allCat:'سڀ',sell:'وڪڻو',festT:'ديوالي سيل!',festS:'80% ڇوٽ!',festBtn:'هاڻي خريد →',dealsT:'ڊيل',catTitle:'ڪيٽيگريون',recentT:'تازو',fd:'مفت ڊليوري',cod:'ڪيش آن',er:'واپسي',sec:'محفوظ',sup:'24/7',cartTitle:'ڪارٽ',sub:'ڪل',tot:'ڪل',chk:'چيڪ آئوٽ →',sa:'سڀ ڏسو →',ac:'ڪارٽ ۾ وجهو',ad:'✓ شامل!'}},
  {code:'doi',name:'Dogri',native:'डोगरी',flag:'🏔️',speakers:'2.6M',group:'scheduled',
   ui:{search:'उत्पाद ढूंढो...',signIn:'नमस्ते',account:'खाता ▾',cart:'कार्ट',deals:'डील',allCat:'सारे',sell:'वेचो',festT:'दीवाली सेल!',festS:'80% छूट!',festBtn:'हुण खरीदो →',dealsT:'डील',catTitle:'श्रेणी',recentT:'हाल देखेआ',fd:'मुफ्त डेलीवरी',cod:'कैश ऑन',er:'वापसी',sec:'सुरक्षित',sup:'24/7',cartTitle:'तुंढा कार्ट',sub:'उप-कुल',tot:'कुल',chk:'चेकआउट →',sa:'सारे →',ac:'कार्ट विच पाओ',ad:'✓ पाया!'}},
  {code:'sat',name:'Santali',native:'ᱥᱟᱱᱛᱟᱲᱤ',flag:'🌿',speakers:'7.6M',group:'scheduled',
   ui:{search:'Products खोजो...',signIn:'जोहार',account:'खाता ▾',cart:'कार्ट',deals:'डील',allCat:'सारे',sell:'मिनिच',festT:'Diwali Sale!',festS:'80% discount!',festBtn:'आक्के खरीद →',dealsT:'Best deals',catTitle:'Category',recentT:'आक ञेलाकान',fd:'Free delivery',cod:'Cash on delivery',er:'Easy return',sec:'100% safe',sup:'24/7',cartTitle:'Cart',sub:'Subtotal',tot:'Total',chk:'Checkout →',sa:'सारे →',ac:'Cart-ते लगाम',ad:'✓ लगाम!'}},
  {code:'bo',name:'Bodo',native:'बड़ो',flag:'🌱',speakers:'1.5M',group:'scheduled',
   ui:{search:'Products थाखो...',signIn:'नमस्ते',account:'Account ▾',cart:'Cart',deals:'Deals',allCat:'सब',sell:'वेचो',festT:'Diwali Sale!',festS:'80% discount!',festBtn:'हाबो खरीदो →',dealsT:'Best deals',catTitle:'Categories',recentT:'हाल देखो',fd:'Free delivery',cod:'Cash on delivery',er:'Easy return',sec:'100% secure',sup:'24/7',cartTitle:'Cart',sub:'Subtotal',tot:'Total',chk:'Checkout →',sa:'सब →',ac:'Cart जों थाखो',ad:'✓ थाखेआ!'}},
  {code:'tcy',name:'Tulu',native:'ತುಳು',flag:'🌊',speakers:'2M',group:'regional',
   ui:{search:'Products odepulae...',signIn:'Namaskara',account:'Account ▾',cart:'Cart',deals:'Deals',allCat:'Enda',sell:'Vikipulae',festT:'Deepawali Sale!',festS:'80% discount!',festBtn:'Poye konnae →',dealsT:'Best deals',catTitle:'Categories',recentT:'Tujyae',fd:'Free delivery',cod:'Cash on delivery',er:'Easy return',sec:'100% safe',sup:'24/7',cartTitle:'Eere cart',sub:'Subtotal',tot:'Total',chk:'Checkout →',sa:'Enda →',ac:'Cart-g pae',ad:'✓ Pathe!'}},
  {code:'kha',name:'Khasi',native:'কা রূপ খাশি',flag:'⛰️',speakers:'1.4M',group:'regional',
   ui:{search:'Search products...',signIn:'Khublei',account:'Account ▾',cart:'Cart',deals:'Deals',allCat:'Katno',sell:'Ioh',festT:'Diwali Sale!',festS:'80% off!',festBtn:'Ïa ioh →',dealsT:'Best deals',catTitle:'Categories',recentT:'Sngi la iohi',fd:'Free delivery',cod:'Cash on delivery',er:'Easy return',sec:'100% safe',sup:'24/7',cartTitle:'Cart',sub:'Subtotal',tot:'Total',chk:'Checkout →',sa:'Katno →',ac:'Shong ha cart',ad:'✓ La shong!'}},
  {code:'miz',name:'Mizo',native:'Mizo ṭawng',flag:'🌿',speakers:'0.8M',group:'regional',
   ui:{search:'Products zawn rawh...',signIn:'Chibai',account:'Account ▾',cart:'Cart',deals:'Deals',allCat:'Zawng',sell:'Zawn',festT:'Diwali Sale!',festS:'80% thlak!',festBtn:'Zawn rawh →',dealsT:'Best deals',catTitle:'Category',recentT:'Tun anin en',fd:'Free delivery',cod:'Cash on delivery',er:'Easy return',sec:'100% safe',sup:'24/7',cartTitle:'Cart',sub:'Subtotal',tot:'Total',chk:'Checkout →',sa:'Zawng →',ac:'Cart-ah pui',ad:'✓ Pui tawh!'}},
  {code:'gar',name:'Garo',native:'আ·চিक মান্দি',flag:'🌳',speakers:'0.8M',group:'regional',
   ui:{search:'Products bagan...',signIn:'Namaste',account:'Account ▾',cart:'Cart',deals:'Deals',allCat:'Sorok',sell:'Biko',festT:'Diwali Sale!',festS:'80% discount!',festBtn:'Bagan →',dealsT:'Best deals',catTitle:'Categories',recentT:'Nangan',fd:'Free delivery',cod:'Cash on delivery',er:'Easy return',sec:'100% safe',sup:'24/7',cartTitle:'Cart',sub:'Subtotal',tot:'Total',chk:'Checkout →',sa:'Sorok →',ac:'Cart-o pura',ad:'✓ Pura tawh!'}},
];

const QUICK = ['hi','en','bn','ta','te','mr','gu','kn','ml','pa'];
let curL = LANGS.find(l=>l.code==='hi'), pendL = curL;

// ── RENDER CATS ──
function renderCats() {
  document.getElementById('catScroll').innerHTML = CATS.map(c=>`
    <a href="#" class="cat-pill">
      <div class="cat-iw"><img src="${c.img}" alt="${c.name}" onerror="this.parentElement.innerHTML='<span style=font-size:1.6rem>${c.name.charAt(0)}</span>'"></div>
      <span class="cat-name">${c.name}</span>
    </a>`).join('');
}

// ── RENDER PRODUCTS ──
function renderProducts(filter='all') {
  const list = filter==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===filter);
  const u = curL.ui;
  const bcolor = {bestseller:'#FF6600',deal:'#C62828',new:'#138808',prime:'#000080',indian:'#FF9933'};
  const blabel = {bestseller:'Bestseller',deal:'🔥 Deal',new:'New',prime:'Plus',indian:'🇮🇳 Indian'};
  document.getElementById('pgrid').innerHTML = list.map(p => {
    const disc = Math.round((1-p.price/p.old)*100);
    const stars = '★'.repeat(Math.floor(p.rating))+(p.rating%1>=.5?'☆':'');
    return `
    <div class="pcard" onclick="openProductModal(${p.id})" style="cursor:pointer">
      ${p.badge?`<div class="pbadge" style="background:${bcolor[p.badge]||'#555'}">${blabel[p.badge]||p.badge}</div>`:''}
      <div class="pimg-wrap">
        <img src="${p.img}" alt="${p.name}" class="${p.imgPad?'pad':''}"
          onerror="this.style.display='none';this.parentElement.querySelector('.pimg-err').style.display='block'">
        <span class="pimg-err">🛍</span>
        <button class="pwish" onclick="wish(event,'${p.name.substring(0,20)}')">🤍</button>
      </div>
      <div class="pinfo">
        <div class="pbrand">${p.brand}</div>
        <div class="pname">${p.name}</div>
        <div class="pstars">${stars} <span class="prc">(${p.reviews.toLocaleString()})</span></div>
        <div class="pprow">
          <span class="pp">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="ppo">₹${p.old.toLocaleString('en-IN')}</span>
          <span class="ppd">-${disc}%</span>
        </div>
        <div class="pgst">Incl. ${p.gst}% GST | Free Delivery</div>
        <button class="pcbtn" id="pb${p.id}" onclick="addCart(${p.id}); event.stopPropagation();">🛒 ${u.ac}</button>
      </div>
    </div>`;
  }).join('');
}

// ── RENDER RECENT ──
function renderRecent() {
  document.getElementById('recentRow').innerHTML = RECENT.map(r=>`
    <div class="mini-card">
      <div class="mimg-wrap">
        <img src="${r.img}" alt="${r.name}" class="${r.pad?'pad':''}"
          onerror="this.style.display='none'">
      </div>
      <div class="minfo">
        <div class="mname">${r.name}</div>
        <div class="mprice">₹${r.price.toLocaleString('en-IN')}</div>
      </div>
    </div>`).join('');
}

// ── CART ──
let cart={}, cartCnt=0;
function addCart(id){
  const p=PRODUCTS.find(x=>x.id===id); if(!p)return;
  cart[id]=cart[id]?{...cart[id],qty:cart[id].qty+1}:{...p,qty:1};
  cartCnt++;
  document.getElementById('cbadge').textContent=cartCnt;
  const btn=document.getElementById('pb'+id);
  btn.textContent='✓ '+curL.ui.ad; btn.classList.add('added');
  setTimeout(()=>{btn.textContent='🛒 '+curL.ui.ac;btn.classList.remove('added');},1800);
  showToast('✅ '+p.name.substring(0,35)+'... '+curL.ui.ad);
  renderCart();
}
function renderCart(){
  const items=Object.values(cart);
  const el=document.getElementById('cditems');
  const foot=document.getElementById('cdf');
  const u=curL.ui;
  if(!items.length){
    el.innerHTML=`<div class="ecart"><div class="ec">🛒</div><p style="font-weight:600">${u.cartTitle}</p><p style="font-size:.8rem;color:var(--muted)">Empty!</p></div>`;
    foot.style.display='none';return;
  }
  el.innerHTML=items.map(i=>`
    <div class="ci">
      <div class="ci-img"><img src="${i.img}" alt="${i.name}" class="${i.imgPad?'pad':''}" onerror="this.style.display='none'"></div>
      <div style="flex:1">
        <div class="ci-name">${i.name.substring(0,40)}…</div>
        <div class="ci-price">₹${(i.price*i.qty).toLocaleString('en-IN')}</div>
        <div class="qrow">
          <button class="qb" onclick="updQ(${i.id},-1)">−</button>
          <span class="qn">${i.qty}</span>
          <button class="qb" onclick="updQ(${i.id},1)">+</button>
        </div>
      </div>
    </div>`).join('');
  const sub=items.reduce((s,i)=>s+i.price*i.qty,0);
  const gst=items.reduce((s,i)=>s+(i.price*i.qty*(i.gst||18)/118),0);
  document.getElementById('cdsub').textContent='₹'+sub.toLocaleString('en-IN');
  document.getElementById('cdgst').textContent='₹'+Math.round(gst).toLocaleString('en-IN');
  document.getElementById('cdtot').textContent='₹'+sub.toLocaleString('en-IN');
  document.getElementById('sublbl').textContent=u.sub;
  document.getElementById('totlbl').textContent=u.tot;
  document.getElementById('chkbtn').textContent=u.chk;
  foot.style.display='block';
}
function updQ(id,d){
  if(!cart[id])return;
  cart[id].qty+=d; cartCnt+=d;
  if(cart[id].qty<=0)delete cart[id];
  cartCnt=Math.max(0,cartCnt);
  document.getElementById('cbadge').textContent=cartCnt;
  renderCart();
}
function toggleCart(){
  document.getElementById('overlay').classList.toggle('open');
  document.getElementById('cdrawer').classList.toggle('open');
}
function wish(e,n){e.stopPropagation();e.target.textContent='❤️';showToast('❤️ '+n+' Wishlist में save!');}
function checkout(){toggleCart();setTimeout(()=>showToast('🎉 Checkout! UPI / COD / EMI available!'),400);}

// ── LANG MODAL ──
function buildModal(filter=''){
  const fl=filter.toLowerCase();
  const groups=[
    {key:'scheduled',label:'📜 22 Scheduled Languages (8th Schedule, Constitution of India)'},
    {key:'national',label:'🌐 National Language'},
    {key:'regional',label:'🗺️ Regional Languages'},
  ];
  document.getElementById('lmbody').innerHTML=groups.map(g=>{
    const list=LANGS.filter(l=>l.group===g.key&&(!fl||l.name.toLowerCase().includes(fl)||l.native.includes(filter)||l.code.includes(fl)));
    if(!list.length)return'';
    return`<div class="lm-group">
      <div class="lm-gtitle">${g.label}</div>
      <div class="lang-grid">${list.map(l=>`
        <div class="lcard ${l.code===pendL.code?'sel':''}" onclick="selL('${l.code}')">
          <div class="lflag">${l.flag}</div>
          <div class="linfo"><div class="lname">${l.name}</div><div class="lnat">${l.native}</div><div class="lspk">${l.speakers} speakers</div></div>
          <div class="lcheck">✓</div>
        </div>`).join('')}
      </div></div>`;
  }).join('');
}
function buildBar(){
  document.getElementById('langPills').innerHTML=LANGS.filter(l=>QUICK.includes(l.code)).map(l=>`
    <button class="lpill${l.code===curL.code?' active':''}" title="${l.name}" onclick="applyLang('${l.code}')">${l.native}</button>`).join('');
}
function selL(code){pendL=LANGS.find(l=>l.code===code);document.getElementById('selLname').textContent=pendL.native+' ('+pendL.name+')';buildModal(document.getElementById('lsearch').value);}
function openLM(){pendL=curL;buildModal();document.getElementById('selLname').textContent=curL.native+' ('+curL.name+')';document.getElementById('lsearch').value='';document.getElementById('lmBg').classList.add('open');}
function closeLM(){document.getElementById('lmBg').classList.remove('open');}
function filterL(){buildModal(document.getElementById('lsearch').value);}
function applyL(){applyLang(pendL.code);closeLM();}
function applyLang(code){
  const l=LANGS.find(x=>x.code===code); if(!l)return;
  curL=l; const u=l.ui;
  document.documentElement.dir=(l.code==='ur'||l.code==='ks'||l.code==='sd')?'rtl':'ltr';
  document.getElementById('si').placeholder=u.search;
  document.getElementById('signinlbl').textContent=u.signIn;
  document.getElementById('acclbl').textContent=u.account;
  document.getElementById('cartlbl').textContent=u.cart;
  document.getElementById('hlflag').textContent=l.flag;
  document.getElementById('hlname').textContent=l.native;
  document.getElementById('nav-all').textContent=u.allCat;
  document.getElementById('nav-deals').textContent=u.deals;
  document.getElementById('nav-sell').textContent=u.sell;
  document.getElementById('festT').textContent=u.festT;
  document.getElementById('festS').textContent=u.festS;
  document.getElementById('festBtn').textContent=u.festBtn;
  document.getElementById('dealsT').textContent=u.dealsT;
  document.getElementById('catTitle').textContent=u.catTitle;
  document.getElementById('recentT').textContent=u.recentT;
  document.getElementById('t1').textContent=u.fd;
  document.getElementById('t2').textContent=u.cod;
  document.getElementById('t3').textContent=u.er;
  document.getElementById('t4').textContent=u.sec;
  document.getElementById('t5').textContent=u.sup;
  document.getElementById('cartDTitle').textContent=u.cartTitle;
  document.querySelectorAll('.pcbtn').forEach(btn=>{if(!btn.classList.contains('added'))btn.textContent='🛒 '+u.ac;});
  buildBar();
  showToast('✅ Language: '+l.native+' ('+l.name+')');
}
document.getElementById('lmBg').addEventListener('click',e=>{if(e.target===document.getElementById('lmBg'))closeLM();});

// ── SLIDER ──
let slide=0;
function cslide(d){slide=(slide+d+4)%4;goslide(slide);}
function goslide(i){slide=i;document.getElementById('slides').style.transform=`translateX(-${slide*100}%)`;document.querySelectorAll('.sdot').forEach((d,j)=>d.classList.toggle('active',j===slide));}
setInterval(()=>cslide(1),5500);

// ── TIMER ──
let secs=8*3600+45*60+30;
setInterval(()=>{secs=secs>0?secs-1:86399;document.getElementById('tH').textContent=String(Math.floor(secs/3600)).padStart(2,'0');document.getElementById('tM').textContent=String(Math.floor((secs%3600)/60)).padStart(2,'0');document.getElementById('tS').textContent=String(secs%60).padStart(2,'0');},1000);

// ── SEARCH ──
function doSearch(){const q=document.getElementById('si').value.trim();if(!q)return;showToast('🔍 "'+q+'" search हो रहा है...');}
document.getElementById('si').addEventListener('keydown',e=>{if(e.key==='Enter')doSearch();});

// ── FILTER ──
function filterP(f,el){document.querySelectorAll('.fchip').forEach(c=>c.classList.remove('active'));el.classList.add('active');renderProducts(f);}

// ── PRODUCT MODAL ──
function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  
  const disc = Math.round((1 - product.price / product.old) * 100);
  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= .5 ? '☆' : '');
  
  const modal = document.getElementById('productModal');
  const modContent = document.getElementById('pmcontent');
  
  modContent.innerHTML = `
    <div class="pm-img">
      <img src="${product.img}" alt="${product.name}" class="${product.imgPad ? 'pad' : ''}"
        onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=display:flex;align-items:center;justify-content:center;height:100%>🛍</div>'">
    </div>
    <div class="pm-info">
      <button class="pm-close" onclick="closeProductModal()">✕</button>
      <div class="pmbrand">${product.brand}</div>
      <div class="pmname">${product.name}</div>
      <div class="pmstars">${stars} <span class="pmrc">(${product.reviews.toLocaleString()} reviews)</span></div>
      
      <div class="pm-price-row">
        <span class="pmp">₹${product.price.toLocaleString('en-IN')}</span>
        <span class="pmpo">₹${product.old.toLocaleString('en-IN')}</span>
        <span class="pmpd">-${disc}% off</span>
      </div>
      
      <div class="pm-desc">
        <strong>About this product:</strong>
        <p>${product.desc}</p>
      </div>
      
      <div class="pm-details">
        <div class="pm-detail-row">
          <span>Category:</span>
          <span>${product.cat.charAt(0).toUpperCase() + product.cat.slice(1)}</span>
        </div>
        <div class="pm-detail-row">
          <span>Tax (GST):</span>
          <span>${product.gst}%</span>
        </div>
        <div class="pm-detail-row">
          <span>Delivery:</span>
          <span>🚚 Free Delivery</span>
        </div>
      </div>
      
      <div class="pm-actions">
        <button class="pmbtn" onclick="addCart(${product.id}); closeProductModal();">🛒 Add to Cart</button>
        <button class="pmbtn pmw" onclick="wish(event, '${product.name.substring(0, 25)}')">❤️ Add to Wishlist</button>
      </div>
    </div>
  `;
  
  modal.classList.add('open');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('open');
}

document.getElementById('productModal')?.addEventListener('click', e => {
  if (e.target.id === 'productModal') closeProductModal();
});

// ── CHECK LOGIN ──
function checkLogin() {
  const isLoggedIn = localStorage.getItem('shopEayyLoggedIn') === 'true';
  if (!isLoggedIn) {
    localStorage.setItem('redirectFrom', 'index.html');
    window.location.href = 'auth.html';
    return false;
  }
  return true;
}

// ── LOGOUT FUNCTION ──
function handleLogout() {
  const confirmed = confirm('Are you sure you want to logout?');
  if (confirmed) {
    localStorage.removeItem('shopEayyLoggedIn');
    localStorage.removeItem('shopEayyCurrentUser');
    window.location.href = 'auth.html';
  }
}

// Add logout button to header
document.addEventListener('DOMContentLoaded', () => {
  const headerActsDiv = document.querySelector('.hacts');
  if (headerActsDiv) {
    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'hbtn logout-hbtn';
    logoutBtn.innerHTML = '<span>🚪</span><strong>Logout</strong>';
    logoutBtn.onclick = handleLogout;
    logoutBtn.style.marginLeft = '8px';
    headerActsDiv.appendChild(logoutBtn);
  }
});

// ── INIT ──
if (checkLogin()) {
  buildBar(); buildModal(); renderCats(); renderProducts(); renderRecent(); renderCart();
}
