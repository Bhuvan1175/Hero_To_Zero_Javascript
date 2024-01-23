// In The function we used a "Function Keyword".
// And Then there is two type of function 1) call back  2) reference function.

//Call back function
function sayHello(){
    console.log("Hello India");
}
sayHello();
sayHello;


// Using Parameter

function helloBrother(Name){
    console.log(`Hello ${Name},How Are You?`);
}
helloBrother("Bhuvi");

// Return Keyword

function greet(){
    return "Jay Shree Ram";
}
console.log(greet());

// Refrence Function

function Add(a,b){
    return a+b;
}
// const para=Add(5,7);
// console.log(para);

const addRef = Add;
const sum = addRef(9,6);
console.log(sum);
