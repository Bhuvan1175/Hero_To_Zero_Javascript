const requestURL="https://api.github.com/users/Bhuvan1175";
const  xhr=new XMLHttpRequest()
xhr.open('GET',requestURL)
xhr.onreadystatechange=()=>{
    if(xhr.readyState==4){
        const data=JSON.parse(this.responseText)
        console.log(data);
        console.log(data.followers);     
    }
}
xhr.send()