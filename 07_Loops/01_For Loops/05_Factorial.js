var n = parseInt(prompt("Enter a Number For Factorial : "));
var fact = 1;
for (let i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log("Factorial Of " + n + " is :" + fact);
