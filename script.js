// Theme Toggle
const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// GSAP Animation
gsap.from(".title", {
    y: -50,
    // opacity: 0,
    duration: 1
});

gsap.from(".topic", {
    // opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2
});