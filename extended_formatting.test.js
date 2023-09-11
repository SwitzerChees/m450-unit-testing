const {
  uniqueValues,
  letterFrequency,
  sortByKey,
  deepClone,
  intersection,
} = require("./extended_formatting");

describe("Testing advanced functions", () => {
  test("uniqueValues returns an array of unique values", () => {
    const input = [1, 2, 2, 3, 3, 3, 4];
    const result = uniqueValues(input);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("letterFrequency counts the frequency of each letter in a word", () => {
    const word = "hello";
    const result = letterFrequency(word);
    expect(result).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });

  test("sortByKey sorts an array of objects by a given key", () => {
    const input = [
      { id: 3, name: "Charlie" },
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const result = sortByKey(input, "id");
    expect(result).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ]);
  });

  test("deepClone returns a deep clone of an object", () => {
    const obj = {
      a: 1,
      b: { c: 2 },
    };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.b).not.toBe(obj.b); // Check they don't reference the same object
  });

  test("intersection returns common values between two arrays", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    const result = intersection(arr1, arr2);
    expect(result).toEqual([3, 4, 5]);
  });
});
