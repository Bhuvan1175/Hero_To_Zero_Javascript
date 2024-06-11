const userEmail = "b@bhuvi.ai";
// just check if value is present or not then present then its implicit true.
if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Dont Have User Email");
}

/*
falsy Value
--> false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy Value
--> "0", 'false', " ", [], {}, function(){}
*/
// if (userEmail.length === 0) {
//     console.log("Array Is Empty");
// }

const emptyobj={}
if (Object.keys(emptyobj).length===0) {
    console.log("Object Is Empty");
}

// Nulish Coalescing operator(??):null undefined
let val1;
// val1=5 ?? 10;
// val1=null ?? 10;
// val1=undefined ?? 15;
val1=null ?? 10 ?? 90; // jo null ke baad first value hogi o assign hogi
console.log(val1);


// Ternary Operator
// condition ? true : false;

 const age=34;
 age>18 ? console.log("Bada Ho Gaya tu "):console.log("Bachha Hai tu");;