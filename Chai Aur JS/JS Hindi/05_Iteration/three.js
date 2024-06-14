// For Of Loop
// its Applicable for Array

const myArray = [1, 2, 3, 4, 5];
for (const i of myArray) {
  console.log(i);
}

const greeting = "Hello World";
for (const i of greeting) {
  console.log(greeting);
}

// Maps
// map takes unique id
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('PAK',"Paxtan")

console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
}
// For In loop
const person={
    userName:"Bhuvi",
    password:1234
}
// for of not applicable
for (const key in person) {
    console.log(person[key]);
}

const programming=["js","cpp","java","python"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}