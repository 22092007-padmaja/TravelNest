/* ==========================
   TRAVELNEST JAVASCRIPT
========================== */

// ==========================
// DOM LOADED
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Welcome to TravelNest!");

    setupScrollButton();
    setupSmoothScroll();
    setupNavbar();
    setupMobileMenu();
    revealOnScroll();

});

// ==========================
// MOBILE MENU
// ==========================

function setupMobileMenu() {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

// ==========================
// SMOOTH SCROLL
// ==========================

function setupSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

}

// ==========================
// NAVBAR EFFECT
// ==========================

function setupNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.background = "#2575fc";

            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

        }

        else {

            navbar.style.background = "rgba(255,255,255,.15)";

            navbar.style.boxShadow = "none";

        }

    });

}

// ==========================
// SCROLL TO TOP
// ==========================

function setupScrollButton() {

    const topBtn = document.getElementById("topBtn");

    if (!topBtn) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        }

        else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ==========================
// FORM VALIDATION
// ==========================

function validateForm() {

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern = /^\d{10}$/;

    if (name === "" || email === "" || phone === "") {

        alert("Please fill in all fields.");

        return false;

    }

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return false;

    }

    if (!phonePattern.test(phone)) {

        alert("Please enter a valid 10-digit phone number.");

        return false;

    }

    alert("🎉 Thank you! Your booking request has been submitted.");

    return true;

}

// ==========================
// SCROLL REVEAL
// ==========================

function revealOnScroll() {

    const elements = document.querySelectorAll(

        ".card, .feature-box, .review-card, .faq-item, .stat-box"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform = "translateY(0)";

                }

            });

        },

        {

            threshold: 0.2

        }

    );

    elements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(40px)";

        element.style.transition = "all .8s ease";

        observer.observe(element);

    });

}
