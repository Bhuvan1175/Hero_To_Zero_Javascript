// Every :- Returns true if every element of array gives true for some function . else return false.
// work like logical and
let result=[1,2,3,4].every((el)=>{
    return el%2==0
})
console.log(result) // false

let result1 = [2, 4, 6, 8].every((ele) => {
    return ele % 2 === 0;
});
console.log(result1); // true
