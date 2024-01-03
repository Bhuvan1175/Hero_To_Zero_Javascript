let age=parseInt(prompt("Enter Your Age :"));
if(age>0 && age<12){
    console.log("Ypu Are Child");
}
else if(age>=12 && age<=17){
    console.log("You Are Teen");
}
else if(age>=18 && age<60){
    console.log("You Are Adult");
}
else{
    console.log("You Are Senior Citizen");
}