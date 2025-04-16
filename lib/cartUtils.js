export function getCart() {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  }
  
  export function addToCart(product) {
    const cart = getCart();
    const existingIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingIndex > -1) {
      // ✅ Update quantity
      cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + (product.quantity || 1);
    } else {
      // ✅ Add new product with quantity
      cart.push({ ...product, quantity: product.quantity || 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
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
  