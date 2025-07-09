// local Storage
// Data is stored in browser permanently after closing or refreshing the browser
// Data is stored in key value pairs where key and value both will be string and key is always unique here

// let key = prompt("Enter your key:")
// let value = prompt("Enter your key-value:");

// How to store (key,value) in localStorage
// localStorage.setItem(key,value);

// console.log(`The value of ${key} is ${value}`);

// How to get value of a key from localStorage
// if key exists then its value is returned otherwise null is returned
console.log(localStorage.getItem("a"));

// How to remove a (key,value) from localStorage
// localStorage.setItem("null","5")

// localStorage.removeItem("null")

// How to clear localStorage
// localStorage.clear();

// How to get a key of particular index
// console.log(localStorage.key(4));

// How to check how many items(key,value) are there in localStorage
// console.log(localStorage.length);

// how to store objects in localStorage
let object = {
    name:"Kartik",
    age:21
}
// Firstly we have to convert the object into string then add it using setItem()
localStorage.setItem("user",JSON.stringify(object));

// Without JSON.parse the object is treated as string
// console.log(localStorage.getItem("user"));

// to get as an object use .parse()
console.log(JSON.parse(localStorage.getItem("user")));
