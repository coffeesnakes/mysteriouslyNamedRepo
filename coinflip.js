function coinFlip(result) {
  result = result || { heads: 0, tails: 0 };
  if (result.heads < 3 && result.tails < 3) {
    var flip = Math.random() > 0.5 ? "heads" : "tails";
    result[flip]++;
    coinFlip(result);
  }
  return result.heads >= 3 ? "heads" : "tails";
}

console.log(coinFlip())
