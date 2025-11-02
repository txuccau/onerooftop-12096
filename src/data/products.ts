export interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  badge?: string;
  sku: string;
  blade: string;
  handle: string;
  description: string;
  features: string[];
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/black-rope6-scaled-1-300x300.jpeg",
    title: "Mini EDC Karambit Fixed Knife Blade Camping Hunting Tactical Straight Knives",
    price: "79.95",
    badge: "Popular",
    sku: "KRB-BLK-001",
    blade: "Stainless Steel",
    handle: "Paracord Wrapped",
    stock: 5,
    description: "Experience the perfect blend of tactical efficiency and everyday carry convenience with our Mini EDC Karambit. This expertly crafted knife features a curved blade design inspired by traditional Southeast Asian weaponry, optimized for modern outdoor enthusiasts. The high-grade stainless steel blade offers exceptional edge retention and corrosion resistance, making it ideal for camping, hunting, and survival situations. The distinctive paracord-wrapped handle provides superior grip in all conditions while adding a tactical aesthetic. Compact yet powerful, this karambit is your reliable companion for any adventure.",
    features: ["Curved blade design for enhanced cutting efficiency", "Durable stainless steel construction", "Paracord-wrapped handle for maximum grip", "Compact size perfect for EDC", "Includes secure sheath"]
  },
  {
    id: "2",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/brown-rope6-scaled-1-300x300.jpeg",
    title: "Mini EDC Karambit Fixed Knife Blade Camping Hunting Tactical Straight Knives",
    price: "79.95",
    sku: "KRB-BRN-001",
    blade: "Stainless Steel",
    handle: "Paracord Wrapped",
    stock: 3,
    description: "Discover the rugged charm of our brown paracord Mini EDC Karambit, designed for those who demand both style and substance. This tactical masterpiece combines traditional craftsmanship with modern materials, featuring a premium stainless steel blade that maintains its razor-sharp edge through the toughest conditions. The earth-tone brown paracord wrapping not only provides an exceptional non-slip grip but also serves as emergency cordage when needed. Whether you're navigating through dense wilderness or need a reliable tool for daily tasks, this karambit delivers unmatched performance and versatility.",
    features: ["Premium stainless steel blade", "Earth-tone brown paracord wrapping", "Emergency cordage available", "Ergonomic curved design", "Lightweight and portable"]
  },
  {
    id: "3",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/green-rope6-scaled-1-300x300.jpeg",
    title: "Mini EDC Karambit Fixed Knife Blade Camping Hunting Tactical Straight Knives",
    price: "79.95",
    sku: "KRB-GRN-001",
    blade: "Stainless Steel",
    handle: "Paracord Wrapped",
    stock: 7,
    description: "Stand out in the field with our striking green paracord Mini EDC Karambit, engineered for outdoor enthusiasts who refuse to compromise on quality. This tactical knife features a precision-ground stainless steel blade that excels in cutting, slicing, and piercing tasks. The vibrant green paracord wrapping ensures easy visibility while providing the tactical grip you need in critical situations. Built to withstand the harshest environments, this karambit is your trusted partner for camping expeditions, hunting trips, and everyday carry needs.",
    features: ["High-visibility green paracord handle", "Precision-ground blade edge", "Weather-resistant construction", "Tactical ring for enhanced control", "Comes with protective sheath"]
  },
  {
    id: "4",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/Linder3-300x300.jpg",
    title: "LINDER Mini Fixed Knife Blade Real Antler Horn Camping Hunting Straight Knives",
    price: "49.95",
    badge: "New Arrival",
    sku: "LND-ANT-003",
    blade: "Carbon Steel",
    handle: "Antler Horn",
    stock: 4,
    description: "Embrace tradition with the LINDER Mini Fixed Knife, a stunning piece that showcases authentic antler horn craftsmanship. Each knife is unique, featuring a naturally beautiful antler handle that provides both aesthetic appeal and functional superiority. The carbon steel blade is hand-forged to deliver exceptional sharpness and edge retention, making it perfect for precision cutting tasks in hunting and camping scenarios. This knife represents the perfect marriage of Old World craftsmanship and practical outdoor utility, making it a cherished addition to any collection.",
    features: ["Authentic real antler horn handle", "Hand-forged carbon steel blade", "Each piece is uniquely crafted", "Traditional straight blade design", "Premium leather sheath included"]
  },
  {
    id: "5",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/O1CN018Vn9XH1UejzRrFdLZ_2215088982543-0-cib-300x300.jpg",
    title: "LIGHTNING Fixed Knife Blade Camping Hunting Survival Tactical Straight Knives",
    price: "99.95",
    sku: "LTN-TAC-005",
    blade: "Damascus Steel",
    handle: "G10 Composite",
    stock: 6,
    description: "Unleash the power of the LIGHTNING Fixed Knife, featuring an exquisite Damascus steel blade with its signature wave pattern that's both beautiful and functional. This premium knife is crafted for serious outdoorsmen who demand the absolute best in performance and aesthetics. The Damascus steel construction provides unparalleled strength, flexibility, and edge retention, while the G10 composite handle offers industrial-grade durability with excellent grip in all weather conditions. Whether you're facing survival situations or enjoying a camping adventure, this knife delivers lightning-fast performance when you need it most.",
    features: ["Authentic Damascus steel blade", "G10 composite handle for durability", "Distinctive wave pattern", "Superior edge retention", "Professional-grade construction"]
  },
  {
    id: "6",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/115a04004-0-300x300.jpg",
    title: "GDR Ninja Knife Fixed Blade Camping Hunting Survival Tactical Straight Knives",
    price: "69.95",
    sku: "GDR-NJA-006",
    blade: "High Carbon Steel",
    handle: "Rubber Grip",
    stock: 2,
    description: "Channel your inner warrior with the GDR Ninja Knife, a tactical powerhouse designed for stealth and efficiency. This fixed blade knife features a high carbon steel blade that's been heat-treated for maximum hardness and durability. The specialized rubber grip handle ensures a secure hold even in wet or humid conditions, making it ideal for all-weather outdoor activities. With its sleek, tactical profile and razor-sharp edge, this knife excels in camping, hunting, and survival scenarios where reliability and performance are non-negotiable.",
    features: ["High carbon steel construction", "All-weather rubber grip", "Heat-treated for durability", "Tactical blade profile", "Balanced weight distribution"]
  },
  {
    id: "7",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/FOX-DERESRINA-KARAMBIT-1-300x300.jpg",
    title: "Fox Knives Karambit Fixed Straight Knife Blade Camping Fishing Hunting Tactical",
    price: "79.95",
    sku: "FOX-KRB-007",
    blade: "N690 Steel",
    handle: "Micarta",
    stock: 8,
    description: "Experience Italian excellence with the Fox Knives Karambit, a masterpiece of European knife-making tradition. Crafted from premium N690 steel, this blade offers exceptional corrosion resistance and edge retention that outperforms standard stainless steel. The Micarta handle scales provide a refined, professional grip that's both comfortable and durable. This karambit is perfect for fishing, hunting, and tactical applications, combining the centuries-old curved blade design with modern materials and manufacturing techniques. When you choose Fox Knives, you're investing in legendary quality and performance.",
    features: ["Premium N690 steel blade", "Durable Micarta handle scales", "Italian craftsmanship", "Corrosion-resistant construction", "Includes Kydex sheath"]
  },
  {
    id: "8",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/20160601094208458-300x300.jpg",
    title: "Fox Knife Fixed Blade Camping Outdoor Hunting Survival Tactical Straight Knives",
    price: "69.95",
    badge: "Best Seller",
    sku: "FOX-FXD-008",
    blade: "440C Steel",
    handle: "G10",
    stock: 3,
    description: "Our best-selling Fox Knife Fixed Blade has earned its reputation through outstanding performance in the field. Featuring a 440C steel blade known for its excellent balance of hardness, corrosion resistance, and edge retention, this knife is built to handle any outdoor challenge. The precision-machined G10 handle provides superior grip and durability while remaining lightweight. Whether you're setting up camp, preparing game, or navigating survival situations, this versatile fixed blade delivers consistent, reliable performance that outdoor enthusiasts trust time and time again.",
    features: ["440C steel blade", "Precision-machined G10 handle", "Proven field performance", "Versatile blade design", "Tactical black finish"]
  },
  {
    id: "9",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/2017050203266954-300x300.jpg",
    title: "Fox Knife Fixed Blade Camping Outdoor Hunting Survival Tactical Straight Knives",
    price: "99.95",
    sku: "FOX-FXD-009",
    blade: "N690 Steel",
    handle: "Aluminum",
    stock: 5,
    description: "Elevate your outdoor experience with this premium Fox Knife featuring aerospace-grade aluminum handle construction. The N690 steel blade delivers professional-level performance with superior edge retention and corrosion resistance, making it ideal for demanding outdoor activities. The CNC-machined aluminum handle offers an excellent strength-to-weight ratio while providing a secure, comfortable grip. This knife represents the pinnacle of modern knife design, combining cutting-edge materials with time-tested functionality for the serious outdoorsman who demands excellence.",
    features: ["N690 premium steel blade", "Aerospace-grade aluminum handle", "CNC-machined precision", "Lightweight yet strong", "Professional-grade quality"]
  },
  {
    id: "10",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/rbvavlyv22wafxdeaaf8gro6qfg815-300x300.jpg",
    title: "FOX CLAW Silver Mini Neck Karambit Fixed Knife Blade Camping Hunting Tactical AU",
    price: "49.95",
    sku: "FOX-CLW-010",
    blade: "Stainless Steel",
    handle: "Polymer",
    stock: 4,
    description: "Compact, concealable, and incredibly capable – the FOX CLAW Silver Mini Neck Karambit is your ultimate backup blade. This lightweight tactical knife is designed to be worn around the neck for instant accessibility when you need it most. The mirror-polished stainless steel blade cuts with surprising efficiency despite its compact size, while the ergonomic polymer handle ensures a secure grip. Perfect for camping, hiking, or as a last-resort self-defense tool, this mini karambit proves that great things come in small packages.",
    features: ["Compact neck knife design", "Mirror-polished stainless steel", "Ergonomic polymer handle", "Includes neck chain", "Ultra-lightweight construction"]
  },
  {
    id: "11",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/rbvawvyv22oaldosaaf-wpjvgli7601-300x300.jpg",
    title: "FOX CLAW Black Mini Neck Karambit Fixed Knife Blade Camping Hunting Tactical NEW",
    price: "49.95",
    sku: "FOX-CLW-011",
    blade: "Stainless Steel",
    handle: "Polymer",
    stock: 6,
    description: "The FOX CLAW Black Mini Neck Karambit combines stealth aesthetics with practical functionality in a compact package. Featuring a black-coated stainless steel blade for reduced glare and enhanced corrosion resistance, this tactical neck knife is ready for any situation. The textured polymer handle provides excellent grip security, while the included neck chain keeps the knife readily accessible. Whether you're camping in remote wilderness or need a reliable backup tool, this sleek black karambit delivers confidence and capability in a discreet, wearable form factor.",
    features: ["Tactical black coating", "Textured polymer handle", "Discreet neck carry option", "Corrosion-resistant blade", "Quick-access design"]
  },
  {
    id: "12",
    image: "https://onerooftop.com.au/wp-content/uploads/2025/02/longblack6-scaled-1-300x300.jpeg",
    title: "EDC Karambit Fixed Knife Blade Outdoor Camping Hunting Tactical Straight Knives",
    price: "79.95",
    sku: "EDC-KRB-012",
    blade: "D2 Steel",
    handle: "Paracord",
    stock: 7,
    description: "Master the art of everyday carry with this exceptional EDC Karambit featuring premium D2 tool steel. Known as 'semi-stainless' steel, D2 offers outstanding edge retention and toughness that surpasses most stainless steels while maintaining good corrosion resistance. The extended paracord-wrapped handle provides superior leverage and control, making this knife equally effective for utility tasks and tactical applications. With its distinctive curved blade and robust construction, this karambit is built to be your most reliable everyday companion, ready to tackle any challenge that comes your way.",
    features: ["Premium D2 tool steel blade", "Extended paracord handle", "Superior edge retention", "Multi-purpose design", "Heavy-duty construction"]
  }
];
