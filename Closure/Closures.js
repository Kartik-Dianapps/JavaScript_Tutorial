// Closures

// Lexical Scoping
// function outer()
// {
//     let username = "Kartik";
//     function inner()
//     {
//         console.log(username);
//     }
//     inner();
// }
// outer();
// Here inner fn has access of outer fn scope and this is called lexical scope

// Let say we have more than one fn then also it has access or not let see
// and here the fn inner and innerTwo are accessible within the outer fn only
function outer() {

    let username = "Kartik";

    // not accessible as it is local variable of inner fn
    // console.log(secret);

    function inner() {
        let secret = "1234";
        console.log("Inner:",username);
    }

    function innerTwo()
    {
        console.log("Inner Two:",username);
        
        // not accessible as it is local variable of inner fn
        // console.log(secret);
    }

    inner();
    innerTwo();
}
// outer();

// Now let' see closure
function makeFunc()
{
    const name = "Chrome";
    function displayName()
    {
        console.log(name);
    }
    return displayName;
}
const func = makeFunc();
// console.log(func);
func();
// Here the displayName fn is returned along with its lexical scope if its outer fn exists



// for purpose of my confusion 
// function outer() {
//     const msg = "Hi";
//     return inner;
// }

// function inner() {
//     console.log(msg); // ❌ ReferenceError: msg is not defined
// }

// const func = outer();
// func();

