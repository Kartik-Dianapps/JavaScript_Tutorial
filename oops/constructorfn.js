const user = {
    name:"Kartik",
    age:21,
    greet:function()
    {
        console.log(`Welcome ${this.name}!!!`);
        console.log(this); // this points to object that calls this greet method
    }
}
// console.log(user.name);
// user.greet();

// console.log(this) // this points to empty object

// Constructor fn

function User(username,loginCount,isSignedIn)
{
    console.log(this);

    this.username = username;
    this.loginCount = loginCount;
    this.isSignedIn = isSignedIn;

    this.greeting = function()
    {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// function User1(username,loginCount,isSignedIn)
// {
//     console.log(this);

//     this.username = username;
//     this.loginCount = loginCount;
//     this.isSignedIn = isSignedIn;

//     return this;
// }


// const userOne = User("Alice",12,true);

// This userTwo overwrite the previous user values
// const userTwo = User("Ellyse",8,false);

// console.log(userOne);

// So its solution is
const userOne = new User("Alice",12,true);
const userTwo = new User("Ellyse",8,false);

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);
userOne.greeting();
