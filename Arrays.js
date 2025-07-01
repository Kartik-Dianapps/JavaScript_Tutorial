"use strict";

// Array is resizeable in JS

// 1st way to create array
let arr = [1,2,3,4];
console.log(typeof arr);
// console.log(arr);

// 2nd way to create array
let arr1 = new Array(6,7,8,9,10);
// console.log(typeof arr1);
// console.log(arr1);


// Array methods

arr.push("john");
console.log(arr);

arr.pop();
console.log(arr);

// inserts the element in the begining of the array
arr.unshift("kartik");
// console.log(arr);
arr.unshift(0);
// console.log(arr);

// removes first element from the array
arr.shift();
// console.log(arr);
arr.shift();
// console.log(arr);


// console.log(arr.includes(5));
// console.log(arr.indexOf(4));

let newArr = arr.join();
// console.log(newArr);
let arr2 = arr.join("..");
// console.log(arr2);
// console.log(arr2[1]);


// slice and splice

// slice - left to right in negative index also
let sliced = arr.slice(0,2);
// console.log(arr);
// console.log(sliced);

// splice - it affects the original array 
let spliced = arr.splice(0,2);
// console.log(arr);
// console.log(spliced);


const names = ["John","Kartik"];
const special = ["Dogesh Bhaii","Shailesh"];

// names.push(special);
// console.log(names);

let merged = names.concat(special);
// console.log(merged);

// spread operator spreads the array
let newMerged = [...names, ...special];
console.log(newMerged);


// to flat an array
const complex = [1,2,3,[4,5],6,[7,[8,9]]];
const simplified = complex.flat(Infinity);
console.log(simplified);

// we can also check it is an array or not
console.log(Array.isArray("abcd"));
console.log(Array.from("abcde"));
console.log(Array.from(13));
const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));




