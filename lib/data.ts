export type ProductCategory =
  | 'laptop'
  | 'mobile'
  | 'computer'
  | 'monitor'
  | 'parts'
  | 'accessories'
  | 'audio'
  | 'gadget'
  | 'network'
  | 'home';

export type WarrantyType = 'ব্র্যান্ড ওয়ারেন্টি' | 'সেলার ওয়ারেন্টি' | 'সার্ভিস ওয়ারেন্টি' | 'ওয়ারেন্টি নেই';

export type Specification = { key: string; value: string };

export type Product = {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  shortDescription: string;
  description: string;
  specifications: Specification[];
  warranty: { type: WarrantyType; label: string; details: string };
  stock: number;
  rating: number;
  reviews: number;
  codAvailable: boolean;
  colors: string[];
  variants: string[];
  badge?: string;
  tags: string[];
}

export const config = {
  brandName: 'TECHORA',
  tagline: 'প্রযুক্তি হোক আপনার প্রতিদিনের সঙ্গী',
  phone: '০৯৬১২-৪৪৪৪৪৪',
  email: 'hello@techora.bd',
  whatsappNumber: '8801876892958',
  whatsappDisplayNumber: '01876892958',
  whatsappCta: 'এই ধরনের সাইট তৈরি করতে এখনই মেসেজ দিন।',
  whatsappMessage: 'আসসালামু আলাইকুম। আমি TECHORA Electronics Demo Website দেখে যোগাযোগ করছি। আমার Business-এর জন্য এমন একটি Website তৈরি করতে চাই।',
  deliveryChargeInsideDhaka: 70,
  deliveryChargeOutsideDhaka: 130,
  socialLinks: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
  footerInformation: 'এই ওয়েবসাইটটি CodePixel Web-এর একটি ডেমো প্রজেক্ট।',
};

export const categories = [
  { label: 'ল্যাপটপ', sublabel: 'শেখা ও কাজের জন্য', value: 'laptop', icon: 'laptop', href: '/shop?category=laptop' },
  { label: 'মোবাইল', sublabel: 'স্মার্ট থাকা সহজ হোক', value: 'mobile', icon: 'phone', href: '/shop?category=mobile' },
  { label: 'কম্পিউটার', sublabel: 'আপনার শক্তিশালী সেটআপ', value: 'computer', icon: 'desktop', href: '/shop?category=computer' },
  { label: 'মনিটর', sublabel: 'আরও পরিষ্কার ভিউ', value: 'monitor', icon: 'monitor', href: '/shop?category=monitor' },
  { label: 'অ্যাক্সেসরিজ', sublabel: 'প্রতিদিনের প্রয়োজন', value: 'accessories', icon: 'cable', href: '/shop?category=accessories' },
  { label: 'অডিও', sublabel: 'শুনুন নিজের মতো', value: 'audio', icon: 'headphones', href: '/shop?category=audio' },
  { label: 'স্মার্ট গ্যাজেট', sublabel: 'জীবন হোক আরও স্মার্ট', value: 'gadget', icon: 'watch', href: '/shop?category=gadget' },
  { label: 'নেটওয়ার্কিং', sublabel: 'সবসময় সংযুক্ত থাকুন', value: 'network', icon: 'wifi', href: '/shop?category=network' },
  { label: 'টিভি ও হোম', sublabel: 'ঘরের জন্য প্রযুক্তি', value: 'home', icon: 'tv', href: '/shop?category=home' },
  { label: 'কম্পিউটার পার্টস', sublabel: 'তৈরি করুন আপনার PC', value: 'parts', icon: 'cpu', href: '/shop?category=parts' },
] as const;

export const brands = ['Apple', 'Samsung', 'Xiaomi', 'Lenovo', 'ASUS', 'HP', 'Dell', 'Anker', 'UGREEN', 'Logitech'];

const laptopImage = '/images/techora-laptop.png';
const phoneImage = '/images/techora-phone.png';
const audioImage = '/images/techora-audio.png';
const monitorImage = '/images/techora-monitor.png';
const heroImage = '/images/techora-hero.png';

