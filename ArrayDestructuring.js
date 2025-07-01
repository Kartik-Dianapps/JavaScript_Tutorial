// Destructuring of Array
let arr = ["John","Lokesh"]
const [name1,name2] = arr;
const user = {
    name:"kartik",
    age:30,
    sayHi:function(){console.log("Hi:",this.name);
    } 
}
// console.log(user.address);

const {name:nickname} = user;
// console.log(name1);
// console.log(name2);
// console.log(nickname);
let fname;
let lname;
[fname,lname] = "Kartik Singh".split(" ");
console.log(fname);
console.log(lname);
// console.log("Kartik Singh".split(" "));// returns an array


// let a = 9;
// let b = 10;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);

// wwe can skip unwanted elements
let [c,,d] = ["Shailesh","Bhadwa","Mangal","MKC"];
// console.log(c,d);

let [d1,d2] = "abcd"
// console.log(d1);
// console.log(d2);

// Set 
let set = new Set([1,2,3,3,4]);

console.log(typeof set); // object

for (const element of set) {
    console.log(element);
}

console.log(set);
// add
set.add("bkl")
set.add("bkl")
console.log(set);
set.delete(2);
console.log(set);
console.log(set.delete("bkl"));
console.log(set);
set.clear();
console.log(set);

console.log(set.entries());
console.log(set.has("bkl"));
console.log(set.has(-1));
console.log(set.has(1));

console.log(set.size);
console.log(set.keys());
set.forEach((item)=>{
    console.log(item);
})

// array destructuring not only works with arrays we can use any iterable on which for of loop can be applied
// let [d3,d4,d5,d6] = set;
// console.log(d3,d4,d5,d6);

// const map = new Map();
// map.set("IN","India");
// map.set("USA","United States of America");
// map.set("FR","France");
// console.log(map);

// let [kp1,kp2] = map;
// console.log(kp1);
// console.log(kp2);


const user1 = {};
[user1.firstname,user1.lastname] = "Kartik Singh".split(" ");

// copying the reference of fn from user to user1
// user1.sayHi = user.sayHi;

// user.sayHi();
// user1.sayHi();

console.log(Object.entries(user1));

// let num = new Number(1);
// console.log(typeof num);

// Looping with entries
for (const [key,value] of Object.entries(user1)) {
    console.log(`${key}:${value}`);
}


// by this destructuring we can swap values of variables
let guest = "Jane";
let admin = "Pete";
[guest,admin] = [admin,guest]
// console.log(guest,admin);

// rest operator
let myArray = ["Caesar","Cipher","PlayFair","RSA","SHA"];
let [alg1,alg2,...extra] = myArray;
console.log(alg1);
console.log(alg2);

// rest is an array of items, starting from the 3rd one
console.log(extra);//array of remaining elements
console.log(extra.length);
console.log(extra[0],extra[1]);

// we can also give default values also 
// let [f,s] = []
// let [f,s] = [1]
// console.log(f);
// console.log(s);

// so for this kind of case we use default values as if values are not there in array then we can use default values
// let [f="kartik",s="Singh"] = [];
// [f="kartik",s="Singh"] = ["Kartik"];
// console.log(f);
// console.log(s);

// let [name=prompt("enter name?"),surname=prompt("enter surname")] = ["Kartik"];
// console.log(name);
// console.log(surname);
// here the prompt will work for missing value only


let [a1,[s3,s4],[a3,a4,a5],s5,s6="Kartik"] = [1,[2,3],[4,5,6],9]
console.log(a1,s3,s4,a3,a4,a5,s5,s6);


// Object Destructuring 
let options = {
    title:"Menu",
    height:40,
    width:50
}
// let {title,...remaining} = options;
// console.log(title);
// console.log(remaining);

// like in arrays we can't use declared variables with let so for this there is special syntax
let title;
let width;
let height;
// this below syntax does not work 
// {title,height,width} = options;

// so the solution is below:
({title,height,width} = options);
console.log(title);
console.log(height);
console.log(width);


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
// Note that there are no variables for size and items, as we take their content instead.

// Smart fn parameters
// function sayHi({title="New Menu", items=[item1="Chocolate",item2="Dahi Bade"],height=40,width=50})
// {
//     console.log(`Title of this topic is ${title}`);
//     console.log(`width and height of this page is ${width}px and ${height}px`);
//     console.log(`Items on this page is ${item1} and ${item2}`);
    
// }
const newOptions = {
    title:"Destructuring",
    items:["Cake","Donut"],
}
// sayHi(newOptions);
// what if we does not pass the object then 
// sayHi({}); // works well

// sayHi(); // gives error and if we want this to work then use this 
function sayHi({title="New Menu", items=[item1="Chocolate",item2="Dahi Bade"],height=40,width=50}={})
{
    console.log(`Title of this topic is ${title}`);
    console.log(`width and height of this page is ${width}px and ${height}px`);
    console.log(`Items on this page is ${item1} and ${item2}`);
    
}
// sayHi(newOptions);
sayHi();