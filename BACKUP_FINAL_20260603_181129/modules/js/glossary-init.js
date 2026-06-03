/*
 * RI‑ECOSYS™ PROPRIETARY CODE
 * © 2014–2026 RI‑Ecosys™ | All Rights Reserved
 * IRIS-X™ Glossary Module Initialization
 * Load JSON from _glossary folder and render
 * Unauthorized reproduction, distribution, or commercial use prohibited.
 */

(function () {
  "use strict";

  // Wait for DOM and IrisGlossary module to be ready
  document.addEventListener("DOMContentLoaded", () => {
    if (!window.IrisGlossary) {
      console.error("❌ iris-glossary.js not loaded");
      return;
    }

    // Load 3 JSON files from _glossary folder
    // Paths are relative to current location (modules/glossary.html)
    const jsonUrls = [
      "../../_glossary/CORES.json",
      "../../_glossary/GENERAL.json",
      "../../_glossary/PLUS.json",
    ];

    const options = {
      containerId: "termsContainer",
      searchId: "searchInput",
      resetId: "resetBtn",
    };

    // Load glossary data
    window.IrisGlossary.load(jsonUrls, options);

    console.log("✅ IRIS-X Glossary Module initialized");
  });
})();
