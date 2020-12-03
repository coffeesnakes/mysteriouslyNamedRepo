// Problem: evenOccurrence;


var evenOccurrence = function(arr) {
  const storage = {};
  //fill up the storage with values of occurrences
  /*
  here we're setting the value of storage[arr[i]] to the opposite of whatever it currently is each time that key is run into during the for loop. if there is nothing there it is undefined (a falsey value) which would be evaluated as false and swap to true, this will swap to the opposite value with the bang each time the value is run into, only returning even occurences as
  */
  for (let i = 0; i < arr.length; ++i) {
    storage[arr[i]] = !storage[arr[i]]
  }
  // returns even occurrences (false values)
  for (let i = 0; i < arr.length; ++i) {
    if (!storage[arr[i]]) {
      return arr[i];
    }
  }
  //Return null if there are no even-occurrence items.
  return null;
};


var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 console.log(onlyEven); //  4

/* storage {
1: true
2: true
4: false
5: true
6: false
7: true
8: true
9: true
 }
 */