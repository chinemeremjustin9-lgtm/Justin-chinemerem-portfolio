// ========================================
// 1. MOBILE NAVIGATION
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
menuToggle.addEventListener("click", function () {
const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.classList.toggle("active", isOpen);
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

}
// ========================================
// 2. ROTATING TEXT
// ========================================

const rotatingText = document.querySelector(".rotating-text");

if (rotatingText) {
const phrases = [
"beautiful websites",
"thoughtful experiences",
"useful digital solutions",
"better user experiences"
];

let phraseIndex = 0;

setInterval(function () {
    rotatingText.style.opacity = "0";

    setTimeout(function () {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        rotatingText.textContent = phrases[phraseIndex];
        rotatingText.style.opacity = "1";
    }, 300);

}, 3000);

}

// ========================================
// 3. SCROLL REVEAL
// ========================================

document.documentElement.classList.add("js-enabled");

const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
const revealObserver = new IntersectionObserver(
function (entries, observer) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add("revealed");
observer.unobserve(entry.target);
}
});
},
{
threshold: 0.12
}
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});

} else {
revealElements.forEach(function (element) {
element.classList.add("revealed");
});
}

// ========================================
// 4. BACK TO TOP
// ========================================

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
window.addEventListener("scroll", function () {
backToTop.classList.toggle("visible", window.scrollY > 400);
});

backToTop.addEventListener("click", function (event) {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

}