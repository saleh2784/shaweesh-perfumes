'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  price: number;
  type: string;
  image: string;
  description: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('فشل في تحميل المنتجات.');
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <p>⏳ جارٍ تحميل المنتجات...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>📦 قائمة العطور</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.type}/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

            <div style={{
              background: '#fff',
              padding: '1rem',
              borderRadius: '12px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              textAlign: 'center',
              cursor: 'pointer'
            }}>
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <h3 style={{ margin: '1rem 0 0.5rem' }}>{p.name}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{p.description}</p>
              <strong style={{ color: '#d81b60' }}>{Number(p.price).toFixed(2)} ₪</strong>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
