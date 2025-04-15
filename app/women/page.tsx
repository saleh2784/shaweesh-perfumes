// pages/women.js
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import products from '../../data/women';

export default function WomenPage() {
  return (
    <>
      <Navbar />
      <h1>عطور نسائية</h1>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  );
}