export const products: Product[] = [
  {
    id: 'lap-001', name: 'TECHORA AirBook 14', slug: 'techora-airbook-14', brand: 'TECHORA', category: 'laptop', categoryLabel: 'ল্যাপটপ', price: 68500, originalPrice: 72900, discount: 6, images: [laptopImage, heroImage],
    shortDescription: 'Core i5 · 16GB RAM · 512GB SSD', description: 'হালকা, দ্রুত এবং সারাদিনের কাজের জন্য নির্ভরযোগ্য একটি premium laptop।',
    specifications: [{ key: 'Processor', value: 'Intel Core i5-1335U' }, { key: 'RAM', value: '16GB DDR4' }, { key: 'Storage', value: '512GB NVMe SSD' }, { key: 'Display', value: '14” FHD IPS, 60Hz' }, { key: 'Graphics', value: 'Intel Iris Xe' }, { key: 'Battery', value: '54Wh, up to 9 hours' }, { key: 'Operating System', value: 'Windows 11 Home' }, { key: 'Weight', value: '1.42 kg' }, { key: 'Ports', value: 'USB-C, USB 3.2, HDMI' }],
    warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '১ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'পার্টস ও সার্ভিসের শর্ত প্রযোজ্য।' }, stock: 12, rating: 4.8, reviews: 36, codAvailable: true, colors: ['Space Grey', 'Silver'], variants: ['16GB / 512GB SSD', '16GB / 1TB SSD'], badge: 'জনপ্রিয়', tags: ['laptop', 'core i5', '16gb ram', 'ssd', 'office']
  },
  {
    id: 'lap-002', name: 'TECHORA ProBook 15', slug: 'techora-probook-15', brand: 'TECHORA', category: 'laptop', categoryLabel: 'ল্যাপটপ', price: 89500, originalPrice: 96500, discount: 7, images: [laptopImage, heroImage],
    shortDescription: 'Core i7 · 16GB RAM · 1TB SSD', description: 'বড় স্ক্রিনে productivity ও multitasking-এর জন্য তৈরি শক্তিশালী ProBook।',
    specifications: [{ key: 'Processor', value: 'Intel Core i7-1360P' }, { key: 'RAM', value: '16GB DDR5' }, { key: 'Storage', value: '1TB NVMe SSD' }, { key: 'Display', value: '15.6” FHD IPS, 144Hz' }, { key: 'Graphics', value: 'Intel Iris Xe' }, { key: 'Battery', value: '60Wh' }, { key: 'Operating System', value: 'Windows 11 Home' }, { key: 'Weight', value: '1.72 kg' }, { key: 'Ports', value: 'Thunderbolt 4, USB-A, HDMI' }],
    warranty: { type: 'সেলার ওয়ারেন্টি', label: '১ বছরের সেলার ওয়ারেন্টি', details: 'নিকটস্থ সার্ভিস পয়েন্টে সেবা পাওয়া যাবে।' }, stock: 8, rating: 4.7, reviews: 24, codAvailable: true, colors: ['Midnight Blue'], variants: ['16GB / 1TB SSD', '32GB / 1TB SSD'], badge: 'সেরা পছন্দ', tags: ['laptop', 'core i7', 'office', 'freelancing']
  },
  {
    id: 'lap-003', name: 'TECHORA Creator 16', slug: 'techora-creator-16', brand: 'TECHORA', category: 'laptop', categoryLabel: 'ল্যাপটপ', price: 124900, originalPrice: 136000, discount: 8, images: [laptopImage, heroImage],
    shortDescription: 'Core i7 · RTX 4060 · 32GB RAM', description: 'ডিজাইন, 3D এবং ভিডিও এডিটিংয়ের জন্য colour-accurate display সহ premium performance।',
    specifications: [{ key: 'Processor', value: 'Intel Core i7-14700H' }, { key: 'RAM', value: '32GB DDR5' }, { key: 'Storage', value: '1TB NVMe SSD' }, { key: 'Display', value: '16” 2.5K 165Hz, 100% sRGB' }, { key: 'Graphics', value: 'NVIDIA RTX 4060 8GB' }, { key: 'Battery', value: '80Wh' }, { key: 'Operating System', value: 'Windows 11 Home' }, { key: 'Weight', value: '2.08 kg' }, { key: 'Ports', value: 'USB-C, USB-A, HDMI 2.1, SD card' }],
    warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '২ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'ব্যাটারি ও accessories-এর শর্ত আলাদা হতে পারে।' }, stock: 3, rating: 4.9, reviews: 19, codAvailable: false, colors: ['Graphite'], variants: ['32GB / 1TB SSD'], badge: 'প্রিমিয়াম', tags: ['laptop', 'creator', 'video editing', 'gaming', 'design']
  },
  {
    id: 'lap-004', name: 'TECHORA StudyBook 13', slug: 'techora-studybook-13', brand: 'TECHORA', category: 'laptop', categoryLabel: 'ল্যাপটপ', price: 42900, originalPrice: 45900, discount: 7, images: [laptopImage],
    shortDescription: 'Core i3 · 8GB RAM · 256GB SSD', description: 'পড়াশোনা, অনলাইন ক্লাস এবং everyday browsing-এর জন্য সহজ ও সাশ্রয়ী।',
    specifications: [{ key: 'Processor', value: 'Intel Core i3-N305' }, { key: 'RAM', value: '8GB LPDDR5' }, { key: 'Storage', value: '256GB NVMe SSD' }, { key: 'Display', value: '13.3” FHD IPS' }, { key: 'Graphics', value: 'Intel UHD' }, { key: 'Battery', value: '45Wh' }, { key: 'Operating System', value: 'Windows 11 Home' }, { key: 'Weight', value: '1.25 kg' }, { key: 'Ports', value: 'USB-C, USB-A, HDMI' }],
    warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '৬ মাসের সার্ভিস ওয়ারেন্টি', details: 'সার্ভিস ওয়ারেন্টিতে পার্টসের খরচ প্রযোজ্য হতে পারে।' }, stock: 18, rating: 4.5, reviews: 31, codAvailable: true, colors: ['Silver'], variants: ['8GB / 256GB SSD'], tags: ['laptop', 'study', 'student', 'core i3']
  },
  {
    id: 'mob-001', name: 'TECHORA X1', slug: 'techora-x1', brand: 'TECHORA', category: 'mobile', categoryLabel: 'মোবাইল', price: 28900, originalPrice: 31900, discount: 9, images: [phoneImage],
    shortDescription: 'AMOLED 120Hz · 8GB RAM · 128GB ROM', description: 'দৈনন্দিন performance, clear camera এবং দীর্ঘ battery life-এর balanced smartphone।',
    specifications: [{ key: 'Display', value: '6.67” AMOLED, 120Hz' }, { key: 'Processor', value: 'Octa-core 2.4GHz' }, { key: 'RAM', value: '8GB' }, { key: 'Storage', value: '128GB ROM' }, { key: 'Camera', value: '64MP + 8MP Dual Camera' }, { key: 'Battery', value: '5,000mAh' }, { key: 'Charging', value: '67W Fast Charging' }, { key: 'Operating System', value: 'Android 15' }, { key: 'Network', value: '5G Dual SIM' }],
    warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '১ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'অথরাইজড সার্ভিস পয়েন্টে claim করা যাবে।' }, stock: 21, rating: 4.7, reviews: 48, codAvailable: true, colors: ['Graphite Black', 'Ice Blue'], variants: ['8GB / 128GB', '8GB / 256GB'], badge: 'নতুন', tags: ['mobile', 'smartphone', 'android', 'amoled']
  },
  {
    id: 'mob-002', name: 'TECHORA X1 Pro', slug: 'techora-x1-pro', brand: 'TECHORA', category: 'mobile', categoryLabel: 'মোবাইল', price: 44900, originalPrice: 49900, discount: 10, images: [phoneImage],
    shortDescription: 'AMOLED 144Hz · 12GB RAM · 256GB ROM', description: 'শক্তিশালী chipset ও pro-grade camera system সহ TECHORA-এর flagship experience।',
    specifications: [{ key: 'Display', value: '6.78” AMOLED, 144Hz' }, { key: 'Processor', value: 'Snapdragon 8 Gen 3' }, { key: 'RAM', value: '12GB LPDDR5X' }, { key: 'Storage', value: '256GB UFS 4.0' }, { key: 'Camera', value: '50MP OIS + 50MP Ultra-wide' }, { key: 'Battery', value: '5,200mAh' }, { key: 'Charging', value: '100W Fast Charging' }, { key: 'Operating System', value: 'Android 15' }, { key: 'Network', value: '5G Dual SIM' }],
    warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '১ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'অথরাইজড সার্ভিস পয়েন্টে claim করা যাবে।' }, stock: 6, rating: 4.9, reviews: 22, codAvailable: false, colors: ['Titanium Grey', 'Ocean Blue'], variants: ['12GB / 256GB', '16GB / 512GB'], badge: 'ফ্ল্যাগশিপ', tags: ['mobile', 'smartphone', 'android', 'camera', '5g']
  },
  {
    id: 'mob-003', name: 'TECHORA Note 12', slug: 'techora-note-12', brand: 'TECHORA', category: 'mobile', categoryLabel: 'মোবাইল', price: 19900, originalPrice: 21900, discount: 9, images: [phoneImage],
    shortDescription: 'FHD+ Display · 6GB RAM · 128GB ROM', description: 'বড় display ও all-day battery সহ everyday use-এর নির্ভরযোগ্য সঙ্গী।',
    specifications: [{ key: 'Display', value: '6.7” FHD+ IPS, 90Hz' }, { key: 'Processor', value: 'MediaTek Helio G99' }, { key: 'RAM', value: '6GB' }, { key: 'Storage', value: '128GB ROM' }, { key: 'Camera', value: '50MP AI Triple Camera' }, { key: 'Battery', value: '6,000mAh' }, { key: 'Charging', value: '33W Fast Charging' }, { key: 'Operating System', value: 'Android 14' }, { key: 'Network', value: '4G Dual SIM' }],
    warranty: { type: 'সেলার ওয়ারেন্টি', label: '১ বছরের সেলার ওয়ারেন্টি', details: 'সফটওয়্যার ও physical damage-এর শর্ত প্রযোজ্য।' }, stock: 15, rating: 4.6, reviews: 63, codAvailable: true, colors: ['Forest Green', 'Midnight Black'], variants: ['6GB / 128GB', '8GB / 128GB'], tags: ['mobile', 'smartphone', 'budget', 'battery']
  },
  {
    id: 'mob-004', name: 'TECHORA Tab Air 11', slug: 'techora-tab-air-11', brand: 'TECHORA', category: 'mobile', categoryLabel: 'মোবাইল ও ট্যাব', price: 32900, originalPrice: 35900, discount: 8, images: [phoneImage],
    shortDescription: '11” 2K Display · 8GB RAM · 256GB ROM', description: 'বিনোদন, নোট নেওয়া ও online learning-এর জন্য পাতলা tablet।',
    specifications: [{ key: 'Display', value: '11” 2K IPS, 120Hz' }, { key: 'Processor', value: 'Snapdragon 7 Gen 1' }, { key: 'RAM', value: '8GB' }, { key: 'Storage', value: '256GB ROM' }, { key: 'Camera', value: '13MP Rear, 8MP Front' }, { key: 'Battery', value: '8,000mAh' }, { key: 'Charging', value: '33W Fast Charging' }, { key: 'Operating System', value: 'Android 15' }, { key: 'Network', value: 'Wi-Fi 6' }],
    warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '১ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'অথরাইজড সার্ভিস পয়েন্টে claim করা যাবে।' }, stock: 9, rating: 4.6, reviews: 17, codAvailable: true, colors: ['Silver'], variants: ['8GB / 256GB'], tags: ['tablet', 'mobile', 'study', 'android']
  },
  {
    id: 'pc-001', name: 'TECHORA CoreStation i5', slug: 'techora-corestation-i5', brand: 'TECHORA', category: 'computer', categoryLabel: 'কম্পিউটার', price: 58900, originalPrice: 63200, discount: 7, images: [laptopImage],
    shortDescription: 'Core i5 · 16GB RAM · 512GB SSD', description: 'অফিস ও creative workflow-এর জন্য compact desktop solution।',
    specifications: [{ key: 'Processor', value: 'Intel Core i5-14400' }, { key: 'RAM', value: '16GB DDR5' }, { key: 'Storage', value: '512GB NVMe SSD' }, { key: 'Graphics', value: 'Intel UHD 730' }, { key: 'Power Supply', value: '500W 80+ Bronze' }, { key: 'Connectivity', value: 'Wi-Fi 6, Bluetooth 5.3' }, { key: 'Operating System', value: 'Windows 11 Home' }],
    warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '১ বছরের সার্ভিস ওয়ারেন্টি', details: 'সার্ভিস ওয়ারেন্টিতে পার্টসের শর্ত প্রযোজ্য।' }, stock: 7, rating: 4.7, reviews: 14, codAvailable: true, colors: ['Black'], variants: ['16GB / 512GB SSD'], tags: ['desktop', 'computer', 'core i5', 'office']
  },
  {
    id: 'pc-002', name: 'TECHORA MiniCore N2', slug: 'techora-minicore-n2', brand: 'TECHORA', category: 'computer', categoryLabel: 'কম্পিউটার', price: 34900, originalPrice: 37900, discount: 8, images: [laptopImage],
    shortDescription: 'Intel N100 · 16GB RAM · 512GB SSD', description: 'কম জায়গায় বেশি কাজ—home office ও media center-এর জন্য ছোট PC।',
    specifications: [{ key: 'Processor', value: 'Intel Processor N100' }, { key: 'RAM', value: '16GB DDR4' }, { key: 'Storage', value: '512GB NVMe SSD' }, { key: 'Graphics', value: 'Intel UHD Graphics' }, { key: 'Ports', value: 'USB 3.0, HDMI 2.0, Type-C' }, { key: 'Connectivity', value: 'Wi-Fi 6, Bluetooth 5.2' }, { key: 'Operating System', value: 'Windows 11 Pro' }],
    warranty: { type: 'সেলার ওয়ারেন্টি', label: '১ বছরের সেলার ওয়ারেন্টি', details: 'সার্ভিস পয়েন্টে সহায়তা পাওয়া যাবে।' }, stock: 11, rating: 4.5, reviews: 11, codAvailable: true, colors: ['Graphite'], variants: ['16GB / 512GB SSD'], tags: ['mini pc', 'computer', 'office']
  },
  {
    id: 'pc-003', name: 'TECHORA WorkStation Pro', slug: 'techora-workstation-pro', brand: 'TECHORA', category: 'computer', categoryLabel: 'কম্পিউটার', price: 119900, originalPrice: 128000, discount: 6, images: [laptopImage],
    shortDescription: 'Core i7 · RTX 4060 · 32GB RAM', description: 'heavy workflow ও content creation-এর জন্য ready-to-work performance desktop।',
    specifications: [{ key: 'Processor', value: 'Intel Core i7-14700K' }, { key: 'RAM', value: '32GB DDR5' }, { key: 'Storage', value: '1TB NVMe SSD' }, { key: 'Graphics', value: 'NVIDIA RTX 4060 8GB' }, { key: 'Power Supply', value: '750W 80+ Gold' }, { key: 'Cooling', value: '240mm Liquid Cooling' }, { key: 'Operating System', value: 'Windows 11 Pro' }],
    warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '২ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'পার্টস ও সার্ভিসের শর্ত প্রযোজ্য।' }, stock: 2, rating: 4.9, reviews: 9, codAvailable: false, colors: ['Black'], variants: ['32GB / 1TB SSD'], badge: 'প্রিমিয়াম', tags: ['desktop', 'computer', 'creator', 'gaming']
  },
  {
    id: 'mon-001', name: 'TECHORA View 24', slug: 'techora-view-24', brand: 'TECHORA', category: 'monitor', categoryLabel: 'মনিটর', price: 18900, originalPrice: 20900, discount: 10, images: [monitorImage],
    shortDescription: '24” FHD IPS · 100Hz · USB-C', description: 'কাজ ও entertainment-এর জন্য crisp colour এবং comfortable viewing।',
    specifications: [{ key: 'Display', value: '24” FHD IPS, 100Hz' }, { key: 'Response Time', value: '1ms MPRT' }, { key: 'Brightness', value: '250 nits' }, { key: 'Ports', value: 'HDMI, DisplayPort, USB-C' }, { key: 'Features', value: 'Adaptive Sync, Low Blue Light' }],
    warranty: { type: 'সেলার ওয়ারেন্টি', label: '৩ বছরের সেলার ওয়ারেন্টি', details: 'Panel warranty-এর শর্ত প্রযোজ্য।' }, stock: 16, rating: 4.6, reviews: 28, codAvailable: true, colors: ['Black'], variants: ['Black / 100Hz'], badge: 'দাম কমেছে', tags: ['monitor', 'display', 'office', 'full hd']
  },
  {
    id: 'mon-002', name: 'TECHORA View 27', slug: 'techora-view-27', brand: 'TECHORA', category: 'monitor', categoryLabel: 'মনিটর', price: 28900, originalPrice: 31900, discount: 9, images: [monitorImage],
    shortDescription: '27” QHD IPS · 165Hz · HDR Ready', description: 'বড় QHD workspace ও smooth motion—design এবং gaming দুইয়ের জন্য।',
    specifications: [{ key: 'Display', value: '27” QHD IPS, 165Hz' }, { key: 'Response Time', value: '1ms GTG' }, { key: 'Brightness', value: '350 nits, HDR Ready' }, { key: 'Ports', value: 'HDMI 2.0, DisplayPort 1.4' }, { key: 'Features', value: 'Adaptive Sync, Height Adjust' }],
    warranty: { type: 'সেলার ওয়ারেন্টি', label: '৩ বছরের সেলার ওয়ারেন্টি', details: 'Panel warranty-এর শর্ত প্রযোজ্য।' }, stock: 10, rating: 4.8, reviews: 20, codAvailable: true, colors: ['Black'], variants: ['Black / 165Hz'], tags: ['monitor', 'display', 'qhd', 'gaming', 'design']
  },
  {
    id: 'mon-003', name: 'TECHORA Ultra 32', slug: 'techora-ultra-32', brand: 'TECHORA', category: 'monitor', categoryLabel: 'মনিটর', price: 45900, originalPrice: 49900, discount: 8, images: [monitorImage],
    shortDescription: '32” 4K UHD · 144Hz · USB-C 90W', description: 'এক স্ক্রিনে clarity, scale ও power delivery—creator-এর জন্য বড় upgrade।',
    specifications: [{ key: 'Display', value: '32” 4K UHD IPS, 144Hz' }, { key: 'Response Time', value: '1ms GTG' }, { key: 'Brightness', value: '400 nits, HDR400' }, { key: 'Ports', value: 'HDMI 2.1, DP 1.4, USB-C 90W' }, { key: 'Features', value: 'KVM, PIP/PBP, Height Adjust' }],
    warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '৩ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'Panel warranty-এর শর্ত প্রযোজ্য।' }, stock: 4, rating: 4.8, reviews: 12, codAvailable: false, colors: ['Black'], variants: ['Black / 144Hz'], badge: 'সেরা পছন্দ', tags: ['monitor', 'display', '4k', 'creator']
  },
  {
    id: 'part-001', name: 'TECHORA Core i5 14400', slug: 'techora-core-i5-14400', brand: 'Intel', category: 'parts', categoryLabel: 'কম্পিউটার পার্টস', price: 24900, originalPrice: 26900, discount: 7, images: [laptopImage],
    shortDescription: '10 Core · up to 4.7GHz · LGA1700', description: 'দৈনন্দিন productivity ও gaming build-এর জন্য balanced processor।', specifications: [{ key: 'Cores', value: '10 Cores / 16 Threads' }, { key: 'Base Clock', value: '2.5GHz' }, { key: 'Boost Clock', value: 'Up to 4.7GHz' }, { key: 'Socket', value: 'LGA1700' }, { key: 'Graphics', value: 'Intel UHD 730' }], warranty: { type: 'সেলার ওয়ারেন্টি', label: '৩ বছরের সেলার ওয়ারেন্টি', details: 'ভ্যালিড invoice প্রয়োজন।' }, stock: 7, rating: 4.8, reviews: 16, codAvailable: true, colors: ['Box Pack'], variants: ['Box Pack'], tags: ['processor', 'core i5', 'parts', 'cpu']
  },
  {
    id: 'part-002', name: 'TECHORA Radeon RX 7600', slug: 'techora-radeon-rx-7600', brand: 'AMD', category: 'parts', categoryLabel: 'কম্পিউটার পার্টস', price: 38900, originalPrice: 42500, discount: 8, images: [monitorImage],
    shortDescription: '8GB GDDR6 · 1080p Gaming · HDMI 2.1', description: 'smooth 1080p gaming ও creative acceleration-এর জন্য graphics card।', specifications: [{ key: 'GPU', value: 'AMD Radeon RX 7600' }, { key: 'Memory', value: '8GB GDDR6' }, { key: 'Boost Clock', value: 'Up to 2,655MHz' }, { key: 'Power', value: '550W recommended PSU' }, { key: 'Ports', value: 'HDMI 2.1, DisplayPort 2.1' }], warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '২ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'ফিজিক্যাল damage warranty-র আওতাভুক্ত নয়।' }, stock: 5, rating: 4.7, reviews: 13, codAvailable: false, colors: ['Black'], variants: ['8GB GDDR6'], tags: ['graphics card', 'gpu', 'parts', 'gaming']
  },
  {
    id: 'part-003', name: 'TECHORA Solid 16GB DDR5', slug: 'techora-solid-16gb-ddr5', brand: 'TECHORA', category: 'parts', categoryLabel: 'কম্পিউটার পার্টস', price: 6200, originalPrice: 6900, discount: 10, images: [laptopImage],
    shortDescription: '16GB · 5600MHz · Desktop RAM', description: 'আপনার compatible desktop-এর জন্য fast এবং reliable DDR5 memory।', specifications: [{ key: 'Capacity', value: '16GB (1 x 16GB)' }, { key: 'Type', value: 'DDR5 UDIMM' }, { key: 'Speed', value: '5600MHz' }, { key: 'Voltage', value: '1.25V' }], warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: 'লাইফটাইম ব্র্যান্ড ওয়ারেন্টি', details: 'Brand policy অনুযায়ী।' }, stock: 30, rating: 4.8, reviews: 27, codAvailable: true, colors: ['Black'], variants: ['16GB / 5600MHz'], tags: ['ram', 'memory', 'parts', '16gb']
  },
  {
    id: 'part-004', name: 'TECHORA Nova 1TB SSD', slug: 'techora-nova-1tb-ssd', brand: 'TECHORA', category: 'parts', categoryLabel: 'কম্পিউটার পার্টস', price: 8900, originalPrice: 9900, discount: 10, images: [laptopImage],
    shortDescription: '1TB NVMe · PCIe 4.0 · 7,000MB/s', description: 'দ্রুত boot, transfer ও application load-এর জন্য next-gen storage।', specifications: [{ key: 'Capacity', value: '1TB' }, { key: 'Interface', value: 'PCIe 4.0 NVMe M.2' }, { key: 'Read Speed', value: 'Up to 7,000MB/s' }, { key: 'Write Speed', value: 'Up to 6,000MB/s' }, { key: 'Form Factor', value: 'M.2 2280' }], warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '৫ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'TBW limit ও brand policy প্রযোজ্য।' }, stock: 22, rating: 4.9, reviews: 41, codAvailable: true, colors: ['Black'], variants: ['1TB'], badge: 'জনপ্রিয়', tags: ['ssd', 'storage', 'parts', '1tb']
  },
  {
    id: 'part-005', name: 'TECHORA Forge Air Case', slug: 'techora-forge-air-case', brand: 'TECHORA', category: 'parts', categoryLabel: 'কম্পিউটার পার্টস', price: 6900, originalPrice: 7600, discount: 9, images: [monitorImage],
    shortDescription: 'ATX · Mesh Front · 4 ARGB Fans', description: 'ভালো airflow ও clean cable management-এর জন্য modern PC case।', specifications: [{ key: 'Form Factor', value: 'ATX / Micro ATX / Mini ITX' }, { key: 'Cooling', value: '4 x 120mm ARGB Fans included' }, { key: 'Front Panel', value: 'USB 3.0, USB-C, Audio' }, { key: 'GPU Support', value: 'Up to 380mm' }], warranty: { type: 'ওয়ারেন্টি নেই', label: 'ওয়ারেন্টি প্রযোজ্য নয়', details: 'ডেলিভারির সময় পণ্য পরীক্ষা করে নিন।' }, stock: 14, rating: 4.5, reviews: 8, codAvailable: true, colors: ['Black'], variants: ['Black / ARGB'], tags: ['pc case', 'case', 'parts', 'computer']
  },
  {
    id: 'acc-001', name: 'TECHORA GaN Charger 65W', slug: 'techora-gan-charger-65w', brand: 'TECHORA', category: 'accessories', categoryLabel: 'অ্যাক্সেসরিজ', price: 2450, originalPrice: 2900, discount: 16, images: [phoneImage],
    shortDescription: '65W GaN · USB-C PD · 2 Ports', description: 'ল্যাপটপ ও ফোন—দুই device একসঙ্গে fast charge করুন।', specifications: [{ key: 'Output', value: '65W USB-C PD' }, { key: 'Ports', value: '2 x USB-C, 1 x USB-A' }, { key: 'Compatibility', value: 'Laptop, Tablet, Mobile' }, { key: 'Safety', value: 'Over-voltage, Over-temperature protection' }], warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '৬ মাসের সার্ভিস ওয়ারেন্টি', details: 'Cable included নয়।' }, stock: 45, rating: 4.7, reviews: 52, codAvailable: true, colors: ['White'], variants: ['White / 65W'], badge: 'দাম কমেছে', tags: ['charger', 'accessories', 'gan', 'usb-c']
  },
  {
    id: 'acc-002', name: 'TECHORA Flex USB-C Cable', slug: 'techora-flex-usb-c-cable', brand: 'TECHORA', category: 'accessories', categoryLabel: 'অ্যাক্সেসরিজ', price: 690, originalPrice: 850, discount: 19, images: [phoneImage],
    shortDescription: '100W · 1.8m · Braided Cable', description: 'দ্রুত চার্জিং ও data transfer-এর জন্য durable braided cable।', specifications: [{ key: 'Length', value: '1.8 metre' }, { key: 'Power', value: '100W USB-C PD' }, { key: 'Data', value: '480Mbps' }, { key: 'Material', value: 'Nylon Braided' }], warranty: { type: 'ওয়ারেন্টি নেই', label: 'ওয়ারেন্টি প্রযোজ্য নয়', details: 'Cable accessories-এ warranty প্রযোজ্য নয়।' }, stock: 80, rating: 4.5, reviews: 74, codAvailable: true, colors: ['Black', 'White'], variants: ['Black / 1.8m', 'White / 1.8m'], tags: ['cable', 'accessories', 'usb-c', 'charger']
  },
  {
    id: 'acc-003', name: 'TECHORA ChargePad Duo', slug: 'techora-chargepad-duo', brand: 'TECHORA', category: 'accessories', categoryLabel: 'অ্যাক্সেসরিজ', price: 2250, originalPrice: 2650, discount: 15, images: [phoneImage],
    shortDescription: '15W Wireless · 5W Earbuds · Dual Pad', description: 'ফোন ও earbuds-এর জন্য desk-friendly wireless charging pad।', specifications: [{ key: 'Phone Output', value: 'Up to 15W' }, { key: 'Earbuds Output', value: 'Up to 5W' }, { key: 'Compatibility', value: 'Qi-enabled devices' }, { key: 'Input', value: 'USB-C, adapter not included' }], warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '৬ মাসের সার্ভিস ওয়ারেন্টি', details: 'Adapter আলাদাভাবে কিনতে হবে।' }, stock: 26, rating: 4.4, reviews: 19, codAvailable: true, colors: ['Matte Black'], variants: ['Black / Dual Pad'], tags: ['wireless charger', 'accessories', 'qi']
  },
  {
    id: 'acc-004', name: 'TECHORA KeyPro Mechanical Keyboard', slug: 'techora-keypro-mechanical-keyboard', brand: 'TECHORA', category: 'accessories', categoryLabel: 'অ্যাক্সেসরিজ', price: 5950, originalPrice: 6500, discount: 8, images: [laptopImage],
    shortDescription: 'Hot-swap · RGB · Wireless + USB-C', description: 'কাজ ও play-এর জন্য comfortable mechanical typing experience।', specifications: [{ key: 'Layout', value: '75% Compact, 82 Keys' }, { key: 'Switch', value: 'Linear Red, Hot-swap' }, { key: 'Connectivity', value: '2.4G, Bluetooth, USB-C' }, { key: 'Battery', value: '4,000mAh' }], warranty: { type: 'সেলার ওয়ারেন্টি', label: '১ বছরের সেলার ওয়ারেন্টি', details: 'Switch ও keycap-এর শর্ত প্রযোজ্য।' }, stock: 13, rating: 4.7, reviews: 23, codAvailable: true, colors: ['Space Grey'], variants: ['Red Switch / Grey', 'Brown Switch / White'], badge: 'জনপ্রিয়', tags: ['keyboard', 'mechanical', 'accessories', 'wireless']
  },
  {
    id: 'acc-005', name: 'TECHORA Glide Wireless Mouse', slug: 'techora-glide-wireless-mouse', brand: 'TECHORA', category: 'accessories', categoryLabel: 'অ্যাক্সেসরিজ', price: 1850, originalPrice: 2200, discount: 16, images: [phoneImage],
    shortDescription: '1,600 DPI · Silent Click · Bluetooth', description: 'হাতের আরাম ও quiet productivity-এর জন্য slim wireless mouse।', specifications: [{ key: 'DPI', value: '800 / 1200 / 1600 DPI' }, { key: 'Connectivity', value: 'Bluetooth 5.0, 2.4G' }, { key: 'Battery', value: 'Up to 3 months' }, { key: 'Buttons', value: '5 buttons, silent click' }], warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '৬ মাসের সার্ভিস ওয়ারেন্টি', details: 'ব্যাটারি warranty-র আওতাভুক্ত নয়।' }, stock: 34, rating: 4.5, reviews: 37, codAvailable: true, colors: ['White', 'Black'], variants: ['White', 'Black'], tags: ['mouse', 'accessories', 'wireless', 'office']
  },
  {
    id: 'acc-006', name: 'TECHORA Shield Glass', slug: 'techora-shield-glass', brand: 'TECHORA', category: 'accessories', categoryLabel: 'অ্যাক্সেসরিজ', price: 590, originalPrice: 750, discount: 21, images: [phoneImage],
    shortDescription: '9H Tempered Glass · Edge-to-edge', description: 'আপনার phone screen-এর জন্য clear এবং responsive protection।', specifications: [{ key: 'Hardness', value: '9H Tempered Glass' }, { key: 'Coverage', value: 'Edge-to-edge' }, { key: 'Features', value: 'Anti-fingerprint, bubble-free' }], warranty: { type: 'ওয়ারেন্টি নেই', label: 'ওয়ারেন্টি প্রযোজ্য নয়', details: 'Installation support demo configuration অনুযায়ী।' }, stock: 90, rating: 4.3, reviews: 61, codAvailable: true, colors: ['Clear'], variants: ['X1 / Clear'], tags: ['screen protector', 'accessories', 'mobile']
  },
  {
    id: 'aud-001', name: 'TECHORA Buds Air', slug: 'techora-buds-air', brand: 'TECHORA', category: 'audio', categoryLabel: 'অডিও', price: 3650, originalPrice: 4300, discount: 15, images: [audioImage],
    shortDescription: 'ANC · 32 hours · Bluetooth 5.4', description: 'হালকা earbuds, পরিষ্কার call এবং commute-এর জন্য active noise control।', specifications: [{ key: 'Bluetooth', value: 'Bluetooth 5.4' }, { key: 'Battery', value: '32 hours with case' }, { key: 'ANC', value: 'Hybrid ANC up to 28dB' }, { key: 'Driver', value: '12mm Dynamic Driver' }, { key: 'Charging', value: 'USB-C Fast Charging' }, { key: 'Water Resistance', value: 'IPX4' }], warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '৬ মাসের সার্ভিস ওয়ারেন্টি', details: 'Battery ও physical damage-এর শর্ত প্রযোজ্য।' }, stock: 28, rating: 4.6, reviews: 88, codAvailable: true, colors: ['White', 'Black'], variants: ['Black', 'White'], badge: 'জনপ্রিয়', tags: ['earbuds', 'audio', 'bluetooth', 'anc']
  },
  {
    id: 'aud-002', name: 'TECHORA Buds Pro', slug: 'techora-buds-pro', brand: 'TECHORA', category: 'audio', categoryLabel: 'অডিও', price: 5950, originalPrice: 6900, discount: 14, images: [audioImage],
    shortDescription: 'Adaptive ANC · Spatial Audio · 45 hours', description: 'deep bass, clear voice এবং দীর্ঘ playback সহ premium listening।', specifications: [{ key: 'Bluetooth', value: 'Bluetooth 5.4' }, { key: 'Battery', value: '45 hours with case' }, { key: 'ANC', value: 'Adaptive ANC up to 42dB' }, { key: 'Driver', value: '11mm Dual-layer Driver' }, { key: 'Charging', value: 'USB-C, Wireless Charging' }, { key: 'Water Resistance', value: 'IPX5' }], warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '১ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'অথরাইজড সাপোর্টে claim করা যাবে।' }, stock: 14, rating: 4.8, reviews: 44, codAvailable: true, colors: ['Midnight', 'Pearl'], variants: ['Midnight', 'Pearl'], badge: 'প্রিমিয়াম', tags: ['earbuds', 'audio', 'bluetooth', 'anc', 'premium']
  },
  {
    id: 'aud-003', name: 'TECHORA SoundBar Mini', slug: 'techora-soundbar-mini', brand: 'TECHORA', category: 'audio', categoryLabel: 'অডিও', price: 7490, originalPrice: 8290, discount: 10, images: [audioImage],
    shortDescription: '2.1 Channel · 80W · Bluetooth 5.3', description: 'TV ও desk setup-এর জন্য room-filling sound in a compact body।', specifications: [{ key: 'Power', value: '80W RMS, 2.1 Channel' }, { key: 'Bluetooth', value: 'Bluetooth 5.3' }, { key: 'Inputs', value: 'HDMI ARC, Optical, AUX' }, { key: 'Features', value: 'Wireless Subwoofer, Movie Mode' }], warranty: { type: 'সেলার ওয়ারেন্টি', label: '১ বছরের সেলার ওয়ারেন্টি', details: 'সার্ভিস পয়েন্টে সহায়তা পাওয়া যাবে।' }, stock: 8, rating: 4.5, reviews: 18, codAvailable: true, colors: ['Black'], variants: ['Black / 80W'], tags: ['speaker', 'audio', 'soundbar', 'tv']
  },
  {
    id: 'gad-001', name: 'TECHORA Watch S1', slug: 'techora-watch-s1', brand: 'TECHORA', category: 'gadget', categoryLabel: 'স্মার্ট গ্যাজেট', price: 4290, originalPrice: 4990, discount: 14, images: [phoneImage],
    shortDescription: 'AMOLED · BT Calling · 100+ Sports Modes', description: 'স্বাস্থ্য, notification ও everyday activity tracking-এর smart companion।', specifications: [{ key: 'Display', value: '1.78” AMOLED' }, { key: 'Battery', value: 'Up to 7 days' }, { key: 'Connectivity', value: 'Bluetooth 5.3, BT Calling' }, { key: 'Sensors', value: 'Heart Rate, SpO2, Sleep' }, { key: 'Water Resistance', value: 'IP68' }], warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '৬ মাসের সার্ভিস ওয়ারেন্টি', details: 'Strap ও physical damage-এর শর্ত প্রযোজ্য।' }, stock: 32, rating: 4.5, reviews: 57, codAvailable: true, colors: ['Black', 'Silver'], variants: ['Black Strap', 'Silver Strap'], tags: ['smart watch', 'gadget', 'wearable', 'bluetooth']
  },
  {
    id: 'gad-002', name: 'TECHORA Watch Pro', slug: 'techora-watch-pro', brand: 'TECHORA', category: 'gadget', categoryLabel: 'স্মার্ট গ্যাজেট', price: 8990, originalPrice: 9990, discount: 10, images: [phoneImage],
    shortDescription: '2.0” AMOLED · GPS · 14 days battery', description: 'GPS, health tracking ও bright always-on display সহ advanced smartwatch।', specifications: [{ key: 'Display', value: '2.0” AMOLED, Always-on' }, { key: 'Battery', value: 'Up to 14 days' }, { key: 'Connectivity', value: 'Bluetooth 5.3, GPS' }, { key: 'Sensors', value: 'ECG, Heart Rate, SpO2, Sleep' }, { key: 'Water Resistance', value: '5ATM' }], warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '১ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'অথরাইজড সার্ভিসে claim করা যাবে।' }, stock: 10, rating: 4.8, reviews: 29, codAvailable: true, colors: ['Titanium Grey'], variants: ['Grey / Silicone'], badge: 'প্রিমিয়াম', tags: ['smart watch', 'gadget', 'wearable', 'gps']
  },
  {
    id: 'gad-003', name: 'TECHORA Power 20K', slug: 'techora-power-20k', brand: 'TECHORA', category: 'gadget', categoryLabel: 'স্মার্ট গ্যাজেট', price: 2890, originalPrice: 3400, discount: 15, images: [phoneImage],
    shortDescription: '20,000mAh · 22.5W · LED Display', description: 'ভ্রমণ ও ব্যস্ত দিনে multiple device-এর reliable power backup।', specifications: [{ key: 'Capacity', value: '20,000mAh' }, { key: 'Output', value: '22.5W Fast Charging' }, { key: 'Ports', value: 'USB-C, 2 x USB-A' }, { key: 'Features', value: 'Digital Battery Display, PD' }], warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '৬ মাসের সার্ভিস ওয়ারেন্টি', details: 'Battery cell replacement policy প্রযোজ্য।' }, stock: 40, rating: 4.6, reviews: 67, codAvailable: true, colors: ['Black'], variants: ['Black / 20K'], badge: 'দাম কমেছে', tags: ['power bank', 'gadget', '20k', 'battery']
  },
  {
    id: 'net-001', name: 'TECHORA WiFi AX1800', slug: 'techora-wifi-ax1800', brand: 'TECHORA', category: 'network', categoryLabel: 'নেটওয়ার্কিং', price: 5490, originalPrice: 6200, discount: 11, images: [monitorImage],
    shortDescription: 'Wi-Fi 6 · AX1800 · Gigabit Ports', description: 'ঘরের প্রতিটি কোণে stable connection-এর জন্য high-speed dual-band router।', specifications: [{ key: 'Standard', value: 'Wi-Fi 6 (802.11ax)' }, { key: 'Speed', value: 'AX1800 Dual Band' }, { key: 'Coverage', value: 'Up to 2,000 sq ft' }, { key: 'Ports', value: '1 x Gigabit WAN, 4 x Gigabit LAN' }, { key: 'Security', value: 'WPA3, Guest Network' }], warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '১ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'Firmware ও installation সহায়তা configuration অনুযায়ী।' }, stock: 23, rating: 4.7, reviews: 34, codAvailable: true, colors: ['White'], variants: ['White / AX1800'], badge: 'জনপ্রিয়', tags: ['router', 'network', 'wifi', 'wifi 6']
  },
  {
    id: 'net-002', name: 'TECHORA Mesh M2', slug: 'techora-mesh-m2', brand: 'TECHORA', category: 'network', categoryLabel: 'নেটওয়ার্কিং', price: 10490, originalPrice: 11900, discount: 12, images: [monitorImage],
    shortDescription: 'Wi-Fi 6 Mesh · 2 Pack · 4,000 sq ft', description: 'বড় বাসা বা অফিসে seamless roaming এবং consistent coverage।', specifications: [{ key: 'Standard', value: 'Wi-Fi 6 AX3000 Mesh' }, { key: 'Speed', value: 'Up to 3,000Mbps' }, { key: 'Coverage', value: 'Up to 4,000 sq ft (2 pack)' }, { key: 'Ports', value: '2 x Gigabit per unit' }, { key: 'Features', value: 'Parental Control, App Setup' }], warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '১ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'অথরাইজড সার্ভিসে claim করা যাবে।' }, stock: 5, rating: 4.8, reviews: 21, codAvailable: false, colors: ['White'], variants: ['2 Pack / White'], badge: 'প্রিমিয়াম', tags: ['router', 'network', 'mesh', 'wifi 6']
  },
  {
    id: 'net-003', name: 'TECHORA Link USB Wi-Fi', slug: 'techora-link-usb-wifi', brand: 'TECHORA', category: 'network', categoryLabel: 'নেটওয়ার্কিং', price: 990, originalPrice: 1190, discount: 17, images: [monitorImage],
    shortDescription: 'AC600 · Dual Band · USB Adapter', description: 'desktop বা laptop-এ সহজে fast Wi-Fi যোগ করার compact adapter।', specifications: [{ key: 'Standard', value: '802.11ac Dual Band' }, { key: 'Speed', value: 'Up to 600Mbps' }, { key: 'Interface', value: 'USB 2.0' }, { key: 'Security', value: 'WPA2, WEP' }], warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '৬ মাসের সার্ভিস ওয়ারেন্টি', details: 'ভ্যালিড invoice প্রয়োজন।' }, stock: 50, rating: 4.4, reviews: 43, codAvailable: true, colors: ['Black'], variants: ['AC600 / USB'], tags: ['wifi adapter', 'network', 'usb', 'router']
  },
  {
    id: 'home-001', name: 'TECHORA Vision 43 Smart TV', slug: 'techora-vision-43-smart-tv', brand: 'TECHORA', category: 'home', categoryLabel: 'টিভি ও হোম', price: 38900, originalPrice: 42900, discount: 9, images: [monitorImage],
    shortDescription: '43” 4K UHD · Google TV · Dolby Audio', description: 'স্ট্রিমিং, sports ও family entertainment-এর জন্য vibrant 4K smart TV।', specifications: [{ key: 'Display', value: '43” 4K UHD, HDR10' }, { key: 'Operating System', value: 'Google TV' }, { key: 'Audio', value: 'Dolby Audio, 24W' }, { key: 'Connectivity', value: 'Wi-Fi 5, Bluetooth 5.0' }, { key: 'Ports', value: '3 x HDMI, 2 x USB' }], warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '২ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'Panel warranty ও installation policy প্রযোজ্য।' }, stock: 6, rating: 4.7, reviews: 26, codAvailable: false, colors: ['Black'], variants: ['43” / Black'], badge: 'অফার', tags: ['tv', 'smart tv', 'home', '4k']
  },
  {
    id: 'home-002', name: 'TECHORA Air Fryer 5L', slug: 'techora-air-fryer-5l', brand: 'TECHORA', category: 'home', categoryLabel: 'টিভি ও হোম', price: 7490, originalPrice: 8490, discount: 12, images: [audioImage],
    shortDescription: '5L · Digital Touch · 8 Presets', description: 'কম তেলে সহজে crispy meal তৈরির জন্য kitchen essential।', specifications: [{ key: 'Capacity', value: '5 Litre' }, { key: 'Power', value: '1500W' }, { key: 'Control', value: 'Digital Touch, 8 Presets' }, { key: 'Features', value: 'Auto Shut-off, Overheat Protection' }], warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '১ বছরের সার্ভিস ওয়ারেন্টি', details: 'Heating element warranty policy প্রযোজ্য।' }, stock: 17, rating: 4.5, reviews: 33, codAvailable: true, colors: ['Matte Black'], variants: ['Black / 5L'], tags: ['air fryer', 'home', 'appliance', 'kitchen']
  },
  {
    id: 'home-003', name: 'TECHORA HeatGo Kettle', slug: 'techora-heatgo-kettle', brand: 'TECHORA', category: 'home', categoryLabel: 'টিভি ও হোম', price: 1890, originalPrice: 2200, discount: 14, images: [audioImage],
    shortDescription: '1.7L · 1500W · Auto Shut-off', description: 'চা, coffee ও গরম পানির জন্য দ্রুত boil করা যায়।', specifications: [{ key: 'Capacity', value: '1.7 Litre' }, { key: 'Power', value: '1500W' }, { key: 'Material', value: 'BPA-free body, Stainless interior' }, { key: 'Safety', value: 'Auto Shut-off, Boil Dry Protection' }], warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '৬ মাসের সার্ভিস ওয়ারেন্টি', details: 'ভ্যালিড invoice প্রয়োজন।' }, stock: 38, rating: 4.4, reviews: 45, codAvailable: true, colors: ['White'], variants: ['White / 1.7L'], tags: ['kettle', 'home', 'appliance']
  },
  {
    id: 'home-004', name: 'TECHORA Breeze Smart Fan', slug: 'techora-breeze-smart-fan', brand: 'TECHORA', category: 'home', categoryLabel: 'টিভি ও হোম', price: 6390, originalPrice: 7200, discount: 11, images: [audioImage],
    shortDescription: '16” · Remote Control · 3 Speed', description: 'শান্ত, শক্তিশালী airflow এবং convenient remote control।', specifications: [{ key: 'Size', value: '16 inch' }, { key: 'Speed', value: '3 Speed, 5 Blades' }, { key: 'Control', value: 'Remote Control, Timer' }, { key: 'Power', value: '55W Energy Efficient Motor' }], warranty: { type: 'সেলার ওয়ারেন্টি', label: '১ বছরের সেলার ওয়ারেন্টি', details: 'Motor warranty policy প্রযোজ্য।' }, stock: 12, rating: 4.4, reviews: 16, codAvailable: true, colors: ['White'], variants: ['White / 16”'], tags: ['fan', 'home', 'appliance']
  },
  {
    id: 'home-005', name: 'TECHORA Beam Mini Projector', slug: 'techora-beam-mini-projector', brand: 'TECHORA', category: 'home', categoryLabel: 'টিভি ও হোম', price: 12900, originalPrice: 14500, discount: 11, images: [monitorImage],
    shortDescription: '1080p Support · 250 ANSI · Wi-Fi', description: 'ছোট ঘর বা presentation-এর জন্য portable big-screen experience।', specifications: [{ key: 'Resolution', value: 'Native 720p, 1080p Support' }, { key: 'Brightness', value: '250 ANSI Lumens' }, { key: 'Connectivity', value: 'Wi-Fi, Bluetooth, HDMI' }, { key: 'Speaker', value: '5W Built-in Speaker' }], warranty: { type: 'সার্ভিস ওয়ারেন্টি', label: '৬ মাসের সার্ভিস ওয়ারেন্টি', details: 'Lamp ও physical damage-এর শর্ত প্রযোজ্য।' }, stock: 7, rating: 4.3, reviews: 12, codAvailable: true, colors: ['White'], variants: ['White / Mini'], tags: ['projector', 'home', 'tv', 'presentation']
  },
  {
    id: 'home-006', name: 'TECHORA CoolFlow AC 1.5T', slug: 'techora-coolflow-ac-15t', brand: 'TECHORA', category: 'home', categoryLabel: 'টিভি ও হোম', price: 52900, originalPrice: 57900, discount: 9, images: [monitorImage],
    shortDescription: '1.5 Ton · Inverter · 4 Star Energy', description: 'বাংলাদেশের গরমে efficient cooling ও comfortable sleep-এর জন্য।', specifications: [{ key: 'Capacity', value: '1.5 Ton Inverter' }, { key: 'Energy', value: '4 Star Energy Rating' }, { key: 'Cooling', value: 'Turbo Cool, Sleep Mode' }, { key: 'Features', value: 'Auto Clean, Copper Condenser' }], warranty: { type: 'ব্র্যান্ড ওয়ারেন্টি', label: '২ বছরের ব্র্যান্ড ওয়ারেন্টি', details: 'Installation ও compressor warranty policy প্রযোজ্য।' }, stock: 0, rating: 4.6, reviews: 10, codAvailable: false, colors: ['White'], variants: ['1.5 Ton / White'], badge: 'মৌসুমি অফার', tags: ['ac', 'home', 'appliance', 'inverter']
  },
];

