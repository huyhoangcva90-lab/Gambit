import { createReading, getSpreadOptions } from "./engine.js";
import { clearHistory, getFavorites, getHistory, saveReading, toggleFavorite } from "./storage.js";

const state = {
  reading: null,
  history: getHistory(),
  favorites: getFavorites()
};

const elements = {
  form: document.querySelector("#readingForm"),
  question: document.querySelector("#question"),
  spread: document.querySelector("#spread"),
  result: document.querySelector("#result"),
  history: document.querySelector("#history"),
  clearHistory: document.querySelector("#clearHistory")
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function renderSpreadOptions() {
  elements.spread.innerHTML = getSpreadOptions().map((spread) =>
    `<option value="${spread.id}">${spread.name} · ${spread.count} lá</option>`
  ).join("");
}

function cardMarkup(card) {
  const favorite = state.favorites.includes(card.id);
  return `
    <article class="oracle-card">
      <div class="card-art">
        <img src="${card.image}" alt="${escapeHtml(card.vi)}" loading="lazy"
          onerror="this.hidden=true;this.nextElementSibling.hidden=false">
        <div class="card-fallback" hidden>${escapeHtml(card.vi)}</div>
      </div>
      <div class="card-copy">
        <div class="card-meta">
          <span>${escapeHtml(card.position)}</span>
          <span>${card.reversed ? "Ngược" : "Xuôi"}</span>
        </div>
        <h3>${escapeHtml(card.vi)}</h3>
        <p>${escapeHtml(card.message)}</p>
        <button class="icon-button favorite${favorite ? " active" : ""}" type="button"
          data-favorite="${card.id}" aria-label="${favorite ? "Bỏ yêu thích" : "Yêu thích"}"
          aria-pressed="${favorite}">
          <i class="ti ti-bookmark" aria-hidden="true"></i>
        </button>
      </div>
    </article>`;
}

function renderReading() {
  const reading = state.reading;
  if (!reading) {
    elements.result.innerHTML = `<div class="empty-state"><i class="ti ti-cards" aria-hidden="true"></i><p>Chọn kiểu trải và bắt đầu một lượt soi chiếu.</p></div>`;
    return;
  }

  elements.result.innerHTML = `
    <header class="result-header">
      <div>
        <p class="eyebrow">${escapeHtml(reading.spread.name)}</p>
        <h2>${reading.question ? escapeHtml(reading.question) : "Lượt soi chiếu mới"}</h2>
      </div>
      <time>${new Date(reading.createdAt).toLocaleString("vi-VN")}</time>
    </header>
    <div class="reading-grid">${reading.cards.map(cardMarkup).join("")}</div>
    <section class="reflection">
      <h3>${escapeHtml(reading.summary.headline)}</h3>
      <p>${escapeHtml(reading.summary.prompt)}</p>
    </section>`;
}

function renderHistory() {
  if (!state.history.length) {
    elements.history.innerHTML = `<p class="history-empty">Chưa có lượt trải được lưu.</p>`;
    elements.clearHistory.disabled = true;
    return;
  }

  elements.clearHistory.disabled = false;
  elements.history.innerHTML = state.history.slice(0, 10).map((reading) => `
    <button class="history-item" type="button" data-reading="${reading.id}">
      <span>${escapeHtml(reading.question || reading.spread.name)}</span>
      <small>${new Date(reading.createdAt).toLocaleDateString("vi-VN")} · ${reading.cards.length} lá</small>
    </button>`
  ).join("");
}

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  state.reading = createReading({
    spreadId: elements.spread.value,
    question: elements.question.value
  });
  state.history = saveReading(state.reading);
  renderReading();
  renderHistory();
  elements.result.scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.result.addEventListener("click", (event) => {
  const button = event.target.closest("[data-favorite]");
  if (!button) return;
  state.favorites = toggleFavorite(button.dataset.favorite);
  renderReading();
});

elements.history.addEventListener("click", (event) => {
  const button = event.target.closest("[data-reading]");
  if (!button) return;
  state.reading = state.history.find((reading) => reading.id === button.dataset.reading) || null;
  renderReading();
  elements.result.scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.clearHistory.addEventListener("click", () => {
  clearHistory();
  state.history = [];
  renderHistory();
});

renderSpreadOptions();
renderReading();
renderHistory();
