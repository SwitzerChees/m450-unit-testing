const {
  getLastElement,
  isPalindrome,
  capitalizeWords,
  lengthOfLongestWord,
} = require("./formatting");

describe("Testing Formatting", () => {
  test("getLastElement returns the last element of an array", () => {
    const input = [1, 2, 3, 4, 5];
    const result = getLastElement(input);
    expect(result).toBe(5);
  });

  test("isPalindrome returns true for palindromic words and false otherwise", () => {
    expect(isPalindrome("radar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });

  test("capitalizeWords capitalizes the first letter of each word in a sentence", () => {
    const input = "hello world";
    const result = capitalizeWords(input);
    expect(result).toBe("Hello World");
  });

  test("lengthOfLongestWord returns the length of the longest word in a sentence", () => {
    const input = "The quick brown fox";
    const result = lengthOfLongestWord(input);
    expect(result).toBe(5); // "quick" is the longest word with 5 characters
  });
});
