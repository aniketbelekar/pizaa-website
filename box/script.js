let cart = [];

// Sample menu data (you can replace this with dynamic data from a server)
const menuData = [
    { id: 'pizza1', name: 'Pepperoni Pizza', price: 12.99, imgSrc: '1.png' },
    { id: 'pizza2', name: 'Margherita Pizza', price: 10.99, imgSrc: '2.png' },
    { id: 'pizza3', name: 'Vegetarian Pizza', price: 14.99, imgSrc: '3.png' },
    { id: 'pizza4', name: 'BBQ Chicken Pizza', price: 16.99, imgSrc: '4.png' },
    { id: 'pizza4', name: 'BBQ Chicken Pizza', price: 16.99, imgSrc: '5.png' },
    // Add more pizza items as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu');
    menuData.forEach(item => {
        const pizzaDiv = createPizzaDiv(item);
        menuContainer.appendChild(pizzaDiv);
    });
});

function createPizzaDiv(item) {
    const pizzaDiv = document.createElement('div');
    pizzaDiv.classList.add('pizza');
    pizzaDiv.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p class="price">$${item.price.toFixed(2)}</p>
        <button onclick="addToCart('${item.id}', '${item.name}', ${item.price})">Add to Cart</button>
    `;
    return pizzaDiv;
}

function addToCart(id, item, price) {
    cart.push({ id, item, price });
    updateCart();
    showPopup(`Added ${item} to the cart!`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;

    openCart();
}

function openCart() {
    const modal = document.getElementById('cart');
    modal.style.display = 'block';
}

function closeCart() {
    const modal = document.getElementById('cart');
    modal.style.display = 'none';
}

function placeOrder() {
    // Implement order placement logic here

    // Create a summary of the order details
    const orderSummary = cart.map(item => `<li>${item.item} - $${item.price.toFixed(2)}</li>`).join('');
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    // Create a popup element to display order details
    const popup = document.createElement('div');
    popup.classList.add('order-popup');
    popup.innerHTML = `
        <span class="close-popup" onclick="closeOrderPopup()">&times;</span>
        <h2>Your Order Details</h2>
        <ul>${orderSummary}</ul>
        <p>Total: $${total.toFixed(2)}</p>
        <p class="success-message">Order placed successfully!</p>
        <button onclick="closeOrderPopup()">Close</button>
    `;

    // Append the popup to the body
    document.body.appendChild(popup);

    // Clear the cart and update the UI
    cart = [];
    updateCart();
}

function closeOrderPopup() {
    const popup = document.querySelector('.order-popup');
    if (popup) {
        popup.remove();
    }
}
