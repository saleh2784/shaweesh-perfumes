'use client';

import { useEffect } from 'react';
import menPerfumes from '../../../data/men';
import { notFound } from 'next/navigation';
import RelatedItemsSlider from '../../../components/RelatedItemsSlider';
import ScrollToTop from '@/components/ScrollToTop';
import { addToCart } from '../../../lib/cartUtils';
import FloatingCartIcon from '../../../components/FloatingCartIcon';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function ProductDetails({ params }: { params: { id: string } }) {
  const { openCart } = useCart();
  const id = Number(params.id);
  const product = menPerfumes.find((p) => p.id === id);
  if (!product) return notFound();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params.id]);

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
        <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '1rem' }}>{product.name}</h1>

        <div style={{
          width: '100%',
          maxWidth: '320px',
          margin: '0 auto 1rem',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={320}
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        </div>

        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '0.5rem' }}>{product.description}</p>
        <h3 style={{ fontSize: '1.5rem', color: '#a35638', marginBottom: '1.5rem' }}>{product.price} ₪</h3>

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
              transition: 'background 0.3s ease',
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
              border: 'none',
              borderRadius: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            🛒 أضف إلى السلة
          </button>

          <a
            href="/men"
            style={{
              marginTop: '1rem',
              color: '#444',
              fontWeight: 'bold',
              textDecoration: 'underline',
              fontSize: '0.95rem',
            }}
          >
            ⬅️ رجوع إلى العطور الرجالية
          </a>
        </div>
      </div>

      <RelatedItemsSlider currentId={product.id} allProducts={menPerfumes} type="men" />
      <ScrollToTop />
      <FloatingCartIcon />
    </>
  );
}
