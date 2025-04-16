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
  
  export function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  export function updateQuantity(id, quantity) {
    const cart = getCart().map(item => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  export function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price || '0');
      const quantity = item.quantity || 1;
      return total + price * quantity;
    }, 0);
  }
  