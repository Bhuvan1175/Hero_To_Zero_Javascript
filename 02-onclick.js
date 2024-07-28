let like=document.querySelector("button")
let post=document.querySelector("div")
let count=0;
let view=0;
like.onclick=()=>{
    count++;
    like.innerHTML=`Like:${count}`
    console.log("Post Liked")
}
post.onmouseenter=()=>{
    view++;
    document.querySelector("#postView").innerHTML=`${view} People view your Post`;
    console.log(`${view} People view you Post`);
}


let comment=document.querySelector("#comment")

comment.onclick=()=>{
    console.log("Comment Added")
}
let share=document.querySelector("#share")

share.onclick=()=>{
    console.log("Post Share")
}

// Learning the Onclick event ahd on mouseEnter Event