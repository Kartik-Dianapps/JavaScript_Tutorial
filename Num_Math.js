"use strict";
let score = 100;

// here newScore is a Number object
let newScore = new Number(100);

console.log(score);
console.log(newScore);

// to convert the number to string 
console.log(newScore.toString());

// to set how many decimal places will be there after point
console.log( typeof newScore.toFixed(2));

// to set how many digits will be there in the number
console.log(newScore.toPrecision(2));

// to make good representation of large number
let rokda = 1000000;
// acc to us standard
console.log(rokda.toLocaleString());

// acc to Indian Standard
console.log(rokda.toLocaleString("en-IN"));

// MAX_VALUE
console.log(Number.MAX_VALUE);
// MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
// MIN_VALUE
console.log(Number.MIN_VALUE);
// MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER);


// ***********************Math**************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

// Math.random() gives value between 0 and 1
// console.log(Math.floor(Math.random()*10));

// If you want to get a number between 1 and 10 and both are inclusive
// console.log(Math.floor(Math.random()*10) + 1);

// If you want to get a number between the range(inclusive) 
let min = 10;
let max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);