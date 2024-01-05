let Marks=[85, 97, 44, 37, 76, 60];
// Avr=Total/number of entries;
let Total=0;
for(let i of Marks){
    Total=Total+i;
}
let Avr=Total/Marks.length;
console.log(`Average Of [${Marks}] is : ${Avr}`);