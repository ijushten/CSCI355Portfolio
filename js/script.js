// Select the menu button and navigation links
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

// Select the contact form and message area
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Select the meeting form and message area
const meetingForm = document.getElementById("meetingForm");
const meetingMessage = document.getElementById("meetingMessage");

// Opens and closes the mobile navigation menu
if (menuButton) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}

// Handles the contact form when the user submits it
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill out your name, email, and message.";
            return;
        }

        formMessage.textContent = "Thank you, " + name + ". Your message has been prepared.";
        contactForm.reset();
    });
}

// Handles the meeting request form when the user submits it
if (meetingForm) {
    meetingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("meetingName").value;
        const date = document.getElementById("meetingDate").value;
        const time = document.getElementById("meetingTime").value;

        if (name === "" || date === "" || time === "") {
            meetingMessage.textContent = "Please enter your name, date, and time.";
            return;
        }

        meetingMessage.textContent = "Thanks " + name + ". Your meeting request is set for " + date + " at " + time + ".";
        meetingForm.reset();
    });
}