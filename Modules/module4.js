// using import and export
// import { add,sub } from "./module3.js";

// How to import export default fn:

// 1st way is
// import { default as sayMyName } from "./module5.js" //here we can use any name instead of sayMyName
// import { default as spellMyName } from "./module5.js"

// 2nd way is 
import spellMyName from "./module5.js";


// for example if two libraries are exporting same name fns then we have to use aliases
// import { add as sum,sub as minus} from "./module3.js";


// we can import everything as like this also 
import * as calc from "./module3.js"


// console.log(add(1,2));
// console.log(sub(3,1));

// by using sayMyName
// sayMyName("Kartik");

// by using spellMyName
spellMyName("John");

// After doing aliases
// console.log(sum(1,2));
// console.log(minus(3,1));

// using calc 
console.log(calc.add(1,2));
console.log(calc.sub(3,1));