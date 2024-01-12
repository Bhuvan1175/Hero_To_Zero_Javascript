//adds at the end of node (inside)


// Create An Element to Append

let newel=document.createElement("button");
newel.innerText="click me!";

//Add A new element on the lats of that node.
let div=document.querySelector("div");
console.log(div);
div.append(newel);