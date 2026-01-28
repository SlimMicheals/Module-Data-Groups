const tally = require("./tally.js");

test("returns empty object for empty array", () => {
  expect(tally([])).toEqual({});
});

test("counts single item", () => {
  expect(tally(["a"])).toEqual({ a: 1 });
});

test("counts duplicate items", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({
    a: 2,
    b: 1,
    c: 1,
  });
});

test("throws error for invalid input", () => {
  expect(() => tally("abc")).toThrow();
});

