// Demonstration of ES6 module
// Mainly we will export fn but we can export anything

// 1st way of exporting and 1st and 2nd way is called as named export 
// as the name we used to export the same name will be used to import

// export const add = (a,b)=>{
//     return a+b;
// }
// export const sub = (a,b)=>{
//     return a-b;
// }


// 2nd way of exporting
const add = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}
export {add,sub}