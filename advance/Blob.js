// how to create a blob

// here we created a blob from string
let blob1 = new Blob(["Hello everyone"], { type: "text" })
// console.log(blob1);
// console.log(blob1.size);
// console.log(blob1.type)


// creation of blob from typed array and strings
let hello = new Uint8Array([72, 101, 108, 108, 111]); // "Hello" in binary form
let blob2 = new Blob([hello, " ", "World"], { type: "text/plain" })


// We can extract blob slice using .slice(byteStart,byteEnd,contentType)
// .slice() gives you a blob from 0 to 4 index 
// console.log(blob1.slice(0,4,"text"));


// Blob as url

// let blob1 = new Blob(["Hello everyone"],{type:"text"})
// let link = document.getElementById("link");
// link.setAttribute('href',URL.createObjectURL(blob1))


// to generate the dynamic download link from object
// let link = document.createElement('a');
// link.download = 'hello.txt';

// let blob = new Blob(['Hello, world!'], { type: 'text/plain' });

// link.href = URL.createObjectURL(blob);

// link.click();

// URL.revokeObjectURL(url);


// Blob to bas64
// let anchor = document.createElement("a");
// anchor.download = "Hello.txt";

// let reader = new FileReader();
// reader.readAsDataURL(blob);//converts the blob into base64 and calls onload

// reader.onload = function()
// {
//     anchor.href = reader.result;//encoded string
//     anchor.click();
// }


// From Blob to stream

let blob = new Blob(["Hello everyone"], { type: "text" })

// get readableStream from blob
const readableStream = blob.stream();
const stream = readableStream.getReader();

while (true) {
  // for each iteration: value is the next blob fragment
  let { done, value } = await stream.read();
  if (done) {
    // no more data in the stream
    console.log('all blob processed.');
    break;
  }

   // do something with the data portion we've just read from the blob
  console.log(value);
}