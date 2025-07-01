// this keyword
const user = {
    username:"Sammy",
    greetMssg:function(){
        console.log(`Welcome ${this.username} to our Community!!!!`);
        console.log(this);
    }
}

// This means current object
user.greetMssg();
// user.username = "Daniels";
// user.greetMssg();
console.log(this);

function one()
{
    let uname = "John"
    console.log(this);
    // console.log(this.uname); // undefined as it points to global object
}


const two = function(){
    let uname = "John"
    console.log(this);
    // console.log(this.uname); // undefined as it points to global object
}

const three = ()=>{
    let uname = "John"
    console.log(this);
    // console.log(this.uname); // undefined as it points to {}(empty object)
}

one();
two();
three();

// Arrow functions
// Basic syntax:
// const fun = ()=>{}

// Basic arrow function declaration and here we are explicitly mentioning the return statement
// const add = (num1,num2)=>{
//     return num1+num2;
// }

// other way of defining it is if it has only statement inside the function 
// then no req. of writing return and it is called as implicit return:
// const add = (num1,num2)=> num1+num2;
// const add = (num1,num2)=> (num1+num2);
// console.log(add(3,4));

// What if we want to return object then:
// const fun = ()=>{
//     return {username:"Kartik",profession:"Software Engineer"};
// }

// cannot send object like this here:
// const fun = () => {username:"Kartik",profession:"Software Engineer"}

// so to solve this issue use this
const fun = ()=>({username:"Kartik",profession:"Software Engineer"});
// console.log(fun);
// console.log(fun());


