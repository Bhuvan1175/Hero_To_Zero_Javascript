var n = parseInt(prompt("Enter Any Number :"));
console.log("Prime Number In Between 1 to " + n + " is :");
for (let i = 2; i <= n; i++) {
    let isprime=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            isprime=false;
            break;
        }
    }
    if(isprime){
        console.log(i);
    }
}
  
