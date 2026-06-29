const HISTORY_KEY = "oracle.readings.v1";
const FAVORITES_KEY = "oracle.favorites.v1";
const MAX_HISTORY = 50;

function read(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function getHistory() {
  return read(HISTORY_KEY, []);
}

export function saveReading(reading) {
  const history = [reading, ...getHistory().filter((item) => item.id !== reading.id)].slice(0, MAX_HISTORY);
  write(HISTORY_KEY, history);
  return history;
}

export function clearHistory() {
  write(HISTORY_KEY, []);
}

export function getFavorites() {
  return read(FAVORITES_KEY, []);
}

export function toggleFavorite(cardId) {
  const favorites = new Set(getFavorites());
  favorites.has(cardId) ? favorites.delete(cardId) : favorites.add(cardId);
  const next = [...favorites];
  write(FAVORITES_KEY, next);
  return next;
}
