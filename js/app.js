import { products } from "./data.js";
import { addToCart, getCartItems, clearCart } from "./cart.js";

/* PRODUCT LIST PAGE */
const productList = document.getElementById("product-list");

if (productList) {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <span>₹${p.price}</span>
      <button data-id="${p.id}">Add to Cart</button>
    `;
    productList.appendChild(div);
  });

  productList.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      const id = Number(e.target.dataset.id);
      const product = products.find(p => p.id === id);
      addToCart(product);
      alert(`${product.name} added to cart`);
    }
  });
}

/* CART PAGE */
const cartList = document.getElementById("cart-list");

if (cartList) {
  const items = getCartItems();

  cartList.innerHTML = items.length
    ? items.map(i => `<li>${i.name} - ₹${i.price}</li>`).join("")
    : "<li>No items in cart</li>";

  document.getElementById("clear-cart").onclick = () => {
    clearCart();
    location.reload();
  };
}
