// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not.

var a=prompt("Enter a number:");
var num=(a%5==0)?"Multiple Of 5" : "Not A Multiple of 5";
console.log(a+" is "+num);