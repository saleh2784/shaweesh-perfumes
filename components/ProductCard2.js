'use client';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const productLink = `/${product.type}/${product.id}`;
  const whatsappLink = `https://wa.me/972505320456?text=مرحبًا، أود شراء عطر ${encodeURIComponent(product.name)} بسعر ${encodeURIComponent(product.price)}`;

  return (
    <div className="card">
      <Link href={productLink} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="image-container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="content">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <strong>{product.price}</strong>
        </div>
      </Link>

      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        اطلب عبر واتساب
      </a>

      <style jsx>{`
        .card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem;
          margin: 1.5rem;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          color: #333;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          max-width: 320px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.25);
        }

        .image-container {
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        img {
          width: 100%;
          height: auto;
          display: block;
        }

        .content h3 {
          margin: 0.5rem 0;
          font-size: 1.25rem;
        }

        .content p {
          font-size: 0.95rem;
          color: #555;
        }

        .content strong {
          display: block;
          margin: 0.8rem 0;
          font-size: 1.1rem;
          color: #a35638;
        }

        .whatsapp-button {
          display: inline-block;
          padding: 0.6rem 1.2rem;
          background: linear-gradient(135deg, #25D366, #1ebe5d);
          color: white;
          font-weight: bold;
          border-radius: 30px;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .whatsapp-button:hover {
          background: linear-gradient(135deg, #1ebe5d, #128c7e);
        }
      `}</style>
    </div>
  );
}
