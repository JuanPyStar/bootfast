document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cartItems");
    const buyButton = document.getElementById("buyBtn");
    const clearCartButton = document.getElementById("clearCartBtn");
  
    // Recuperar el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Función para mostrar el carrito
    function displayCart() {
      cartItemsContainer.innerHTML = "";
  
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Tu carrito esta vacio.</p>";
      } else {
        cart.forEach((item, index) => {
          const productElement = document.createElement("div");
          productElement.classList.add("cart-item");
          
          productElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
            <p>${item.name} - ${item.price}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
          `;
          
          cartItemsContainer.appendChild(productElement);
        });
      }
    }
  
    // Función para eliminar un producto
    cartItemsContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-btn")) {
        const index = event.target.getAttribute("data-index");
        cart.splice(index, 1); // Elimina el producto del carrito
        localStorage.setItem("cart", JSON.stringify(cart)); // Actualiza el carrito en localStorage
        displayCart(); // Vuelve a mostrar el carrito actualizado
      }
    });
  
    // Función para limpiar el carrito
    clearCartButton.addEventListener("click", () => {
      cart = []; // Limpia el carrito
      localStorage.setItem("cart", JSON.stringify(cart)); // Actualiza el carrito en localStorage
      displayCart(); // Vuelve a mostrar el carrito vacío
    });
  
    // Mostrar el carrito al cargar la página
    displayCart();
  
    // Funcionalidad de "Buy" (simulación)
    buyButton.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Tu carrito esta vacio. Por favor añade items.");
      } else {
        alert("Your order has been placed. Thank you for shopping with us!");
        cart = []; // Vaciar el carrito después de comprar
        localStorage.setItem("cart", JSON.stringify(cart)); // Actualizar carrito en localStorage
        displayCart(); // Actualizar la vista
      }
    });
  });
  