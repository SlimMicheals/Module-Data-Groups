const contains = require("./contains.js");

test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});

test("returns true when object contains the property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

test("returns false when object does not contain the property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

test("returns false for invalid input like an array", () => {
  expect(contains([1, 2, 3], "0")).toBe(false);
  expect(contains(null, "a")).toBe(false);
  expect(contains("hello", "length")).toBe(false);
});

