let str=prompt("Enter Any String : ")
let vowelCount=0;
let consonantCount=0;
let result=str.toLowerCase();
for(var i of result){
    if(/[a-z]/.test(i)){
        if(/[aeiou]/.test(i)){
            vowelCount++;
        }
        else{
            consonantCount++;
        }
    }
}
console.log(`Vowels in ${result} is ${vowelCount}`);
console.log(`Consonants in ${result} is ${consonantCount}`);
