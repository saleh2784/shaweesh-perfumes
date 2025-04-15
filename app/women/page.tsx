// pages/women.js
import ProductCard from '../../components/ProductCard2';
import products from '../../data/women';
import ScrollToTop from '../../components/ScrollToTop';

export default function WomenPage() {
  return (
    <main>
      <h1>عطور نسائية</h1>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      <ScrollToTop />
    </main>
  );
}
