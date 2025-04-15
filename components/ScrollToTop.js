'use client';
import React from 'react';

const ScrollToTop = () => {
  return (
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
        zIndex: 9999,
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
