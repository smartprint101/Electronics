'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { config, formatPrice, getProductImage } from '@/lib/data';
import { useStore } from '@/components/store-provider';
import { Icon } from '@/components/icons';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useStore();
  const subtotal = useMemo(() => cartItems.reduce((sum, { item, product }) => sum + product.price * item.quantity, 0), [cartItems]);
  const delivery = cartItems.length ? config.deliveryChargeInsideDhaka : 0;
  const total = subtotal + delivery;
  return <section className="cart-page"><div className="container"><div className="breadcrumbs"><Link href="/">হোম</Link><span>/</span><span>কার্ট</span></div><div className="cart-heading"><div><h1>আপনার কার্ট</h1><p>{cartItems.length ? `${cartItems.length}টি পণ্য আপনার অর্ডারের জন্য প্রস্তুত।` : 'আপনার পছন্দের পণ্যগুলো এক জায়গায় রাখুন।'}</p></div><Link href="/shop" className="text-link">আরও পণ্য দেখুন <Icon name="arrow-right" size={16} /></Link></div>
    {!cartItems.length ? <div className="empty-state"><div className="empty-icon"><Icon name="shopping-bag" size={27} /></div><h2>কার্ট এখনো খালি</h2><p>আপনার পছন্দের electronics যোগ করে শুরু করুন।</p><Link href="/shop" className="btn btn-dark">পণ্য দেখুন <Icon name="arrow-right" size={16} /></Link></div> : <div className="cart-layout"><div className="cart-items">{cartItems.map(({ item, product }) => <div className="cart-item" key={`${item.productId}-${item.variant}`}><div className="cart-item-image"><Image src={getProductImage(product)} alt={product.name} fill sizes="96px" /></div><div className="cart-item-copy"><Link href={`/product/${product.slug}`}><h2>{product.name}</h2></Link><p>{item.variant || product.variants[0]} · {product.warranty.label}</p><div className="cart-item-actions"><div className="quantity"><button onClick={() => updateQuantity(item.productId, item.quantity - 1, item.variant)} aria-label="পরিমাণ কমান"><Icon name="minus" size={14} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.productId, item.quantity + 1, item.variant)} aria-label="পরিমাণ বাড়ান"><Icon name="plus" size={14} /></button></div><button className="cart-item-remove" onClick={() => removeFromCart(item.productId, item.variant)}><Icon name="trash" size={16} /> <span className="sr-only">সরিয়ে ফেলুন</span></button></div></div><div className="cart-item-price">{formatPrice(product.price * item.quantity)}</div></div>)}</div><aside className="cart-summary"><h2>অর্ডারের সারাংশ</h2><div className="summary-line"><span>পণ্যের মোট</span><strong>{formatPrice(subtotal)}</strong></div><div className="summary-line"><span>ডেলিভারি চার্জ</span><strong>{formatPrice(delivery)}</strong></div><div className="summary-line summary-total"><span>সর্বমোট</span><strong>{formatPrice(total)}</strong></div><Link href="/checkout" className="btn btn-blue" style={{ width: '100%', marginTop: 15 }}>অর্ডার সম্পন্ন করুন <Icon name="arrow-right" size={16} /></Link><div className="summary-help"><Icon name="shield" size={16} /><span>Demo checkout · payment ও delivery information অর্ডারের আগে দেখা যাবে।</span></div></aside></div>}
  </div></section>;
}
