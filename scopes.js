// "use strict";

// var c = 100;
// console.log("Old c Value:",c);
// if we had declared a variable with let then it cannot be redeclared like var
let c = 100;
const b = 5;

// console.log("Outside b value:",b);
// console.log("Outside c value:",c);
// these curly braces is called block scoped
if (true) {
    let a = 10;
    const b = 20;
    // console.log("Inner b:",b);

    // cannot be declared if let is used with var
    // var c = 30;
    // but using let with let we can
    let c = 11;
    // console.log("Inner c value:",c);

}

// console.log(a);
// console.log(b);

// console.log("New c Value:",c);
// console.log(c);


// scope part 2

function one() {
    const username = "Kartik";

    function two() {
        const website = "www.kartik.com"
        console.log(website);
        console.log("Username is:", username);
    }
    // here website cannot be accessible as it is block scoped inside the two() but 
    // console.log(website);
    two();
}
one();

if (true) {
    const username = "Kartik_0125";
    if (username === "Kartik_0125") {

        const website = "www.kartik.com";
        console.log(`This is my username :${username} and my website url is:${website}`);
    }
    // cannot accessible it is block scoped inside the if block
    // console.log(website);
}
// cannot accessible as it is block scoped inside the if block
// console.log(username);

console.log(addOne(5));
function addOne(num)
{
    return num + 1;
}

// cannot access before the function as it is stored in a constant variable
console.log(addTwo(6));
const addTwo = function(num){
    return num + 2;
}


// Hoisting example
console.log(a); // undefined
var a = 10;

greet(); // works
function greet() {
  console.log("Hello");
}

// JS internally treats this code as 
/*
When the JavaScript engine parses this code, it does hoisting first — which means:
All variable and function declarations are moved to the top of their scope (in this case, the global scope).
Only declarations are hoisted, not assignments.

Hoisted Declarations
var a; // declaration hoisted (not assignment)

function greet() {
  console.log("Hello");
}

Actual Code (after hoisting)
console.log(a); // undefined, because only `var a;` is hoisted, not `a = 10`
a = 10;

greet(); // Works fine — greet was hoisted completely

*/
