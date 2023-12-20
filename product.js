const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
console.log(id);

const productItemColor = document.querySelector(
  ".product--item--dropdowns__color"
);
const colorDiv = document.querySelector(
  ".product--item--dropdowns__color__icon"
);
const productDescription = document.querySelector(".product--item__title");
const productPrice = document.querySelector(".product--item__price");
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
    .map((item) => `<option value="${item}">${item}</option>`)
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

testApi();
