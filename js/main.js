(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelectorAll(".nav-links a");

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
      navToggle.setAttribute(
        "aria-expanded",
        header.classList.contains("nav-open") ? "true" : "false"
      );
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll(".faq-item button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var open = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach(function (i) {
        i.classList.remove("is-open");
      });
      if (!open) item.classList.add("is-open");
    });
  });

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Köszönjük üzenetét. Hamarosan felvesszük Önnel a kapcsolatot. (Ez egy statikus minta — a küldéshez backend integráció szükséges.)"
      );
    });
  }

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }
})();
