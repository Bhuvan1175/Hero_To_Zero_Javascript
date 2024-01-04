let Base=parseInt(prompt("Enter The Base : "));
let Power=parseInt(prompt("Enter The Power : "));
var result=1;
for(let i=1;i<=Power;i++){
    result=result*Base;
}
console.log(+Base+ " ^ " +Power+ " = "+result);