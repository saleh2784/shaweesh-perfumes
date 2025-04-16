//for the slider 

'use client';
import Link from 'next/link';
import { addToCart } from '../lib/cartUtils';


export default function ProductCard({ product }) {
  const detailLink = `/${product.type}/${product.id}`;
  const whatsappLink = `https://wa.me/972505320456?text=مرحبًا، أود شراء عطر ${encodeURIComponent(product.name)} بسعر ${encodeURIComponent(product.price)}`;

  return (
    <div className="card">
      <Link href={detailLink} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <div className="image-container">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="content">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
          </div>
          <button className="add-to-cart-button" onClick={() => addToCart(product)}>
          🛒 أضف إلى السلة
        </button>
        </div>
      </Link>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        اطلب عبر واتساب
      </a>

      <style jsx>{`
        .card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1rem;
          margin: 1rem;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          color: #333;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          max-width: 250px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
        }

        .add-to-cart-button {
          margin-top: 0.7rem;
          background-color: #d81b60;
          color: white;
          font-weight: bold;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 30px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .add-to-cart-button:hover {
          background-color: #b8485f;
        }
        
        
        .image-container {
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }

        img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }

        .content h3 {
          margin: 0.4rem 0;
          font-size: 1.05rem;
        }

        .content p {
          font-size: 0.85rem;
          color: #555;
        }

        .content strong {
          display: block;
          margin: 0.6rem 0;
          font-size: 1rem;
          color: #a35638;
        }

        .whatsapp-button {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: linear-gradient(135deg, #25D366, #1ebe5d);
          color: white;
          font-size: 0.9rem;
          font-weight: bold;
          border-radius: 30px;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .whatsapp-button:hover {
          background: linear-gradient(135deg, #1ebe5d, #128c7e);
        }

        @media (max-width: 600px) {
          .card {
            max-width: 90%;
            margin: 1rem auto;
          }

          img {
            height: 160px;
          }
        }
      `}</style>
    </div>
  );
}
