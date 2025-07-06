// call()
// let name ={
//     firstname:"Kartik",
//     lastname:"Bisht",
//     printFullname:function()
//     {
//         console.log(this.firstname+" "+ this.lastname);
//     }
// }

// name.printFullname();

// let name2 = {
//     firstname:"John",
//     lastname:"Doe"
// }
// one way of printing fullname of nam2 is by adding printFullname inside name2 also
// Now what if i want to call printFullname method for this name2 object without adding the fn to it
// then call method comes into play and this is also called as fn borrowing

// name.printFullname.call(name2);

// What if we want to pass some parameters also in that function then
let name ={
    firstname:"Kartik",
    lastname:"Bisht",
}

let printFullname = function(hometown,state){
    console.log(this.firstname+" "+ this.lastname+" from "+hometown+","+state);
}

// printFullname.call(name,"Ranikhet","Uttrakhand");

let name2 = {
    firstname:"John",
    lastname:"Doe"
}

// printFullname.call(name2,"London","England");

// apply() -> same as call but arguments after reference will be in an array

// printFullname.apply(name,["Ranikhet","Uttrakhand"]);

// printFullname.apply(name2,["London","England"]);


// bind()
let fun = printFullname.bind(name,"Ranikhet","Uttrakhand");
let fun2 = printFullname.bind(name2,"London","England");
fun();
fun2();

// bind() returns a new copy of the original function printFullname, with:
// A locked this value (e.g., name for fun, name2 for fun2)
// The arguments pre-filled ("Ranikhet", "Uttrakhand" for fun, and "London", "England" for fun2)
// It does not execute the function — you have to call it later

