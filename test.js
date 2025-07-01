// hoisting happens here
// console.log(c);
// if("3" !== 3)
// {
// var c=3;
// }

// var c=5;
// console.log(c);
// if("3" !== 3)
// {
// var c=3;
// console.log(c);
// }
// console.log(c);

// let c=3;
// console.log(c);
// if("3" !== 3)
// {
// c=5;
// console.log(c);
// }
// console.log(c);


// using new 
// String,Object,Array

// Practice
// alert() is used to show the pop up with a mssg
// prompt() is used to take user input and it takes 2 parameters one is title which means what text to show in modal window
// and second one optional which means the default value for the input field.
// confirm() shows a message and waits for the user to press “OK” or “Cancel”. 
// It returns true for OK and false for Cancel/Esc.

// Operators
// Exponentiation - **
// console.log(2**2);
// console.log(3**4);

// console.log(4**(1/2));
// console.log(3**(1/2));

// String Concat
// console.log("my"+"string");
// Note that if any of the operands is a string, then the other one is converted to a string too.
// console.log(1 + '2');
// console.log('1' + 2);
// console.log(2 + 2 + '1');
// console.log('1' + 2 + 2);
// The binary + is the only operator that supports strings in such a way. 
// Other arithmetic operators work only with numbers and always convert their operands to numbers.

// The unary plus or, in other words, the plus operator + applied to a single value,
// doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// console.log(+1);
// console.log(+(-1));

// console.log(+true)
// console.log(+false)
// console.log(+"");
// console.log(+"abc");
// console.log(+"123");
// console.log(+null);
// console.log(+undefined);
// console.log(+123n);//error cannot convert bigint to number



const user = {
    "name":"John",
    age:30
}
// console.log(user.name);
// console.log(user["name"]);

// console.log(user["age"]);
// console.log(user.age);


// want to set property name
// user.isAdmin = true;
user["isAdmin"] = true;
// console.log(user.isAdmin);
// console.log(user["isAdmin"]);

// console.log(user);

// want to delete property
// delete user.isAdmin
delete user["isAdmin"];

// want to set the multi word property name
// user["like birds"] = true;
const key = "like birds";
user[key] = true;


// console.log(user);
// console.log(user.like birds);//error

// want to access multiword property name
// console.log(user["like birds"])

// want to delete multiword property name
delete user["like birds"];
// console.log(user);



const newUser = {
    1:"HI",
    2:4
}
// console.log(newUser[1]);
// console.log(newUser["1"]);
// console.log(newUser);

// console.log(newUser["2"]);
// console.log(newUser[2]);

// newUser["1"] = "jsndcj";
// newUser[1] = "jsndcj";
// console.log(newUser);


// special scenario
function makeUser(name,age)
{
    return {
        name:name,
        age:age
    }   
}

// let user2 = makeUser("Mr.Hola",30);
// console.log(user2);
// now to minimize this we can do by this
// function makeUser(name,age)
// {
//     return {
//         name,//same as name:name
//         age  //same as age:age
//     }   
// }

function makeUser(name,age)
{
    return {
        name,//same as name:name
        age:age
    }   
}
let user3 = makeUser("Mr.Fameer Fuddi",30);
// console.log(user3);

// A notable feature of objects in JavaScript, compared to many other languages, is that 
// it’s possible to access any property. There will be no error if the property doesn’t exist!
// Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

// console.log(user3.key === undefined);

// in operator for object
// syntax - "key" in object
// console.log("age" in user3);
let key1 = "name";
// console.log(key1 in user3)

for (let key in user3) {
    console.log(`${key}:${user3[key]}`);
}

let codes = {
    91:"India",
    92:"Pakistan",
    "1":"France"
}
// for (let key in codes) {
//     console.log(`${key}:${codes[key]}`);
// }
let data = {
  items: []
};

// console.log(data?.items[0]?.name); // "Pen"
// console.log(data?.items?.[1]?.name); // undefined (safe)

const {name:uname} = user;
// console.log(uname);

function change(d1){
    d1["97"]="Italy"
}
change(codes);
// console.log(codes);

// let obj1 = {};
// let obj2 = obj1;
// console.log(typeof obj2);
// console.log(obj1 == obj2);
// console.log(obj1 === obj2);
// let obj3 = {};
// console.log(obj1 == obj3);
// console.log(obj2 === obj3);

