const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
console.log(id);

const cartBag = document.querySelector(".header__right__bag__img");
const cartBox = document.querySelector(".cart--items__wrapper");
const addToCartButton = document.querySelector(".bag");
const productItemColor = document.querySelector(
  ".product--item--dropdowns__color"
);
const productQuantity = document.querySelector(".product--item__quantity");
const colorDiv = document.querySelector(
  ".product--item--dropdowns__color__icon"
);
const productDescription = document.querySelector(".product--item__title");
const productPrice = document.querySelector(".product--item__price");
const productSize = document.querySelector(".product--item--dropdowns__size");
const image = document.querySelector(".image--holder");
const colorDropdown = document.querySelector(
  ".product--item--dropdowns__color"
);

const testApi = async () => {
  const response = await fetch(
    `https://6353d42fe64783fa82798680.mockapi.io/api/adobe/productItems/${id}`
  );
  const items = await response.json();
  console.log(items);

  const colorsHTML = items.colors
    .map(
      (item) =>
        `<option class ="color--option" value="${item}">${item}</option>`
    )
    .join("");
  console.log(colorsHTML);
  colorDropdown.insertAdjacentHTML("beforeend", colorsHTML);

  productItemColor.addEventListener("change", function () {
    const selectedColor = productItemColor.value;
    colorDiv.style.backgroundColor = selectedColor;
  });

  productDescription.innerHTML = items.description;
  productPrice.innerHTML = items.price;
  image.innerHTML = `<img src="${items.image}" alt="${items.imageAlt}"/>`;
};

addToCartButton.addEventListener("click", function (event) {
  event.preventDefault();
  const selectedColor = productItemColor.value;
  const selectedSize = productSize.value;
  const selectedTitle = productDescription.innerHTML;
  const selectedPrice = productPrice.innerHTML;
  const selectedQuantity = productQuantity.value;
  const localStorageItems = localStorage.getItem("cart");

  if (!selectedSize || !selectedColor || !selectedQuantity) {
    alert("Please select all options");
    return;
  } else alert("Added to bag");

  const cartItem = {
    color: selectedColor,
    title: selectedTitle,
    price: selectedPrice,
    quantity: selectedQuantity,
    size: selectedSize,
    id,
  };

  if (!localStorageItems) {
    localStorage.setItem("cart", JSON.stringify([cartItem]));
    cartFunction();
    return;
  }

  const itemsArr = JSON.parse(localStorageItems);
  const existingItem = itemsArr.find(
    (itemInCart) =>
      itemInCart.id === id &&
      itemInCart.color === selectedColor &&
      itemInCart.size === selectedSize
  );

  if (existingItem) {
    const updateItem = itemsArr.map((itemInCart) =>
      itemInCart.id === id &&
      itemInCart.color === selectedColor &&
      itemInCart.size === selectedSize
        ? {
            ...itemInCart,
            quantity: Number(itemInCart.quantity) + Number(selectedQuantity),
          }
        : itemInCart
    );
    localStorage.setItem("cart", JSON.stringify(updateItem));
    cartFunction();
    return;
  }
  localStorage.setItem("cart", JSON.stringify([...itemsArr, cartItem]));
  cartFunction();
});

testApi();

const cartBoxClickHandler = (event) => {
  event.stopPropagation();
};

const cartBagShow = (event) => {
  cartBox.style.opacity = "1";
  event.stopPropagation();
};

const cartBagHide = () => {
  cartBox.style.opacity = "0";
};

cartBox.addEventListener("click", cartBoxClickHandler);
cartBag.addEventListener("click", cartBagShow);
document.addEventListener("click", cartBagHide);
