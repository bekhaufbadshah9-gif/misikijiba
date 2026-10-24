const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

const particlesContainer = document.getElementById("particles");
if (particlesContainer) {
  const particleCount = 40;

  for (let i = 0; i < particleCount; i++) {
    const dot = document.createElement("span");
    dot.className = "particle";
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 10;

    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${left}%`;
    dot.style.top = `${top}%`;
    dot.style.animationDelay = `${delay}s`;
    dot.style.animationDuration = `${duration}s`;

    particlesContainer.appendChild(dot);
  }
}

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.12
});

revealItems.forEach((item) => observer.observe(item));

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks for your message. We will get back to you soon.");
    contactForm.reset();
  });
}
