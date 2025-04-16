// pages/men.js
import ProductCard from '../../components/ProductCard2';
import products from '../../data/men';
import ScrollToTop from '../../components/ScrollToTop';


export default function MenPage() {
  return (
    <main>
      <h1>عطور رجالية</h1>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      <ScrollToTop />
    </main>
  );
}