export const featuredProducts = products.filter((product) => ['lap-001', 'lap-002', 'mob-001', 'mob-002', 'mon-002', 'acc-001', 'aud-001', 'gad-001', 'net-001', 'part-004', 'home-001', 'pc-001', 'lap-003', 'mob-003', 'aud-002', 'gad-003'].includes(product.id));
export const offerProducts = products.filter((product) => (product.discount ?? 0) >= 10).slice(0, 6);

export const reviews = [
  { name: 'নাবিলা রহমান', role: 'স্টুডেন্ট, ঢাকা', initials: 'নর', rating: 5, text: 'পণ্যের স্পেসিফিকেশন আগে থেকেই পরিষ্কারভাবে দেখতে পেরেছি, তাই অর্ডার করতে সহজ হয়েছে।' },
  { name: 'তানভীর হাসান', role: 'ফ্রিল্যান্সার, চট্টগ্রাম', initials: 'তহ', rating: 5, text: 'ল্যাপটপের warranty আর delivery দুটোই সহজ ভাষায় দেওয়া ছিল। সিদ্ধান্ত নিতে সময় লাগেনি।' },
  { name: 'মাহিন কবির', role: 'ব্যবসায়ী, নারায়ণগঞ্জ', initials: 'মক', rating: 4, text: 'ফিল্টার দিয়ে budget অনুযায়ী router খুঁজে পেয়েছি। পুরো experience বেশ গোছানো।' },
  { name: 'সাদিয়া আক্তার', role: 'ডিজাইনার, ঢাকা', initials: 'সআ', rating: 5, text: 'তুলনা করে monitor বাছাই করার সুবিধাটা খুব ভালো লেগেছে। Demo experience হিসেবে দারুণ।' },
];

