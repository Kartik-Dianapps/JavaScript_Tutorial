"use strict";

// Primitive Types - number,string,null,undefined,boolean,bigint,symbol

const score = 100;
const price = 129.68;

let user;

const isLoggedIn = true;
const temp = null;

const id = Symbol("hey");
const otherId = Symbol("hey");

console.log(id === otherId);
console.log(user, typeof user);

const bigValue = 63567573788n;

console.log(typeof bigValue,bigValue);

// Reference Type(Non-Primitive)
// Arrays,object,functions

const marvel = ["Iron Man","Thor","Black Panther","Black Widow"];

const obj = {
    Name:"Kartik",
    age:21
};
// This obj cannot bw reassigned as it is constant

const fun = function(){
    console.log("This is the Datatype Summary chapter in Javascript!!!!");
}

console.log(typeof marvel,marvel);
console.log(typeof obj,obj);
console.log(typeof fun,fun);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/