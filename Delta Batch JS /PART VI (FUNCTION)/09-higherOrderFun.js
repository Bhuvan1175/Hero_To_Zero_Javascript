function multiGreet(func , n){
    for (let i = 1; i <= n; i++) {
        func()
    }
}
let greet=function(){
    console.log("Good morning ❤");
}
multiGreet(greet, 5);