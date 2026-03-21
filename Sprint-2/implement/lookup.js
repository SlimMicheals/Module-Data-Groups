
function createLookup(countryCurrencyPairs) {

  if (!Array.isArray(countryCurrencyPairs)) return {};

  const lookup = {};

  for (const pair of countryCurrencyPairs) {

    if (!Array.isArray(pair) || pair.length < 2) continue;

    const [countryCode, currencyCode] = pair;

    if (typeof countryCode !== "string" || typeof currencyCode !== "string") continue;

    lookup[countryCode] = currencyCode;
  }

  return lookup;
}

module.exports = createLookup;
