// Array

let arr=[0,1,2,3,4,5];
console.log(arr[3]);

const myHeros=["Shaktiman","naagraj"];

const myArr=new Array(1,2,3,4,5,6);

// Array Methods

arr.push(7) // used to add value at last
arr.push(8);
console.log(arr);

arr.pop() // used to remove array last value
console.log(arr);

arr.unshift(12) // Used to add element at first
arr.shift() // used to remove the unshift or first element
console.log(arr);

console.log(arr.includes(8));// this method is used to check 
console.log(arr.indexOf(4));

const newArray=arr.join() // to bind and convert to string

console.log(arr)
console.log((newArray));

// slice , splice

console.log("A", arr);
const myn1=arr.slice(1,3)
console.log(myn1);
console.log("B", arr);

const myn2=arr.splice(1,3)
console.log("C", arr);
console.log(myn2);

// Differnce 
// slice() and splice() array methods , which is manipulate original array

// slice() -->
//Purpose: Extracts a section of an array and returns it as a new array.
//Effect on Original Array: Does not modify the original array.

//splice() -->
//Purpose: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
//Effect on Original Array: Modifies the original array.
