import React from 'react';
import getAllProducts from '../lib/products';
import ProductSlider from '../components/ProductSlider';
import styles from '../app/page.module.css';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  const products = getAllProducts();

  return (
    <main>
      <h1 className={styles.title}>مرحبا بكم في الشاويش للعطور</h1>
      <p className={styles.subtitle}>تشكيلة فاخرة من العطور الرجالية والنسائية</p>
      <ProductSlider products={products} />
      <ScrollToTop />
    </main>
  );
}
