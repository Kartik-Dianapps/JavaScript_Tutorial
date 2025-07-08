// Here these both array and object are objects

let myArray = ["thor","spiderman"];

let heroes = {
    thor:"Hammer",
    spiderman:"sling"
}

// What if i want to add a fn to Object then this fn will be accessible by all objects
Object.prototype.greet = function(){
    console.log("Hi everyone this is new function");
}

// myArray.greet();
// heroes.greet();

// What if i want to add this fn only in Array then 
Array.prototype.hello = function () {
    console.log("SayHello fn");
}

// myArray.hello();
// heroes.hello();//gives error


// Inheritance in Prototype

const User = {
    name: "Wong",
    email: "thai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax is 
// Object.setPrototypeOf(TeachingSupport, Teacher)
