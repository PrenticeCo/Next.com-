// document.addEventListener("DOMContentLoaded", function () {

const cartContent = document.querySelector(".cart--items");

const cartFunction = () => {
  const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
  if (existingCartItems.length === 0) {
    return;
  }
  cartContent.innerHTML = existingCartItems
    .map(
      (item) => `
            
            <div class="cart--items__content data-id="${item.id}"">
            <hr>
            <div class="cart--items__id">${item.id}</div>
            <div class="cart--items__title">${item.title}</div>
            <div class="cart--items__price">Price: ${item.price}</div>
            <div class="cart--items__color">Color: ${item.color}</div>
            <div class="cart--items__size">Size: ${item.size}</div>
            Quantity: 
            <select class="cart--items__quantity">
            <option value="${item.quantity}" selected>${item.quantity}</option>
            </select>
            <button class="remove--btn" type="button" name="remove--btn">REMOVE</button>
            <hr>
            </div>
            
        `
    )
    .join("");
};

cartFunction();

const removeButton = document.querySelectorAll(".remove--btn");
console.log(removeButton);

for (let i = 0; i < removeButton.length; i++) {
  let button = removeButton[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
  });
}

// });
