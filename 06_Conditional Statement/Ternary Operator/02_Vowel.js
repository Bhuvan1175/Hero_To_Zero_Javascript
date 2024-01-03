let character = prompt("Enter Any Alphabate :").toLocaleLowerCase();
let Alphabate =(/[aeiou]/.test(character))? "Vowels" : "Consonant";
console.log(character+" is "+Alphabate);
