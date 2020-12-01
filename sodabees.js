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

// ternary version in progress.. awaiting brain