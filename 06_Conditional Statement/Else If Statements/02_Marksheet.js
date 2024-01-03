let Name=prompt("Enter Your Name : ");
let USN = prompt("Enter Your USN Number : ");
let MNM=parseInt(prompt("Enter Your MNM Marks :"));
let AC=parseInt(prompt("Enter Your AC Marks :"));
let Java=parseInt(prompt("Enter Your Javascript Marks :"));
let Finance=parseInt(prompt("Enter Your Finance Marks :"));
let DIP=parseInt(prompt("Enter Your DIP Marks :"));
let Total=MNM+AC+Java+Finance+DIP;
let Percentage=(Total/270)*100;
let Grade;
if(Percentage > 0 && Percentage<=45){
    Grade="F";
}
else if(Percentage >46 && Percentage <=60){
    Grade="D";
}
else if(Percentage>61 && Percentage <=75) {
    Grade="C"
}
else if(Percentage>76 && Percentage<=85){
    Grade="B";
}
else{
    Grade="A";
}
console.log("---------------------------------------------------------------------");
console.log("Name Of Student : "+Name);
console.log("USN Of Student : "+USN);
console.log("Welcome "+Name);
console.log("Marks In MNM : "+MNM);
console.log("Marks In AC : "+AC);
console.log("Marks In Java : "+Java);
console.log("Marks In Finance : "+Finance);
console.log("Marks In DIP : "+DIP);
console.log(Name+" Get " +Percentage+ " With a Grade " +Grade+ " In Examination ");
console.log("---------------------------------------------------------------------");