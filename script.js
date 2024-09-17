document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Full Name validation (minimum 3 characters)
    var name = document.getElementById("Name").value;
    if (name.length < 3) {
        alert("Full Name must be at least 3 characters long.");
        event.preventDefault();
        return;
    }

    // Email validation (built-in type=email validation is supported by browsers)
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    // Number validation (minimum 10 digits)
    var number = document.getElementById("number").value;
    if (number.length < 10) {
        alert("Your contact number must be at least 10 digits long.");
        event.preventDefault();
        return;
    }

    // Textarea validation (optional but should not exceed 500 characters)
    var message = document.getElementById("textarea").value;
    if (message.length > 500) {
        alert("Your message should not exceed 500 characters.");
        event.preventDefault();
        return;
    }

    // Form is valid if no errors are triggered
    alert("Form submitted successfully!");
});