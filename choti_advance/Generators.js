// Generators

// how to declare Generators
function* generateSequence(){
    console.log("Hi");
    yield 1;
    yield 2;
    return 3;
}

const generator = generateSequence();
// const one = generator.next();
// const two = generator.next();

// And, if we call it a third time, the execution reaches the return statement that finishes the function:
// const three = generator.next();

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(generator.next());

// How to iterate generators
// we can use for of loop
// as here only 1,2 is printed because

// for (const element of generator) {
//     console.log(element);
// }

// It’s because for..of iteration ignores the last value, when done: true. 
// So, if we want all results to be shown by for..of, we must return them with yield:

function *fun(){
    console.log("Hooo");
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    // return 5; // ignores by for of and spread syntax    
}
const newGen = fun();
// for (const value of newGen) {
//     console.log(value);
// }

// console.log(newGen.next());
// console.log(newGen.next());
// console.log(newGen.next());
// console.log(newGen.next());
// here done is true
// console.log(newGen.next());



// how to use spread operator with generator
// let arr = [...newGen]; // only yield values will be there in array
// console.log(arr);

// Generator Composition
// Generator composition is a special feature of generators that allows to transparently “embed” generators in each other.


function* generateSeq(start, end) {
  for (let i = start; i <= end; i++) 
    {
        yield i;
    }
}

// const p = generateSeq(1,10);
// console.log(p.next());
// console.log(p.next());
// console.log(p.next());
// console.log(p.next());

// function* generate(start,end)
// {
//     for(let i = start;i <= end;i++)
//     {
//         yield i;
//     }
// }
// function* generateAll()
// {
//     yield* generate(0,9);
//     yield* generate(48,90);
// }

// for (const element of generateAll()) {
//     console.log(element);
// }

// const g = generateAll()
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


// Yield is a two way street

// function* gen() {
//   // Pass a question to the outer code and wait for an answer
//   let result = yield "2 + 2 = ?"; // (*)

//   console.log(result);
// }

// let newGenerator = gen();

// let question = generator.next().value; // <-- yield returns the value

// generator.next(4); // --> pass the result into the generator

// function* gen() {
//   let ask1 = yield "2 + 2 = ?";

//   console.log(ask1); // 4

//   let ask2 = yield "3 * 3 = ?"

//   console.log(ask2); // 9
// }

// let newGenerator = gen();

// console.log( generator.next().value ); // "2 + 2 = ?"

// console.log( generator.next(4).value ); // "3 * 3 = ?"

// console.log( generator.next(9).done ); // true



// generator.throw()
// as above we see that we can pass value into generator from outside code 
// similarly we can throw error inside the generator for the yield 
// To pass an error into a yield, we should call generator.throw(err). 
// In that case, the err is thrown in the line with that yield.

// function* demo()
// {
//     try {
//         let result = yield "2+2=?";
//         console.log(result);
        
//         let ask2 = yield "3 * 3 = ?"
//         console.log(ask2);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// const d = demo();
// d.next();
// d.next();
// // d.throw("Something went wrong!!!")
// d.throw(new Error("Something goes wrong"))

// What if i don't catch the error then
// function* demo()
// {
//         let result = yield "2+2=?";
//         console.log(result);
        
//         let ask2 = yield "3 * 3 = ?"
//         console.log(ask2);
// }
// const d = demo();
// d.next();
// d.next();
// // d.throw("Something went wrong!!!")
// d.throw(new Error("Something goes wrong"))

// We can handle error outside the generator so that whole script will not be killed.
function* demo()
{
        let result = yield "2+2=?";
        console.log(result);
        
        let ask2 = yield "3 * 3 = ?"
        console.log(ask2);
}
const d = demo();
d.next();
d.next();
try {
    // d.throw("Something went wrong!!!")
    d.throw(new Error("Something goes wrong"))
} catch (error) {
    console.log(error);
}

// generator.return()
// generator.return(value) finishes the generator execution and return the given value.

function* hello()
{
    yield 1;
    yield 2;
    yield 3;
}

const h = hello();
console.log(h.next());
console.log(h.return("foo"));
console.log(h.next());
