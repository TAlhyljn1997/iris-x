/*
 * RI‑ECOSYS™ PROPRIETARY CODE
 * © 2014–2026 RI‑Ecosys™ | All Rights Reserved
 * Index Page Initialization
 * Unauthorized reproduction, distribution, or commercial use prohibited.
 */

(function () {
  "use strict";

  // Smooth scroll behavior (already handled by CSS)
  // Additional interactivity for index page

  document.addEventListener("DOMContentLoaded", () => {
    // Lazy load images if needed
    const images = document.querySelectorAll("img[data-src]");
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        });
      });
      images.forEach((img) => imageObserver.observe(img));
    }

    // Card click tracking (optional analytics)
    const cards = document.querySelectorAll(".ix-card");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        // Can be extended for analytics tracking
        const href = card.getAttribute("href");
        // console.log("Navigating to:", href);
      });
    });
  });
})();
