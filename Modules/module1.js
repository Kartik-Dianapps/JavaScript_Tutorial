// Modules demonstration
const hello = ()=>{
    console.log("Hello Everyone!!!");
}
const ahello = (name)=>{
    console.log(`Hello ${name}`);
}
// If we are exporting a single fn then no requirement of using {}
// module.exports = hello;

// If multiple then use this
module.exports = {hello,ahello}