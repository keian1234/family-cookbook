const FILTER_GROUPS = [
  { key: "category", label: "Category" },
  { key: "cuisine", label: "Cuisine" },
  { key: "season", label: "Season" },
  { key: "status", label: "Status" },
  { key: "tags", label: "Tags" },
];

const grid = document.getElementById("recipe-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search");
const filterGroupsEl = document.getElementById("filter-groups");
const resultCountEl = document.getElementById("result-count");
const clearFiltersBtn = document.getElementById("clear-filters");
const filtersToggle = document.getElementById("filters-toggle");
const filtersToggleGroup = document.getElementById("filters-toggle-group");
const filtersCollapse = document.getElementById("filters-collapse");
const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

const activeFilters = {
  category: new Set(),
  cuisine: new Set(),
  season: new Set(),
  status: new Set(),
  tags: new Set(),
};
let activeMinRating = null;

function statusLabel(status) {
  if (status === "Favorite") return "💗 Favorite";
  if (status === "Made") return "✓ Made";
  if (status === "New") return "🆕 New";
  return status;
}

function flattenIngredients(ingredients) {
  if (!ingredients || ingredients.length === 0) return [];
  if (typeof ingredients[0] === "object") {
    return ingredients.flatMap(group => group.items);
  }
  return ingredients;
}

function distinctValues(key) {
  const values = new Set();
  RECIPES.forEach(recipe => {
    const value = recipe[key];
    if (Array.isArray(value)) value.forEach(v => v && values.add(v));
    else if (value) values.add(value);
  });
  return [...values].sort();
}

function hasActiveFilters() {
  return Object.values(activeFilters).some(set => set.size > 0) || activeMinRating !== null;
}

function togglePill(set, value) {
  if (set.has(value)) set.delete(value);
  else set.add(value);
}

function renderFilterGroups() {
  filterGroupsEl.innerHTML = "";

  FILTER_GROUPS.forEach(({ key, label }) => {
    const values = distinctValues(key);
    if (values.length === 0) return;

    const group = document.createElement("div");
    group.className = "filter-group";

    const heading = document.createElement("h4");
    heading.textContent = label;
    group.appendChild(heading);

    const row = document.createElement("div");
    row.className = "pill-row";
    values.forEach(value => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className =
        `filter-pill filter-pill-${key}` + (activeFilters[key].has(value) ? " active" : "");
      pill.textContent = key === "status" ? statusLabel(value) : value;
      pill.addEventListener("click", () => {
        togglePill(activeFilters[key], value);
        renderFilterGroups();
        renderGrid();
      });
      row.appendChild(pill);
    });
    group.appendChild(row);
    filterGroupsEl.appendChild(group);
  });

  const ratingValues = [...new Set(RECIPES.map(r => r.rating).filter(Boolean))].sort((a, b) => b - a);
  if (ratingValues.length > 0) {
    const group = document.createElement("div");
    group.className = "filter-group";

    const heading = document.createElement("h4");
    heading.textContent = "Rating";
    group.appendChild(heading);

    const row = document.createElement("div");
    row.className = "pill-row";
    ratingValues.forEach(min => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className =
        "filter-pill filter-pill-rating" + (activeMinRating === min ? " active" : "");
      pill.textContent = "★".repeat(min) + "+";
      pill.addEventListener("click", () => {
        activeMinRating = activeMinRating === min ? null : min;
        renderFilterGroups();
        renderGrid();
      });
      row.appendChild(pill);
    });
    group.appendChild(row);
    filterGroupsEl.appendChild(group);
  }
}

function matchesFilters(recipe) {
  for (const { key } of FILTER_GROUPS) {
    const selected = activeFilters[key];
    if (selected.size === 0) continue;
    const value = recipe[key];
    if (Array.isArray(value)) {
      if (!value.some(v => selected.has(v))) return false;
    } else if (!selected.has(value)) {
      return false;
    }
  }
  if (activeMinRating !== null && (!recipe.rating || recipe.rating < activeMinRating)) {
    return false;
  }
  return true;
}

