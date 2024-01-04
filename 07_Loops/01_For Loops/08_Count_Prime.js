var n = parseInt(prompt("Enter Any Number :"));
var count=0;
for (let i = 2; i <= n; i++) {
    let isprime=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            isprime=false;
            break;
        }
    }
    if(isprime){
        count++;
    }
}
console.log("Count Of Prime Number Between 2 to "+n+ " is :"+count);
  
