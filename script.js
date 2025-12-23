// ======================= MENU ICON NAVBAR ===================================================================================================
let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// Close navbar when a nav link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
  });
});

// ======================= ACTIVE NAV LINK ON SCROLL ============================================================================================
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href*=${id}]`)
        .classList.add("active");
    }
  });

  // Sticky header
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// ======================= SWIPER ==============================================================================================================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// ======================= DARK MODE =======================
const darkModeToggle = document.getElementById("dark-mode");
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  darkModeToggle.classList.remove("fa-moon");
  darkModeToggle.classList.add("fa-sun");
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkModeToggle.classList.replace("fa-moon", "fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    darkModeToggle.classList.replace("fa-sun", "fa-moon");
  }
});

// ======================= SCROLL REVEAL =======================
ScrollReveal({
  distance: "80px",
  duration: 1000,
  delay: 100
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(
  ".home-content h3, .home-content p, .about-content",
  { origin: "right" }
);

// ======================= ABOUT READ MORE =======================
const readMoreBtn = document.getElementById("read-more-btn");
const contentWrapper = document.querySelector(".content-wrapper");

if (readMoreBtn) {
  readMoreBtn.addEventListener("click", e => {
    e.preventDefault();

    if (!contentWrapper.classList.contains("show")) {
      contentWrapper.classList.add("show");
      readMoreBtn.textContent = "Read Less";
    } else {
      contentWrapper.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        contentWrapper.classList.remove("show");
        readMoreBtn.textContent = "Read More";
      }, 400);
    }
  });
}

// ======================= SERVICES READ MORE =======================
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".services .btn");

  buttons.forEach(button => {
    const content = button.previousElementSibling;

    button.addEventListener("click", e => {
      e.preventDefault();

      if (!content.classList.contains("expand")) {
        content.classList.add("expand");
        button.textContent = "Read Less";
      } else {
        content.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          content.classList.remove("expand");
          button.textContent = "Read More";
        }, 400);
      }
    });
  });
});

// ======================= CONTACT FORM =======================
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // Gmail link
  let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nishwapandiyan@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\n\nMessage:\n" + message
  )}`;

  // Open in new tab
  window.open(mailtoLink, "_blank");

  // Clear form after sending
  document.getElementById("contactForm").reset();
});