// Typing Effect
const text = ["Web Developer", "Frontend Designer", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === text.length) count = 0;

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
        }, 1000);
    }

    setTimeout(type, 100);
}

type();

// Smooth Scroll Button
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Scroll Reveal Animation
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
            element.classList.add("active");
        }
    });
}

// Animate Skill Bars
window.addEventListener("scroll", () => {
    document.querySelectorAll(".progress-bar").forEach(bar => {
        const position = bar.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            bar.style.width = bar.getAttribute("data-progress");
        }
    });
});
