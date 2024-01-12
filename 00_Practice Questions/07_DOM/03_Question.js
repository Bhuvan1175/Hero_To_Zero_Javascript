// Qs. Create a new button element. Give it a text “click me”  , background color of red & text color  of white.  Insert the button as the first element inside the body tag

let newbtn=document.createElement("button");
newbtn.innerText="Click Me";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";

let body=document.querySelector("body");
body.prepend(newbtn);
