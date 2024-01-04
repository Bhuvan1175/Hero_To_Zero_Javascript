var t1=0;
var t2=1;
var nextterm=0;
let n=parseInt(prompt("Enter Any Number :"));
console.log("Fibonacci sequence up to " + n + ":");
console.log(t1);
console.log(t2);
for(let i=3;i<=n;i++){
    nextterm=t1+t2;
    console.log(nextterm);
    t1=t2;
    t2=nextterm; 
}