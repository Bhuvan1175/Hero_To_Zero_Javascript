let btn=document.querySelector("button")
let p=document.querySelector("p")
let heading=document.querySelector("h2")

function chageColor(){
    this.style.backgroundColor="red"
}
btn.addEventListener("click",chageColor)
p.addEventListener("click",chageColor)
heading.addEventListener("click",chageColor)
