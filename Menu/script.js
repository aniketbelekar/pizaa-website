function redirectToMenu() {
    window.location.href = '#menu';
}

// Function to dynamically add menu items
function addMenuItem(imageSrc, name, description) {
    const menuItemsContainer = document.getElementById('menuItems');

    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    menuItem.innerHTML = `
        <img src="${imageSrc}" alt="${name}">
        <h3>${name}</h3>
        <p>${description}</p>
    `;

    menuItemsContainer.appendChild(menuItem);
}

// Example menu items (replace with your actual menu items)
addMenuItem('pizza 4.jpg', 'Pepperoni Pizza', 'A classic pizza topped with pepperoni slices and melted cheese.');
addMenuItem('pizza 2.jpg', 'bacon Pizza', 'Fresh tomatoes, mozzarella cheese, and basil on a thin crust.');
addMenuItem('pizza 3.jpg', 'Margherita Pizza', 'spicy tamato sauce , mozzarella cheese tooping.');
addMenuItem('pizza 4.png', 'carbonai', 'Fresh tomatoes, mozzarella cheese, and basil on a thin crust.');
addMenuItem('pizza 5.png', 'stuffed crust', 'chess,crust, mozzarella cheese, and basil on a thin crust.');
addMenuItem('pizza 6.png', 'Mac and chess', 'Fresh tomatoes, mozzarella cheese, and basil on a thin crust.');
// Add more menu items as needed
