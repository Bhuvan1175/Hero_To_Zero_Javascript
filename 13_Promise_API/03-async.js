async function greet(){
    // abc.abc()
    return "hello";
}

// asyn ()=>{}

greet().then((result)=>{
    console.log("Promise Resolved");
    console.log("result",result);
    
})
.catch(()=>{
    console.log("Promise Rejected");
})