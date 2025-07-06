// We will use module like commonJs 
// This is the way of commonJs module

// If module.exports is exporting a single fn then no requirement of {}
// const hello = require("./module1")

// If multiple fn are exported then use destructuring

// const {hello,ahello} = require("./module1")
// hello();
// ahello("Kartik")

//          OR

const {hello:greet,ahello:newGreet} = require("./module1")
greet();
newGreet("Kartik")