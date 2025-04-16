'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import { addToCart } from '@/lib/cartUtils';
import { useCart } from '@/context/CartContext';

type Product = {
  id: number;
  name: string;
  price: string;
  type: string;
  image: string;
  description: string;
};

export default function ProductDetails() {
  const { type, id } = useParams() as { type: string; id: string };
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState('');
  const { openCart } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${type}/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setError('❌ لم يتم العثور على المنتج'));
  }, [type, id]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!product) return <p>⏳ جاري تحميل المنتج...</p>;

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        style={{ borderRadius: '12px', objectFit: 'cover' }}
        unoptimized
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3 style={{ color: '#d81b60' }}>{product.price} ₪</h3>

      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a
          href={`https://wa.me/972505320456?text=أرغب بشراء العطر: ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#25D366',
            color: '#fff',
            padding: '0.6rem 1.4rem',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          💬 شراء عبر واتساب
        </a>

        <button
          onClick={() => {
            addToCart({ ...product, quantity: 1 });
            openCart();
          }}
          style={{
            backgroundColor: '#d81b60',
            color: '#fff',
            padding: '0.6rem 1.4rem',
            border: 'none',
            borderRadius: '30px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          🛒 أضف إلى السلة
        </button>
      </div>
    </div>
  );
}
