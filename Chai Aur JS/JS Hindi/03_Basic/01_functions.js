// Function

function myFunction() {
  console.log("Hello Bhuvi");
}
//myFunction();

// // Add Two Number using parameter
// function addTwo(num1,num2){ // Parameters
//     console.log(num1+num2);
// }
// addTwo(3,2);// Arguments

// function addTwo(num1,num2){ // Parameters
//     let result=num1+num2;
//     return result;
// }
// const result = addTwo(3,2);// Arguments
// console.log("Result :",result);

// function addTwo(num1,num2){ // Parameters
//     return num1+num2;
// }
// const Result=addTwo(3,2);// Arguments
// console.log("Result",Result);

// Taking Parameters way

function logingUserMessage(username = "Sam") {
  // to give default value
  // if(username === undefined){
  //     console.log("Please Enter Username");
  //     return;
  // }
  return `${username} just logged in`;
}
//console.log(logingUserMessage("Bhuvaneshwar"));
console.log(logingUserMessage()); // Undefine

// When we add to cart any thing they system automatically add n parameter price.
// Rest Operator
function addToCartPrice(...num1) {
    return num1;
}

// console.log(addToCartPrice(200,300,400,2000));
// Rest Operator used to give bundels of given data.

// Object Function

// const user={
//     username:"bhuvi",
//     password:1212
// }
function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and Password is ${anyobject.password}`);
}
// handelObject(user);
handelObject({
    username:"bhuvi",
    password:1212
})

// Array Function

const myNewarray=[200,300,400,500];
function returnSecondValue(getarray){
    return getarray[1];
}
console.log(`second value ${returnSecondValue(myNewarray)}`);