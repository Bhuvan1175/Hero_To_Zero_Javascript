// Que 5.1. Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array.
let n=parseInt(prompt("Enter Any Number :"));
let arr=[];
for(let i=1;i<n;i++){
    arr[i-1]=i;
}
console.log(arr);

//PART II
// Que 5.2 Use the reduce method to calculate sum of all numbers in the array.
let sum=arr.reduce((prev,cur)=>{
    return prev+cur;
})
console.log(sum);

//PART III
//Que 5.3 Use the reduce method to calculate product of all numbers in the array.
let prod=arr.reduce((prev,cur)=>{
    return prev*cur;
})
console.log(prod);