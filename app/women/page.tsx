'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard2';
import ScrollToTop from '../../components/ScrollToTop';

type Product = {
  id: number;
  name: string;
  price: string;
  type: string;
  image: string;
  description: string;
};

export default function WomenPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/products/women')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching women products:', err);
        setError('Failed to load women perfumes');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>⏳ Loading women’s perfumes...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>💐 عطور نسائية</h1>

      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <ScrollToTop />
    </main>
  );
}
