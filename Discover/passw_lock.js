    // Function to prompt user for username and password
function authenticateUser() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    // Check if username and password match
    if (username === "Rezex_Risk" && password === "Maxed99_66_=88%=9+00*W_O8nt-Crack") {
        // Credentials match, allow access
        return true;
    } else {
        // Credentials don't match, deny access
        alert("Invalid username or password. Access denied.");
        return false;
    }
}

// Function to add a product card
function addProduct(imageUrl, productName, productPrice) {
    const container = document.querySelector(".featured__container");
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

    container.appendChild(card);
}

document.addEventListener("DOMContentLoaded", function() {
    const newPhotoInput = document.getElementById("product-image");
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Add existing products to the page
    storedProducts.forEach(product => {
        if (product && product.name && product.price && product.image) {
            // Convert Base64 string back to image URL
            const imageUrl = `data:image/png;base64,${product.image}`;
            addProduct(imageUrl, product.name, product.price);
        }
    });

    // Event listener for changing the product photo
    newPhotoInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageUrl = e.target.result;

            // Show the uploaded photo
            const productName = prompt("Enter product name:");
            const productPrice = prompt("Enter product price:");
            if (productName && productPrice) {
                // Authenticate user before allowing access to add product
                if (authenticateUser()) {
                    // User authenticated, proceed with adding product
                    addProduct(imageUrl, productName, productPrice);

                    // Convert image to Base64 and save to local storage
                    reader.readAsDataURL(file);
                    reader.onloadend = function() {
                        const newProduct = { name: productName, price: productPrice, image: reader.result.split(",")[1] };
                        storedProducts.push(newProduct);
                        localStorage.setItem("products", JSON.stringify(storedProducts));
                    };
                }
            } else {
                alert("Please enter product name and price.");
            }

            // Reset the input field
            newPhotoInput.value = "";
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            alert("Please select an image.");
        }
    });
});