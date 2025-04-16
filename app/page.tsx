import React from 'react';
import getAllProducts from '../lib/products';
import ProductSlider from '../components/ProductSlider';
import styles from '../app/page.module.css';
import ScrollToTop from '../components/ScrollToTop';
import VideoPage from './video/page';
import FeedbackSlider from '../components/FeedbackSlider';
import MoonBannerSection from '../components/MoonBannerSection';
import Products from '../components/Products';


export default function Home() {
  const products = getAllProducts();

  return (
    <main>
      {/* <BackgroundVideo /> */}
      <h1 className={styles.title}>مرحبا بكم في الشاويش للعطور</h1>
      <br></br>
      <p className={styles.subtitle}>تشكيلة فاخرة من العطور الرجالية والنسائية</p>
      <div id="products">
      <ProductSlider products={products} />
      </div>
      <VideoPage/>
      <MoonBannerSection />
      <FeedbackSlider />
      <ScrollToTop />
      <Products />
    </main>
  );
}
