'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { brands, categories, config, featuredProducts, formatPrice, getProductImage, laptopFinderOptions, offerProducts, pcBuilderParts, products, reviews } from '@/lib/data';
import { Icon } from '@/components/icons';
import { ProductGrid } from '@/components/product-card';
import { SectionHeading } from '@/components/section-heading';

export default function HomePage() {
  const [finderValue, setFinderValue] = useState('office');
  const [builderParts, setBuilderParts] = useState<string[]>(['processor', 'ram', 'ssd']);
  const finder = laptopFinderOptions.find((item) => item.value === finderValue) ?? laptopFinderOptions[1];
  const finderProduct = products.find((product) => product.id === finder.productIds[0]) ?? products[0];
  const builderTotal = pcBuilderParts.filter((part) => builderParts.includes(part.key)).reduce((total, part) => total + part.price, 0);

  const toggleBuilderPart = (key: string) => setBuilderParts((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);

  return <>
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">TECHORA / PREMIUM TECHNOLOGY</p>
          <h1>আপনার প্রয়োজনের <span>প্রযুক্তি,</span> এক জায়গায়</h1>
          <p>ল্যাপটপ, মোবাইল, কম্পিউটার, গ্যাজেট ও প্রয়োজনীয় ইলেকট্রনিক্স পণ্য বেছে নিন সহজেই। পরিষ্কার তথ্য, নির্ভরযোগ্য সহায়তা এবং বাংলাদেশজুড়ে পৌঁছে দেওয়ার সুবিধা।</p>
          <div className="hero-actions"><Link href="/shop" className="btn btn-dark">পণ্য দেখুন <Icon name="arrow-right" size={16} /></Link><Link href="/shop?offer=true" className="btn btn-outline">আজকের অফার</Link></div>
        </div>
        <div className="hero-visual"><div className="hero-photo"><Image src="/images/techora-hero.png" alt="TECHORA premium laptop setup" fill priority sizes="(max-width: 760px) 100vw, 55vw" /></div><div className="hero-spec-card"><span>এই সপ্তাহের পছন্দ</span><strong>AirBook 14</strong><span>Core i5 · 16GB RAM</span><strong>{formatPrice(68500)}</strong></div></div>
      </div>
    </section>

    <section className="trust-strip"><div className="container trust-grid">
      <div className="trust-item"><span className="trust-icon"><Icon name="shield" size={18} /></span><div><strong>অরিজিনাল পণ্য</strong><span>নির্ভরযোগ্য পণ্য</span></div></div>
      <div className="trust-item"><span className="trust-icon"><Icon name="package" size={18} /></span><div><strong>ওয়ারেন্টি সুবিধা</strong><span>প্রযোজ্য পণ্যে</span></div></div>
      <div className="trust-item"><span className="trust-icon"><Icon name="truck" size={18} /></span><div><strong>সারা দেশে ডেলিভারি</strong><span>দেশজুড়ে</span></div></div>
      <div className="trust-item"><span className="trust-icon"><Icon name="message" size={18} /></span><div><strong>বিক্রয়োত্তর সেবা</strong><span>প্রয়োজনে সহায়তা</span></div></div>
    </div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="আপনার জন্য সাজানো" title="ক্যাটাগরি অনুযায়ী পণ্য দেখুন" description="প্রয়োজন অনুযায়ী প্রযুক্তি খুঁজে নিন এক নজরে।" href="/shop" />
      <div className="category-grid">{categories.map((category) => <Link href={category.href} className="category-card" key={category.value}><span className="category-icon"><Icon name={category.icon} size={19} /></span><div><strong>{category.label}</strong><span>{category.sublabel}</span></div></Link>)}</div>
    </div></section>

    <section className="section section-muted"><div className="container"><SectionHeading eyebrow="এখন সবচেয়ে বেশি পছন্দ" title="জনপ্রিয় পণ্য" description="আপনার প্রয়োজন বোঝে এমন product information সহ।" href="/shop" />
      <ProductGrid products={featuredProducts} />
    </div></section>

    <section className="offers-layout"><div className="container offers-inner"><SectionHeading eyebrow="সীমিত সময়ের জন্য" title="আজকের সেরা অফার" description="প্রযুক্তি পণ্যে বিশেষ দামে আপনার পরের upgrade।" href="/shop?offer=true" linkLabel="সব অফার দেখুন" />
      <div className="offer-grid"><div className="offer-card"><Image src={getProductImage(offerProducts[0])} alt="বিশেষ অফারের ল্যাপটপ" fill sizes="(max-width: 760px) 100vw, 40vw" /><div className="offer-card-content"><p className="offer-label">সীমিত সময়ের অফার</p><h3>আপনার কাজের জন্য সঠিক laptop</h3><p>AirBook 14-এ আরও smart upgrade।</p><p className="deal-price">{formatPrice(offerProducts[0].price)}</p><Link href={`/product/${offerProducts[0].slug}`} className="btn btn-light">বিস্তারিত দেখুন <Icon name="arrow-right" size={15} /></Link></div></div>
        <div className="offer-card"><div className="offer-card-content"><p className="offer-label">আজই অর্ডার করুন</p><h3>অ্যাক্সেসরিজে ২১% পর্যন্ত ছাড়</h3><p>প্রতিদিনের setup আরও complete হোক।</p><Link href="/shop?category=accessories" className="btn btn-outline">অ্যাক্সেসরিজ দেখুন</Link></div></div>
        <div className="offer-card"><div className="offer-card-content"><p className="offer-label">ঘরে বসে বেছে নিন</p><h3>Smart tech, সহজ সিদ্ধান্ত</h3><p>Warranty ও delivery তথ্য আগে থেকেই দেখুন।</p><Link href="/shop?category=gadget" className="btn btn-outline">গ্যাজেট দেখুন</Link></div></div>
      </div>
    </div></section>

    <section className="section"><div className="container finder"><div className="finder-copy"><p className="eyebrow">সহজ সিদ্ধান্তের জন্য</p><h2>আপনার জন্য সঠিক ল্যাপটপ খুঁজুন</h2><p>আপনার কাজের ধরন বেছে নিন। আমরা দেখাচ্ছি একটি curated demo recommendation—চূড়ান্ত সিদ্ধান্তের আগে full specification দেখে নিন।</p><div className="finder-options">{laptopFinderOptions.map((option) => <button key={option.value} className={`finder-option ${finderValue === option.value ? 'selected' : ''}`} onClick={() => setFinderValue(option.value)}><strong>{option.label}</strong><span>{option.description}</span></button>)}</div></div><div className="finder-results"><div className="finder-result-card"><div className="finder-result-image"><Image src={getProductImage(finderProduct)} alt={finderProduct.name} fill sizes="190px" /></div><div className="finder-result-info"><p className="eyebrow">আপনার জন্য সাজেস্টেড</p><h3>{finderProduct.name}</h3><p>{finderProduct.shortDescription}। {finderProduct.description}</p><span className="finder-price">{formatPrice(finderProduct.price)}</span><Link href={`/product/${finderProduct.slug}`} className="btn btn-dark">পণ্যের বিস্তারিত <Icon name="arrow-right" size={15} /></Link></div></div></div></div></section>

    <section className="section section-muted"><div className="container"><div className="section-heading"><div><p className="eyebrow">নিজের মতো করে সাজান</p><h2>নিজের PC তৈরি করুন</h2><p className="section-description">Demo builder · compatibility check এখানে প্রযোজ্য নয়</p></div><span className="text-link"><Icon name="settings" size={16} /> ধাপে ধাপে নির্বাচন</span></div><div className="pc-builder"><div className="builder-steps">{pcBuilderParts.map((part, index) => <button key={part.key} className={`builder-step ${builderParts.includes(part.key) ? 'selected' : ''}`} onClick={() => toggleBuilderPart(part.key)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{part.label}</strong><small>{builderParts.includes(part.key) ? 'নির্বাচিত' : 'যোগ করুন'}</small></button>)}</div><div className="builder-total"><div><span>নির্বাচিত component</span><strong>{builderParts.length} / ৭</strong></div><div><span>আনুমানিক মোট</span><strong>{formatPrice(builderTotal)}</strong></div><Link href="/shop?category=parts" className="btn btn-blue">পার্টস দেখুন <Icon name="arrow-right" size={15} /></Link></div></div></div></section>

    <section className="brand-strip"><div className="container"><div className="brand-grid">{brands.map((brand) => <Link href={`/shop?q=${brand}`} key={brand} className="brand-pill">{brand}</Link>)}</div></div></section>

    <section className="section"><div className="container"><SectionHeading eyebrow="আমাদের customer কীভাবে ভাবেন" title="ক্রেতাদের মতামত" description="এগুলো কাল্পনিক demo review—বাস্তব customer review নয়।" /><div className="review-grid">{reviews.map((review) => <article className="review-card" key={review.name}><div className="review-top"><div className="reviewer"><span className="reviewer-avatar">{review.initials}</span><div><strong>{review.name}</strong><small>{review.role}</small></div></div><span className="review-stars">{'★'.repeat(review.rating)}</span></div><blockquote>“{review.text}”</blockquote><span className="demo-review">ডেমো মতামত</span></article>)}</div></div></section>

    <section className="section section-muted"><div className="container"><SectionHeading eyebrow="কেনার পরও পাশে" title="বিক্রয়োত্তর সহায়তা" description="পণ্য বাছাই থেকে support—প্রয়োজনে আমাদের সঙ্গে কথা বলুন।" /><div className="support-grid"><div className="support-card"><span className="support-icon"><Icon name="shield" size={19} /></span><h3>ওয়ারেন্টি সহায়তা</h3><p>প্রযোজ্য পণ্যে ওয়ারেন্টি দাবির তথ্য জানতে যোগাযোগ করুন।</p></div><div className="support-card"><span className="support-icon"><Icon name="settings" size={19} /></span><h3>সার্ভিস সাপোর্ট</h3><p>প্রয়োজনে product support ও service information।</p></div><div className="support-card"><span className="support-icon"><Icon name="package" size={19} /></span><h3>অর্ডার সহায়তা</h3><p>অর্ডার সংক্রান্ত সাহায্যের জন্য আমাদের জানান।</p></div><div className="support-card"><span className="support-icon"><Icon name="help" size={19} /></span><h3>পণ্য নির্বাচন</h3><p>কেনার আগে আপনার প্রয়োজনের সঙ্গে মিলিয়ে পরামর্শ।</p></div></div><div className="return-note"><Icon name="refresh" size={18} /><span><strong>রিটার্ন ও রিপ্লেসমেন্ট:</strong> পণ্যভেদে রিটার্ন বা রিপ্লেসমেন্টের নিয়ম ভিন্ন হতে পারে। অর্ডারের আগে সংশ্লিষ্ট পণ্যের শর্ত দেখে নিন।</span><Link href="/shop">নীতিমালা দেখুন</Link></div></div></section>
  </>;
}
