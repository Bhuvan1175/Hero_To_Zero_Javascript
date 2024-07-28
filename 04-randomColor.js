let btn=document.querySelector("button")

btn.addEventListener("click",function(){
    let rgb=document.querySelector("#rgb")
    let random=generateRandom();
    document.body.style.backgroundColor=random;
    rgb.innerText=random;
})



function generateRandom(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color=`rgb(${red},${green},${blue})`
    return color;
}