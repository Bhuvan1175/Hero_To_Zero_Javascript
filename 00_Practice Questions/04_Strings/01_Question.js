//Que  Prompt the user to enter their full name. Generate a username for them based on the input.
//Start username with @, followed by their full name and ending with the fullname length.

let Fullname = prompt("Enter Your Full Name :");
let full = Fullname.replaceAll(" ", "").toLowerCase();
let username = "@" + full + full.length;
console.log(`${username} this is your Username !! Thank You`);
