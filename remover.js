document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".featured__container");

    // Load existing products from local storage
    let existingProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Function to add a product card
    function addProduct(imageUrl, productName, productPrice) {
        const card = document.createElement("article");
        card.classList.add("featured__card");

        const tag = document.createElement("span");
        tag.classList.add("featured__tag");
        tag.textContent = "New";
        card.appendChild(tag);

        const image = document.createElement("img");
        image.classList.add("featured__img");
        image.src = imageUrl;
        image.alt = productName;
        image.style.borderRadius = "5px"; // Adding border-radius
        card.appendChild(image);

        const data = document.createElement("div");
        data.classList.add("featured__data");

        const title = document.createElement("h3");
        title.classList.add("featured__title");
        title.textContent = productName;
        data.appendChild(title);

        const price = document.createElement("span");
        price.classList.add("featured__price");
        price.textContent = "৳" + productPrice;
        data.appendChild(price);

        card.appendChild(data);

        const button = document.createElement("button");
        button.classList.add("button", "featured__button");
        button.textContent = "ADD TO CART";
        card.appendChild(button);

        const removeButton = document.createElement("span");
        removeButton.classList.add("remove-card");
        removeButton.innerHTML = '<i class="bx bx-x"></i>';
        card.appendChild(removeButton);

        container.appendChild(card);
    }

    // Add existing products to the page
    existingProducts.forEach(product => {
        if (product && product.name && product.price && product.image) {
            addProduct(product.image, product.name, product.price);
        }
    });

    const form = document.getElementById("product-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const imageInput = document.getElementById("product-image");
        const nameInput = document.getElementById("product-name");
        const priceInput = document.getElementById("product-price");

        const imageUrl = URL.createObjectURL(imageInput.files[0]);
        const productName = nameInput.value;
        const productPrice = priceInput.value;

        // Check if the product already exists in local storage
        const isProductExists = existingProducts.some(product => product.name === productName);

        if (!isProductExists) {
            addProduct(imageUrl, productName, productPrice);

            // Save the product to local storage
            const newProduct = { name: productName, price: productPrice, image: imageUrl };
            existingProducts.push(newProduct);
            updateLocalStorage();
        } else {
            alert("Product with the same name already exists!");
        }

        // Reset form fields after adding product
        imageInput.value = "";
        nameInput.value = "";
        priceInput.value = "";
    });

    // Remove card and its data from local storage
    container.addEventListener("click", function(event) {
        if (event.target.classList.contains("bx-x")) {
            const card = event.target.closest(".featured__card");
            const cardIndex = Array.from(container.children).indexOf(card);
            container.removeChild(card); // Remove from DOM
            existingProducts.splice(cardIndex, 1); // Remove product from local storage
            updateLocalStorage();
        }
    });

    // Function to update local storage
    function updateLocalStorage() {
        localStorage.setItem("products", JSON.stringify(existingProducts));
    }
});