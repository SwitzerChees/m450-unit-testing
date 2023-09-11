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
  return [...arr].sort((a, b) =>
    a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
  );
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

module.exports = {
  uniqueValues,
  letterFrequency,
  sortByKey,
  deepClone,
  intersection,
};
