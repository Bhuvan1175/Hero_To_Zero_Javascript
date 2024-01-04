var n=parseInt(prompt("Enter Any Number :"));
let i=1;
fact=1;
while (i<=n) {
    fact=fact*i;
    i++;
}
console.log("Factorial Of "+n+ " is : "+fact);