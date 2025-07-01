"use strict";

// Strings are immutable which means when it is created it will not be changed 
// instead of it new string will be created and assigned.

let str = 'hello';
console.log(`Type of str is:${typeof str} and its value is:${str}`);
// str = str+ 'h';
// console.log(`Type of str is:${typeof str} and its value is:${str}`);

// And this is also a case of string immutable cannot be done becoz we have used use strict 
//  and if we remove it then it will print the str
// str[0]='H';
// console.log(str);

// String methods

let str1 = new String("hello");

// console.log(str == str1);//true
// console.log(str === str1);//false

// by using new keyword it will create a string object in heap and if we are normally creating then it is created in stack
// There is no char type in JS — every character is treated as a string.
let gameName = new String("Cricket");

console.log(typeof gameName);

// Internally, this object behaves almost like an array of characters, with indexes.
// Each character (like gameName[0], gameName[1], etc.) is a string of length 1.
// Even though gameName is an object, you can access characters using index notation (like an array).
console.log(gameName[0]);//h

// to print string length
console.log(gameName.length);

// to convert the string into uppercase
console.log(gameName.toUpperCase());

// to convert the string into lowercase
console.log(gameName.toLowerCase());

// to find a character at any position 
console.log(gameName.charAt(4));

// to find a substring
console.log(gameName.substring(0,3));

// to slice the string
console.log(gameName.slice(-7,4));

// to remove the leading spaces
let name = "    Kartik    ";
console.log(name);

let trimmed = name.trim();
console.log(trimmed);

// if you want to replace something
let url = "https://www.kartik0125@kartik.com"
console.log(url);
// replace will only replace first string not all
let newUrl = url.replaceAll("kartik","kar");
console.log(newUrl);

// to check whether string includes something
console.log(url.includes("kar"));

// to split the string into array on some basis
let arr = url.split(".");
console.log(arr);











