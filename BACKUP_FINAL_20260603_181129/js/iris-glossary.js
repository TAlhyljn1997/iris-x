/*
 * RI‑ECOSYS™ PROPRIETARY CODE
 * © 2014–2026 RI‑Ecosys™ | All Rights Reserved
 * IRIS-X™ Glossary Module
 * JSON loader + search + filter + rendering
 * Unauthorized reproduction, distribution, or commercial use prohibited.
 */

(function () {
  "use strict";

  // Global state
  let allTerms = [];
  let currentSort = "a-z";
  let currentType = "all";
  let currentCategory = "all";
  let currentDomain = "all";
  let currentSearch = "";

  /**
   * Load glossary data from JSON files
   * @param {Array<string>} jsonUrls - Array of JSON file URLs
   * @param {Object} options - Configuration options
   */
  async function loadGlossary(jsonUrls, options = {}) {
    try {
      const responses = await Promise.all(
        jsonUrls.map((url) => fetch(url))
      );

      const jsonArrays = await Promise.all(responses.map((r) => r.json()));
      allTerms = jsonArrays.flat(); // Merge all arrays

      console.log(`✅ IRIS-X Glossary: Loaded ${allTerms.length} terms`);

      setupEventListeners(options);
      renderTerms(options);
    } catch (error) {
      console.error("❌ Error loading glossary:", error);
      const container = document.getElementById(options.containerId || "termsContainer");
      if (container) {
        container.innerHTML = `
          <div style="text-align: center; padding: 40px; color: #666;">
            ⚠️ Error loading glossary data. Please check that JSON files are available.
          </div>
        `;
      }
    }
  }

  /**
   * Setup event listeners for filters and search
   */
  function setupEventListeners(options = {}) {
    const searchId = options.searchId || "searchInput";
    const searchInput = document.getElementById(searchId);

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderTerms(options);
      });
    }

    // Sort buttons
    document.querySelectorAll("[data-sort]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll("[data-sort]").forEach((b) =>
          b.classList.remove("active")
        );
        e.target.classList.add("active");
        currentSort = e.target.dataset.sort;
        renderTerms(options);
      });
    });

    // Type/Category buttons
    document.querySelectorAll("[data-type], [data-category]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const filterType = e.target.dataset.type
          ? "data-type"
          : "data-category";
        document.querySelectorAll(`[${filterType}]`).forEach((b) =>
          b.classList.remove("active")
        );
        e.target.classList.add("active");
        const key = filterType === "data-type" ? "type" : "category";
        if (key === "type") currentType = e.target.dataset.type;
        if (key === "category") currentCategory = e.target.dataset.category;
        renderTerms(options);
      });
    });

    // Domain buttons
    document.querySelectorAll("[data-domain]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll("[data-domain]").forEach((b) =>
          b.classList.remove("active")
        );
        e.target.classList.add("active");
        currentDomain = e.target.dataset.domain;
        renderTerms(options);
      });
    });

    // Reset button
    const resetBtn = document.getElementById(options.resetId || "resetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        resetFilters();
        renderTerms(options);
      });
    }
  }

  /**
   * Reset all filters
   */
  function resetFilters() {
    currentSort = "a-z";
    currentType = "all";
    currentCategory = "all";
    currentDomain = "all";
    currentSearch = "";

    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";

    // Reset button states
    document.querySelectorAll("[data-sort]").forEach((b) =>
      b.classList.remove("active")
    );
    document.querySelector('[data-sort="a-z"]')?.classList.add("active");

    document.querySelectorAll("[data-type], [data-category]").forEach((b) =>
      b.classList.remove("active")
    );
    document.querySelector('[data-type="all"]')?.classList.add("active");
    document.querySelector('[data-category="all"]')?.classList.add("active");

    document.querySelectorAll("[data-domain]").forEach((b) =>
      b.classList.remove("active")
    );
    document.querySelector('[data-domain="all"]')?.classList.add("active");
  }

  /**
   * Filter and render terms
   */
  function renderTerms(options = {}) {
    const containerId = options.containerId || "termsContainer";
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`❌ Container with ID '${containerId}' not found`);
      return;
    }

    // Filter
    let filtered = allTerms.filter((t) => {
      const matchesSearch =
        !currentSearch ||
        t.name.toLowerCase().includes(currentSearch) ||
        (t.full && t.full.toLowerCase().includes(currentSearch)) ||
        (t.def && t.def.toLowerCase().includes(currentSearch)) ||
        (t.example && t.example.toLowerCase().includes(currentSearch));

      const matchesType = currentType === "all" || t.cat === currentType;
      const matchesCategory =
        currentCategory === "all" || t.category === currentCategory;
      const matchesDomain =
        currentDomain === "all" || (t.domain && t.domain === currentDomain);

      return (
        matchesSearch &&
        matchesType &&
        matchesCategory &&
        matchesDomain
      );
    });

    // Sort
    filtered.sort((a, b) => {
      if (currentSort === "a-z" || currentSort === "z-a") {
        const order = currentSort === "z-a" ? -1 : 1;
        return a.name.localeCompare(b.name) * order;
      }
      return 0;
    });

    // Update counter
    const counter = document.getElementById("showingCount");
    if (counter) {
      counter.textContent = `Showing: ${filtered.length} of ${allTerms.length} terms`;
    }

    // Render
    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: #999;">
          🔍 No terms found matching your filters.
        </div>
      `;
      return;
    }

    container.innerHTML = filtered
      .map((t) => {
        const safeId = t.name.replace(/\s+/g, "-").replace(/['"]/g, "");
        return `
        <div class="ix-glossary-term" id="term-${safeId}">
          <div class="term-name">${t.name}</div>
          ${t.full ? `<div class="term-full">${t.full}</div>` : ""}
          ${t.def ? `<div class="term-def">${t.def}</div>` : ""}
          ${
            t.example
              ? `
          <div class="term-example">
            <strong>Example:</strong> ${t.example}
          </div>
          `
              : ""
          }
          ${
            t.domain || t.cat || t.category
              ? `
          <div class="term-metadata">
            ${t.domain ? `<span class="metadata-item"><strong>Domain:</strong> ${t.domain}</span>` : ""}
            ${t.cat ? `<span class="metadata-item"><strong>Category:</strong> ${t.cat}</span>` : ""}
            ${t.category ? `<span class="metadata-item"><strong>Type:</strong> ${t.category}</span>` : ""}
          </div>
          `
              : ""
          }
          ${
            t.related && t.related.length > 0
              ? `
          <div class="term-related">
            <strong>Related:</strong>
            <div class="related-buttons">
              ${t.related
                .map((r) => {
                  const safeLinkId = r
                    .replace(/\s+/g, "-")
                    .replace(/['"]/g, "");
                  return `<button class="related-btn" onclick="window.IrisGlossary.scrollToTerm('${safeLinkId}')">
                    ${r}
                  </button>`;
                })
                .join("")}
            </div>
          </div>
          `
              : ""
          }
        </div>
      `;
      })
      .join("");
  }

  /**
   * Scroll to a specific term
   */
  function scrollToTerm(safeId) {
    const element = document.getElementById(`term-${safeId}`);
    if (element) {
      element.classList.add("highlight");
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => element.classList.remove("highlight"), 2000);
    }
  }

  /**
   * Get all terms (useful for external access)
   */
  function getTerms() {
    return allTerms;
  }

  /**
   * Search for a specific term
   */
  function searchTerm(query) {
    return allTerms.filter(
      (t) =>
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        (t.full && t.full.toLowerCase().includes(query.toLowerCase()))
    );
  }

  // Expose public API
  window.IrisGlossary = {
    load: loadGlossary,
    render: renderTerms,
    scrollToTerm: scrollToTerm,
    getTerms: getTerms,
    search: searchTerm,
    reset: resetFilters,
  };
})();
