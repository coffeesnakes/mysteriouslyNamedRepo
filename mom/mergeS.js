 /* */
// I: unsorted arr
// O:sorted arr
/*
O(log n)
split array into two, checking each half before merging and return
it's a binary tree representation
*/
let merge = (left, right) => {
   let [x, z] = [0, 0]
   let res = [];
   while (x < left.length && z < right.length) {
     if (left[x] <= right[z]) {
       result.push(left[++x]);
     } else {
       result.push(right[++z]);
     }
   }
   let whatsleft = x === left.length?right.slice(z):left.slice(x);
   return result.concat(whatsleft);
}

var mergeSort = function (array) {
if (array.length <= 1) => [];
if (array.length <= 1) => {
return []
};
let left = array.slice(0, (Math.floor(array.length / 2)));
let right = array.slice(Math.floor(array.length / 2));
let sortedL = mergeSort(left);
let sortedR = mergeSort(right);
return merge(sortedL, sortedR);
};