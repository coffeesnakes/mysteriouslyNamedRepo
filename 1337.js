
// brute force solution O(n^2)
// nested loops makes the time complexity grow exponentially.
var twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

// better twoSum func with hash which leads to O(n) TSC
//