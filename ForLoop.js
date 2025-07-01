// For loop

// for(let index = 0;index<=10;index++)
// {
//     console.log("Value is:",index);
// }

for(let i=0;i<=10;i++)
{
    const element = i;
    if(i === 5)
    {
        // console.log("5 is the best number...");
    }
    // console.log(element);
}

for(let i=1;i<=5;i++)
{
    // console.log(`Table of ${i}`);
    for(let j=1;j<=10;j++)
    {
        // console.log(`${i}*${j}:${i*j}`);
    }
}

let myArray = ["superman","batman","spiderman"];
for(let i=0;i<myArray.length;i++)
{
    const element = myArray[i];
    // console.log(element);
}

// break and continue
for(let i=1;i<=10;i++)
{
    if(i === 5)
    {
        // console.log("5 is detected...");
        // break;
    }
    // console.log(i);
}

for(let i=1;i<=10;i++)
{
    if(i === 5)
    {
        // console.log("5 is detected...");
        // continue;
    }
    // console.log(i);
}
