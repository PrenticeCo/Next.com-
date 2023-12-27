const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
console.log(id);

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

addToCartButton.addEventListener("click", function () {
  const selectedColor = productItemColor.value;
  const selectedSize = productSize.value;
  const selectedTitle = productDescription.innerHTML;
  const selectedPrice = productPrice.innerHTML;
  const selectedQuantity = productQuantity.value;

  console.log("clicked");

  const cartItem = {
    color: selectedColor,
    title: selectedTitle,
    price: selectedPrice,
    quantity: selectedQuantity,
    size: selectedSize,
    id,
  };

  const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

  existingCartItems.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(existingCartItems));

  alert("Added to cart");
});

testApi();
