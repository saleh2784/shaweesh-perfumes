'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs: React.FC = () => {
  return (
    <div dir="rtl" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
      <h1 className="store-title2" style={{ fontSize: '2.2rem', color: '#333', marginBottom: '1rem' }}>
        الشاوِيش للعطور
      </h1>

      <p style={{ fontSize: '1.1rem', color: '#444', maxWidth: '700px', margin: '0 auto 2rem' }}>
        نحن في الشاوِيش للعطور نؤمن بأن كل رائحة تحمل قصة. نقدم تشكيلة من العطور الفاخرة التي تم اختيارها بعناية لتعكس ذوقك وشخصيتك. جودة، أناقة، وتميز في كل زجاجة.
      </p>

      {/* Social Icons */}
      <div className="social-section" style={{ marginBottom: '2rem', fontSize: '2rem' }}>
        <SocialIcons />
      </div>

      {/* Contact Info & Map */}
      <div id="contact" style={{ color: '#000', fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
        <p>
          📞 اتصل بنا عبر الواتساب:
          <a
            href="https://wa.me/+972505320456"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#facc15', fontWeight: 'bold', marginRight: '5px' }}
          >
            5320456-050
          </a>
        </p>
        <p>جت المثلث، شارع الشافعي - بلقيس، بجانب مدرسة الزهراء</p>
        <p>📍 موقعنا على الخريطة:</p>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
          <iframe
            src="https://maps.google.com/?q=A-Shafi/Bilqis&output=embed"
            width="90%"
            height="300"
            style={{ border: '0', borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
          href="https://maps.google.com/?q=A-Shafi/Bilqis"
          className="map-button"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '0.5rem',
            padding: '0.5rem 1.2rem',
            backgroundColor: '#d81b60',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          افتح الموقع على الخريطة
        </a>
      </div>

      {/* Waze Button */}
      <div style={{ marginTop: '2rem' }}>
        <a
          href="https://ul.waze.com/ul?ll=32.39862451,35.03341556&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          🚗 افتح في Waze
        </a>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '0.5rem 1rem',
          fontSize: '1.5rem',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#555',
          color: '#fff',
          cursor: 'pointer',
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Social Icons Again at Bottom */}
      <div style={{ marginTop: '2rem', fontSize: '2rem' }}>
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactUs;

// Reusable icon block
const SocialIcons = () => (
  <>
    <a
      className="icon-button"
      href="https://www.instagram.com/saleh_shawesh"
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: '0 10px', color: '#d62976' }}
    >
      <i className="fab fa-instagram" />
    </a>
    <a
      className="icon-button"
      href="https://www.facebook.com/shawesh99"
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: '0 10px', color: '#1877f2' }}
    >
      <i className="fab fa-facebook" />
    </a>
    <a
      className="icon-button"
      href="https://wa.me/+972505320456"
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: '0 10px', color: '#25d366' }}
    >
      <i className="fab fa-whatsapp" />
    </a>
    <a
      className="icon-button"
      href="https://www.tiktok.com/@saleh.shawesh"
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: '0 10px', color: '#000' }}
    >
      <i className="fab fa-tiktok" />
    </a>
  </>
);
