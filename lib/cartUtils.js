export function getCart() {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  }
  
  export function addToCart(product) {
    const cart = getCart();
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
  