//Que 02. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class
//avrage=sum of all / length;
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}
let Average = sum / marks.length;
console.log(`${Average} This Average marks of the entire class`);
