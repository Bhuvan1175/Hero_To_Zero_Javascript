/*Que 2. Write a code which can give grades to students according to their scores:
            80-100, A
            70-89, B
            60-69, C
            50-59, D
            0-49, F
*/
//CODE START
let Marks=parseInt(prompt("Enter Your Marks :"));
if( Marks >0  && Marks <=49 ){
     console.log(" You Get F Grade");
} 
else if( Marks >=50  && Marks <=59 ){
    console.log(" You Get D Grade");
} 
else if( Marks >=60  && Marks <=69 ){
    console.log(" You Get C Grade");
} 
else if( Marks >=70  && Marks <=79 ){
    console.log(" You Get B Grade");
} 
else{
    console.log("You Get A Grade");
}
