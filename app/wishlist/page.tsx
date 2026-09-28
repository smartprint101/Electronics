'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { products } from '@/lib/data';
import { useStore } from '@/components/store-provider';
import { ProductGrid } from '@/components/product-card';
import { Icon } from '@/components/icons';

export default function WishlistPage() {
  const { wishlistIds } = useStore();
  const saved = useMemo(() => products.filter((product) => wishlistIds.includes(product.id)), [wishlistIds]);
  return <section className="cart-page"><div className="container"><div className="breadcrumbs"><Link href="/">হোম</Link><span>/</span><span>ইচ্ছেতালিকা</span></div><div className="cart-heading"><div><h1>ইচ্ছেতালিকা</h1><p>আপনার পছন্দের পণ্যগুলো পরে দেখার জন্য রেখে দিন।</p></div><Link href="/shop" className="text-link">পণ্য দেখুন <Icon name="arrow-right" size={16} /></Link></div>{saved.length ? <ProductGrid products={saved} /> : <div className="empty-state"><div className="empty-icon"><Icon name="heart" size={27} /></div><h2>ইচ্ছেতালিকা এখনো খালি</h2><p>Product card-এর heart আইকনে চাপ দিয়ে পছন্দের পণ্য যোগ করুন।</p><Link href="/shop" className="btn btn-dark">পণ্য দেখুন <Icon name="arrow-right" size={16} /></Link></div>}</div></section>;
}
