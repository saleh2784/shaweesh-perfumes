export function getCart() {
  if (typeof window === 'undefined') return [];
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const key = user?.email ? `cart_${user.email}` : 'cart_guest';
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
}

export function saveCart(cart) {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const key = user?.email ? `cart_${user.email}` : 'cart_guest';
  localStorage.setItem(key, JSON.stringify(cart));
  window.dispatchEvent(new Event('cart-updated'));
}

export function addToCart(product) {
  const cart = getCart();
  const index = cart.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    cart[index].quantity += product.quantity || 1;
  } else {
    cart.push({ ...product, quantity: product.quantity || 1 });
  }
  saveCart(cart);
}

export function removeFromCart(id) {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
}

export function updateQuantity(id, newQty) {
  const cart = getCart().map((item) =>
    item.id === id ? { ...item, quantity: newQty } : item
  );
  saveCart(cart);
}
