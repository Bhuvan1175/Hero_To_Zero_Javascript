// Que 04. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks=[56,78,89,90,98,78,93,67,94,90];
let newMarks=marks.filter((val)=>{
    return val>=90;
})
console.log(newMarks);