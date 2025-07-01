"use strict";

// 1st way of defining functions
function greeting(){
    console.log("Hello This is Javascript Functions file!!!");
}

function addTwoNumbers(num1,num2)
{
    if(typeof num1 === typeof num2)
    {   if(!isNaN(num1) && !isNaN(num2))
        console.log("Result:",num1+num2);
        else
        console.log("One of the value or both is NaN");
    }    
    else
    console.log("Enter valid input values!!!");
}

function greetUser(username)
{
    return `Welcome ${username} to our Js Tutorial.....`;
}

function greet(username="Darren Sammy")
{
    return `Welcome ${username} to our Js Tutorial.....`;
}

function loginUserMessage(username = "sam"){

    // if(username === undefined){
    //     console.log("PLease enter a username");
    //     return
    // }

    if(!username){
        console.log("PLease enter a username");
        return
    }

    return `${username} just logged in`
}

// greeting();
// addTwoNumbers(3,NaN);

// but the problem here is we are not checking the type of num1 and num2 
// so if user sends any other type value instead of number then also it gives output
// to resolve this we have to make checks....
// addTwoNumbers(2,null);
// addTwoNumbers(1,"a");

// If we don't give the arguments then the parameters will have undefined value
let result = greetUser();
// console.log(result);
result =  greetUser("Kartik");
// console.log(result);

result = greet();
// console.log(result);
result = greet("Kartik");
// console.log(result);

let mssg = loginUserMessage("John");
// console.log(mssg);
mssg = loginUserMessage();
// console.log(mssg);


// rest operator
// function calculateOverallPrice(num1){
//     return num1;
// }
// If only argument is passed then
// console.log(calculateOverallPrice(200));
// What if i passed more than one arguments then also it prints only first value
// console.log(calculateOverallPrice(200,300,400,500));

// now rest operator comes into play
// here all the values are bundled together in an array called num1
function calculateOverallPrice(...num1){
    return num1;
}

function printUser(obj)
{
    console.log(`Hey I am ${obj.username} and my hobby is ${obj.hobby}`);
}

function printArray(arr){
    console.log(arr);
    console.log(`This is 1st element of array:${arr[0]}`);
}

console.log(typeof calculateOverallPrice(200,300,400,500));
console.log(calculateOverallPrice(200,300,400,500));


const user = {
    username:"Kartik",
    hobby:"Cooking"
};

const arr = [100,2,300,500,4];

// printUser(user);
// printArray(arr);

// and we can pass object and array like this also 
printUser({
    username:"kartik_0125",
    hobby:"Cooking"
})
printArray([1,2,4,5]);
