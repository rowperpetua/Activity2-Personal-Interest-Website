//Navbar
const navbar = document.querySelector("nav");
window.addEventListener("scroll", ()=> 
    navbar.classList.toggle("sticky", window.scrollY >0)
);

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
    .querySelector("menu.a");
    .forEach((link) => link.addEventListener("click",toggleMenu));

//LENIS FOR SMOOTH SCROLLING
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);