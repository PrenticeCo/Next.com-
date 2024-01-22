// document.addEventListener("DOMContentLoaded", function () {

const cartContent = document.querySelector(".cart--items");
const cartPriceTotal = document.querySelector(".cart--items__price");
const removeButton = document.querySelectorAll(".remove--btn");
const checkoutBtn = document.querySelector(".checkout__btn__text");

const cartFunction = () => {
  const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
  if (existingCartItems.length === 0) {
    cartContent.innerHTML = "";
    return;
  }
  cartContent.innerHTML = existingCartItems
    .map(
      (item) => `
      <div class="cart--items__content" data-id="${item.id}" data-color="${
        item.color
      }" data-size="${item.size}">
        <hr>
        <div class="cart--items__title">${item.title}</div>
        <div class="cart--items__color">Color: ${item.color}</div>
        <div class="cart--items__size">Size: ${item.size}</div>
        <div class="cart--items__quantity">Quantity: ${item.quantity}</div>
        <div class="cart--items__price">Price: £${
          parseFloat(item.price.replace("£", "")) * item.quantity
        }</div>
        <button class="remove--btn" type="button" name="remove--btn">REMOVE</button>
        <hr>
      </div>
      `
    )
    .join("");
};

cartFunction();

cartContent.addEventListener("click", (event) => {
  if (!event.target.classList.contains("remove--btn")) {
    return;
  }
  const { id, color, size } = event.target.closest(
    ".cart--items__content"
  ).dataset;
  const getItems = JSON.parse(localStorage.getItem("cart"));

  const removeItem = getItems.filter((item) => {
    if (id === item.id && color === item.color && size === item.size) {
      return false;
    } else {
      return true;
    }
  });

  localStorage.setItem("cart", JSON.stringify(removeItem));
  cartFunction();
});

checkoutBtn.addEventListener("click", function () {
  checkoutBtn.style.scale = "1.05";
  window.location.href = "cart.html";
});
