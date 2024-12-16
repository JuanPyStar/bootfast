document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".order-btn");
  
    // Recuperar el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    orderButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productName = event.target.getAttribute("data-name");
        const productPrice = event.target.getAttribute("data-price");
        const productImage = event.target.getAttribute("data-image");
  
        // Añadir producto al carrito
        cart.push({ name: productName, price: productPrice, image: productImage });
  
        // Guardar el carrito en localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
  
        alert(`${productName} Añadido al carrito. Total items: ${cart.length}`);
      });
    });
  });
  