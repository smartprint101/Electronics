'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { config } from '@/lib/data';
import { useStore } from './store-provider';
import { Icon } from './icons';

const navItems = [
  { label: 'হোম', href: '/' },
  { label: 'কম্পিউটার', href: '/shop?category=computer' },
  { label: 'ল্যাপটপ', href: '/shop?category=laptop' },
  { label: 'মোবাইল', href: '/shop?category=mobile' },
  { label: 'অ্যাক্সেসরিজ', href: '/shop?category=accessories' },
  { label: 'গ্যাজেট', href: '/shop?category=gadget' },
  { label: 'হোম ইলেকট্রনিক্স', href: '/shop?category=home' },
  { label: 'অফার', href: '/shop?offer=true' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { cartCount, compareIds, wishlistIds } = useStore();
  const router = useRouter();
  const pathname = usePathname();

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    if (query.trim()) router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setMobileOpen(false);
  };

  return <>
    <div className="announcement"><div className="container announcement-inner"><span><span className="announcement-dot" /> নির্বাচিত পণ্যে ক্যাশ অন ডেলিভারি সুবিধা</span><span className="announcement-note">সারা বাংলাদেশে ডেলিভারি</span></div></div>
    <header className="site-header">
      <div className="container header-main">
        <button className="icon-btn mobile-menu-btn" aria-label="মেনু" onClick={() => setMobileOpen((value) => !value)}><Icon name={mobileOpen ? 'close' : 'menu'} size={22} /></button>
        <Link href="/" className="brand" aria-label="TECHORA হোম"><span className="brand-mark"><span /></span><span className="brand-word">TECHORA</span></Link>
        <form className={`header-search ${searchOpen ? 'mobile-search-open' : ''}`} onSubmit={submitSearch}>
          <Icon name="search" size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="পণ্য, ব্র্যান্ড বা মডেল খুঁজুন" aria-label="পণ্য খুঁজুন" /><button type="submit">খুঁজুন</button>
        </form>
        <div className="header-actions">
          <button className="header-action search-trigger" onClick={() => setSearchOpen((value) => !value)} aria-label="পণ্য খুঁজুন"><Icon name="search" size={21} /><span>খুঁজুন</span></button>
          <Link href="/wishlist" className="header-action hide-on-mobile" aria-label="ইচ্ছেতালিকা"><span className="action-icon-wrap"><Icon name="heart" size={20} />{wishlistIds.length > 0 && <b>{wishlistIds.length}</b>}</span><span>ইচ্ছেতালিকা</span></Link>
          <Link href="#" className="header-action hide-on-mobile" aria-label="অ্যাকাউন্ট"><Icon name="user" size={21} /><span>অ্যাকাউন্ট</span></Link>
          <Link href="/cart" className="header-action cart-action" aria-label="কার্ট"><span className="action-icon-wrap"><Icon name="shopping-bag" size={21} />{cartCount > 0 && <b>{cartCount}</b>}</span><span>কার্ট</span></Link>
        </div>
      </div>
      <div className={`container nav-row ${mobileOpen ? 'nav-open' : ''}`}>
        <nav aria-label="প্রধান নেভিগেশন">{navItems.map((item) => <Link key={item.label} href={item.href} className={pathname === item.href ? 'active' : ''} onClick={() => setMobileOpen(false)}>{item.label}</Link>)}</nav>
        <Link href="/shop?offer=true" className="nav-offer"><Icon name="zap" size={15} /> আজকের অফার</Link>
      </div>
      {mobileOpen && <div className="mobile-quick-links container"><Link href="/compare" onClick={() => setMobileOpen(false)}><Icon name="compare" size={18} /> তুলনা করুন {compareIds.length ? `(${compareIds.length})` : ''}</Link><Link href="#" onClick={() => setMobileOpen(false)}><Icon name="user" size={18} /> আমার অ্যাকাউন্ট</Link></div>}
    </header>
  </>;
}
