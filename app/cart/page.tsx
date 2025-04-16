'use client';

import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      const parsed = JSON.parse(stored);
      const cartWithQty = parsed.map((item: any) => ({ ...item, qty: item.qty || 1 }));
      setCart(cartWithQty);
    }
  }, []);

  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      const numPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
      return sum + numPrice * item.qty;
    }, 0);
    setTotal(total);
  }, [cart]);

  const updateQty = (id: number, qty: number) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, qty) } : item
    );
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>🛒 السلة فارغة</h2>
        <a href="/" style={{ color: '#d81b60', textDecoration: 'underline' }}>
          العودة إلى الصفحة الرئيسية
        </a>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🛒 السلة</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            paddingBottom: '1rem',
            marginBottom: '1rem',
          }}
        >
          <img src={item.image} alt={item.name} style={{ width: '100px', borderRadius: '8px' }} />
          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            </div>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            style={{
              background: 'none',
              border: 'none',
              color: 'red',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>
      ))}

      <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
        المجموع: <span style={{ color: '#d81b60' }}>{total.toFixed(2)} ₪</span>
      </h3>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <a
          href={`https://wa.me/+972505320456?text=أرغب بطلب هذه المنتجات: ${cart
            .map((p) => `${p.name} x${p.qty}`)
            .join(', ')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#25d366',
            color: '#fff',
            padding: '0.8rem 1.8rem',
            fontWeight: 'bold',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '1rem',
          }}
        >
          إتمام الطلب عبر واتساب
        </a>
      </div>
    </div>
  );
}
