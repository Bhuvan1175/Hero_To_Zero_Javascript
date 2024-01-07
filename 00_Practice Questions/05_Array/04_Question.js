// Que 04. Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
// a. Remove the first company from the array.
// b. Remove Uber & Add Ola in its place.
// c. Add Amazon at the end.

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("Main Array Of Companies : "+companies);
//Step 01
companies.shift();
console.log("Remove the first company from the array : "+companies);
//Step 02
companies.splice(2,1,"Ola");
console.log("After Removing and Adding : "+companies);
//Step 03
companies.push("Amazon");
console.log("After Add Amazon at the end : "+companies); 