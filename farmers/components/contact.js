// JavaScript function to toggle the navigation menu
function openNavbar() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function () {
    // Existing code...

    document.getElementById('submit-button').addEventListener('click', function (event) {
        event.preventDefault(); // Prevents the form from submitting

        // Get user inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Validate inputs (add your validation logic here)

        // Store user inputs in an array or object
        const userData = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        // You can now use 'userData' as needed, for example, send it to a server or log it.
        console.log('User Data:', userData);

        // Optionally, you can clear the form after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';

        // Redirect to the response page after recording the response
        redirectToResponsePage();
    });
});
