const howdy = name => console.log("howdy there, " + name);

// use a SET to exclude repeats
// (176ms)
const distributeCandies = candies => Math.min(candies.length / 2, new Set(candies).size);
// yeet
const square = num => num * num;


// actually a faster solution (132ms) but not arrow ;__;
var distributeCandies = function (candies) {
  let half = candies.length / 2
  let set = new Set()
  for (let i = 0; i < candies.length; ++i) {
    set.add(candies[i])
    if (set.size >= half) return half
  }
  return set.size
};