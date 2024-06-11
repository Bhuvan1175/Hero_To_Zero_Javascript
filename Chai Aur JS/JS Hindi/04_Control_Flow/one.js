// if statement

const isuserLoggedIn = true;
if (isuserLoggedIn) {
}

// Comparison condition operator
// <, <, <=, >=, ==, !=, ===

const temperature = 41;
if (temperature < 50) {
  //console.log("Less Than 50");
}

// if else

// let Temperature = 40;
// if (Temperature > 50) {
//   console.log(`greater than 50`);
// } else {
//   console.log(`less than 50`);
// }

// short hand notation
// implicit scope
const balance = 10;
// if (balance > 500) console.log("Test");

// Nested Control Flow

// if (balance < 500) {
//   console.log("Less Than 500");
// } else if (balance < 750) {
//   console.log("Less Than 750");
// } else if (balance < 900) {
//   console.log("Less Than 900");
// } else {
//   console.log("Less Than 1200");
// }

// Example

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromGmail = true;
if (userLoggedIn && debitCard) {
  console.log("Allow To Buy Courses");
}

if (loggedInFromGoogle || loggedInFromGmail) {
  console.log("User Looged In");
}

