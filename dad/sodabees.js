/*
    lé mighty fizzbuzz

  inputs: numbers 1 - 100

  outputs:
     -- return fizz if number is divisible by 3,
     -- return buzz if number is divisible by 5,
     -- return FizzBuzz if number is divisible by both 3 and 5,
     -- else return the number!

*/

const fizzbuzzer = function (){
  for (let i = 1; i < 101; ++i) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
}
}

// ternary version :thinkingEmoji:
const ternaryFizzBuzzer = function () {
for (let i = 1; i < 101;)
console.log(( ++i % 3 ? '' : 'Fizz') + (i % 5 ? '': 'Buzz') || i)
}

/*
the ternary looks weird but it's really simple.
ternary syntax = condition ? if true : if false;

 if the current *i* is divisible by 3 it will evaluate to 0 because in this instance the % is going to show the remainder of the number after being divided by whatever number is to the right of the % sign.
 If that number evaluates to 0 it's a falsey value and will output Fizz, or Buzz respectively, if both return falsey it will concatenate them into Fizz for the first evaluate and Buzz for the second, outputing FizzBuzz.
 If both of those check return a number that isn't 0 for the remainder that's a falsey value and in each check respectively returns an empty string which for this case is nothing, and then goes to the or ( || ) statement and will output the number that
  *i* currently represents.

*/