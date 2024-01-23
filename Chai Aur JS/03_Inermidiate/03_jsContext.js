// Context is usually a global context, which is available in browser side as well as world of Node.
// In nodejs, the global object is "global" and in browsers it's "window.

// sayHello();
// function sayHello(){
//     console.log("Hello World!");
// }

if(2 ==="2"){
    console.log('True');
}else{
    console.log("False");
}

var myName="bhuvi";
if(myName===window.myName){
    console.log("True");
}
//It will not run beacuase of its global context.