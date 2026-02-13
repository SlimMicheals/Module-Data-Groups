const parseQueryString = require("./querystring.js");

test("parses a single key-value pair", () => {
  expect(parseQueryString("fruit=banana")).toEqual({
    fruit: "banana",
  });
});

test("parses multiple key-value pairs", () => {
  expect(parseQueryString("a=1&b=2")).toEqual({
    a: "1",
    b: "2",
  });
});

test("returns empty object for empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

