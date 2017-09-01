"use strict";

// argv holds whatever we typed in the terminal to launch the application, like "node main.js hello"
console.log('the arguments', process.argv );
let myArg = process.argv[2];
console.log(`Hello, ${myArg}`);

// capture multiple args, no matter how many, using destructuring assignment
let [,, ...myArgs] = process.argv;

console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));