// Qs. Create 3 divs with common class name - “box” . Access them & add some unique text to each of them.

let divs=document.querySelectorAll(".myclass");
console.dir(divs);

// This Traditional technique to change text by line by line.but in case youy havce to change for 100 div then how? so that we used for of loop.

console.log(divs[0].innerText="Unique text 1");
console.log(divs[1].innerText="Unique text 2");
console.log(divs[2].innerText="Unique text 3");

//Using loop

var i=0;
for(var div of divs){
    div.innerText=`Unique Text ${i}`;
    i++;
}