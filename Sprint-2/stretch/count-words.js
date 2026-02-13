function countWords(str) {
  const result = {};
  const words = str.split(" ").filter(word => word !== "");

  for (const word of words) {
    result[word] = (result[word] || 0) + 1;
  }

  return result;
}

module.exports = countWords;

