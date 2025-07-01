"use strict";

// Primitive datatypes uses stack memory as they gets a copy of original one and 
// changes made by other variable will be reflected in copy one not in original one.

let res = 10;
let res1 = res; // A copy of res is assigned to res1

console.log("res:", res, "res1:", res1); // res: 10 res1: 10

res1 = 15; // Changes res1, but res stays the same

console.log("res:", res, "res1:", res1); // res: 10 res1: 15

// and here a copy of res is given to res1 and changes made by res1 will be reflected in res1 not in original res1.

//But in case of Heap memory we get the reference of the original and if any changes made by other one 
//will be reflected in original one.

const obj = {
name:"John",
email:"abc@gmail.com"
};
console.log(obj);

const obj1 = obj;
obj1.email = "john@gmail.com";
console.log(obj);

// here obj1 holds reference of obj and any changes made by obj1 will be reflected in obj also.

