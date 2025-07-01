// Optional chaining
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
// In other words, value?.prop:
// works as value.prop, if value exists,
// otherwise (when value is undefined/null) it returns undefined.



// let res = (x>y)?(x>z?x:z):(y>z?y:z); 
// let res1 = user.address? (user.address.street? user.address.street.name:null):null;
// let user = {
// };

// Here what if we want to access address we will get undefined
// console.log(user.address);

// what if we want to access address.street then it will throw error
// console.log(user.address.street);

// one of the solution is by ternary operator
// console.log(user.address?user.address.street:undefined);
// we can use nested property access also
// let res1 = user.address? (user.address.street? user.address.street.name:null):null;

// 2nd solution is to instead of throwing error give undefined
// so here ?. is checking first that user.address exists if it is then we can access street otherwise give undefined
// console.log(user.address?.street)

let user = null;
// console.log(user?.address);
// If there’s no variable user at all, then user?.anything triggers an error:

// Other variants of ?.
let userAdmin = {

    // admin:function(){}
    admin() {
        console.log("I am admin");
    }

};

let userGuest = {};

// userAdmin.admin?.(); // I am admin
// console.log(userGuest.admin);// undefined
// userGuest.admin?.(); // nothing happens (no such method)

// works with square brackets also
let key = "firstName";

let user1 = {
    firstName: "John"
    // firstName:undefined
};

let user2 = null;

// console.log( user1?.[key] ); // John
// console.log( user2?.[key] ); // undefined

// let user1 = {};
// let user1 = "";
// let user1 = null;

console.log(user1);

// Deleting a non-existent property from an object is allowed and returns true always and does nothing
// const u = delete user1?.firstName; // here value of u is true
// console.log(u);

delete user1?.firstName; // delete user1.firstName if user1 exists

// what if user1 exists but firstName property not exists then
// delete user1?.firstName; // Deleting a non-existent property from an object is allowed and returns true always

// What if the property firstName has value undefined then it gets deleted from object and returns true
console.log(user1);
