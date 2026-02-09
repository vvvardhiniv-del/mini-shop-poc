let cart = [];

export function addToCart(product) {
  cart.push(product);
}

export function getCartItems() {
  return cart;
}

export function clearCart() {
  cart = [];
}
