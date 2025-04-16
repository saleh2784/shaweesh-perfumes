'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import CartDrawer from '@/components/CartDrawer';

const CartContext = createContext({
  isOpen: false,
  openCart: () => {},
  closeCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  // ✅ Listen for "open-cart" event (e.g. from button or product page)
  useEffect(() => {
    const handleExternalOpen = () => setIsOpen(true);
    window.addEventListener('open-cart', handleExternalOpen);
    return () => window.removeEventListener('open-cart', handleExternalOpen);
  }, []);

  return (
    <CartContext.Provider value={{ isOpen, openCart, closeCart }}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
