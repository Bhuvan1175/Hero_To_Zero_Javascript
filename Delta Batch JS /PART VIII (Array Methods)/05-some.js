// Some :- Returns true if some element of array gives true for some function . else return false.
// work like logical or

let result=[1,3,5,7,9,10].some((el)=>{
    return el%2===0;
})
console.log(result); // true