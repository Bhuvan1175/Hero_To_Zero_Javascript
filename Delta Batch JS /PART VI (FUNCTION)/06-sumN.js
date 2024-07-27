function sum1ToN(n){
    var sum=0;
    for (let i = 1; i <= n; i++) {
        sum=i+sum; 
    }
    return sum;
}
console.log(sum1ToN(10));