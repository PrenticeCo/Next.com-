document.addEventListener("DOMContentLoaded", function () {
  const addToCartButton = document.querySelector(".bag");
  const cartContent = document.querySelector(".cart--items");

  addToCartButton.addEventListener("click", function () {
    const selectedColor = productItemColor.value;
    const selectedTitle = productDescription.innerHTML;
    const selectedPrice = productPrice.innerHTML;

    const cartItem = {
      color: selectedColor,
      title: selectedTitle,
      price: selectedPrice,
    };

    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    existingCartItems.push(cartItem);

    localStorage.setItem("cart", JSON.stringify(existingCartItems));

    alert("Added to cart");
  });

  const cartFunction = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartContent.innerHTML = existingCartItems
      .map(
        (item) => `
          
            <div class="cart--items__title">${item.title}</div>
            <div class="cart--items__price">${item.price}</div>
            <div class="cart--items__color">${item.color}</div>
          
        `
      )
      .join("");
  };

  cartFunction();
});
