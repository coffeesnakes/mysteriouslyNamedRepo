
// brute force solution O(n^2)
// nested loops makes the time complexity grow exponentially.

const twoSum = function (nums, target) {
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
// though lookups in a hash are O(1)
const twoSumImproved = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; ++i) {
    let currentNumber = nums[i];
    hash[currentNumber] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hash.hasOwnProperty(diff) && hash[diff] !== i) {
      return [i, hash[diff]];
    }
  }
};


// TESTS for twoSum
let test1 = [2, 7, 11, 15];
let targ1 = 9;
let test2 = [3, 2, 4];
let targ2 = 6
let test3 = [300, 7, 77, 15, 0, 3, 24, 13, 2, 1, 14, -2, 69, 420];
let targ3 = 13;

console.log('expects [1, 2]   :  ',   twoSumImproved(test2, targ2));
console.log('expects [0, 1]   :  ', twoSumImproved(test1, targ1));
console.log('expects [3, 11]  :  ', twoSumImproved(test3, targ3))




const reverseInt = function (num) {
  return(
    // parseFloat runs last, but converts a string into a number removing leading zeros
    parseFloat(
      // runs first making the number a string
      num.toString()
      // splits the string into an indexed array
    .split('')
    // reverses that indexed array
    .reverse()
    // reassembles the array indexes into a string
    .join('')
    // Math.sign makes a positive number negative and vice versa
    ) * Math.sign(num)
  )
};

const reverseIntImproved = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

// TESTS for reverseInt
let testReverse1 = 123;
let testReverse2 = 58008;
let testReverse3 = 7331;
console.log('expects 321 :', reverseIntImproved(testReverse1));
console.log('expects 80085 :', reverseIntImproved(testReverse2));
console.log('expects 1337 :', reverseIntImproved(testReverse3));


// invering a binary tree

const invertTree = function (root) {
  if (root === null) { return null; }
  var node = root.left;
  root.left = root.right;
  root.right = node;
  if (root.left) { invertTree(root.left); }
  if (root.right) { invertTree(root.right); }
  return root;
};



function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

const charCount = function (string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (/[a-z0-9]/.test(char)){
    if (result[char] > 0) {
      result[char]++
    } else {
      result[char] = 1;
    };
  }
}
  return result;
}

const charCountRefactored = function (str) {
  let result = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      // if result[char] exists it will evaluate to truthy and thus we increment because truthy assigns to the left of the OR operator.
      // if result[char] didnt exist it would evaluate to falsey and then default to the right of the OR operator, assigning result[char] to be 1
      result[char] = ++result[char] || 1;
    }
  }
  return result
}

console.log(charCountRefactored('hello world'));
// expects { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
console.log(charCountRefactored('hElLOFRIEnd'))
// expects { h: 1, e: 2, l: 2, o: 1, f: 1, r: 1, i: 1, n: 1, d: 1 }