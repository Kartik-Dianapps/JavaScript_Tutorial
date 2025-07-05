// Generators

// how to declare Generators
function* generateSequence(){
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
// So, if we want all results to be shown by for..of, we must write them with yield:

function *fun(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const newGen = fun();
// for (const value of newGen) {
//     console.log(value);
// }
// console.log(newGen.next());


// how to use spread operator with generator
// let arr = [...newGen];
// console.log(arr);

// Generator Composition
// Generator composition is a special feature of generators that allows to transparently “embed” generators in each other.

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

// Yield is a two way street

// function* gen() {
//   // Pass a question to the outer code and wait for an answer
//   let result = yield "2 + 2 = ?"; // (*)

//   console.log(result);
// }

// let newGenerator = gen();

// let question = generator.next().value; // <-- yield returns the value

// generator.next(4); // --> pass the result into the generator

function* gen() {
  let ask1 = yield "2 + 2 = ?";

  console.log(ask1); // 4

  let ask2 = yield "3 * 3 = ?"

  console.log(ask2); // 9
}

let newGenerator = gen();

console.log( generator.next().value ); // "2 + 2 = ?"

console.log( generator.next(4).value ); // "3 * 3 = ?"

console.log( generator.next(9).done ); // true

function greet()
{
    return "Shinbdjvbjdfb";
}
let user = {
    name:"Kartik",
    age:21
}
export let a = 5;


export default function add(a, b){
    console.log(a + b);
}
export function sub(a, b){
    console.log(a - b);
}
export {greet,user as userObj,add as default}
