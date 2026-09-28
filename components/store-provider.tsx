'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { products, type Product } from '@/lib/data';

type CartItem = { productId: string; quantity: number; variant?: string };
type StoreContextValue = {
  cart: CartItem[];
  compareIds: string[];
  wishlistIds: string[];
  cartCount: number;
  cartItems: { item: CartItem; product: Product }[];
  addToCart: (productId: string, variant?: string) => void;
  removeFromCart: (productId: string, variant?: string) => void;
  updateQuantity: (productId: string, quantity: number, variant?: string) => void;
  toggleCompare: (productId: string) => void;
  toggleWishlist: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  isInWishlist: (productId: string) => boolean;
  clearCart: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem('techora-cart');
      const savedCompare = window.localStorage.getItem('techora-compare');
      const savedWishlist = window.localStorage.getItem('techora-wishlist');
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedCompare) setCompareIds(JSON.parse(savedCompare));
      if (savedWishlist) setWishlistIds(JSON.parse(savedWishlist));
    } catch {
      // Demo store can safely start empty if local storage is unavailable.
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => { if (ready) window.localStorage.setItem('techora-cart', JSON.stringify(cart)); }, [cart, ready]);
  useEffect(() => { if (ready) window.localStorage.setItem('techora-compare', JSON.stringify(compareIds)); }, [compareIds, ready]);
  useEffect(() => { if (ready) window.localStorage.setItem('techora-wishlist', JSON.stringify(wishlistIds)); }, [wishlistIds, ready]);

  const addToCart = (productId: string, variant?: string) => setCart((current) => {
    const index = current.findIndex((item) => item.productId === productId && item.variant === variant);
    if (index > -1) return current.map((item, i) => i === index ? { ...item, quantity: Math.min(item.quantity + 1, 9) } : item);
    return [...current, { productId, quantity: 1, variant }];
  });
  const removeFromCart = (productId: string, variant?: string) => setCart((current) => current.filter((item) => !(item.productId === productId && item.variant === variant)));
  const updateQuantity = (productId: string, quantity: number, variant?: string) => setCart((current) => quantity < 1 ? current.filter((item) => !(item.productId === productId && item.variant === variant)) : current.map((item) => item.productId === productId && item.variant === variant ? { ...item, quantity: Math.min(quantity, 9) } : item));
  const toggleCompare = (productId: string) => setCompareIds((current) => current.includes(productId) ? current.filter((id) => id !== productId) : current.length >= 3 ? current : [...current, productId]);
  const toggleWishlist = (productId: string) => setWishlistIds((current) => current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]);
  const clearCart = () => setCart([]);

  const cartItems = useMemo(() => cart.map((item) => ({ item, product: products.find((product) => product.id === item.productId) })).filter((entry): entry is { item: CartItem; product: Product } => Boolean(entry.product)), [cart]);
  const value = { cart, compareIds, wishlistIds, cartCount: cart.reduce((sum, item) => sum + item.quantity, 0), cartItems, addToCart, removeFromCart, updateQuantity, toggleCompare, toggleWishlist, isInCompare: (id: string) => compareIds.includes(id), isInWishlist: (id: string) => wishlistIds.includes(id), clearCart };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used inside StoreProvider');
  return context;
}
