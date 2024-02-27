function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form (you can add more validation if needed)

    // Display pop-up message
    const popup = document.getElementById('popupMessage');
    const popupContent = document.getElementById('popupContent');
    const overlay = document.getElementById('overlay');

    popupContent.innerHTML = `
        <p>Thank you, ${name}! Your message has been received.</p>
        <p>We will get back to you shortly.</p>
    `;

    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popupMessage');
    const overlay = document.getElementById('overlay');

    popup.style.display = 'none';
    overlay.style.display = 'none';
}
