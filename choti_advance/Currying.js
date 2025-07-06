// Currying

// function add(a,b,c)
// {
//     return a+b+c;
// }
// console.log(add(1,2,3));


// But what if i want to execute add only when i have all three parameters then this concept is used 
function add(a)
{
    return function(b) {
        return function(c)
        {
            return a+b+c;
        }
    }
}
// const addCurry = (a)=>{return (b)=>{return (c)=>{return a+b+c;}}}
//                OR
const addCurry = (a)=>(b)=>(c)=>a+b+c;

// const s1 = add(1);
// console.log(s1);
// const s2 = s1(2);
// console.log(s2);
// const s3 = s2(3);
// console.log(s3);

console.log(addCurry(1)(2)(3));

// Practical use case of this 
// Here you want to send email only when you have all three things
function sendAutoEmail(to)
{
    return function(subject)
    {
        return function(body)
        {
            console.log(`Sending Email to ${to} regarding ${subject}:${body}`);
        }
    }
}

// const step1 = sendAutoEmail("abc@gmail.com");
// const step2 = step1("Order Confirmation");
// step2("Your order has been Shipped");

//           or

// const sendEmail = (to)=>{return (subject)=>{return (body)=>{console.log(`Sending Email to ${to} regarding ${subject}:${body}`);
// }}}

//           or
const sendEmail = (to)=>(subject)=>(body)=>{
    console.log(`Sending Email to ${to} regarding ${subject}:${body}`);
}
sendEmail("abc@gmail.com")("Order Confirmation")("Order Arrived at home")