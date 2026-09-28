'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { categories, products, type ProductCategory } from '@/lib/data';
import { ProductGrid } from '@/components/product-card';
import { Icon } from '@/components/icons';

const categoryLabels: Record<string, string> = { laptop: 'ল্যাপটপ', mobile: 'মোবাইল ও ট্যাব', computer: 'কম্পিউটার', monitor: 'মনিটর', parts: 'কম্পিউটার পার্টস', accessories: 'অ্যাক্সেসরিজ', audio: 'অডিও', gadget: 'স্মার্ট গ্যাজেট', network: 'নেটওয়ার্কিং', home: 'টিভি ও হোম ইলেকট্রনিক্স' };
const brands = ['TECHORA', 'Apple', 'Samsung', 'Xiaomi', 'Lenovo', 'ASUS', 'HP', 'Dell', 'Anker', 'UGREEN', 'Logitech', 'Intel', 'AMD'];

type Filters = { category: string; brand: string[]; min: string; max: string; availability: string; warranty: string; rating: string; ram: string; storage: string; processor: string; display: string; connectivity: string };
const initialFilters: Filters = { category: '', brand: [], min: '', max: '', availability: '', warranty: '', rating: '', ram: '', storage: '', processor: '', display: '', connectivity: '' };

function FilterSidebar({ filters, setFilters, clear }: { filters: Filters; setFilters: (filters: Filters) => void; clear: () => void }) {
  const set = (key: keyof Filters, value: string) => setFilters({ ...filters, [key]: value });
  const toggleBrand = (brand: string) => setFilters({ ...filters, brand: filters.brand.includes(brand) ? filters.brand.filter((item) => item !== brand) : [...filters.brand, brand] });
  const hasCategory = Boolean(filters.category);
  const category = filters.category as ProductCategory;
  const isLaptop = category === 'laptop';
  const isParts = category === 'parts' || category === 'computer';
  const isMobile = category === 'mobile';
  return <aside className="filter-sidebar"><div className="filter-head"><strong>ফিল্টার করুন</strong><button onClick={clear}>সব মুছুন</button></div>
    <div className="filter-section"><h3>ক্যাটাগরি</h3>{categories.map((item) => <label className="filter-check" key={item.value}><input type="radio" name="category" checked={filters.category === item.value} onChange={() => set('category', item.value)} />{item.label}</label>)}</div>
    <div className="filter-section"><h3>ব্র্যান্ড</h3>{brands.slice(0, 9).map((brand) => <label className="filter-check" key={brand}><input type="checkbox" checked={filters.brand.includes(brand)} onChange={() => toggleBrand(brand)} />{brand}</label>)}</div>
    <div className="filter-section"><h3>মূল্যসীমা</h3><div className="price-inputs"><input type="number" placeholder="সর্বনিম্ন" value={filters.min} onChange={(event) => set('min', event.target.value)} /><span>—</span><input type="number" placeholder="সর্বোচ্চ" value={filters.max} onChange={(event) => set('max', event.target.value)} /></div></div>
    <div className="filter-section"><h3>পণ্য পাওয়া যাচ্ছে</h3><label className="filter-check"><input type="radio" name="availability" checked={filters.availability === 'in'} onChange={() => set('availability', 'in')} />স্টকে আছে</label><label className="filter-check"><input type="radio" name="availability" checked={filters.availability === 'out'} onChange={() => set('availability', 'out')} />স্টকে নেই</label></div>
    <div className="filter-section"><h3>ওয়ারেন্টি</h3>{['ব্র্যান্ড ওয়ারেন্টি', 'সেলার ওয়ারেন্টি', 'সার্ভিস ওয়ারেন্টি', 'ওয়ারেন্টি নেই'].map((item) => <label className="filter-check" key={item}><input type="radio" name="warranty" checked={filters.warranty === item} onChange={() => set('warranty', item)} />{item}</label>)}</div>
    <div className="filter-section"><h3>ন্যূনতম রেটিং</h3>{['4', '4.5'].map((item) => <label className="filter-check" key={item}><input type="radio" name="rating" checked={filters.rating === item} onChange={() => set('rating', item)} />{item}+ রেটিং</label>)}</div>
    {(isLaptop || isMobile || isParts || !hasCategory) && <div className="filter-section"><h3>{isMobile ? 'RAM / Memory' : 'RAM'}</h3>{['8GB', '16GB', '32GB'].map((item) => <label className="filter-check" key={item}><input type="radio" name="ram" checked={filters.ram === item} onChange={() => set('ram', item)} />{item}</label>)}</div>}
    {(isLaptop || isMobile || isParts || !hasCategory) && <div className="filter-section"><h3>{isMobile ? 'Storage / ROM' : 'Storage'}</h3>{['128GB', '256GB', '512GB', '1TB'].map((item) => <label className="filter-check" key={item}><input type="radio" name="storage" checked={filters.storage === item} onChange={() => set('storage', item)} />{item}</label>)}</div>}
    {(isLaptop || isParts || !hasCategory) && <div className="filter-section"><h3>Processor</h3>{['Core i3', 'Core i5', 'Core i7', 'Ryzen', 'Snapdragon'].map((item) => <label className="filter-check" key={item}><input type="radio" name="processor" checked={filters.processor === item} onChange={() => set('processor', item)} />{item}</label>)}</div>}
    {(isLaptop || category === 'monitor' || !hasCategory) && <div className="filter-section"><h3>Display Size</h3>{['13”', '14”', '15.6”', '24”', '27”', '32”'].map((item) => <label className="filter-check" key={item}><input type="radio" name="display" checked={filters.display === item} onChange={() => set('display', item)} />{item}</label>)}</div>}
    {(category === 'network' || category === 'audio' || category === 'mobile' || !hasCategory) && <div className="filter-section"><h3>Connectivity</h3>{['Wi-Fi', 'Bluetooth', 'USB-C', '5G', 'ANC'].map((item) => <label className="filter-check" key={item}><input type="radio" name="connectivity" checked={filters.connectivity === item} onChange={() => set('connectivity', item)} />{item}</label>)}</div>}
  </aside>;
}

