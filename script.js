const menuToggle = document.querySelector(".menu-toggle i");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const dropdowns = document.querySelectorAll(".dropdown");

// 1. Open/Close Hamburger
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    menuToggle.classList.toggle("fa-bars");
    menuToggle.classList.toggle("fa-times");
});

// 2. Dropdown Logic (Mobile Only)
dropdowns.forEach(drop => {
    const link = drop.querySelector("a");
    link.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            // Check if we are clicking a dropdown toggle
            // If it's a dropdown, toggle it and DON'T go to the page yet
            e.stopPropagation(); 
            drop.classList.toggle("active");
        }
    });
});

// 3. Close menu when clicking overlay
overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.classList.add("fa-bars");
    menuToggle.classList.remove("fa-times");
});