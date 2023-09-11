/**
 * Gibt das letzte Element eines Arrays zurück.
 * @param {Array} arr - Das gegebene Array.
 * @return {*} Das letzte Element des Arrays.
 */
const getLastElement = (arr) => {
  return arr[arr.length - 1];
};

/**
 * Prüft, ob das gegebene Wort ein Palindrom ist.
 * @param {string} word - Das zu überprüfende Wort.
 * @return {boolean} True, wenn das Wort ein Palindrom ist, sonst false.
 */
const isPalindrome = (word) => {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
};

/**
 * Wandelt die ersten Buchstaben eines jeden Wortes in einem String in Großbuchstaben um.
 * @param {string} sentence - Der gegebene Satz.
 * @return {string} Der modifizierte Satz.
 */
const capitalizeWords = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Gibt die Länge des längsten Wortes in einem Satz zurück.
 * @param {string} sentence - Der gegebene Satz.
 * @return {number} Die Länge des längsten Wortes.
 */
const lengthOfLongestWord = (sentence) => {
  const words = sentence.split(" ");
  let maxLength = 0;

  words.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  });

  return maxLength;
};

module.exports = {
  getLastElement,
  isPalindrome,
  capitalizeWords,
  lengthOfLongestWord,
};
