// Immediately invoked function expression(IIFE)

// If you want to execute the function immediately then
// this is the normal way
// function connection()
// {
//     console.log("DB connection is established!!!");
// }
// connection();

// by IIFE and semicolon is required after the function called so that we can declare and call other IIFE also
// named IIFE as it has name connection here
(function connection(){
    console.log("MongoDB connection is established!!!");
})();

// we can pass arguments also
// un named IIFE
((dbName)=>{
    console.log(`${dbName} connection is established!!!`);
})("DB2");

(function(){
    console.log("PostgreSQL connection is established!!!");
})();