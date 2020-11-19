let arrayOfNames = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim"]

arrayOfNames.forEach((name) => {
  console.log("name: " + name)
}); // sick, it worked.


let tupleNumbers = [];

function tupler(arr) {
  if (arr.length < 40) {
    for (var i = 0; i < 40; i++) {
      for (var j = 40; j > 0; j--)
        arr.push([i, j])

    }
    }
  return arr;
}
//  uhh this one makes an ugly set of 1680 tuples ummmm yeah... fix this pls jake
