// there are two methods to create object
// object literal

// mySym is a variable which holds the unique symbol for key1 string and 
// if we want to make that unique symbol as a key then we can use that using [mySym] 

const mySym = Symbol("key1");
const JsUser = {
    name: "kartik",
    "full name":"kartik singh bisht",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "abc@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Wednesday", "Saturday"]
}
// console.log(mySym);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser.email);


// if you want to change any property value then we can change
JsUser.email = "abcd@gmail.com";
// console.log(JsUser);
// What if you don't want to change any of the property value then
// Object.freeze(JsUser);
JsUser.email = "ElysePerry@gmail.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser);

// [Function (anonymous)]:
// It just means: "Here's a function — but it doesn't have a name."
console.log(JsUser.greeting);
JsUser.greeting();
console.log(JsUser.greetingTwo);
JsUser.greetingTwo();
