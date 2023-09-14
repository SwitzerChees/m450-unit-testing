const { afterEach } = require("node:test");

describe("My TEST SUITE", () => {
  let myGlobalState = 10;

  beforeAll(() => {});
  beforeEach(() => {
    myGlobalState = 10;
  });
  afterEach(() => {});
  afterAll(() => {});

  test("Test Case 1: sum", () => {
    myGlobalState = 12;
    expect(1 + 1).toBe(2);
    expect("function Result").not.toBe("");
  });

  test("Test Case 2", () => {
    expect(myGlobalState).toBe(10);
  });
});
