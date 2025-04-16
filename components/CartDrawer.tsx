'use client';

import { useEffect, useState } from 'react';
import { getCart, removeFromCart, updateQuantity } from '../lib/cartUtils';
import { useCart } from '../context/CartContext';

type CartItem = {
  id: number;
  name: string;
  price: string;
  quantity: number;
};

export default function CartDrawer() {
  const { isOpen, closeCart } = useCart();
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const updateCart = () => setCart(getCart());
    updateCart(); // update on open
    window.addEventListener('cart-updated', updateCart);
    return () => window.removeEventListener('cart-updated', updateCart);
  }, [isOpen]);

  const handleRemove = (id: number) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const handleQtyChange = (id: number, newQty: number) => {
    updateQuantity(id, newQty);
    setCart(getCart());
  };

  const total = cart.reduce((acc, item) => {
    const price = parseFloat((item.price || '0').replace(/[^\d.]/g, ''));
    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0);

  if (!isOpen) return null;

  return (
    // 🔲 Overlay background to detect outside clicks
    <div
      onClick={closeCart}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 999
      }}
    >
      {/* 🧱 Drawer box (clicks should NOT close here) */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '350px',
          height: '100%',
          background: '#fff',
          boxShadow: '-3px 0 10px rgba(0,0,0,0.2)',
          padding: '1rem',
          overflowY: 'auto',
          transition: 'right 0.3s ease-in-out',
          zIndex: 1000,
        }}
      >
        {/* ❌ Close button */}
        <button
          onClick={closeCart}
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            fontSize: '1.5rem',
            background: 'transparent',
            border: 'none',
            color: '#333',
            cursor: 'pointer',
            zIndex: 1001,
          }}
          aria-label="Close cart"
        >
          ✖
        </button>

        <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>🛒 سلة المشتريات</h4>

        {cart.length === 0 ? (
          <p style={{ textAlign: 'center' }}>السلة فارغة</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  marginBottom: '1rem',
                  borderBottom: '1px solid #ccc',
                  paddingBottom: '1rem',
                }}
              >
                <h5>{item.name}</h5>
                <p>
                  {item.price} ₪ ×{' '}
                  <input
                    type="number"
                    min={1}
                    value={item.quantity || 1}
                    onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value))}
                    style={{ width: '50px', marginLeft: '8px' }}
                  />
                </p>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'red',
                    cursor: 'pointer',
                  }}
                >
                  حذف
                </button>
              </div>
            ))}
            
            <hr />
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              المجموع: {total.toFixed(2)} ₪
            </p>

            <a
              href={`https://wa.me/972505320456?text=أرغب بطلب المنتجات التالية:\n${cart.map(i => `- ${i.name} × ${i.quantity || 1}`).join('\n')}\n\nالمجموع: ${total.toFixed(2)} ₪`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.6rem 1.2rem',
                backgroundColor: '#25d366',
                color: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                textAlign: 'center',
                width: '100%',
                fontWeight: 'bold',
              }}
            >
              🚀 إتمام الطلب عبر واتساب
            </a>
          </>
        )}
      </div>
    </div>
  );
}
