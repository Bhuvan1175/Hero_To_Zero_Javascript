// Allow user to access course if he is ..
//logged in from email
// logged in from google
// logged in from facebook

const isLoggedInFromEmail = true;
const isLoggedInFromGoogle = false;
const isLoggedInFromFacebook = false;

if(isLoggedInFromEmail || isLoggedInFromFacebook || isLoggedInFromGoogle){
    console.log("Login Success");
}else{
    console.log("Please Do Login!");
}