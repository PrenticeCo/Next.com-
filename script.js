// const testAPI = async () => {
//   let response = await fetch("https://6353d42fe64783fa82798680.mockapi.io/api/adobe/productItems/")
//   let data = await response.json()
//   console.log(data)
// }

// testAPI()


const testApi = async () => {
  const response = await fetch("https://6353d42fe64783fa82798680.mockapi.io/api/adobe/productItems/");
  const items = await response.json();
  console.log(items);

  items.forEach((item, index) => {
    const cardImg = document.querySelector(`.mens__shirts__cards__card__img${index + 1}`);
    const cardTitle = document.querySelector(`.mens__shirts__cards__card__title${index + 1}`);
    const cardPrice = document.querySelector(`.mens__shirts__cards__card__subcontent__price${index + 1}`);
    const colorContainer = document.querySelector(`.mens__shirts__cards__card__content__colors${index + 1}`);

    item.colors.forEach(color => {
      const colorElement = document.createElement('div');
      colorElement.classList.add('color');
    
      if (color === 'white') {
        colorElement.style.backgroundColor = 'whitesmoke'; 
      } else {
        colorElement.style.backgroundColor = color;
      }
    
      colorContainer.appendChild(colorElement);
    });

    console.log(item.image);
    console.log(item.description);
    console.log(item.colors);

    cardImg.src = item.image;
    cardImg.alt = item.imageAlt;
    cardTitle.innerHTML = item.description;
    cardPrice.innerHTML = item.price;
  });
};

testApi();