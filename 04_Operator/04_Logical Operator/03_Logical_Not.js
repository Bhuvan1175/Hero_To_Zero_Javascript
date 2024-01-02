// || --> Pipe symbol
var a = 9;
var b = 8;
var c = 6;
var cond1 = a > b;
var cond2 = c > a;
var cond3 = c > b;
console.log("Logical Not (9>8 || 6>9) : " + (!(cond1 || cond2))); //true --> false
console.log("Logical Not (6>9 || 6>8) : " + (!(cond2 || cond3))); //false --> true
