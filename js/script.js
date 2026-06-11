const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const meetingForm = document.getElementById("meetingForm");
const meetingMessage = document.getElementById("meetingMessage");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.textContent = "Thank you. Your message has been prepared.";
        contactForm.reset();
    });
}

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