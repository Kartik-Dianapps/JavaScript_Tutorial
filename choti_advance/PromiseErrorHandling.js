// Error Handling in Promises
// When a promise rejects, the control jumps to the closest rejection handler. That’s very convenient in practice.

// For instance, in the code below the URL to fetch is wrong (no such site) and .catch handles the error:
// fetch('https://no-such-server.blabla') // rejects
// .then(response => response.json())
// .catch(err => console.log(err)) // TypeError: failed to fetch (the text may vary)


// Let's see some other cases also
// Case 1:error may be in executor or reject()

// new Promise((resolve,reject)=>{
//     throw new Error("Something went wrong...");
// }).catch((err)=>{console.log("Error:",err);})

//   and this above is same as below:
// new Promise((resolve,reject)=>{
//     reject(new Error("Something went wrong..."));
// }).catch((err)=>{console.log("Error:",err);})


// Case 2:error may be in .then()
// If we throw inside a .then handler, that means a rejected promise, 
// so the control jumps to the nearest error handler.

// new Promise((resolve,reject)=>{
//     resolve("OK");
// }).then((res)=>{
//     console.log(res);
//     throw new Error("Oops something goes wrong")
// }).catch((err)=>{
//     console.log(err);
// })


// Error rethrowing
// If we throw inside .catch, then the control goes to the next closest error handler.
// catch -> catch -> then -> then
new Promise((resolve, reject) => {
  throw new Error("Whoops!");

}).catch(function(error) { 

  if (error instanceof URIError) {
    // handle it
  } else {
    console.log("Can't handle such error");

    throw error;
    //     or
    // return new Promise((resolve,reject)=>{reject();})
  }

}).then(function() {
  /* doesn't run here */
}).catch(error => { 

  console.log(`The unknown error has occurred: ${error}`);
  // error is handled here — nothing is thrown, so it returns a resolved promise (with undefined)

}).then(()=>{console.log("Hi")})
.then(()=>{console.log("Hi");})

// And if we handle the error and finish normally, then it continues to the next closest successful .then handler.
// the execution: catch -> then

new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) {

  console.log("The error is handled, continue normally",error.message);

}).then(() => console.log("Next successful handler runs"));




// If we throw error inside the catch
// the execution: catch -> catch -> then
// new Promise((resolve, reject) => {
//   throw new Error("Whoops!");

// }).catch(function(error) { 

//   if (error instanceof URIError) {
//     // handle it
//   } else {
//     console.log("Can't handle such error");

//     throw error;
//   }

// }).then(function() {
//   /* doesn't run here */
// }).catch(error => { 

//   console.log(`The unknown error has occurred: ${error}`);
// Here the error is handled due to which promise is resolved and then goes to .then()

// }).then(()=>{console.log("Hi")})