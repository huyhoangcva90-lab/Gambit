import { CARDS, SPREADS } from "./data/cards.js";

const REVERSED_RATE = 0.28;

function randomInt(max) {
  if (!Number.isInteger(max) || max < 1) throw new Error("max must be a positive integer");
  if (globalThis.crypto?.getRandomValues) {
    const limit = Math.floor(0x100000000 / max) * max;
    const value = new Uint32Array(1);
    do globalThis.crypto.getRandomValues(value); while (value[0] >= limit);
    return value[0] % max;
  }
  return Math.floor(Math.random() * max);
}

export function shuffle(items) {
  const output = [...items];
  for (let index = output.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(index + 1);
    [output[index], output[swapIndex]] = [output[swapIndex], output[index]];
  }
  return output;
}

export function normalizeQuestion(value) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, 240);
}

export function createReading({ spreadId = "three", question = "" } = {}) {
  const spread = SPREADS[spreadId];
  if (!spread) throw new Error(`Unknown spread: ${spreadId}`);

  const cards = shuffle(CARDS).slice(0, spread.positions.length).map((card, index) => {
    const reversed = randomInt(100) < REVERSED_RATE * 100;
    return {
      ...card,
      position: spread.positions[index],
      reversed,
      message: reversed ? card.reversed : card.upright
    };
  });

  return {
    id: globalThis.crypto?.randomUUID?.() || `reading-${Date.now()}-${randomInt(100000)}`,
    createdAt: new Date().toISOString(),
    question: normalizeQuestion(question),
    spread: { ...spread },
    cards,
    summary: buildSummary(cards)
  };
}

export function buildSummary(cards) {
  const themes = [];
  cards.forEach((card) => card.keywords.forEach((keyword) => {
    if (!themes.includes(keyword)) themes.push(keyword);
  }));

  const opening = themes.slice(0, 3).join(", ");
  const finalCard = cards.at(-1);
  return {
    themes: themes.slice(0, 5),
    headline: opening ? `Chủ đề nổi bật: ${opening}.` : "Một khoảng dừng để soi chiếu.",
    prompt: finalCard
      ? `Với vị trí “${finalCard.position}”, điều gì trong thông điệp của ${finalCard.vi} có thể chuyển thành một hành động nhỏ?`
      : ""
  };
}

export function getSpreadOptions() {
  return Object.values(SPREADS).map(({ id, name, description, positions }) => ({
    id,
    name,
    description,
    count: positions.length
  }));
}
