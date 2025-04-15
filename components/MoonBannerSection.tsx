'use client';

export default function MoonBannerSection() {
  const scrollToProducts = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="moon-banner">
      <div className="gradient-overlay" />
      <div className="text-wrapper">
        <h2 className="fade-heading"> The moon has always been a symbol of beauty and enchanting nights</h2>
        <h2 className="fade-heading"> لقد كان القمر دائمًا رمزًا للجمال والليالي الساحرة</h2>
        <button className="shop-button" onClick={scrollToProducts}>
          Shop Now
        </button>
      </div>

      <style jsx>{`
        .moon-banner {
          background-color: #e2b3b3;
          background-image: url('https://media.al-jasser.com/api/public/content/x2tmbeq9sioyaufnkybqa-web?v=d323dfd8&t=w800');
          background-size: contain; /* ✅ shows full image */
          background-repeat: no-repeat;
          background-position: center;
          height: 420px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3));
          z-index: 1;
        }

        .text-wrapper {
          position: relative;
          z-index: 2;
          padding: 1rem 2rem;
          backdrop-filter: blur(4px);
          border-radius: 20px;
          max-width: 900px;
        }

        .fade-heading {
          font-size: 1.8rem;
          font-family: 'Cairo', sans-serif;
          color: #111;
          margin-bottom: 1.2rem;
          animation: fadeTop 1.5s ease-out both;
        }

        .shop-button {
          background-color: #d4af37;
          color: #fff;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: fadePop 1.2s ease-out 0.5s both;
        }

        .shop-button:hover {
          background-color: #b68c27;
          transform: scale(1.05);
        }

        @keyframes fadeTop {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadePop {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .moon-banner {
            height: 300px;
            background-size: cover; /* fallback for mobile */
          }

          .fade-heading {
            font-size: 1.2rem;
          }

          .shop-button {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}
