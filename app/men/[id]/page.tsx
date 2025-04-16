'use client';

import { useEffect } from 'react';
import menPerfumes from '../../../data/men';
import { notFound } from 'next/navigation';
import RelatedItemsSlider from '../../../components/RelatedItemsSlider';
import ScrollToTop from '@/components/ScrollToTop';
import { addToCart } from '../../../lib/cartUtils';
import FloatingCartIcon from '../../../components/FloatingCartIcon';
import { useCart } from '@/context/CartContext';

export default function ProductDetails({ params }: { params: { id: string } }) {
  const { openCart } = useCart(); // ✅ Moved here inside the component
  const id = Number(params.id);
  const product = menPerfumes.find(p => p.id === id);
  if (!product) return notFound();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params.id]);

  return (
    <>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '300px', borderRadius: '10px' }}
        />
        <p style={{ marginTop: '1rem' }}>{product.description}</p>
        <h3 style={{ margin: '1rem 0', color: '#d81b60' }}>{product.price}</h3>

        {/* ✅ WhatsApp Purchase Button */}
        <a
          href={`https://wa.me/+972505320456?text=أرغب بشراء العطر: ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#25d366',
            color: '#fff',
            padding: '0.6rem 1.4rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          شراء عبر واتساب
        </a>

        {/* ✅ Add to Cart */}
        <button
          onClick={() => {
            addToCart({ ...product, quantity: 1 });
            openCart(); // ✅ Automatically open cart drawer
          }}
          style={{
            marginTop: '1rem',
            padding: '0.6rem 1.4rem',
            backgroundColor: '#d81b60',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          🛒 أضف إلى السلة
        </button>

        <a
          href="/men"
          style={{
            marginTop: '2rem',
            display: 'inline-block',
            color: '#555',
            textDecoration: 'underline',
            fontWeight: 'bold',
          }}
        >
          ⬅️ رجوع إلى العطور الرجالية
        </a>
      </div>

      {/* Related Items */}
      <RelatedItemsSlider currentId={product.id} allProducts={menPerfumes} type="men" />

      {/* Scroll To Top Button */}
      <ScrollToTop />

      {/* Floating Cart Icon */}
      <FloatingCartIcon />
    </>
  );
}
