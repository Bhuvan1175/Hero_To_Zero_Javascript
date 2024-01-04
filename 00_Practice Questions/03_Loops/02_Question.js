// Que 01: Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

let guessNum = 45;
let userNum = parseInt(prompt("Enter Any Number :"));
while (userNum !== guessNum) {
  userNum = parseInt(prompt("You Entered Number Is Wrong , please Re-enter any Number :"));
}
console.log("Congratulations!! You Are The Winner Of The Guess Game Number .. ");
