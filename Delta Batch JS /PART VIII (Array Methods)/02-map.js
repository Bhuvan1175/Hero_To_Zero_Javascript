// it similar like forEach but in which it make its own new array

let arr=[1,2,3,4,5];
let newArr=arr.map((el)=>{
    return el*el
})
console.log(newArr);