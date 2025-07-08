// FS CRUD Operations Using promises
const fs = require("fs");

//       OR

// const fs = require("fs/promises")

const path = require("path");

const filename = path.join(__dirname,"FsPromises.txt");

const dirName = __dirname;
console.log(dirName);

// If we want to know that how many files are there in current directory then use

// fs.promises.readdir(filename)
// .then((data)=>{console.log(data);
// }).catch((err)=>{console.log(err.message)})

// fs.promises.readdir(dirName)
// .then((data)=>{console.log(data);
// }).catch((err)=>{console.log(err.message)})

// Now CRUD using this technique

// Create(Write)

// fs.promises.writeFile(filename,"This is the Initial Content of this FSPromises.txt File...","utf-8")
// .then(()=>{
//     console.log("File Saved Successfully");
// }).catch((err)=>{console.log(err.message)})

// Now Read

// fs.promises.readFile(filename,"utf-8")
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err.message);})

// Update

// fs.promises.appendFile(filename,"\nThis is the new content added recently by John","utf-8")
// .then(()=>{console.log("File is Updated Successfully...")})
// .catch((err)=>{console.log(err.message);})

// Delete

// fs.promises.unlink(filename)
// .then(()=>{console.log("File is deleted successfully...")})
// .catch((err)=>{console.log(err.message);})

// What if we are tired of writing fs.promises 
// So the solution is that we can do const fs = require("fs/promises")
// after doing we don't have to write fs.promises now we cna use fs