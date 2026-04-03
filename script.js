const menuToggle = document.querySelector(".menu-toggle i");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const dropdowns = document.querySelectorAll(".dropdown");

// Toggle menu + overlay
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");

    menuToggle.classList.toggle("fa-bars");
    menuToggle.classList.toggle("fa-times");
});

// Close menu when clicking overlay
overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");

    menuToggle.classList.add("fa-bars");
    menuToggle.classList.remove("fa-times");
});

// Dropdowns (mobile only)
dropdowns.forEach(drop => {
    drop.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            drop.classList.toggle("active");
        }
    });
});