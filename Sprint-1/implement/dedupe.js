//function dedupe() {}

function dedupe(array) {
  if (!Array.isArray(array)) return [];

  const result = [];
  const seen = new Set();

  for (const item of array) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

module.exports = dedupe;

