'use client';

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="text-content">
        {/* <h2>إعلان حصري لعطر الشاويش</h2> */}
        <h2>الرقيّ في كل لحظة – جاذبية لا تُنسى</h2>
      </div>

      <div className="video-frame">
        <iframe
          src="https://www.youtube.com/embed/ME6KFDvOXz8?autoplay=1&mute=1&controls=1&loop=1&playlist=ME6KFDvOXz8&rel=0&modestbranding=1"
          title="عطر الشاويش"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <style jsx>{`
        .video-section {
          direction: rtl;
          text-align: center;
          padding: 0rem 1rem;
          background: linear-gradient(to bottom, #fffaf0, #f9f7f3);
          font-family: 'Cairo', sans-serif;
        }

        .text-content h2 {
          font-size: 2.5rem;
          color: #222;
          margin-bottom: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .text-content p {
          font-size: 1.2rem;
          color: #6d4c41;
          margin-bottom: 2rem;
        }

        .video-frame {
          max-width: 850px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 25px rgba(212, 175, 55, 0.4);
          transition: all 0.4s ease;
          background: #fff5e1;
        }

        .video-frame:hover {
          transform: scale(1.01);
          box-shadow: 0 0 45px rgba(212, 175, 55, 0.65);
        }

        .video-frame iframe {
          width: 100%;
          height: 480px;
          border: none;
        }

        @media (max-width: 768px) {
          .text-content h2 {
            font-size: 1.7rem;
          }

          .text-content p {
            font-size: 1rem;
          }

          .video-frame iframe {
            height: 230px;
          }
        }
      `}</style>
    </section>
  );
}
