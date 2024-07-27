let arr=[1,2,321,4,5,99,6,7,8,9];
let result=arr.reduce((max,el)=>{
        if(max>el){
            return max;
        }else{
            return el;
        }
})
console.log(result);