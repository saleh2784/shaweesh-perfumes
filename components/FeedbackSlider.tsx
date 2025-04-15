'use client';
import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';

const feedbacks = [
  {
    name: "أم محمد",
    feedback: "أفضل عطر استخدمته على الإطلاق! يدوم طويلًا ورائحته فاخرة.",
  },
  {
    name: "سعيد الكرمي",
    feedback: "التغليف كان أنيق جدًا، والتوصيل سريع. أنصح به بشدة.",
  },
  {
    name: "سارة الأحمد",
    feedback: "أحببت تنوع الروائح وكل واحدة أجمل من الثانية. خدمة ممتازة.",
  },
  {
    name: "نادر زيدان",
    feedback: "العطر رجولي وأنيق، ثابت لأكثر من 8 ساعات.",
  },
  {
    name: "أميرة فهد",
    feedback: "عطر نسائي جميل جدًا وشكله راقي كهدية.",
  },
];

export default function FeedbackSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="feedback-section">
      <h2 className="feedback-title">آراء العملاء</h2>
      <Slider {...settings}>
        {feedbacks.map((item, index) => (
          <div key={index} className="feedback-card">
            <FaQuoteRight className="quote-icon" />
            <p className="feedback-text">"{item.feedback}"</p>
            <p className="customer-name">- {item.name}</p>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .feedback-section {
          background: linear-gradient(to right, #fffaf0, #f7f3e9);
          padding: 4rem 1rem;
          text-align: center;
          font-family: 'Cairo', sans-serif;
        }

        .feedback-title {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #6d4c41;
        }

        .feedback-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          padding: 2rem;
          margin: 0 1rem;
          text-align: right;
          position: relative;
        }

        .quote-icon {
          font-size: 2rem;
          color: #d4af37;
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .feedback-text {
          font-size: 1.1rem;
          color: #333;
          margin: 1rem 0;
        }

        .customer-name {
          font-weight: bold;
          color: #a35638;
        }

        @media (max-width: 768px) {
          .feedback-card {
            padding: 1.5rem;
          }

          .feedback-text {
            font-size: 1rem;
          }

          .feedback-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
