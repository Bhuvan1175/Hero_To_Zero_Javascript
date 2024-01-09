let str=prompt("Enter Any Strings :");
let ulta=str.split("").reverse().join("");
if(str===ulta){
    console.log(`${str} palindrome is ${ulta}`);
}
else{
    console.log(`${str} is not palindrome`);
}
