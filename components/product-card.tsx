'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/lib/data';
import { formatPrice, getProductImage } from '@/lib/data';
import { useStore } from './store-provider';
import { Icon } from './icons';

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { addToCart, toggleCompare, toggleWishlist, isInCompare, isInWishlist } = useStore();
  const [added, setAdded] = useState(false);
  const specPreview = product.specifications.slice(0, compact ? 2 : 3);

  const handleAdd = () => {
    addToCart(product.id, product.variants[0]);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return <article className={`product-card ${compact ? 'product-card-compact' : ''}`}>
    <div className="product-media">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      {product.discount && <span className="discount-badge">-{product.discount}%</span>}
      <div className="product-card-actions"><button className={`round-action ${isInWishlist(product.id) ? 'selected' : ''}`} onClick={() => toggleWishlist(product.id)} aria-label="ইচ্ছেতালিকায় যোগ করুন"><Icon name="heart" size={17} /></button><button className={`round-action ${isInCompare(product.id) ? 'selected' : ''}`} onClick={() => toggleCompare(product.id)} aria-label="তুলনায় যোগ করুন"><Icon name="compare" size={16} /></button></div>
      <Link href={`/product/${product.slug}`} className="product-image-link"><Image src={getProductImage(product)} alt={product.name} fill sizes="(max-width: 640px) 44vw, (max-width: 1024px) 25vw, 220px" className="product-image" /></Link>
    </div>
    <div className="product-card-body">
      <p className="product-brand">{product.brand}</p>
      <Link href={`/product/${product.slug}`} className="product-name">{product.name}</Link>
      <p className="product-short">{product.shortDescription}</p>
      <div className="product-mini-specs">{specPreview.map((spec) => <span key={spec.key}><b>{spec.key}:</b> {spec.value}</span>)}</div>
      <div className="rating-row"><span className="stars">★</span><strong>{product.rating.toFixed(1)}</strong><span className="review-count">({product.reviews})</span><span className={`stock-dot ${product.stock ? '' : 'empty'}`} /> <span>{product.stock ? 'স্টকে আছে' : 'স্টকে নেই'}</span></div>
      <div className="price-row"><strong>{formatPrice(product.price)}</strong>{product.originalPrice && <del>{formatPrice(product.originalPrice)}</del>}</div>
      <div className="warranty-line"><Icon name="shield" size={14} /> {product.warranty.label}</div>
      {!compact && <div className="card-ctas"><button className={`btn btn-small ${added ? 'btn-success' : 'btn-outline'}`} onClick={handleAdd} disabled={!product.stock}><Icon name={added ? 'check' : 'shopping-bag'} size={15} />{added ? 'কার্টে যোগ হয়েছে' : 'কার্টে যোগ করুন'}</button><Link href={`/product/${product.slug}`} className="btn btn-small btn-dark">এখনই অর্ডার করুন</Link></div>}
    </div>
  </article>;
}

export function ProductGrid({ products, compact = false }: { products: Product[]; compact?: boolean }) {
  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} compact={compact} />)}</div>;
}
