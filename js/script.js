const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "#b91c1c";
        return;
    }

    formMessage.textContent = "Thank you. Your message has been checked.";
    formMessage.style.color = "#166534";
    contactForm.reset();
});
