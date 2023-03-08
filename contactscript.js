const myForm = document.getElementById("contactForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    window.alert("Message: '" + document.getElementById("message").value + "' has been sent. Thank you for the feedback " + document.getElementById("fname").value + " " + document.getElementById("lname").value + "!");
});