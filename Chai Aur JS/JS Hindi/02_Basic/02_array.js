const marvel_heros=["Thor","ironMan","Spiderman"]
const dc_heros=["superman","flash","batman"]
// To Add Two Array
//1. Push
marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
//2. Concat
const heros=marvel_heros.concat(dc_heros);
console.log(heros);

//3. Spread Operator --> alag alag karna
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

//4.Flat --> used for agar infite array ho aur ek hi array main ho hona apn jko to flat method used krenge.
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_Another_array=another_array.flat(Infinity)
console.log(real_Another_array);

// Array Making
console.log(Array.isArray("Bhuvi"));
console.log(Array.from("Bhuvi")); // it covert string into array
console.log(Array.from({name:"Bhuvi"})); // interesting
 
// convert into array
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));