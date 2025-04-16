'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Product = {
  id: number;
  name: string;
  price: string;
  type: string;
  image: string;
  description: string;
};

function shuffleArray(array: Product[]): Product[] {
  return [...array].sort(() => 0.5 - Math.random());
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div className="slider-arrow right" onClick={onClick}>
      <FaChevronRight size={20} />
    </div>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div className="slider-arrow left" onClick={onClick}>
      <FaChevronLeft size={20} />
    </div>
  );
}

export default function ProductSlider() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(res => setProducts(shuffleArray(res.data)))
      .catch(err => console.error('❌ Error fetching products:', err));
  }, []);

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
        {products.map(product => (
          <div key={product.id} className="fade-card">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>

      <div className="see-more-container">
        <a href="/men" className="see-more-button">شاهد المزيد →</a>
      </div>

      {/* styles as is... */}
    </div>
  );
}
