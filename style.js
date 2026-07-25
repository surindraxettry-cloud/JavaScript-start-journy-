function loadProductsWithThen() {

    fetch("https://fakestoreapi.com/products")

        .then((response) => {

            if (!response.ok) {
                throw new Error(
                    "Network error: " + response.status
                );
            }

            return response.json();

        })

        .then((data) => {

            console.log(data);

        })

        .catch((error) => {

            console.log("Error:", error.message);

        });

}

loadProductsWithThen();



const productsContainer = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        const cardsHTML = data
            .map(
                (product) => `
                    <div class="card">
                        <img src="${product.image}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p class="price">$${product.price}</p>
                        <p class="category">${product.category}</p>
                        <p>${product.description}</p>
                    </div>
                `
            )
            .join("");

        productsContainer.innerHTML = cardsHTML;
    });