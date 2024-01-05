let Marks=[85, 97, 44, 37, 76, 60];
let Total=0;
for(let i=0;i<Marks.length;i++){
    Total=Total+Marks[i];
}
let avr=Total/Marks.length;
console.log(`Average Of [${Marks}] is : ${avr}`);