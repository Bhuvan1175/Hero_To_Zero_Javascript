let name = " Bhuvi";
let name1 = " Bagde";
let value="            Mera Naam             "
let str = "i am bhuvaneshwar bagde i am a software developer from india";
// Used String Operations
// Length Of String
console.log(name.length);
// Character at the position
console.log(name.charAt(2));
// concat name with name1
console.log(name.concat(name1));
// index of character
console.log(name.indexOf("B"));
// last index of character
console.log(name.lastIndexOf("i"));
// Replace (given pattern , replacement)
console.log(name.replace("i", "an"));
// Repeat methode is used to r=itterate string many times
console.log(`I am ${name.repeat(3)}`);
// slice method
console.log(`Slice      :- ${str.slice(3, 8)}`);
// Startswith method(search string , position)
console.log(`StartsWith :- ${str.startsWith("i", 24)}`);
// Substring(stratindex,endindex)
console.log(`Substring  :- ${str.substring(5, 18)}`);
// toLowerCase
console.log(`Lower Case :- ${name1.toLowerCase()}`);
// toUpperCase
console.log(`Upper Case :- ${name1.toUpperCase()}`);
// Trim used to deleted extra space from start and end
console.log(`Trim Method:- ${value.trim()}`);
