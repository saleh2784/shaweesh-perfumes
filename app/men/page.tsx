// pages/men.js
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import products from '../../data/men';

export default function MenPage() {
  return (
    <>
      <Navbar />
      <h1>عطور رجالية</h1>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  );
}
