const testApi = async () => {
  const response = await fetch(
    "https://6353d42fe64783fa82798680.mockapi.io/api/adobe/productItems/"
  );
  const items = await response.json();
  console.log(items);

  const productList = document.querySelector(".product--list");

  productList.innerHTML = items
    .map((item) => {
      console.log(item.colors);
      return `
      <a class="product--list__card" href="product.html?id=${
        item.id
      }" data-id="${item.id}">
      <img class="product--list__img" src="${item.image}" alt="${
        item.altImage
      }" />
      <span class="card--heart__container">
        <img class="card--heart" src="/images/heart.svg" />
      </span>
      <div class="product--list__content">
        <h3 class="product--list__title">${item.description}</h3>
        <h3 class="product--list__price">${item.price}</h3>
        <div class="product--list__colors">
          ${item.colors
            .map((color) => {
              console.log(color);
              return `<div class="colors" style="background-color: ${color};"></div>`;
            })
            .join("")}
        </div>
      </div>
      </a>
      `;
    })
    .join("");
};

testApi();
