/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b) {
//     //code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    //code block
    return a + b;
} 
let sum = addTwoNumbers(3, 5);
console.log(sum);
// Single Line Arrow Function With Parameters

// const addTwoNumbers2 = (a, b) => (a + b); // also valid, these are required if you want to return multiple lines of code.
const addTwoNumbers2 = (a, b) => a + b;
let sum2 =  addTwoNumbers2(1, 5);
console.log(sum2);

// Implicit Returns

const saySomething = message => console.log(message); // for single parameters the first parantheses can be left
saySomething('Hello there!!');

const sayHello = () => console.log('hello') // even if there are no parameters you must use an empty set of parentheses to make sure it is recognised as a function
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline string
    <p>`
) // If you need to return multiple lines of code, the parantheses around the code are REQUIRED
console.log(returnMultipleLines())