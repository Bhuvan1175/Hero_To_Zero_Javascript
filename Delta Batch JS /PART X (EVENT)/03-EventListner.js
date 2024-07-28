let comment2=document.querySelector("#comment")

comment2.addEventListener("dblclick",function(){
    // alert("comment2");
    // let addCom=prompt("Add Comment");
    // let added=document.querySelector("#commentadd").innerHTML=`${addCom}`;
    // added.style.backgroundColor = "yellow";

        let addCom = prompt("Add Comment");
        if (addCom) {
            let now = new Date();
            let formattedDate = now.toLocaleString();

            let content = `<p>${addCom}</p><p>${formattedDate}</p>`;

            let added = document.querySelector("#commentadd");
            added.innerHTML = content;
            added.style.backgroundColor = "yellow"; // Ensure this is not overridden by other styles
        }
});