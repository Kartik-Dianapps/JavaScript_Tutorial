// Js ka default behaviour Protoypal behaviour hota hai

let object1 = {
    username:"Kartik",
    lastname:"Bisht",
    city:"Uttrakhand",
    getIntro:function()
    {
        console.log(`${this.username} ${this.lastname} from ${this.city}`)
    }
}

let object2 = {
    username:"John",
    lastname:"Doe"
}

function f()
{
    console.log("Hi");
}

console.log(object1.__proto__);


// Prototypal inheritance
// object2.__proto__ = object1

// We can add some fns to prototype also 
// Function.prototype.myBind = function()
// {
//     console.log("Hello!!!");
// }
