// This is the Topic which covers let,var and const in javascript

const accountId = 4242424;

let accountEmail = "bishtkartik485@gmail.com";
var pswd = "12345";

accountCity = "Jaipur";//but it is not safe to declare like this.


// accountId = 12345; This is not allowed becoz we cannot reassign a constant

console.log(accountId);
accountEmail = "abc@gmail.com";
pswd = "Ka@141103";
accountCity = "Bengaluru";

console.table([accountId,accountEmail,pswd,accountCity])

if(true)
{
    console.log(pswd);
    var pswd="dsdfcsfc";
    // here var is accessible and works as global scope
    var p = 1;
}

console.log(pswd);
// p=2;
console.log(p);

