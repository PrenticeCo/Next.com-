const testApi = async () => {
    const response = await fetch("https://6353d42fe64783fa82798680.mockapi.io/api/adobe/productItems/");
    const items = await response.json();
    console.log(items);

    const productItemColor = document.querySelector(".product--item--dropdowns__color");

    items.forEach(item => {
        const colors = item.colors;

        
            colors.forEach(color => {
                const colorOption = document.createElement("option");
                colorOption.value = color;
                colorOption.text = color;
                productItemColor.appendChild(colorOption);
            });
        
    });
}

testApi();

