// Expands and iterable into multiple value.
// Spread in array Literals

let arr=[1,2,3,4,5] 
let arr2=[6,7,8,9,10]
console.log(Math.max(...arr));
// combining two array using spread
let result=[...arr,...arr2]
console.log(result);