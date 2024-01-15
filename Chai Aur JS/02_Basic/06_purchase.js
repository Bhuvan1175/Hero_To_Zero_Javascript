// User Is only when allowed to make purchase when he is
// logged in
// email verified
//card info
//if anyone missing stop purchasing.

const loggedIn=true;
const emailVerified=true;
const cardInfo=false;

if(loggedIn && emailVerified&&cardInfo){
    console.log("Allow To Make Purchase !");
}
else{
    if(loggedIn===false){
        console.log("You haven't allowed to make purchase anything Because you haven't LOGGED IN .");
    }else if(emailVerified==false){
        console.log('Please Verify your Email ID');
    }else{
        console.log('Add Card Information');
    }
}