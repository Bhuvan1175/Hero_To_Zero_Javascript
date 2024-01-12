//adds at the start of node (inside


// Create element
let newbtn=document.createElement("button");
newbtn.innerText="subscribe!";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";

// Prepend 
let div=document.querySelector("div");
div.prepend(newbtn);