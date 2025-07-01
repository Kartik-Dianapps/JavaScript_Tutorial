"use strict";

// Normal Comparison
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// comparison of a string with number
// Here the string "2" and "02" is automatically converted into number
console.log("2" > 1);
console.log("02" > 1);

// so due to the problem of automatic conversion that's why we have to make sure that 
// comparison should happen between same types not with diff types

console.log("2" == 2);


// null comparison
// null and undefined are only equal to each other.
// They are not converted to numbers when compared using == with numbers.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// undefined comparison
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// What == actually does:
// If the two values are of the same type, it just checks value.
// If the two values are of different types, it tries to convert one or both values to the same type and then compares.
/*
'5' == 5        // true → '5' is converted to number 5
false == 0      // true → false is converted to 0
null == undefined // true → special case in JS
[] == ''        // true → [] becomes '', both are ''
[] == 0         // true → [] → '' → 0
*/ 

// === ->strict check which checks both datatype and value and does not do any conversion
/*
'5' === 5       // false → no type coercion, different types
[] === ''       // false → different types (object vs string)
*/
console.log("2" === 2);

