// var c=300;
// let a = 10;
// const b = 20;
// var c = 30;
// Outside called Global Scope
let a=100;
if (true) {
  // Called Block Scope
  let a = 10;
  const b = 20;
  // var c = 30;
  //console.log(a);
}

//console.log(a);
//console.log(b);
//console.log(c);


// Nested Scope

// icecream ka logic bade ne chote se  maga to nhi chalega  agar chote ne bade se maga to chalega.
function one(){
    const username="bhuvi"

    function two(){
        const website="youtube"
        //console.log(username);
    }
    //console.log(website);
    //two();
}
//one();

// inner function baher ke variable ko access kar sakta lekin outer nhi.
// child function can access parents variable.

if(true){
    const username="bhuvi";
    if(username ==="bhuvi"){
        const website=" youtube"
        //console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);

// ------------------ Interesting -----------------


// function addone(num){
//     return num+1;
// }
// console.log(`${addone(6)}`);

// const addTwo = function(num){ // also called expression
//     return num+2;
// }
// console.log(addTwo(5));


// Hoisting
// used before declaration
console.log(`${addone(6)}`);
function addone(num){
    return num+1;
}
