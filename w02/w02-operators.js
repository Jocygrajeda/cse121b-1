/*JS Operators - Operators and comparisons
Operators #

Write a Javascript snippet to do each of the following. Make your best guess if you don't know. Make sure to put some sort of response on each:

    Add two numbers
    Multiply two numbers
    Subtract one from a number
    concatinate two strings together.
    assign a value to a variable
    increment the value in a variable by 3
    compare two values to see if they are the same
    check to see if one number is less than another number
    Check to see if two values are NOT equal
    check to see if a value is less than 10 and greater than 0
*/

//Add two numbers
const sum = 5 + 3;
console.log(sum); // Output: 8

//Multiply two numbers:
const product = 4 * 6;
console.log(product); // Output: 24

//subtract one from a number:
const result = 10 - 1;
console.log(result); // Output: 9

//Concatenate two strings together:
const str1 = "Hello, ";
const str2 = "world!";
const combinedStr = str1 + str2;
console.log(combinedStr); // Output: Hello, world!

//assign a value to a variable:
let myVariable = 42;
console.log(myVariable); // Output: 42

//Increment the value in a variable by 3:
let myNumber = 7;
myNumber += 3;
console.log(myNumber); // Output: 10

//Compare two values to see if they are the same:
const value1 = 5;
const value2 = 5;
const areEqual = value1 === value2;
console.log(areEqual); // Output: true

//Check to see if one number is less than another number:
const num1 = 8;
const num2 = 12;
const isLessThan = num1 < num2;
console.log(isLessThan); // Output: true

//Check to see if two values are NOT equal:
const a = 10;
const b = 20;
const areNotEqual = a !== b;
console.log(areNotEqual); // Output: true

//Check to see if a value is less than 10 and greater than 0:
const value = 5;
const isInRange = value > 0 && value < 10;
console.log(isInRange); // Output: true