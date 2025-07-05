// Promise Methods
// There are 6 static methods of Promise class

// Promise.all()
// Promise.all takes an iterable (usually, an array of promises) and returns a new promise.
// The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.
// For instance, the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:
// const p1 = new  Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve(1);
//     },3000)
// })
// const p2 = new  Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve(2);
//     },2000)
// })
// const p3 = new  Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve(3);
//     },1000)
// })
// let promiseAll = Promise.all([p1,p2,p3])
// .then((res)=>{console.log(res);
// })
// .catch((err)=>{console.log(err)});
// console.log(promiseAll);

// a Good Example
// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];

// // map every url to the promise of the fetch
// let requests = urls.map(url => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => alert(`${response.url}: ${response.status}`)
// ));


// If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then((res)=>{console.log(res)}).catch((err)=>{console.log("Promise ki ess tess ho gyi");
// })

// For example, if there are multiple fetch calls, like in the example above, 
// and one fails, the others will still continue to execute, but Promise.all won’t watch them anymore. 
// They will probably settle, but their results will be ignored.

// Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises. 
// But if any of those objects is not a promise, it’s passed to the resulting array “as it is”.

// Promise.all([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000)
//   }),
//   "Hi",
//   3
// ]).then((res)=>{console.log(res);
// }); // 1, 'Hi', 3



// Promise.allSettled()
// If any of the promise is rejected then won't stop executing the other ones returns the status of array of all promises
// The resulting array has:
// {status:"fulfilled", value:result} for successful responses,
// {status:"rejected", reason:error} for errors.

// Promise.allSettled([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then((res)=>{console.log(res)}).catch((err)=>{console.log("Promise ki ess tess ho gyi");
// })

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];

// let p = Promise.allSettled(urls.map(url => fetch(url)))
//   .then(results => { 
//     console.log(results);
    
//     results.forEach((result, num) => {
//       if (result.status == "fulfilled") {
//         console.log(`${urls[num]}: ${result.value.status}`);
//       }
//       if (result.status == "rejected") {
//         console.log(`${urls[num]}: ${result.reason}`);
//       }
//     });
//   });
// console.log(p);



// Promise.race()
// Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

// p = Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then((res)=>{console.log(res)}); 
// console.log(p);
// The first promise here was fastest, so it became the result. 
// After the first settled promise “wins the race”, all further results/errors are ignored.



// Promise.any()
// Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. 
// If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.

// p = Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

// What if all promises are rejected
// If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.
p = Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => reject(3), 3000))
]).then((res)=>{console.log(res)})
.catch(error => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ouch!
  console.log(error.errors[1]); // Error: Error!
});
// Here error is an special object which is Aggregate Error Object

// console.log(p);


// Promise.resolve()
// Promise.resolve(value) creates a resolved promise with the result value.
// Promise.reject(error) creates a rejected promise with error.

