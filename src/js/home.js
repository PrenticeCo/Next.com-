const home = (productList) => {
  const cartBag = document.querySelector('.header__right__bag__img');
  const cartBox = document.querySelector('.cart--items__wrapper');

  const testApi = async () => {
    const response = await fetch('https://6353d42fe64783fa82798680.mockapi.io/api/adobe/productItems/');
    const items = await response.json();
    console.log(items);

    productList.innerHTML = items
      .map((item) => {
        console.log(item.colors);
        return `
      <a class="product--list__card" href="product.html?id=${item.id}">
      <img class="product--list__img" src="${item.image}" alt="${item.altImage}" />
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
            .join('')}
        </div>
      </div>
      </a>
      `;
      })
      .join('');
  };

  testApi();

  const cartBoxClickHandler = (event) => {
    event.stopPropagation();
  };

  const cartBagShow = (event) => {
    cartBox.style.opacity = '1';
    event.stopPropagation();
  };

  const cartBagHide = () => {
    cartBox.style.opacity = '0';
  };

  cartBox.addEventListener('click', cartBoxClickHandler);
  cartBag.addEventListener('click', cartBagShow);
  document.addEventListener('click', cartBagHide);
};

export default home;
