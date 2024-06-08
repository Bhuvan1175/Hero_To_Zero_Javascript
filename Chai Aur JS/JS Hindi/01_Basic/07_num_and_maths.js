// ------------------------ NUMBERS -------------------------
const score = 400;
console.log(typeof(score));
// Explicitly defined it should be number so we can used insatance of object 'New'
const balance = new Number(100);
console.log(balance);
// change number into string using toString() and after that we can used it on all string prototype methods.
console.log(balance.toString().length);
// we can used fixed when you will make ecommerce website price tag
console.log(balance.toFixed(2));
console.log(balance.toPrecision(4));
//Representing the number localy
let value = 1000000;
console.log(value.toLocaleString('en-US'));

// ------------------------ MATHS ------------------------------

// Check how Maths is object or not and after that look their prototypes
console.log(Math);
// 1. Absolute --> abs() its used to convert only negative value into absolute positive value.
console.log(Math.abs(-8));

// 2. Round --> round() its is used to round up the decimal value either up or down value it means you 
//    take value 4.2 and aplly the round() the it will give automatically 4 and if yo take value 4.6 and 
//    apply the round() it will give up value.. it only depend on if value is less tha .5 then it value 
//    round goes down otherwise is up.
//   Simply says --> The value to be rounded to the nearest integer.Returns a supplied numeric expression rounded 
//   to the nearest integer.

console.log(Math.round(4.2));
console.log(Math.round(4.5));
console.log(Math.round(4.6));
 
// 3. Ceil --> ceil() its is used to round up value it means it takes alsways up value 
//    if there is a decimal occurs.
//    Floor --> floor() its is used to round down value it means it takes always down value , 
//    it does ot matter it decimal at .9  iyt will surely down.

console.log(`Using Ceil()  :- ${Math.ceil(4.1)}`);
console.log(`Using Floor() :- ${Math.floor(4.9)}`);


// 4. Max and Min --> used to get maximum and minium value from array.
console.log(`Minimum Value :- ${Math.min(2,3,5,6,0)}`);
console.log(`Maximum Value :- ${Math.max(2,3,4,5,6,0)}`);

// 5. Random()--> its is used to get random value between 0-1 .
console.log(Math.random());// it choose value from 0-1
console.log((Math.random()*10)+1)

// To get a random value for the Ludo game, you can use the Math.random() function.
let max=6;
let min=1;
console.log(Math.floor(Math.random()*(max-min+1)+min));





