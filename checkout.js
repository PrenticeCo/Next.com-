const cartItemsDesc = document.querySelector(".cart--content__title");
let existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
const checkoutItem = document.querySelector(
  ".cart--content--item__placeholder"
);

function updateCart() {
  if (existingCartItems.length === 0) {
    cartItemsDesc.textContent = "There is nothing in the cart";
    checkoutItem.innerHTML = "";
  } else {
    checkoutItem.innerHTML = existingCartItems
      .map((item) => {
        return `
          <div class="cart--content--item" data-id="${item.id}" data-color="${
          item.color
        }" data-size="${item.size}">
            <h2 class="cart--content--item__title">${item.title}</h2>
            <div class="cart--items__price">Price: £${
              parseFloat(item.price.replace("£", "")) * item.quantity
            }</div>
            <h3 class="cart--content--item__color">${item.color}</h3>
            <h3 class="cart--content--item__size">${item.size}</h3> 
            <input type="number" id="quantity" value="${
              item.quantity
            }" name="quantity" min="1" max="9">
            <img class="cart--content--item__img" src="${
              item.image
            }" alt="Product Image" />
            <button class="remove--btn" type="button" name="remove--btn">REMOVE</button>
          </div>
        `;
      })
      .join("");
  }
}

checkoutItem.addEventListener("click", (event) => {
  if (!event.target.classList.contains("remove--btn")) {
    return;
  }

  const cartItemElement = event.target.closest(".cart--content--item");
  const { id, color, size } = cartItemElement.dataset;

  cartItemElement.remove();

  existingCartItems = existingCartItems.filter((item) => {
    return !(id === item.id && color === item.color && size === item.size);
  });

  localStorage.setItem("cart", JSON.stringify(existingCartItems));
  updateCart();
});

updateCart();

// checkoutItem.addEventListener("click", (event) => {
//   alert("Item removed from cart");
//   if (!event.target.classList.contains("remove--btn")) {
//     return;
//   }
//   const { id, color, size } = event.target.closest(
//     ".cart--content--item"
//   ).dataset;

//   const removeItem = existingCartItems.filter((item) => {
//     if (id === item.id && color === item.color && size === item.size) {
//       return false;
//     } else {
//       return true;
//     }
//   });

//   localStorage.setItem("cart", JSON.stringify(removeItem));
// });