export default function ShopPage() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('popular');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get('q') ?? '');
    setFilters((current) => ({ ...current, category: params.get('category') ?? '' }));
    if (params.get('offer')) setSort('discount');
  }, []);

  const clear = () => { setFilters(initialFilters); setQuery(''); window.history.replaceState({}, '', '/shop'); };
  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const haystack = [product.name, product.brand, product.categoryLabel, product.shortDescription, product.description, ...product.tags, ...product.specifications.flatMap((spec) => [spec.key, spec.value])].join(' ').toLowerCase();
      const termMatch = !query.trim() || query.toLowerCase().split(' ').every((word) => haystack.includes(word));
      const categoryMatch = !filters.category || product.category === filters.category;
      const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
      const minMatch = !filters.min || product.price >= Number(filters.min);
      const maxMatch = !filters.max || product.price <= Number(filters.max);
      const availabilityMatch = !filters.availability || (filters.availability === 'in' ? product.stock > 0 : product.stock === 0);
      const warrantyMatch = !filters.warranty || product.warranty.type === filters.warranty;
      const ratingMatch = !filters.rating || product.rating >= Number(filters.rating);
      const matchSpec = (value: string, aliases: string[]) => !value || aliases.some((alias) => haystack.toLowerCase().includes(alias.toLowerCase()));
      return termMatch && categoryMatch && brandMatch && minMatch && maxMatch && availabilityMatch && warrantyMatch && ratingMatch && matchSpec(filters.ram, [filters.ram]) && matchSpec(filters.storage, [filters.storage]) && matchSpec(filters.processor, [filters.processor]) && matchSpec(filters.display, [filters.display]) && matchSpec(filters.connectivity, [filters.connectivity]);
    });
    return result.sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'discount') return (b.discount ?? 0) - (a.discount ?? 0);
      if (sort === 'new') return b.id.localeCompare(a.id);
      return b.reviews - a.reviews;
    });
  }, [filters, query, sort]);

  const title = filters.category ? categoryLabels[filters.category] : query ? `“${query}” খুঁজুন` : 'সব পণ্য';
  const filtersUI = <FilterSidebar filters={filters} setFilters={setFilters} clear={clear} />;
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">হোম</Link><span>/</span><span>পণ্য দেখুন</span></div><h1>{title}</h1><p>সঠিক সিদ্ধান্তের জন্য specification, দাম, warranty এবং delivery তথ্য একসঙ্গে দেখুন।</p></div></section>
    <div className="container shop-layout"><div className="desktop-filter">{filtersUI}</div><div className="shop-content"><div className="shop-toolbar"><div className="shop-count">{filteredProducts.length}টি পণ্য পাওয়া গেছে</div><div className="shop-controls"><button className="shop-filter-mobile" onClick={() => setFilterOpen(true)}><Icon name="filter" size={15} /> ফিল্টার</button><label className="sort-label">সাজান <select className="sort-select" value={sort} onChange={(event) => setSort(event.target.value)}><option value="popular">জনপ্রিয়</option><option value="new">নতুন পণ্য</option><option value="price-low">দাম: কম থেকে বেশি</option><option value="price-high">দাম: বেশি থেকে কম</option><option value="rating">বেশি রেটিং</option><option value="discount">বেশি ছাড়</option></select></label></div></div>{filteredProducts.length ? <ProductGrid products={filteredProducts} /> : <div className="empty-state"><div className="empty-icon"><Icon name="search" size={25} /></div><h2>কোনো পণ্য পাওয়া যায়নি</h2><p>অন্য keyword বা filter দিয়ে আবার চেষ্টা করুন।</p><button onClick={clear} className="btn btn-dark">সব পণ্য দেখুন</button></div>}</div></div>
    {filterOpen && <div className="mobile-filter-overlay" onClick={() => setFilterOpen(false)}><div className="mobile-filter-panel" onClick={(event) => event.stopPropagation()}><button className="mobile-filter-close" onClick={() => setFilterOpen(false)} aria-label="ফিল্টার বন্ধ"><Icon name="close" size={20} /></button>{filtersUI}</div></div>}
  </>;
}
