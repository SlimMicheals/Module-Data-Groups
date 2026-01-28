const createLookup = require("./lookup.js");

test("creates a lookup object from country/currency pairs", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
  ];

  expect(createLookup(input)).toEqual({
    US: "USD",
    CA: "CAD",
  });
});

test("returns empty object for empty array", () => {
  expect(createLookup([])).toEqual({});
});

test("ignores invalid pairs", () => {
  const input = [
    ["US", "USD"],
    ["CA"],
    "bad",            
    ["DE", "EUR"],
  ];

  expect(createLookup(input)).toEqual({
    US: "USD",
    DE: "EUR",
  });
});

test("returns empty object for invalid input", () => {
  expect(createLookup(null)).toEqual({});
  expect(createLookup("hello")).toEqual({});
  expect(createLookup({})).toEqual({});
});
