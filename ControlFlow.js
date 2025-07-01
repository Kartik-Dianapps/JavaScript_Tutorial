// Control Flow in JavaScript:
// if,if-else,if-else if else

// const temperature = 35;

// if(temperature < 40)
// {
//     console.log(`Current Temperature ${temperature} is less than 40`);
// }
// else
// {
//     console.log(`Current Temperature ${temperature} is greater than 40`);    
// }
// always executed as it is out of scope or in global scope
// console.log("Executed");

// strict check ===
// if(temperature === 40)
// {
//     console.log(`Current Temperature ${temperature} is equal to 40`);
// }
// else
// {
//     console.log(`Current Temperature ${temperature} is greater or less than 40`);    
// }


// const score = 200;
// incase of var this below line is also executed..
// console.log(power);
// if(score > 100)
// {
//     const power = "Fire";
//     // var power = "Fire";
//     console.log(`I have my own ${power} power...`);
// }
// cannot access power outside the scope of if but if we use var then it is accessible
// console.log(`I have my own ${power} power...`);


// const balance = 1000;
// if(balance < 500)
// {
//     console.log(`Current balance ${balance} is less than 500`);
// }
// else if(balance < 750)
// {
//     console.log(`Current balance ${balance} is less than 750`);
// }
// else if(balance < 900)
// {
//    console.log(`Current balance ${balance} is less than 900`);
// }
// else
// {
//    console.log(`Current balance ${balance} is less than 1200`);
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}