// const clone = {};
// for (let key in user3) {
//     clone[key] = user3[key];
// }
// console.log(clone);

// clone.name = "Mr.Sameer Fuddi";
// console.log(clone);


const d1 = {name:"Kartik",age:30};
const d2 = {age:21};
const d3 = {city:"Jaipur"};
// Object.assign(d1,d2,d3);// merges d2 and d3 into d1 and d1 gets updated
// console.log(d1);
// console.log(d2);
// console.log(d3);

const d4 = {name:"Kartik"};
const d5 = {name:"Peter Parker"}
// Object.assign(d4,d5);
// console.log(d4);//overwrites the old value if the property name is same
// console.log(d5);

// Good Practice is this:here d1,d2,d3 are merged into {} and returns the target object
// const obj6 = Object.assign({},d1,d2,d3);
// console.log(obj6);
// console.log(d1);
// console.log(d2);
// console.log(d3);

const u1 = {
    name:"Kartik",
    size:{
        width:40,
        length:50
    }
}

// const u2 = {};
// for (const key in u1) {
//     u2[key] = u1[key]
// }
// console.log(u2);
// u2.size.width = 50;
// console.log(u1);
// call be reference issue in above and below

const u3 = Object.assign({},u1);
// console.log(u1);

// console.log(u3.size === u1.size);//here size propertyName is pointing to same object address or ref

// changed here if using spread operator
// const u5 = {...u1};
// console.log(u5);
// u5.size.width = 50;
// console.log(u1);

// so to solve this sol is structuredClone()
// The call structuredClone(object) clones the object with all nested properties.
const u4 = structuredClone(u1);
// console.log(u4);
// u4.size.length=60;
// console.log(u4);

let u6 = {};
// let's create a circular reference:
// user.me references the user itself
u6.me = u6;

let clone1 = structuredClone(u6);
// console.log(clone1.me === clone1); // true

// Constructor Fn

// let fun = ()=>
// {
//     console.log(this);
// }
// fun();

// Now the use of this is we don't have to create many objects by {} again and again 

function User(name)
{
    console.log(this);
    this.name = name;
    this.age = 21;
    console.log(this);
    // to check whether this fn is called using new keyword or not we use 
    // if it gives undefined then normally called and otherwise it is called using new keyword
    console.log(new.target);
}

// When a function is executed with new, it does the following steps:
// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.

let u8 = new User("Kartik");
// console.log(u8);
// User("kartik");


// Immediately Called Constructor fn which will be called only once
let u9 = new function(){
    this.fruit = "Apple",
    this.color = "Red"
};
// console.log(u9);

u8.fun = function()
{
    this.color = "Fair";
}
u8.fun();
console.log(u8);

// Object methods and this
const user1 = {
    name:"Kartik",
    age:21,
    // sayHi:function(){
    //     console.log(`Hello ${this.name}!!!`);
    // }
}
// 2nd way to create this method is 
// user1.sayHi = function(){console.log(`Hello ${this.name}!!!`);}
// 3rd way is
function sayHi()
{
    console.log(`Hello ${this.name}!!!`);
}
user1.sayHi = sayHi;
user1.sayHi();

// A function that is a property of an object is called its method.

// Now shorthand of this fn is shown below
const user4 = {
    name:"Kartik",
    sayHi()
    {
        console.log(`Hello ${this.name}`);
    }
};
// user4.sayHi();

let myObj = {
    name:"Kartik"
}
let admin = {
    name:"Admin"
}

function greet()
{
    console.log(this);
    console.log(`Hello ${this.name}`);
}
greet();

// You're copying the function reference greet into both myObj.f and admin.f.
myObj.f = greet;
admin.f = greet;
myObj.f();
admin.f();
admin["f"]();

admin.f1 = ()=>{
    console.log(this);
    console.log(this.name);
}
admin.f1();
console.log(admin);

let superAdmin = {
    name:"Admin",
    // here sayHi:function(){} below internally looks like this
    sayHi(){
        let arrow = ()=>{
            console.log(this.name);
        }
        arrow();
    }
}
// console.log(sayHi);
// superAdmin.sayHi();
