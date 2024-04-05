document.addEventListener('DOMContentLoaded', function() {

    const addToCartButtons = document.querySelectorAll('.featured__button');

    const cartContainer = document.querySelector('.cart__container');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Load existing cart items from local storage
    loadCartItems();

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const productCard = event.target.closest('.featured__card');
            const product = {
                name: productCard.querySelector('.featured__title').textContent,
                price: productCard.querySelector('.featured__price').textContent,
                image: productCard.querySelector('.featured__img').src
            };

            addToCart(product);
        });
    });

    function addToCart(product) {
        cartItems.push(product);
        saveCartItems();
        renderCart();
    }

    function renderCart() {
        cartContainer.innerHTML = '';
        cartItems.forEach(item => {
            const newCartItem = document.createElement('article');
            newCartItem.classList.add('cart__card');

            newCartItem.innerHTML = `
                <div class="cart__box">
                    <img src="${item.image}" alt="" class="cart__img">
                </div>
                <div class="cart__details">
                    <h3 class="cart__title">${item.name}</h3>
                    <span class="cart__price">${item.price}</span>
                    <div class="cart__amount">
                        <div class="cart__amount-content">
                            <span class="cart__amount-box">
                                <i class='bx bx-minus'></i>
                            </span>
                            <span class="cart__amount-number">1</span>
                            <span class="cart__amount-box">
                                <i class='bx bx-plus'></i>
                            </span>
                        </div>

                    </div>
                </div>
            `;

            cartContainer.appendChild(newCartItem);
        });
    }

    function loadCartItems() {
        renderCart();
    }

    function saveCartItems() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // Make cart scrollable when expanded
    const cart = document.querySelector('.cart');
    const cartContent = document.querySelector('.cart__container');
    cart.addEventListener('transitionend', () => {
        cartContent.style.overflowY = cart.classList.contains('cart--open') ? 'auto' : 'hidden';
    });

});