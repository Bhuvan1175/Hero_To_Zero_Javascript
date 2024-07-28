// creating element 
// document.createElement('p')
// appendChild(element)
// append(element)
// pretend(element)
//insertAdjacent(where,element)

let newdiv=document.createElement("div")
newdiv.style.width="300px";
newdiv.style.height="300px";
newdiv.innerHTML="<b>BHUVAN</b>"
newdiv.style.background="purple";
document.body.appendChild(newdiv);
document.querySelector(".box").append(newdiv)
// document.querySelector(".box").prepend(newdiv)
newdiv.remove();