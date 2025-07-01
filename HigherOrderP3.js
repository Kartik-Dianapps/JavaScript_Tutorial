// by using forEach()
let res = [];
let nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach( (num) => {
    res.push(num+10);
} )
// console.log(res);

// by using map 
// If the callback doesn't return anything, map() will put undefined in the new array.
let newNums = nums.map( (num) => {
    return num + 10;
} )
// console.log(newNums);

const nums2 = nums.map( (num) => {return num * 10} )
                    .map( (num) => (num + 1) ) // .map( (num) => num+1 )
                    .filter( (num) => num >= 40 );

// console.log(nums2);



// reduce()
const nums3 = [1,2,3];

// const total = nums3.reduce( function(acc,currVal){
//     console.log(`acc:${acc} and currValue:${currVal}`);
//     return acc + currVal
// },0);
// console.log(`Sum of elements in array:${total}`);

// 2nd way 
// const total = nums3.reduce( (acc,currVal) => (acc + currVal),0);
// console.log(`Sum of elements in array:${total}`);

// 3rd way 
// const total = nums3.reduce( (acc,currVal) => acc + currVal,0);
// console.log(`Sum of elements in array:${total}`);


const shoppingCart = [
    {
        courseName:"Js Course",
        price:2199
    },
    {
        courseName:"Java Course",
        price:12199
    },
    {
        courseName:"Data Science Course",
        price:4999
    }
];
const priceToPay =  shoppingCart.reduce( function(acc,curr){ 
    console.log(`acc:${acc} and value:${curr.price}`);
    return acc + curr.price 
} ,0)

// const priceToPay =  shoppingCart.reduce( (acc,curr) => acc + curr.price ,0)
console.log(priceToPay);


