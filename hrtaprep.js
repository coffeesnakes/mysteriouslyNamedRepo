//Instructions:
// Work on the problems in order. Do not skip problems. You may go back and make edits to problems you have already finished. Some problems may not require you to write any code. Some problems may have potential edge cases, do not code for these edge cases but you may briefly acknowledge them if you feel it is important to do so. You are not allowed to use any outside editors or notes, you also can not look things up on MDN, stackoverflow, or any other outside sites. If you have a question or feel stuck ask for help. You are not expected to finish every problem, but if you are moving too slowly a proctor will give you a message to pick up the pace. We are most interested in your thought process when you are solving problems, so think out loud and speak to the camera as though it were a work colleague. Good luck!

// Problem 0
// Look into the camera and explain, in two minutes or less, why you are interested in becoming a software engineer.
// Problem 1
// Below is an assertEquals Function. Without going through each line of code, explain at a high level what this function does and when you would use it.

function assertEquals(actual, expected, testName) {
 if (actual === expected) {
   console.log('passed');
 } else {
   console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
 }
}

// Problem 2
// We often want to round numbers either up or down to the nearest integer. We do this using Math.floor() and Math.ceil(). Below is a function that takes in a number and returns that number rounded down to the nearest integer. Fill out the test suite to make sure it is working properly.

function roundDown(number) {
 return Math.floor(number);
}

function assertEquals(actual, expected, testName) {
 if (actual === expected) {
   console.log('passed');
 } else {
   console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
 }
}

function testRoundDown() {
 var input = -7.4;
 var actual = /*your code*/;
 var expected = /*your code*/;
 var testName = /*your code*/;
 assertEquals(actual, expected, testName);
}
testRoundDown();


// Problem 3
  // write a function that takes a whole-number numeric grade, representing a percentage, and returns the letter grade average (i.e. 87 -> 'B')

// here are the ranges for letter grades for reference:
// 0-59: F
 // 60-69: D
 // 70-79: C
 // 80-89: B
 // 90-100: A

var findGrade = function(numericGrade) {
  // Your code here

}

// Problem 4
// A school needs to calculate how many teachers it will need for the upcoming year. Complete the function below to help them do this. Make sure to read the specs and use the tests provided to verify your code.

/* Specs:
 - For budgetary reasons, the school will hire as few teachers as possible.
 - By law, the school must have at least 1 teacher for every 10 students at a school.
 - Your function should input a number (representing how many students the school will have) and return a number (representing how many teachers the school will need) */


function teachersNeeded (numOfStudents) {
 /*Your code here*/
}

//Assertion Function
function assertEquals (actual, expected, testName) {
 if (actual === expected) {
   console.log('passed');
 } else {
   console.log('FAILED [' + testName + '] Expected ' + expected + ' but got ' + actual);
 }
}

//Test Suite
function testTeachersNeeded1() {
 input = 50;
 actual = teachersNeeded(input);
 expected = 5;
 assertEquals(actual, expected, 'Returns required number of teachers');
}
function testTeachersNeeded2() {
 input = 21;
 actual = teachersNeeded(input);
 expected = 3;
 assertEquals(actual, expected, 'Returns required number of teachers');
}
testTeachersNeeded1();
testTeachersNeeded2();

// Problem 5
// Run the following code and discuss the results. What does it mean in terms of testing?  Without coding it, explain another way we could compare two arrays.

var array1 = [1,2,3,4];
var array2 = [1,2,3,4];
console.log('array1 === array2: ', array1 === array2);
console.log('JSON.stringify(array1) === JSON.stringify(array2): ', JSON.stringify(array1) === JSON.stringify(array2));

// Problem 6
// The following code takes as its input a list of student GPA's (as an unsorted array), a range (low and high) and returns an array containing the GPA's from the input list that fall within that range. Unfortunately the function contains many errors. Debug the code so that it passes the provided test. Note: only the function contains bugs, the assertion function and test case are correct.

function honorsList(array, low, high) {
 var array = [];
 for (var i = 0; i < array.length; i++) {
   if (array[i] > high) {
     array.push(array[i]);
   }
   if (array[i] < low) {
     array.push(array[i]);
   }
 }
 return array;
}

function assertArraysEqual(actual, expected, testName) {
 var stringActual = JSON.stringify(actual);
 var stringExpected = JSON.stringify(expected);
 if (stringActual === stringExpected) {
   console.log('passed');
 } else {
   console.log('FAILED [' + testName + '] Expected ' + stringExpected + ' but got ' + stringActual);
 }
}

function testHonorsList() {
 var array = [2.1, 2.5, 3.7, 3.5, 4.0, 1.7, 3.6];
 var low = 2.5;
 var high = 3.7;
 var actual = honorsList(array, low, high);
 var expected = [2.5, 3.7, 3.5, 3.6];
 assertArraysEqual(actual, expected, 'Returns GPA\'s within the given range');
}
testHonorsList();

// Problem 7
// For the remainder of this test we will compare objects the same way we compare arrays. This is not exactly correct on a deep level though. Run the following code and explain the signifigance of the result when it comes to comparing objects using JSON.stringify().

var obj1 = {'foo': 1, 'bar': 2};
var obj2 = {'bar': 2, 'foo': 1};

var obj1String = JSON.stringify(obj1);
var obj2String = JSON.stringify(obj2);

console.log('obj1 === obj2 when compared as strings: ', obj1String === obj2String);

// Problem 8
// Below is data for a school district. Write a function called teachersNeededBySchool that takes two arguments, the schoolData and the name of a school (as a string), and returns an object with the school name and number of teachers that school will need, based on the specs below. You may copy/paste your function teachersNeeded from problem 4 if you would like. Pass the provided tests.

