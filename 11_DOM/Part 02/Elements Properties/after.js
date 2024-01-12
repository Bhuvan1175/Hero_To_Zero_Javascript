//adds after the node (outside)

//Add Button Element
let newbtn=document.createElement("button");

//Add some styling to button

newbtn.innerText="Help Me !";
newbtn.style.backgroundColor="purple";
newbtn.style.color="black";
newbtn.style.marginBottom="30px";


// Before the respective node

let p=document.querySelector("p");
p.after(newbtn);