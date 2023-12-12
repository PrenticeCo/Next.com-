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
      console.log(item.image);
      cardImg.src = item.image;
      cardImg.alt = item.imageAlt;
    });
  }

testApi();