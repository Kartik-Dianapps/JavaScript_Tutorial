"use strict";

// Month works on 0 based indexing here 

let date = new Date();
// console.log(typeof date);
// console.log(date);

// The toString() method returns a date object as a string.
// console.log(date.toString());
// The toDateString() method returns the date (not the time) of a date object as a string.
// console.log(date.toDateString());
// The toISOString() method returns a date object as a string, using the ISO standard.
// console.log(date.toISOString());
// The toLocaleString() method returns a Date object as a string, using locale settings.
// console.log(date.toLocaleString());

// console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
// gives till now milliseconds from 1 jan 1970
// console.log(date.getTime());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// gives current milliseconds 
// console.log(date.getMilliseconds());


// How to create custom date and here we have to mention month in 0 base indexing
let newDate = new Date(2025,0,31,12,23,45,555);
// console.log(newDate.toLocaleString());

// second way of creating custom date
// yy-mm-dd
let secondDate = new Date("2024-01-13");
// console.log(secondDate.toLocaleString());

// mm-dd-yy
let myCreatedDate = new Date("02-14-2023")
// console.log(myCreatedDate.toLocaleString());

// same as getTime()
let timestamp = Date.now();
console.log(timestamp);
console.log(date.getTime());

console.log(date.toLocaleString("default",{
    weekday:"long"
}));




