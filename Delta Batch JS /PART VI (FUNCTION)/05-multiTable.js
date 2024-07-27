function multiplicationTable(num){
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num*i}`);
    }
}
multiplicationTable(5);

function table(n){
    for (let i = n; i <=n*10; i+=n) {
        console.log(i);
    }
}
table(2)