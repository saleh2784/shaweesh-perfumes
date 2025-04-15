'use client';
import Slider from 'react-slick';
import ProductCard from './ProductCard2';
import Link from 'next/link';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  type: string;
  description: string;
}

interface RelatedItemsProps {
  currentId: number;
  allProducts: Product[];
  type: 'men' | 'women';
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
}

export default function RelatedItemsSlider({ currentId, allProducts, type }: RelatedItemsProps) {
  const related = allProducts.filter((p) => p.id !== currentId).slice(0, 10);

  const settings = {
    infinite: true,
    speed: 500,
    rtl: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } }
    ],
  };

  return (
    <section className="related-slider fade-in">
      <h3>منتجات مشابهة</h3>
      <Slider {...settings}>
        {related.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
      <div className="see-all-container">
        <Link href={`/${type}`} className="see-all">
          عرض الكل →
        </Link>
      </div>

      <style jsx>{`
        .see-all-container {
          text-align: center; /* ✅ center horizontally */
          margin-top: 1.5rem;
          font-size: 1.5rem;
        }

        .related-slider h3 {
          text-align: right;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #444;
        }

        .see-all-container {
          text-align: center;
          margin-top: 0rem;
        }

        .see-all {
          color: #a35638;
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          border: 1px solid #a35638;
          padding: 0.5rem 1.2rem;
          border-radius: 25px;
          transition: all 0.3s ease;
          display: inline-block;;
          
        }
        .see-all:hover {
          background-color: #a35638;
          color: white;

        .fade-in {
          animation: fadeIn 0.8s ease-in both;
        }

        .arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          width: 35px;
          height: 35px;
          cursor: pointer;
          z-index: 2;
        }

        .arrow.next {
          right: -10px;
        }

        .arrow.prev {
          left: -10px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
