const countWords = require("./count-words.js");

test("counts words in a sentence", () => {
  expect(countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1 });
});

