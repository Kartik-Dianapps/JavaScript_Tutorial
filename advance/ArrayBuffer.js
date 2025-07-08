// ArrayBuffer
// It is reference to fixed length contiguous memory area 

// How to create ArrayBuffer
// Initially it has 0 stored in every byte as value
let buffer = new ArrayBuffer(16);

// console.log(buffer);
// console.log(buffer.byteLength);

// What if we want to manipulate the ArrayBuffer contents
// so we have to use view object

// let view = new Uint32Array(buffer);
// console.log("Bytes Per Element:",Uint32Array.BYTES_PER_ELEMENT);
// console.log("View length:",view.length)
// console.log("View Byte Length:",view.byteLength);

// how to change value in arraybuffer
// view[1]=123456;

// how to iterate over arraybuffer
// for (const element of view) {
//     console.log(element);
// }


// Typed Array

// arguments variants

// let arr = [1,2,3,4];
// let arrBufferView = new Uint16Array(arr);
// console.log(arrBufferView);
// console.log(arrBufferView.length);
// console.log(arrBufferView.byteLength);

// What if we passed a TypedArray
// let arr16 = new Uint8Array([1,50]);
// let arr16Typed = new Uint16Array(arr16);
// console.log(arr16Typed);
// console.log(arr16Typed.byteLength);
// console.log(arr16Typed.length);

// What if we give only length
// let b = new Uint16Array(5);
// console.log(b);
// console.log(b.byteLength);
// console.log(b.BYTES_PER_ELEMENT);
// console.log(b.buffer);

// What if we don't pass arguments
// We can create a TypedArray directly, without mentioning ArrayBuffer. 
// But a view cannot exist without an underlying ArrayBuffer, 
// so gets created automatically in all these cases except the first one (when provided).

let arr8 = new Uint8Array([0, 1, 2, 3]);

// another view on the same data
let arr18 = new Uint16Array(arr8.buffer);
console.log(arr18[1]);
