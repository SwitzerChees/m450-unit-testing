/**
 * Gibt ein neues Array zurück, das nur die einzigartigen Werte des ursprünglichen Arrays enthält.
 * @param {Array} arr - Das gegebene Array.
 * @return {Array} Ein Array mit einzigartigen Werten.
 */
const uniqueValues = (arr) => {
  return [...new Set(arr)];
};

/**
 * Gibt ein Objekt zurück, das die Häufigkeit jedes Buchstabens im Wort zählt.
 * @param {string} word - Das gegebene Wort.
 * @return {Object} Ein Objekt, das die Buchstabenhäufigkeit darstellt.
 */
const letterFrequency = (word) => {
  const frequency = {};
  for (const letter of word) {
    frequency[letter] = (frequency[letter] || 0) + 1;
  }
  return frequency;
};

/**
 * Gibt ein Array von Objekten zurück, die nach einem bestimmten Schlüssel sortiert sind.
 * @param {Array} arr - Ein Array von Objekten.
 * @param {string} key - Der Schlüssel zum Sortieren.
 * @return {Array} Ein nach Schlüssel sortiertes Array von Objekten.
 */
const sortByKey = (arr, key) => {
  return arr.sort((a, b) => a[key] - b[key]);
};

/**
 * Gibt ein tief geklontes Objekt zurück.
 * @param {Object} obj - Das zu klonende Objekt.
 * @return {Object} Ein tief geklontes Objekt.
 */
const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Gibt ein Array zurück, das die Werte enthält, die in beiden Eingabe-Arrays vorkommen.
 * @param {Array} arr1 - Das erste Array.
 * @param {Array} arr2 - Das zweite Array.
 * @return {Array} Ein Array mit den gemeinsamen Werten.
 */
const intersection = (arr1, arr2) => {
  return arr1.filter((value) => arr2.includes(value));
};

/**
 * Teilt zwei Zahlen.
 * @param {number} a - Der Dividend.
 * @param {number} b - Der Divisor.
 * @return {number} Das Ergebnis der Division.
 * @throws {Error} Wenn b 0 ist oder wenn a oder b keine Zahlen sind.
 */
const divide = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Ungültige Eingabe. 'a' und 'b' sollten Zahlen sein.");
  }
  if (b === 0) {
    throw new Error("Division durch Null ist nicht erlaubt.");
  }
  return a / b;
};

module.exports = {
  uniqueValues,
  letterFrequency,
  sortByKey,
  deepClone,
  intersection,
  divide,
};
