// Explore Menu button
const exploreButton = document.querySelector("#home button");

exploreButton.addEventListener("click", function() {
    document.querySelector("#menu").scrollIntoView({
        behavior: "smooth"
    });
});


// Hamburger menu
const menuToggle = document.querySelector("#menu-toggle");
const navbar = document.querySelector("#navbar");

menuToggle.addEventListener("click", function() {

    navbar.classList.toggle("active");

    const buttonPosition = menuToggle.getBoundingClientRect();

    if (buttonPosition.left < window.innerWidth / 2) {
        navbar.style.left = "0";
        navbar.style.right = "auto";
    } else {
        navbar.style.right = "0";
        navbar.style.left = "auto";
    }

});

const learnMoreButton = document.querySelector("#learn-more");

learnMoreButton.addEventListener("click", function() {
    document.querySelector("#contact").scrollIntoView({
        behavior: "smooth"
    });
});

const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;

    document.querySelector("#form-status").textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();

});