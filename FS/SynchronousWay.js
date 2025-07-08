// CRUD Operations by synchronous fns

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"t2.txt");


// How to create a file and write into it (Create)
// if the file is not there then it creates first then overwrite data otherwise overwrites the data if exists

// fs.writeFileSync("./t2.txt","Recently I have added this new content...","utf-8");

//               OR

// fs.writeFileSync(filePath,"Recently I have added this updated content...");

// and it works without mentioning the utf-8 also


// Now how to read a file (Read)

// const result = fs.readFileSync(filePath);

// In this case we get a buffer of this content in which content is in binary form
// console.log(result);

// but we want result in string then use toString()
// console.log(result.toString());

// but using toString() again and again it becomes messy so pass encoding utf-8 to get data as string

// const result = fs.readFileSync(filePath,"utf-8");
// console.log(result);


// Now we want to update data (Update)

// console.log(filePath);

// fs.appendFileSync(filePath,"\nHey There Kartik...","utf-8");

// fs.appendFileSync(filePath,"\nHey There Kartik...");
// if the file is not there then it creates first then append data otherwise directly append data if exists


// Now want to delete a file (Delete)

// fs.unlinkSync("/home/user/Desktop/JavaScript/Js_Fundamentals/FS/t2.txt");

//                   OR

// fs.unlinkSync(filePath);

//                   OR

// fs.unlinkSync("./t2.txt");


// How to rename a file

let newUpdatedPath = path.join(__dirname,"t2Updated.txt")

fs.renameSync(filePath,newUpdatedPath);