/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
  var resize = () => {
    if (storage.length > 0.75 * storageLimit) {
      storageLimit = storageLimit * 2;
    }
    if (storage.length < 0.25 * storageLimit) {
      storageLimit = storageLimit / 2;
    }
  };
  return result;
};

var makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = (k, v) => {
    let hash = getIndexBelowMaxForKey(k, storageLimit);
    let tuples = (storage[has] = storage[hash] || []);
    let swap = false;
    for (let i = 0; i < tuples.length; ++i) {
      if (tuples[0] === k) {
        tuples[1] = v;
        swap = true;
      }
    }
    if (!swap) {
      tuples.push([k, v]);
      size++;
      resize();
    }
  };

  result.retrieve = (k) => {
    let hash = getIndexBelowMaxForKey(k, storageLimit);
    let tuples = storage[hash];
    let v;
    if (!tuples) {
      return;
    }
    for (let i = 0; i < tuples.length; i++) {
      if (tuples[i] === k) {
        v = tuples[1];
      }
    }
    return v;
  };

  result.remove = (k) => {
    let hash = getIndexBelowMaxForKey(k, storageLimit);
    let tuples = storage[hash];
    let val;
    let temp;
    tuples.forEach(function (kVal, i) {
      if (kVal[0] === k) {
        val = kVal[1];
        size--;
        temp = i;
      }
    });
    tuples.splice(i, 1);
    resize();
  };
  return result;
};

// O(n) (linear time for all methods)
