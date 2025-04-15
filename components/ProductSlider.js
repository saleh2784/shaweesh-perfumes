// components/ProductSlider.js
'use client';

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function shuffleArray(array) {
  return [...array].sort(() => 0.5 - Math.random());
}

// Custom arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} style={{ ...arrowStyle, right: 0 }}>
      <FaChevronRight size={24} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} style={{ ...arrowStyle, left: 0 }}>
      <FaChevronLeft size={24} />
    </div>
  );
}

const arrowStyle = {
  position: 'absolute',
  top: '40%',
  zIndex: 2,
  background: '#fff',
  borderRadius: '50%',
  padding: '8px',
  cursor: 'pointer',
  boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
};

export default function ProductSlider({ products }) {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    setShuffledProducts(shuffleArray(products));
  }, [products]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div style={{ padding: '2rem', position: 'relative' }}>
      <Slider {...settings}>
        {shuffledProducts.map((product) => (
          <ProductCard key={product.id + product.name} product={product} />
        ))}
      </Slider>
    </div>
  );
}
