// for of loop 
// it runs on objects which are iterable

// in case of array
const arr = [1,2,3,4];
for (const element of arr) {
    // console.log(element);
}

// in case of string
const greeting = "Good Morning!!!";
for (const char of greeting) {
    // console.log(`Each Character Value:${char}`);
}

// Map is also an object which has key value pairs and each key is unique in map
// and maintains the original order in which they are inserted
const map = new Map();
map.set("IN","India");
map.set("USA","United States of America");
map.set("FR","France");
// console.log(map);

for (const [key,value] of map) {
    // console.log(`Key:${key}=>Value:${value}`);
}

// what if i want to iterate an object then
// const obj = {
//     name:"Kartik",
//     age:45
// };
// for (const element of obj) {
//     console.log(element);
// }
// The problem is that here obj object is not iterable by using for of loop so to solve this we use for in loop

// for in loop on objects,array,map(does not work on this)

const languages = {
    js:"javascript",
    cpp:"C++",
    CSharp:"C#",
    ror:"RubyOnRails"
};
// console.log(languages.CSharp);/
// console.log(languages["cpp"]);

for (const key in languages) {
    // console.log(`${key}:${languages[key]}`);    
}
// for in does not work on map
// for (const key in map) {
// console.log(key);
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(`At ${key} value is ${programming[key]}`);
}

// Array forEach() method

const codingLang = ["Java","JavaScript","Python","Cpp"];

// callback fn is also a function but without name
// 1st way
codingLang.forEach(function(item)
{
    // console.log(`${item} is a programming language...`);
});
// 2nd way
codingLang.forEach((val)=>{
    // console.log(val);
})
// 3rd way
function printLang(item)
{
    console.log(item);
}
// codingLang.forEach(printLang);

// now callback fn does not accepts only one param as here we are using one but it has more than one param
// codingLang.forEach((value,index,arr)=>{
//     console.log(value,index,arr);
// })

// loop on array of objects
const array = [
    {
        languageName:"Java",
        languageFileEx:"java"
    },
    {
        languageName:"Python",
        languageFileEx:"py"
    },
    {
        languageName:"Javascript",
        languageFileEx:"js"
    }
]
// array.forEach((item)=>{
//     console.log(item.languageName);
// })
