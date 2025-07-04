// Error handling in js

// try catch block
// try block is the block where that statements will put that may rise error or exception 
// catch block is used to catch the exception or error
function getMonthName(mo) {
  mo--;
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (!months[mo]) {
    throw new Error("Invalid month code"); // throw keyword is used here to throw error
  }
  return months[mo];
}

let monthName;
// try {
//   monthName = getMonthName(0);
// } 
// catch (err) {
//   monthName = "unknown";
// //   It shows the message as the error
//   console.error(err.message);
// }


// finally block
// it always executes after the try catch block
// and if i remove the catch block and use the finally block it will run

// try {
//     monthName = getMonthName(0);
// } 
// catch (error) {
//     console.error(error);
// }
// finally{
//     console.log("This is the finally block");
// }



// throw keyword 
// using this throw keyword we can throw any expression like string,object,number,error etc.

// try{
// console.log(x);
// }
// catch(err)
// {
//     // throw "Invalid Operation"
//     // throw 42;
//     // throw true;
//     throw {
//         toString(){
//             return "I am object";
//         }
//     }
// }

// we can use throw inside the try block also 
// try{
// console.log(1);
// throw "Error String";
// }
// catch(err)
// {
//     // throw "Invalid Operation"
//     // throw 42;
//     // throw true;
//     throw {
//         toString(){
//             return "I am object";
//         }
//     }
// }


// let arr = [1];
// console.log(arr[-1]);

// Only one catch and one finally per try.
// If the finally block returns a value, this value becomes the return value of the entire try…catch…finally block
// function f() {
//     try {
//         console.log(0);
//         throw "bogus";
//     }
//     catch (e) {
//         console.log(e);
//         console.log(1);

//         // This return statement is suspended
//         // until finally block has completed
//         return true;

//         console.log(2);
//     }
//     finally {
//         console.log(3);

//         return false; // overwrites the previous "return"

//         console.log(4);
//     }
//     console.log(5);
// }
// console.log(f());


// Overwriting of return values by the finally block also applies to exceptions thrown or re-thrown inside of the catch block:
function f() {
    try {
        throw "bogus";
    } catch (e) {
        console.log('caught inner "bogus"');
        console.log(e);
        
        // This throw statement is suspended until
        // finally block has completed
        throw e;
    } finally {
        return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
}
console.log(f());
