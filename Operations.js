"use strict";

let value = 3
let negValue = -value
// console.log(negValue);

// Normal operations like add,sub,mul,div,mod
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Welcome"
let str2 = " Kartik"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// use of unary + in JavaScript converts its operand to a number.

console.log(+true);// 1
console.log(+false);// 0
console.log(+"kar",typeof +"kar");// NaN
console.log(+"");// 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2;

// Prefix and Postfix operator
let gameCounter = 100
let prefix = ++gameCounter;
console.log(prefix);
console.log(gameCounter);

let postfix = gameCounter++;
console.log(postfix);
console.log(gameCounter);


