  export function getCart() {
    if (typeof window === 'undefined') return [];

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const key = user?.email ? `cart_${user.email}` : 'cart_guest';

    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  }

  export function addToCart(product) {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const key = user?.email ? `cart_${user.email}` : 'cart_guest';

  const cart = getCart();
  const index = cart.findIndex(item => item.id === product.id);

  if (index !== -1) {
    cart[index].quantity += product.quantity || 1;
  } else {
    cart.push({ ...product, quantity: product.quantity || 1 });
  }

  localStorage.setItem(key, JSON.stringify(cart));
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
  