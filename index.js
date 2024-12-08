// Navbar
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-mbtn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

// Close menu on clicking links
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// Redirect buttons
document.querySelector(".btn-3").addEventListener("click", () => {
  window.location.href = "https://paws.org.ph/adopt/";
});

//DONATION AND PURCHASE

function showDonationForm() {
    document.getElementById("donation-modal").style.display = "flex";
}

function closeDonationForm() {
    document.getElementById("donation-modal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("donation-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


// Lenis for Smooth Scrolling
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Synchronize Lenis with ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));

// Scroll Reveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "40px",
  duration: 800,
  delay: 200,
  easing: "ease-in-out",
});

sr.reveal(".hero-headlines h1");
sr.reveal(".hero-headlines p", { delay: 500 });
sr.reveal(".hero-headlines-buttons", { delay: 1000 });
sr.reveal(".requirements-headlines h1");
sr.reveal(".requirements-headlines p", { delay: 500 });
sr.reveal(".requirements img", { delay: 500 });
sr.reveal(".r-item-container", { delay: 1000 });
sr.reveal(".about-headlines");
sr.reveal(".about img");
sr.reveal(".footer-brand");
sr.reveal(".footer-links", { delay: 500, origin: "left" });
sr.reveal(".footer-contact-info", { delay: 500, origin: "right" });
sr.reveal(".copyright", { delay: 600 });

// GSAP Scroll Trigger
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: ".heropage",
  start: "top center",
  end: "center center",
  scrub: 1,
  onToggle: (self) => {
    if (self.isActive) {
      gsap.to(".hero-images img", { scale: 1, gap: "64px", duration: 0.5 });
    } else {
      gsap.to(".hero-images img", {
        scale: 1.2,
        gap: "35px",
        duration: 0.5,
      });
    }
  },
});

// About Section Split Type
const splitTypeElements = document.querySelectorAll(".reveal-type");
splitTypeElements.forEach((element) => {
  const bg = element.dataset.bgColor;
  const fg = element.dataset.fgColor;

  const text = new SplitType(element, { types: "chars" });

  gsap.fromTo(
    text.chars,
    { color: bg },
    {
      color: fg,
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play play reverse reverse",
      },
    }
  );
});