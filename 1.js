//var has Function scope here because x is accessible inside the function.
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 (var is visible outside the if block)
}
testVar();

// var has global scope here means can be accessible from anywhere in this file.
var y=45;
if(true){
    console.log(y);
    y="467";
    console.log(y);
    y="289";
}
console.log(y);

// var can be redeclare.

var y=49;
function f(){
    var z=47;
    if(true){
        console.log(z);
    }
    console.log(y);
}
f();
// console.log(z); //cannot access z because it is function scoped

// Hoisting in var

// var is hoisted to the top of its scope and initialized as undefined.
console.log(a);
var a=4;
console.log(a);

// let is hoisted to the top but not initialized, so using it before declaration gives an error.
// console.log(b);
let b=5;
console.log(b);

{
    let b=45;
    console.log(b);
}

console.log(b);

let c;
console.log(c);

// const d; //const cannot be declared without value but let and var can.


