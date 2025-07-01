// const f = function(){};

// if(f)
// {
//     console.log("hi");
    
// }

const userEmail = []
if(userEmail)
{
    console.log("We got a user email...");
}
else
{
    console.log("Please provide an email...");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0)
{
    console.log("Array is Empty...");
}

const obj = {}
if(Object.keys(obj).length === 0)
{
    console.log("Object is empty...");
}


// var x;//undefined
// let x;//undefined
// console.log(x);

// Nullish Coalescing Operator : null or undefined
let name;
let val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = name ?? 10;
val1 = name ?? 10 ?? 20;
// console.log(val1);
// console.log("Name:",name);

// Ternary Operator
let age = 17;
(age < 18)?console.log("Not Eligible to vote"):console.log("Eligible to vote");


