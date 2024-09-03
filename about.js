document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}. We have received your message.`;

    // Here, you could add an AJAX call to send the form data to your server
});
