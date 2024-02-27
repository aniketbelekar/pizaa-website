function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // Validate form (you can add more validation if needed)

    // Display pop-up message
    const popup = document.getElementById('popupMessage');
    const popupContent = document.getElementById('popupContent');
    const overlay = document.getElementById('overlay');

    popupContent.innerHTML = `
        <p>Thank you, ${name}! Your order will be delivered to:</p>
        <p>${address}</p>
        <p>We will contact you at ${phone} if needed.</p>
    `;

    popup.style.display = 'block';
    overlay.style.
    display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popupMessage');
    const overlay = document.getElementById('overlay');

    popup.style.display = 'none';
    overlay.style.display = 'none';
}
