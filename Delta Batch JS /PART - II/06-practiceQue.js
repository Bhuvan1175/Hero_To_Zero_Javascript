// Question 01
// Create a traffic light system that shows what to do based on color.
// If the color is red, show "Stop". If the color is yellow, show "Caution". If the color is green, show "Go". If the color is anything else,

let trafficLightColor = "red"

if (trafficLightColor === "red") {
    console.log("Stop");
} else if (trafficLightColor === "yellow") {
    console.log("Caution");
} else if (trafficLightColor === "green") {
    console.log("Go");
} else {
    console.log("Invalid color");
}

// Question 02
// Create a system to calculate popcorn price based on the size customer asked for.
// If the size is small, the price is Rs.50. 
// If the size is medium the price is Rs.100. 
// If the size is large, the price is Rs.200. 
// If the size is anything else, show "Invalid size".

let popcornSize ="small";
let price;

switch (popcornSize) {
    case "small":
        price = 50;
        console.log("The price of small popcorn is Rs. " + price);
        break;
    case "medium":
        price = 100;
        console.log("The price of medium popcorn is Rs. " + price);
        break;
    case "large":
        price = 200;
        console.log("The price of large popcorn is Rs. " + price);
        break;
    default:
        console.log("Invalid size");
        break;
}


// Question 03
// A "Good String" is a string thats starts with letter a and has a length >3 write a program find if string is good or not.

let str="Good String";
if(str[0]=="G" && str.length > 3){
    console.log("Good String");
}else{
    console.log("Not a Good String");
}

let a=1;
let b=1;
console.log(a&b);