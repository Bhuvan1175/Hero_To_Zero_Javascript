//adds before the node (outside)

//Add Button Element
let newbtn=document.createElement("button");

//Add some styling to button

newbtn.innerText="Help Me !";
newbtn.style.backgroundColor="green";
newbtn.style.color="black";
newbtn.style.marginBottom="30px";


// Before the respective node

let div=document.querySelector("div");
div.before(newbtn);