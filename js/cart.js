let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCartItems() {
  return cart;
}

export function getCartCount() {
  return cart.length;
}

export function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
}
