const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelectorAll(".mobile-menu a");

function toggleMenu() {
  const isOpen = mobileMenu.classList.contains("open");
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  mobileMenu.classList.add("open");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("no-scroll");
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", toggleMenu);
  menuToggle.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
    closeMenu();
    menuToggle.focus();
  }
});

const particlesContainer = document.getElementById("particles");
if (particlesContainer) {
  const particleCount = 40;

  const createParticles = () => {
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
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(createParticles);
  } else {
    setTimeout(createParticles, 0);
  }
}

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
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
