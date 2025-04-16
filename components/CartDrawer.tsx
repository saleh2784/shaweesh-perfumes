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
    setCart(getCart());
  }, [isOpen]);

  const handleRemove = (id: number) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const handleQtyChange = (id: number, newQty: number) => {
    updateQuantity(id, newQty);
    setCart(getCart());
  };

  const total = cart.reduce((acc, item) => acc + (parseFloat(item.price) * (item.quantity || 1)), 0);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: isOpen ? 0 : '-400px',
      width: '350px',
      height: '100%',
      background: '#fff',
      boxShadow: '-3px 0 10px rgba(0,0,0,0.2)',
      padding: '1rem',
      zIndex: 1000,
      transition: 'right 0.3s ease-in-out',
      overflowY: 'auto',
    }}>
      <button onClick={closeCart} style={{ float: 'left', marginBottom: '1rem' }}>✖</button>
      <h4 style={{ textAlign: 'center' }}>🛒 Your Cart</h4>

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <h5>{item.name}</h5>
              <p>{item.price} × 
                <input
                  type="number"
                  min={1}
                  value={item.quantity || 1}
                  onChange={(e) => handleQtyChange(item.id, parseInt(e.target.value))}
                  style={{ width: '50px', marginLeft: '8px' }}
                />
              </p>
              <button onClick={() => handleRemove(item.id)} style={{ color: 'red' }}>Remove</button>
            </div>
          ))}
          <hr />
          <p><strong>Total:</strong> {total.toFixed(2)}</p>

          <a
            href={`https://wa.me/972505320456?text=أرغب بطلب المنتجات التالية:\n${cart.map(i => `- ${i.name} × ${(i.quantity || 1)}`).join('\n')}\n\nالمجموع: ${total.toFixed(2)}`}
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
              fontWeight: 'bold'
            }}
          >
            🚀 Complete Order via WhatsApp
          </a>
        </>
      )}
    </div>
  );
}