export const laptopFinderOptions = [
  { label: 'পড়াশোনা', value: 'study', description: 'হালকা, দ্রুত, battery-friendly', productIds: ['lap-004', 'lap-001'] },
  { label: 'অফিসের কাজ', value: 'office', description: 'সারাদিনের reliable performance', productIds: ['lap-001', 'lap-002'] },
  { label: 'ফ্রিল্যান্সিং', value: 'freelance', description: 'multitasking-এর জন্য balanced', productIds: ['lap-001', 'lap-002'] },
  { label: 'ডিজাইন', value: 'design', description: 'colour ও power দুটোই চাই', productIds: ['lap-003', 'lap-002'] },
  { label: 'ভিডিও এডিটিং', value: 'video', description: 'high-performance workflow', productIds: ['lap-003'] },
  { label: 'গেমিং', value: 'gaming', description: 'smooth graphics, high refresh', productIds: ['lap-003'] },
];

export const pcBuilderParts = [
  { key: 'processor', label: 'Processor', productId: 'part-001', price: 24900 },
  { key: 'motherboard', label: 'Motherboard', productId: 'part-003', price: 8900 },
  { key: 'ram', label: 'RAM', productId: 'part-003', price: 6200 },
  { key: 'ssd', label: 'SSD', productId: 'part-004', price: 8900 },
  { key: 'graphics', label: 'Graphics Card', productId: 'part-002', price: 38900 },
  { key: 'psu', label: 'Power Supply', productId: 'part-005', price: 7200 },
  { key: 'case', label: 'PC Case', productId: 'part-005', price: 6900 },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return `৳${price.toLocaleString('en-IN')}`;
}

export function getProductImage(product: Product) {
  return product.images[0] || laptopImage;
}
