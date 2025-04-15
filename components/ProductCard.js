'use client';

 function ProductCard({ product }) {
    return (
      <div className="card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>{product.price}</strong>
        <style jsx>{`
          .card {
            background: #fffdf7;
            border-radius: 12px;
            padding: 1rem;
            margin: 1rem;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          img {
            max-width: 100%;
            border-radius: 8px;
          }
        `}</style>
      </div>
    );
  }
  
  export default ProductCard;