"use strict"; // It tells the JavaScript engine to run the code in strict mode — which means "be more careful" and "avoid bad practices."
// x=5;
// console.log(x); // gives error because x is not properly defined here

let name = "kartik"
let age = 18
let isLoggedIn = false
let state;

// Number:
// Used to store any kind of number: positive, negative, decimal.
// number => 2 to power 53
let price = 99.99;
let temperature = -5;
console.log(price);

// Used for very large numbers that can’t be stored in Number.
// bigint
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// Used to store text.Anything between quotes: " ", ' ', or ` ` (backticks).
// string => ""
let greeting = 'Hello!';
let message = `Welcome, ${name}`; // Template literal
console.log(message);

// Used to store true or false value
// boolean => true/false
let isStudent = true;
console.log(isStudent);

// Means "nothing" or "empty on purpose or we can say it is a representation of empty value".
// You manually set a variable to null to mean:"There is no value here — intentionally."
// null => standalone value
let user = null;
console.log(user);

// Used when variable is declared but not defined or assigned a value.
// undefined => 
let x;
console.log(x); // undefined


// A unique and hidden value.
// symbol => unique
let id = Symbol("userId");
let anotherId = Symbol("userId");
console.log(id === anotherId); // false (each symbol is unique)


// Non Primitive type(Referenced)
// It stores the key value pairs of any types
// object
const obj = {
    name:"John",
    age:18
};

console.log(obj["age"]);

// obj={

// };// gives error because obj is constant

console.log(typeof undefined); // undefined
console.log(typeof null); // object