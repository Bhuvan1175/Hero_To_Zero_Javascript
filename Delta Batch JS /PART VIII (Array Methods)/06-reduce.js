// Reduce :- Reduce the array to a single value
// arr.reduce(accumulator,element)
let finalValue=[1,2,3,4].reduce((res,el)=>{
    console.log(res);
    return res+el;
})
console.log(finalValue);