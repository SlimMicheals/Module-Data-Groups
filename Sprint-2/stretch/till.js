function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = Number(coin.replace("p", ""));
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

module.exports = totalTill;

