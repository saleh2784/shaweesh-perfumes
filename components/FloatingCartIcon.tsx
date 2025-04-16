'use client';
import CartDrawer from './CartDrawer';

export default function FloatingCartIcon() {
  const toggleCart = () => {
    const event = new CustomEvent('open-cart');
    window.dispatchEvent(event);
  };

  return (
    <>
      <button
        onClick={toggleCart}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#d81b60',
          color: '#fff',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1001,
        }}
      >
        🛒
      </button>

      {/* ✅ Just render the CartDrawer */}
      <CartDrawer />
    </>
  );
}
