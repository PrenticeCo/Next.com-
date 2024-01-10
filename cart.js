// document.addEventListener("DOMContentLoaded", function () {

const cartContent = document.querySelector(".cart--items");
const cartPriceTotal = document.querySelector(".cart--items__price");
const removeButton = document.querySelectorAll(".remove--btn");

const cartFunction = () => {
  const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
  if (existingCartItems.length === 0) {
    return;
  }
  cartContent.innerHTML = existingCartItems
    .map(
      (item) => `
      <div class="cart--items__content data-id="${item.id}">
        <hr>
        <div class="cart--items__id">${item.id}</div>
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

const cartColor = document.querySelector(".cart--items__color");
const cartSize = document.querySelector(".cart--items__size");
const cartPrice = document.querySelector(".cart--items__price");
const cartId = document.querySelector(".cart--items__id");
const cartTitle = document.querySelector(".cart--items__title");
const cartQuantity = document.querySelector(".cart--items__quantity");

const addToCart = (event) => {
  event.preventDefault();
  const localStorageItems = localStorage.getItem("cart");

  const newItem = {
    color: cartColor.value,
    title: cartTitle.innerHTML,
    price: cartPrice.innerHTML,
    quantity: cartQuantity.value,
    size: cartSize.value,
    id: cartId.innerHTML,
  };

  if (!localStorageItems) {
    localStorage.setItem("cart", JSON.stringify([newItem]));
    cartFunction();
    return;
  }

  const itemsArr = JSON.parse(localStorageItems);

  const existingItem = itemsArr.find(
    (itemInCart) =>
      itemInCart.id === cartId.innerHTML &&
      itemInCart.color === cartColor.value &&
      itemInCart.size === cartSize.value
  );

  if (existingItem) {
    const updateItem = itemsArr.map((itemInCart) =>
      itemInCart.id === cartId.innerHTML &&
      itemInCart.color === cartColor.value &&
      itemInCart.size === cartSize.value
        ? {
            ...itemInCart,
            quantity: Number(itemInCart.quantity) + Number(quantity.value),
          }
        : itemInCart
    );
    localStorage.setItem("cart", JSON.stringify(updateItem));
    cartFunction();
    return;
  }

  localStorage.setItem("cart", JSON.stringify([...itemsArr, newItem]));
  cartFunction();
};

addToCart();

addToCartButton.addEventListener("click", addToCart);
