/*
 * RI‑ECOSYS™ PROPRIETARY CODE
 * © 2014–2026 RI‑Ecosys™ | All Rights Reserved
 * Language Toggle: EN <-> VI
 * Unauthorized reproduction, distribution, or commercial use prohibited.
 */

(function () {
  "use strict";

  const LANG_KEY = "iris-x-lang";
  const DEFAULT_LANG = "en";

  function setLang(lang) {
    if (!["en", "vi"].includes(lang)) return;

    document.body.dataset.lang = lang;
    localStorage.setItem(LANG_KEY, lang);

    // Update button states
    const btnEn = document.getElementById("lang-en");
    const btnVi = document.getElementById("lang-vi");

    if (btnEn) btnEn.classList.toggle("active", lang === "en");
    if (btnVi) btnVi.classList.toggle("active", lang === "vi");
  }

  function getLang() {
    return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  }

  // Initialize on page load
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = getLang();
    setLang(savedLang);

    const btnEn = document.getElementById("lang-en");
    const btnVi = document.getElementById("lang-vi");

    if (btnEn) btnEn.addEventListener("click", () => setLang("en"));
    if (btnVi) btnVi.addEventListener("click", () => setLang("vi"));
  });

  // Fallback if DOM is already loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      const savedLang = getLang();
      setLang(savedLang);
    });
  } else {
    const savedLang = getLang();
    setLang(savedLang);
  }
})();
