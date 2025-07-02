// Scheduling of a fn
// We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

// There are two methods for it:
// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

// setTimeOut()

function greet(fname,lname){
    console.log(`Hello ${fname} ${lname}`);
}

// setTimeout(greet,2000,"Kartik","Bisht");

// Wrong syntax as we have to pass reference not fn execution
// setTimeout(greet(),2000,"Kartik","Bisht");

// clearTimeout
// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

// console.log("setTimeout is able to start");
// let timerId = setTimeout(greet,2000,"Kartik","Bisht");
// console.log("setTimeout is running");
// clearTimeout(timerId);
// console.log(timerId);


// setInterval()
// The setInterval method has the same syntax as setTimeout:
// setInterval(greet,2000,"Kartik","Bisht");

// clearInterval()
// let timerId = setInterval(greet,2000,"Kartik","Bisht");
// clearInterval(timerId);// this will make the fn not to execute atleast once

// console.log("setInterval is able to start");
// let timerId = setInterval(greet,2000,"Kartik","Bisht");
// console.log("setInterval is running");

// setTimeout(()=>{console.log("in setTimeout");},5000);

// setTimeout(()=>{console.log("in setTimeout");clearInterval(timerId)},5000);



// Nested setTimeout():
// There are two ways of running something regularly.
// One is setInterval. The other one is a nested setTimeout, like this:

// let timerId = setInterval(function tick(){
//     console.log("Hi");
// },2000)

//             OR

// let timerId = setTimeout(
// function tick(){
//     console.log("Inside the function tick!!!")
//     timerId = setTimeout(tick,2000);
// },1000)

// Zero delay setTimeout:
// There’s a special use case: setTimeout(func, 0), or just setTimeout(func).
// This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the currently executing script is complete.

// setTimeout(() => console.log("World"));
// console.log("Hello");