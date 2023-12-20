const testApi = async () => {
    const response = await fetch("https://6353d42fe64783fa82798680.mockapi.io/api/adobe/productItems/");
    const items = await response.json();
    console.log(items);

    const productItemColor = document.querySelector(".product--item--dropdowns__color");
    const firstItem = items[0];
    const colors = firstItem.colors;

    colors.forEach(color => {
        const colors = firstItem.colors;  
                const colorOption = document.createElement("option");
                colorOption.value = color;
                colorOption.text = color;
                productItemColor.appendChild(colorOption);
        
    });

   
    const colorDiv = document.querySelector(".product--item--dropdowns__color__icon"); 
    const initialColor = productItemColor.value;
        colorDiv.style.backgroundColor = initialColor;

    productItemColor.addEventListener("change", function() {
        const selectedColor = productItemColor.value;
        colorDiv.style.backgroundColor = selectedColor;
        
    });
}

testApi();



