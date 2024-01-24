//Variable chain code
//This is a simple implementation of the variable chaincode in Hyperledger Fabric. It implements
// Function declaration are scanned and made available.
// variable declaration are scanned and made undefined.

// Function Declaration 
// -------->

function tipper(a){
    console.log(a+5);
}
tipper(6);


// if we gonna call it first and then write function its also made it available .

tipper(6);
function tipper(a){
    console.log(a+5);
}

// Example 01

// Variable declartion 

// var num=5;
// console.log("Value of num : "+num);

// if i write to execute first and then declare its not made it available, it made it undefined..
// So we need to declare before executing.

// console.log("Value of num : "+num);
// var num=5;

// its shows undefined.


// Example 02

function tipp(b){
    var bill=parseInt(b);
    console.log(bill+5);
}
tipp("5");

// first calling function
tipp("5");
function tipp(b){
    var bill=parseInt(b);
    console.log(bill+5);
}

// Example 03

// if i write function in following way, it will also applicable but declartion and calling will be understood to devloper..

// var bigTipper=function(c){
//     var bill=parseInt(c);
//     console.log(bill+6);
// }
// bigTipper(5);

// But i call this "bigTipper()" is place befor4e function start then it will not work..

// bigTipper(6);
// var bigTipper=function(c){
//     var bill=parseInt(c);
//     console.log(bill+6);
// }

// its will happened due to variable declaration are scanned and made undefined.

//Example 04

console.log(name);// undefined
var name="Bhuvi";

function Name(){
    var name="Mr.Bhuvi";
    console.log(name);
}

console.log(name);//Bhuvi
console.log("----------")
// Calling function
Name();//Mr.Bhuvi