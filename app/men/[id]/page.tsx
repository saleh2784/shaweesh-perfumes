'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ScrollToTop from '@/components/ScrollToTop';
import RelatedItemsSlider from '@/components/RelatedItemsSlider';
import FloatingCartIcon from '@/components/FloatingCartIcon';
import { addToCart } from '@/lib/cartUtils';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  type: string;
};

export default function ProductClient({ id }: { id: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const { openCart } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>جارٍ تحميل المنتج...</p>;

  return (
    <>
      <div style={{
        padding: '3rem 1rem',
        maxWidth: '600px',
        margin: 'auto',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
      }}>
        <h1>{product.name}</h1>
        <Image
          src={product.image}
          alt={product.name}
          width={320}
          height={320}
          style={{ objectFit: 'cover', borderRadius: '16px', marginBottom: '1rem' }}
          unoptimized
        />
        <p>{product.description}</p>
        <h3 style={{ color: '#a35638' }}>{Number(product.price).toFixed(2)} ₪</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <a
            href={`https://wa.me/+972505320456?text=أرغب بشراء العطر: ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #25D366, #1ebe5d)',
              color: '#fff',
              padding: '0.7rem 1.5rem',
              borderRadius: '30px',
              fontWeight: 'bold',
              textDecoration: 'none',
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
              background: 'linear-gradient(135deg, #d81b60, #c2185b)',
              color: '#fff',
              padding: '0.7rem 1.5rem',
              borderRadius: '30px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            🛒 أضف إلى السلة
          </button>
        </div>

        <a href="/men" style={{ display: 'block', marginTop: '2rem', fontWeight: 'bold' }}>
          ⬅️ رجوع إلى العطور الرجالية
        </a>
      </div>

      <ScrollToTop />
      <FloatingCartIcon />
    </>
  );
}
