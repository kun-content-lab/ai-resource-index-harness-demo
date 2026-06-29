(function () {
  const data = window.RESOURCE_INDEX_DATA;
  const categoryBySlug = new Map(data.categories.map((category) => [category.slug, category]));

  const elements = {
    categoryGrid: document.querySelector("#category-grid"),
    resourceGrid: document.querySelector("#resource-grid"),
    workflowList: document.querySelector("#workflow-list"),
    reviewGrid: document.querySelector("#review-grid"),
    categoryFilter: document.querySelector("#category-filter"),
    search: document.querySelector("#resource-search"),
    emptyState: document.querySelector("#empty-state"),
    resourceCount: document.querySelector("#resource-count"),
    categoryCount: document.querySelector("#category-count"),
    statusSummary: document.querySelector("#status-summary")
  };

  function normalize(text) {
    return String(text).toLowerCase().trim();
  }

  function countBy(items, key) {
    return items.reduce((acc, item) => {
      const value = item[key];
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  }

  function renderStats() {
    elements.resourceCount.textContent = data.resources.length;
    elements.categoryCount.textContent = data.categories.length;

    const statusCounts = countBy(data.resources, "status");
    elements.statusSummary.innerHTML = Object.entries(statusCounts)
      .map(
        ([status, count]) => `
          <span class="status-pill">
            <strong>${count}</strong>
            ${status}
          </span>
        `
      )
      .join("");
  }

  function renderCategories() {
    elements.categoryGrid.innerHTML = data.categories
      .map((category) => {
        const count = data.resources.filter((resource) => resource.category === category.slug).length;
        return `
          <article class="category-card accent-${category.accent}">
            <span class="card-kicker">${category.name}</span>
            <h3>${category.title}</h3>
            <p>${category.purpose}</p>
            <strong>${count} 条资料</strong>
          </article>
        `;
      })
      .join("");

    elements.categoryFilter.insertAdjacentHTML(
      "beforeend",
      data.categories.map((category) => `<option value="${category.slug}">${category.name}</option>`).join("")
    );
  }

  function renderResources() {
    const query = normalize(elements.search.value);
    const selectedCategory = elements.categoryFilter.value;

    const resources = data.resources.filter((resource) => {
      const category = categoryBySlug.get(resource.category);
      const haystack = normalize(
        [resource.title, resource.why, resource.scenario, resource.source_type, category?.name, category?.title].join(" ")
      );
      const matchesQuery = !query || haystack.includes(query);
      const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });

    elements.emptyState.hidden = resources.length > 0;
    elements.resourceGrid.innerHTML = resources
      .map((resource) => {
        const category = categoryBySlug.get(resource.category);
        return `
          <article class="resource-card">
            <div class="resource-meta">
              <span>${category.name}</span>
              <span>${resource.source_type}</span>
              <span>${resource.status}</span>
            </div>
            <h3><a href="${resource.url}" target="_blank" rel="noreferrer">${resource.title}</a></h3>
            <p>${resource.why}</p>
            <dl>
              <dt>适用场景</dt>
              <dd>${resource.scenario}</dd>
            </dl>
          </article>
        `;
      })
      .join("");
  }

  function renderWorkflow() {
    elements.workflowList.innerHTML = data.workflow
      .map(
        (step, index) => `
          <li>
            <span class="step-index">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>${step.title}</h3>
              <p>${step.detail}</p>
              <a href="${step.link}" target="_blank" rel="noreferrer">查看 GitHub 证据</a>
            </div>
          </li>
        `
      )
      .join("");
  }

  function renderReview() {
    elements.reviewGrid.innerHTML = data.review
      .map(
        (item) => `
          <article class="review-item">
            <span aria-hidden="true">✓</span>
            <p>${item}</p>
          </article>
        `
      )
      .join("");
  }

  function bindEvents() {
    elements.search.addEventListener("input", renderResources);
    elements.categoryFilter.addEventListener("change", renderResources);
  }

  renderStats();
  renderCategories();
  renderResources();
  renderWorkflow();
  renderReview();
  bindEvents();
})();
