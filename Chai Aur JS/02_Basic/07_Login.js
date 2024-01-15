// Allow user to access course if he is ..
//logged in from email
// logged in from google
// logged in from facebook

const isLoggedInFromEmail = true;
const isLoggedInFromGoogle = false;
const isLoggedInFromFacebook = false;

if (isLoggedInFromEmail === true) {
  console.log("Login Success With Email");
}
if (isLoggedInFromFacebook === true) {
  console.log("Login Success With Facebook");
}
if (isLoggedInFromGoogle === true) {
  console.log("Login Success With Google");
}
