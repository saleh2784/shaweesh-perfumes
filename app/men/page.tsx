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

export default function MenPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products/men')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>عطور رجالية</h1>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <ScrollToTop />
    </main>
  );
}
