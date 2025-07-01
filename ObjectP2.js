"use strict";

// to create object by 2nd method by constructor

let tinderUser = new Object();
tinderUser.id = 1;
tinderUser.name = "Shailesh";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

// Nested Object
const regularUser = {
    name:"Kartik",
    address:{
        permanentAddr:{
            street:"Khirni Phatak",
            houseNo:"17-A"
        }
    }
}
// console.log(regularUser.address.permanentAddr.street);

// how to merge two objects

let obj1 = {1:'a',2:'b'};
let obj2 = {3:'c',4:'d'};

// what if we do this 
let obj3 = {obj1,obj2};
// console.log(obj3);

// 1st method using assign method and it returns the modified target object
// here target object is {} and source object is obj1,obj2
let obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);
// console.log(obj1);

// let obj4 = Object.assign(obj1,obj2);
// If we do like this then key value pairs of obj2 will be merged into obj1 and obj1 changes
// console.log(obj4);
// console.log(obj1);


// 2nd method using spread operator

let obj5 = {...obj1, ...obj2};
// console.log(obj5);

let users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "def@gmail.com"
    },
    {
        id: 3,
        email: "ghi@gmail.com"
    }
];

// console.log(users);
// console.log(users[2].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));


// Object Destructuring
const course = {
    coursename:"Js",
    fee:"$500",
    courseInstructor:"Kartik"
};

let {fee} = course;
console.log(fee);

const {coursename:cname} = course;

// gives error because coursename name changed to cname here 
// console.log(coursename);// error

console.log(cname);


const options = {
    title:"Menu",
    height:40,
    width:50
}
let {title,...remaining} = options;
console.log(title);
console.log(remaining);

// Nested Destructuring

options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true,
//   title1:"NewMenu"
};
let {size:{width:w,height:h},items:[item1,item2],title1="Menu"} = options
console.log(w,h,item1,item2,title1);


const user = { 
        name: 'Alex',
        address: '15th Park Avenue',
        age: 43,
        department:{
            name: 'Sales',
            Shift: 'Morning',
            address: {
                city: 'Bangalore',
                street: '7th Residency Rd',
                zip: 560001
            }
        }
};
// const {department} = user;
// console.log(department);

const {department:{address:{zip}},salary = 500000} = user
// console.log(department);
// console.log(address);
console.log(zip);
console.log(salary);
