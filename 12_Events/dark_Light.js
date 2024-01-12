let mybtn = document.querySelector("#mybtn");
let body=document.querySelector("body");
let curmode = "light";
mybtn.addEventListener("click", () => {
    if(curmode ==="light"){
        curmode="dark"
        body.classList.add("dark");
    }
    else{
        curmode="light";
        body.classList.remove("dark");
    }
    console.log(curmode);
})
