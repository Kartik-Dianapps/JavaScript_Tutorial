"use strict";
let age = 21;
// console.log(typeof age);
// console.log(typeof(age));

// If we want to convert a number to string then
let ageInString = String(age);
// console.log(typeof ageInString);
// console.log(ageInString);

// If we want to convert the age into boolean
// If age is +ve or -ve then it gives true and if it is 0 then it gives false
// let ageInBool = Boolean(age);
// console.log(typeof ageInBool);
// console.log(ageInBool);

// If we want to convert a string into number then
let score = "33"
let scoreInNumber = Number(score);
// console.log(scoreInNumber);
// console.log(typeof scoreInNumber);

// What if in string the number is totally diff then
score ="33abc";
scoreInNumber = Number(score);
// console.log(scoreInNumber); //NaN
// console.log(typeof scoreInNumber); //number

let name1 = "kartik";
// let nameInNumber = Number(name1);
// console.log(nameInNumber);
// console.log(typeof nameInNumber);

let empty = "";
console.log(typeof Number(empty),Number(empty));

// boolean to number
// true => 1 and false => 0
let boolValue = true;
let boolInNumber = Number(boolValue);
console.log(typeof boolInNumber);
console.log(boolInNumber);

// string to boolean
// stud = "John" => true 
// stud = "" => false
let stud = "John";
let studInBoolean = Boolean(stud);
// console.log(studInBoolean);
// console.log(typeof studInBoolean);

stud = "";
studInBoolean = Boolean(stud);
// console.log(studInBoolean);
// console.log(typeof studInBoolean);

// What if we want to convert null
let user = null;
let userInNumber = Number(user);// 0
let userInString = String(user);// "null"
let userInBoolean = Boolean(user);// false

// console.log(typeof userInNumber, userInNumber);
// console.log(typeof userInBoolean, userInBoolean);
// console.log(typeof userInString, userInString);

// what if we want to convert undefined then
let user1 = undefined;
let user1InNumber = Number(user1);// NaN
let user1InString = String(user1);// "undefined"
let user1InBoolean = Boolean(user1);// false

console.log(typeof user1InNumber, user1InNumber);
console.log(typeof user1InBoolean, user1InBoolean);
console.log(typeof user1InString, user1InString);

// string,null,undefined are not convertible into bigint while a number and boolean can be convertible
let big = BigInt(56);
console.log(typeof big , big);

// boolean to string
console.log(typeof String(true),String(true));


