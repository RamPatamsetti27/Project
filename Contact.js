// Initialize EmailJS
emailjs.init("siddahyndavi@gmail.com"); // Replace with your EmailJS user ID

// Get the form
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send email using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Message sent successfully!');
            form.reset(); // Clear the form after sending
        }, function(error) {
            alert('Failed to send message. Please try again.', error);
        });
});
