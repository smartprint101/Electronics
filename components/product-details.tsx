'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { config, formatPrice, getProductImage, products, type Product } from '@/lib/data';
import { useStore } from './store-provider';
import { Icon } from './icons';
import { ProductGrid } from './product-card';

export function ProductDetails({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState(product.variants[0]);
  const [added, setAdded] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist, toggleCompare, isInCompare } = useStore();
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
  const quickSpecs = product.specifications.slice(0, 5);
  const handleAdd = () => { addToCart(product.id, variant); setAdded(true); window.setTimeout(() => setAdded(false), 1600); };
  const buyNow = () => { addToCart(product.id, variant); window.location.href = '/checkout'; };

  return <>
    <div className="container product-detail"><div className="breadcrumbs"><Link href="/">হোম</Link><span>/</span><Link href={`/shop?category=${product.category}`}>{product.categoryLabel}</Link><span>/</span><span>{product.name}</span></div><div className="product-detail-grid">
      <div className="product-gallery"><div className="gallery-thumbs">{product.images.map((image, index) => <button key={`${image}-${index}`} className={`gallery-thumb ${activeImage === index ? 'active' : ''}`} onClick={() => setActiveImage(index)}><Image src={image} alt={`${product.name} ছবি ${index + 1}`} fill sizes="76px" /></button>)}</div><div className="gallery-main"><Image src={product.images[activeImage] || getProductImage(product)} alt={product.name} fill priority sizes="(max-width: 760px) 100vw, 50vw" /></div></div>
      <div className="product-detail-copy"><span className="detail-brand">{product.brand} / {product.categoryLabel}</span><h1>{product.name}</h1><div className="detail-rating"><span className="stars">{'★'.repeat(Math.round(product.rating))}</span><strong>{product.rating.toFixed(1)}</strong><a href="#reviews">{product.reviews}টি মতামত</a><button className={`round-action ${isInWishlist(product.id) ? 'selected' : ''}`} onClick={() => toggleWishlist(product.id)} aria-label="ইচ্ছেতালিকায় যোগ করুন"><Icon name="heart" size={16} /></button><button className={`round-action ${isInCompare(product.id) ? 'selected' : ''}`} onClick={() => toggleCompare(product.id)} aria-label="তুলনায় যোগ করুন"><Icon name="compare" size={15} /></button></div><p className="detail-description">{product.description} {product.shortDescription}।</p>
        <div className="detail-price-block"><span className="detail-price">{formatPrice(product.price)}</span>{product.originalPrice && <del className="detail-old-price">{formatPrice(product.originalPrice)}</del>}{product.discount && <span className="detail-discount">{product.discount}% ছাড়</span>}</div>
        <div className="detail-status"><span className="in-stock"><Icon name="check" size={15} /> {product.stock ? `স্টকে আছে (${product.stock}টি)` : 'স্টকে নেই'}</span><span><Icon name="shield" size={15} /> {product.warranty.label}</span></div>
        <div className="quick-spec"><h3>এক নজরে প্রয়োজনীয় তথ্য</h3><div className="quick-spec-grid">{quickSpecs.map((spec) => <span key={spec.key}><b>{spec.key}:</b> {spec.value}</span>)}</div></div>
        <div className="detail-options"><label>ভ্যারিয়েন্ট নির্বাচন করুন</label><div className="option-row">{product.variants.map((item) => <button key={item} className={`option-chip ${variant === item ? 'active' : ''}`} onClick={() => setVariant(item)}>{item}</button>)}</div></div>
        <div className="detail-ctas"><button className={`btn ${added ? 'btn-success' : 'btn-blue'}`} onClick={handleAdd} disabled={!product.stock}><Icon name={added ? 'check' : 'shopping-bag'} size={17} />{added ? 'কার্টে যোগ হয়েছে' : 'কার্টে যোগ করুন'}</button><button className="btn btn-dark" onClick={buyNow} disabled={!product.stock}>এখনই অর্ডার করুন <Icon name="arrow-right" size={16} /></button></div>
        <div className="cod-note"><Icon name={product.codAvailable ? 'credit-card' : 'info'} size={17} /><span>{product.codAvailable ? 'নির্বাচিত পণ্যে ক্যাশ অন ডেলিভারি সুবিধা আছে।' : 'এই পণ্যে ক্যাশ অন ডেলিভারি প্রযোজ্য নয়; payment confirmation প্রয়োজন।'}</span></div>
        <div className="detail-benefits"><div className="detail-benefit"><Icon name="truck" size={18} /><span>ঢাকার মধ্যে ১–৩ দিন<br />ঢাকার বাইরে ২–৫ দিন</span></div><div className="detail-benefit"><Icon name="credit-card" size={18} /><span>বিকাশ · নগদ · Card<br />EMI demo options</span></div></div>
      </div></div>
      <div className="detail-section"><div className="details-two-col"><div className="detail-panel"><h2>পণ্যের স্পেসিফিকেশন</h2><table className="spec-table"><tbody>{product.specifications.map((spec) => <tr key={spec.key}><td>{spec.key}</td><td>{spec.value}</td></tr>)}<tr><td>ওয়ারেন্টি</td><td>{product.warranty.label}</td></tr></tbody></table></div><div><div className="delivery-card"><h2>ডেলিভারি তথ্য</h2><div className="delivery-line"><span>ঢাকার মধ্যে</span><strong>{formatPrice(config.deliveryChargeInsideDhaka)}</strong></div><div className="delivery-line"><span>ঢাকার বাইরে</span><strong>{formatPrice(config.deliveryChargeOutsideDhaka)}</strong></div><p className="delivery-note">আনুমানিক সময়: ঢাকার মধ্যে ১–৩ দিন, ঢাকার বাইরে ২–৫ দিন। Demo configuration থেকে পরিবর্তনযোগ্য।</p></div><div className="warranty-card"><h3>{product.warranty.type}</h3><p><strong>{product.warranty.label}</strong><br />{product.warranty.details}</p></div></div></div></div>
      <div className="detail-section" id="reviews"><div className="detail-panel"><h2>ক্রেতাদের মতামত <span className="review-count">({product.reviews})</span></h2><div className="review-summary-row"><div className="big-rating"><strong>{product.rating.toFixed(1)}</strong><span className="stars">★★★★★</span><small>ডেমো রেটিং</small></div><p>এই product-এর specification, warranty এবং delivery তথ্য দেখে সিদ্ধান্ত নিন। এখানে দেখানো মতামতগুলো কাল্পনিক demo content।</p></div></div></div>
    </div>
    {related.length > 0 && <section className="section section-muted related"><div className="container"><div className="section-heading"><div><p className="eyebrow">আপনার ভালো লাগতে পারে</p><h2>সম্পর্কিত পণ্য</h2></div><Link href={`/shop?category=${product.category}`} className="text-link">সব দেখুন <Icon name="arrow-right" size={16} /></Link></div><ProductGrid products={related} /></div></section>}
  </>;
}
