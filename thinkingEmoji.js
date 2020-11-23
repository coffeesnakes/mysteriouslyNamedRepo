
// data set [name, name, name...]
let arrayOfNames = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim"]

arrayOfNames.forEach((name) => {
  console.log("name: " + name)
}); // sick, it worked.



//data set [x, y]
let tupleNumbers = [];

function generateTuples(arr) {
    for (var i = 0; i < 40; i++) {
        arr.push([i, Math.floor(i*Math.random()*2)])
    }
  return arr;
} // ok i fixed it, this has neat tuples

generateTuples(tupleNumbers);

// gbs test