/*specs:
 - A school will hire as few teachers as it can.
 - It must have at least 1 teacher for every 10 students.
 - your function should return an object with the school name and the number of teachers it needs. Here is an example: {'Berkeley': 7} */

var schoolData = [
 {'school name': 'Albany', 'students': 46},
 {'school name': 'Berkeley', 'students': 70},
 {'school name': 'El Cerrito', 'students': 32},
 {'school name': 'Richmond', 'students': 56},
 {'school name': 'Oakland', 'students': 70},
 {'school name': 'San Pablo', 'students': 64}
];

function teachersNeededBySchool(data, schoolName) {
 /*your code*/
}

function assertObjectsEqual(actual, expected, testName) {
 var stringActual = JSON.stringify(actual);
 var stringExpected = JSON.stringify(expected);
 if (stringActual === stringExpected) {
   console.log('passed');
 } else {
   console.log('FAILED [' + testName + '] Expected ' + stringExpected + ' but got ' + stringActual);
 }
}

function testTeachersNeededBySchool() {
 var schoolName = 'Richmond';
 var actual = teachersNeededBySchool(schoolData, schoolName);
 var expected = {'Richmond': 6};
 assertObjectsEqual(actual, expected, 'Returns the school name and how many teachers it needs.');
}
testTeachersNeededBySchool();

// Problem 9
// Exponention is a mathematical term that refers to raising a base number to a given power. Many mathametical formulas will show an exponent with the ^ symbol, for example: 5^3 === five to the third === 5*5*5 === 125. There are two ways to do this in code. Our previous example could be coded as Math.pow(5, 3) or 5 ** 3. Run the follwoing code and explain the results.

console.log(Math.pow(5, 3));
console.log(5 ** 3);
console.log(13 ** 1);
console.log(8 ** 0);
console.log(16 ** 0.5);

// Problem 10
/* Schools recieve funding from the government based upon three factors:
1) They get more funding the more students they have.
2) They get more funding the more teachers they have.
3) They get more funding the higher thier avergage student's GPA is.

The formula for determing funding is:

funding = (130 * S) + (300 * T) + Math.floor(1000 * (G^2) / T)

where:
S = number of students
T = number of teachers
G = Average GPA of all students at the school (for example: 3.1)

Write a function called getFunding that takes three arguments: students, teachers, and averageGPA and returns the funding the school should recieve from the governemnt. To confirm your function is working properly, do a simple console.log where you plug in 20 for students, 2 for teachers, and 2.7 for averageGPA. The funding returned should be 6845
*/

function getFunding(students, teachers, averageGPA) {
 /* your code */
}

// Problem 11

/* Based on the school data below, write two functions. The first will be called getSchoolFunding and will recieve a data set (in the same format as the one below) and a school's name (as a string) and return how much funding that school will get. Copy/paste in your getFunding function from the previous problem and use it as a helper function. Remember that a school's number of teachers will be equal to Math.ceil(students/10).

The second function will be called getLowestFunding and it will take in the school data set and return the name of the school (as a string) that gets the lowest funding out of all the schools in the data set. Note that your code should still work if we added schools to the data set or changed the numbers.

Do not use TDD for this problem. Instead, console.log your functions and do a gut check as to whether or not the results seem plausible. For example, based on your understanding of how schools decide on how many teachers to have and how funding is calculated, which school do you think would get more funding, Berkeley or Oakland? */


var schoolData = [
 {'school name': 'Albany', 'students': 46, 'averageGPA': 3.1},
 {'school name': 'Berkeley', 'students': 70, 'averageGPA': 3.4},
 {'school name': 'El Cerrito', 'students': 32, 'averageGPA': 3.2},
 {'school name': 'Richmond', 'students': 56, 'averageGPA': 2.5},
 {'school name': 'Oakland', 'students': 70, 'averageGPA': 2.7},
 {'school name': 'San Pablo', 'students': 64, 'averageGPA': 3.0}
];

function getSchoolFunding(data, schoolName) {
 /*your code*/
}

function getLowestFunding(data) {
 /*your code*/
}

// Problem 12
/* Write a function that will produce a graph of school funding. The function should be called graphFunding and should take in the provided data set on school funding. Note these are not the same funding numbers at the previous problem. The graph should look like this:

Albany       @@@ ~ 3100
Berkeley     @@@@@@@@ ~ 8900
El Cerrito   @@@@@@@ ~ 7300
Richmond     @@@@@ ~ 5000
Oakland      @@@@ ~ 4200
San Pablo    @@@@@@ ~ 6100


Make sure your code can work for different numbers of schools and different funding numbers. Do not bother creating tests for this. Verify your code by logging it to the console and making sure it looks correct. */

var schoolData = [
 {'school name': 'Albany', 'funding': 3100},
 {'school name': 'Berkeley', 'funding': 8900},
 {'school name': 'El Cerrito', 'funding': 7300},
 {'school name': 'Richmond', 'funding': 5000},
 {'school name': 'Oakland', 'funding': 4200},
 {'school name': 'San Pablo', 'funding': 6100}
];

function graphFunding(data) {
 /*your code*/
}

// Problem 13
/* Based on the funding formula presented earlier:

funding = (130 * S) + (300 * T) + Math.floor(1000 * (G^2) / T)

Write a function called neededGPAIncrease that will take in one argument: a number that represents how many students the school will be losing next year. The function will return how much the school must raise its GPA by to maintain its current funding. Assume that the number of teachers the school has remains constant. Verify your code however you deem best.
*/

function neededGPAIncrease() {
 /*your code*/
}

