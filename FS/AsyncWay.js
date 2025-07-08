// Asynchronous way CRUD Operations
const fs = require("fs");
const path = require("path");

const filename = path.join(__dirname,"t3.txt");

// Create
// Similar syntax of writing and creating to sync way but a callback is parameter additionally passed here
// callback fn is passed to deal with errors

// fs.writeFile(filename,"Hey This is the Initial Content of t3.txt File....","utf-8",(err)=>{
//     if(err)
//     {
//         console.error(err);
//     }
//     else{
//         console.log("File saved successfully...");
//     }
// });


// Read
// Similar to sync read method but this async method does not return the data instead it pass it
// to callback fn and if we don't write the encoding type then it gives buffer of data
// fs.readFile(filename,"utf-8",(err,data)=>{
//     if(err)
//     {
//         console.error(err);
//     }
//     else{
//         console.log(data);
//     }
// })


// Update
// Similar to sync append method only extra callback will be there like in writeFile()
fs.appendFile(filename,"\nThis content added to this file recently","utf-8",(err)=>{
    if(err)
    {
        console.error(err);
    }
    else
    {
        console.log("File Updated Successfully...");
    }
})

// Delete 
// Similar to sync unlink method but here it needs a callback fn in extra
// fs.unlink(filename,(err)=>{
//      if(err)
//     {
//         console.error(err);
//     }
//     else
//     {
//         console.log("File Deleted Successfully...");
//     }
// })


// To rename a file

let newPath = path.join(__dirname,"t3Updated.txt");
fs.rename(filename,newPath,(err)=>{
    if(err)
    {
        console.error(err);
    }
    else{
        console.log("File Renamed Successfully");
    }
})