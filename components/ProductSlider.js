'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { addToCart } from '../lib/cartUtils';

// window.dispatchEvent(new Event('open-cart'));

function shuffleArray(array) {
  return [...array].sort(() => 0.5 - Math.random());
}

function NextArrow({ onClick }) {
  return (
    <div className="slider-arrow right" onClick={onClick}>
      <FaChevronRight size={20} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div className="slider-arrow left" onClick={onClick}>
      <FaChevronLeft size={20} />
    </div>
  );
}

export default function ProductSlider({ products }) {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    setShuffledProducts(shuffleArray(products));
  }, [products]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    rtl: true,
    centerMode: false,
    centerPadding: '20px',
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: true,
    touchMove: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="slider-container">
    <Slider {...settings}>
      {shuffledProducts.map((product) => (
        <div key={product.id + product.name} className="fade-card">
          <ProductCard product={product} />
        </div>
      ))}
    </Slider>

    {/* ✅ Outside of Slider */}
    <div className="see-more-container">
      <a href="/men" className="see-more-button">شاهد المزيد →</a>
    </div>

      <style jsx>{`
        .slider-container {
          position: relative;
          padding: 2rem 1rem;
          max-width: 100%;
          overflow: hidden;
        }

        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          padding: 0.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }
        .fade-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease forwards;
        }
        
        :global(.slick-slide.slick-active .fade-card) {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
          }
        }
        .see-more-container {
          text-align: center;
          margin-top: 3.5rem;
        }
        
        .see-more-button {
          display: inline-block;
          background-color: #d4af37;
          color: white;
          font-weight: bold;
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          text-decoration: none;
          transition: background 0.3s ease;
        }
        
        .see-more-button:hover {
          background-color: #b68c27;
        }
        .slider-arrow.left {
          left: 10px;
        }

        .slider-arrow.right {
          right: 10px;
        }

        .slider-arrow:hover {
          background-color: #f2f2f2;
        }

        :global(.slick-dots) {
          bottom: -25px;
        }

        :global(.slick-dots li button:before) {
          font-size: 10px;
          color: #aaa;
          opacity: 1;
        }

        :global(.slick-dots li.slick-active button:before) {
          color: #d81b60;
        }

        @media (max-width: 768px) {
          .slider-arrow {
            display: none;
          }

          .slider-container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
