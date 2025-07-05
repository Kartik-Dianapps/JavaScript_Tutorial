// Promise Topic and mostly we will consume the promise

// How to create a promise
const promiseOne = new Promise(function(resolve,reject){
    // async tasks will be written here which takes some time
    setTimeout(()=>{
        console.log("Async task is completed!!!");
        resolve();
    },1000);
})

// How to consume promise after creation
promiseOne.then(function(){
    console.log("Promise resolved!!!");
})
// console.log(promiseOne);


// 2nd way to create promise
new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("Async operation is done");
        resolve();
    },1000);
}).then(function(){
    console.log("Task2 is resolved!!!");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"gkb",age:22});
    },1000);
})
promiseThree.then(function(res){
    console.log(res);
})
// console.log(promiseThree);


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error)
//         {
//             resolve({username:"Kartik",age:21})
//         }
//         else
//         {
//             reject("Error:Something went wrong")
//         }
//     },1000);
// })

// Promise chaining
// Whenever you return a value from a .then() callback
// That value is automatically wrapped into a new resolved promise.


// and finally does not accept any parameters and it can be placed anywhere and always executed
// what if a promise is rejected and not handled then error will be thrown and in case of resolve nothing happens

// promiseFour
// .then(function(user){
//     console.log(user);
    
//     return user.username;
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.error(error);
// })
// .finally(()=>{
//     console.log("Promise is either resolved or rejected!!!");
// })


// we can handle promises by using async await also
// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         let error = true;
//         if(!error)
//         {
//             resolve({course:"Javascript",price:3000})
//         }
//         else{
//             reject(new Error("Error:Something went wrong!!!"))
//             // reject("Hi")
//         }
//     },1000);
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers();

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(response=>{
//     return response.json();
// })
// .then(jsonResponse=>{
//     console.log(jsonResponse);
    
// })
// .catch((err)=>{
//     console.log(err);
// })





// let promise = new Promise(function(resolve, reject) {
//   // after 1 second signal that the job is finished with an error
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// //   setTimeout(() => resolve("Whoops!"), 1000);
// });
// promise.then((res)=>{console.log(res);
// },(e)=>{console.log(e);})

// agr successfull completion ho jata hai async task ka then resolve() call hoga 
// lekin agr koi error or reject() call ho jata hai toh promise reject ho jata hai