function matchesSearch(recipe, query) {
  const haystack = [
    recipe.title,
    ...(recipe.tags || []),
    ...(recipe.category || []),
    ...(recipe.cuisine || []),
    ...flattenIngredients(recipe.ingredients),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function renderGrid() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = RECIPES.filter(recipe => {
    const matchesQuery = query === "" || matchesSearch(recipe, query);
    return matchesQuery && matchesFilters(recipe);
  });

  grid.innerHTML = "";
  emptyState.hidden = filtered.length !== 0;
  resultCountEl.textContent = `${filtered.length} recipe${filtered.length === 1 ? "" : "s"}`;
  clearFiltersBtn.hidden = !(hasActiveFilters() || query !== "");

  filtered.forEach(recipe => {
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.innerHTML = `
      <div class="card-media">
        ${
          recipe.image
            ? `<img class="card-image" src="${recipe.image}" alt="${recipe.title}" loading="lazy">`
            : `<div class="card-image card-image-placeholder">🍽</div>`
        }
        <div class="card-badges">
          ${recipe.rating ? `<span class="badge badge-rating">${"★".repeat(recipe.rating)}</span>` : ""}
          ${recipe.status ? `<span class="badge badge-status">${statusLabel(recipe.status)}</span>` : ""}
        </div>
      </div>
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        ${recipe.time ? `<span>⏱ ${recipe.time}</span>` : ""}
        ${recipe.servings ? `<span>🍽 ${recipe.servings} servings</span>` : ""}
      </div>
      <div class="recipe-tags">
        ${(recipe.category || []).map(t => `<span class="pill-category">${t}</span>`).join("")}
        ${(recipe.cuisine || []).map(t => `<span class="pill-cuisine">${t}</span>`).join("")}
        ${(recipe.tags || []).map(t => `<span class="pill-tag">${t}</span>`).join("")}
      </div>
    `;
    card.addEventListener("click", () => openModal(recipe));
    grid.appendChild(card);
  });
}

function renderIngredients(ingredients) {
  if (!ingredients || ingredients.length === 0) {
    return `<p class="muted-note">No ingredients listed yet.</p>`;
  }
  if (typeof ingredients[0] === "object") {
    return ingredients
      .map(
        group => `
          <h5>${group.group}</h5>
          <ul>${group.items.map(i => `<li>${i}</li>`).join("")}</ul>
        `
      )
      .join("");
  }
  return `<ul>${ingredients.map(i => `<li>${i}</li>`).join("")}</ul>`;
}

function openModal(recipe) {
  modalContent.innerHTML = `
    ${recipe.image ? `<img class="modal-image" src="${recipe.image}" alt="${recipe.title}">` : ""}
    <h2>${recipe.title}</h2>
    <div class="modal-badges">
      ${recipe.rating ? `<span class="badge badge-rating">${"★".repeat(recipe.rating)}</span>` : ""}
      ${recipe.status ? `<span class="badge badge-status">${statusLabel(recipe.status)}</span>` : ""}
    </div>
    <div class="recipe-meta">
      ${recipe.time ? `<span>⏱ ${recipe.time}</span>` : ""}
      ${recipe.servings ? `<span>🍽 ${recipe.servings} servings</span>` : ""}
    </div>
    <div class="recipe-tags">
      ${(recipe.category || []).map(t => `<span class="pill-category">${t}</span>`).join("")}
      ${(recipe.cuisine || []).map(t => `<span class="pill-cuisine">${t}</span>`).join("")}
      ${(recipe.season || []).map(t => `<span class="pill-season">${t}</span>`).join("")}
      ${(recipe.tags || []).map(t => `<span class="pill-tag">${t}</span>`).join("")}
    </div>
    <h4>Ingredients</h4>
    ${renderIngredients(recipe.ingredients)}
    <h4>Steps</h4>
    ${
      recipe.steps && recipe.steps.length
        ? `<ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>`
        : `<p class="muted-note">No instructions listed yet.</p>`
    }
    ${
      recipe.sourceUrl
        ? `<a class="source-link" href="${recipe.sourceUrl}" target="_blank" rel="noopener">View original recipe →</a>`
        : ""
    }
  `;
  modalOverlay.hidden = false;
}

function closeModal() {
  modalOverlay.hidden = true;
}

function clearFilters() {
  Object.values(activeFilters).forEach(set => set.clear());
  activeMinRating = null;
  searchInput.value = "";
  renderFilterGroups();
  renderGrid();
}

function applyFiltersCollapsedUI(collapsed) {
  filtersCollapse.classList.toggle("collapsed", collapsed);
  filtersToggle.setAttribute("aria-expanded", String(!collapsed));
  // Keep the collapsed panel's controls out of the tab order and the
  // accessibility tree — CSS alone (zero-height + overflow) still leaves
  // them focusable, which strands keyboard/screen-reader users on
  // invisible pills.
  filtersCollapse.inert = collapsed;
}

function setFiltersCollapsed(collapsed) {
  applyFiltersCollapsedUI(collapsed);
  try {
    localStorage.setItem("cookbook-filters-collapsed", collapsed ? "1" : "0");
  } catch (e) {
    // localStorage unavailable (e.g. private browsing) — collapse state just won't persist
  }
}

function initFiltersCollapsed() {
  let collapsed = false;
  try {
    collapsed = localStorage.getItem("cookbook-filters-collapsed") === "1";
  } catch (e) {
    // ignore
  }
  // Apply the restored state without immediately writing the same value
  // straight back to storage.
  applyFiltersCollapsedUI(collapsed);
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
searchInput.addEventListener("input", renderGrid);
clearFiltersBtn.addEventListener("click", clearFilters);
filtersToggleGroup.addEventListener("click", () => {
  setFiltersCollapsed(!filtersCollapse.classList.contains("collapsed"));
});

renderFilterGroups();
renderGrid();
initFiltersCollapsed();
