//  Falsy Value
//  undefined
//  null
//  0
//  ""
//  Nan - Not a Number

// The Above values if in condition then javascript it automatically assume it to be false value.

var user=null;
if(user){
    console.log("True Print");
}else{
    console.log("Falsy Value Print");
}


// Type Coercion
// JavaScript perform automatic type conversion called Type Coercion, which means JavaScript will convert one data type.

var num="2";
if(num==2){
    console.log("It Equals");
}else{
    console.log("It Doesn't Equal");
}