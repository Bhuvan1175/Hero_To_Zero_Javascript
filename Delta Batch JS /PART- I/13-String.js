// Sting are the text or sequence of characters.
// Sting are immutable, which means that once a string is created, it cannot be changed.

let name = "bhuvi";
let emptyString = " ";
let longString =
  "This is a very long string that has been written to demonstrate the concept of string";
let singleQuote = "yes";

// String Indices
// String are indexed from 0 to n-1, where n is the length of the string .
// The first character of the string is at index 0, the second character is at index 1
// and so on.
// The last character of the string is at index n-1, where n is the length of
// the string.

let marvel="spiderMan"
console.log(marvel.length);
console.log(marvel[0]);
console.log(marvel[1]);
console.log(marvel[2]);
console.log(marvel[3]);
console.log(marvel[4]);
console.log(marvel[5]);
console.log(marvel[6]);
console.log(marvel[7]);
console.log(marvel[8]);
console.log(marvel[marvel.length-2]);// position 7 --> a

// String Concatination
// Concatination is the process of joining two or more strings.
// In JavaScript, we can use the + operator to concatenate two strings.
let firstName = "Bhuvi";
let lastName="Bagde";
let fullName=firstName+" "+lastName;
console.log(fullName);



