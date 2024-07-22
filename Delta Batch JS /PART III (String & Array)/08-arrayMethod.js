// push :-- add element at end
let student=["bhuvi"]
let backbencher=["venkat","jhulelal","jhamela","hatela","nadda"]
student.push("virat")
console.log(student);

// unshift :-- add element at first
student.unshift("luvkesh")
console.log(student);

// pop :- delete last item
student.pop()
console.log(student);

// shift :- delete first item
student.shift()
console.log(student);

// indexOf :- for search element index
console.log(student.indexOf("bhuvi"))

// conct method  
console.log(student.concat(backbencher));

// reverse 
console.log(backbencher.reverse());

// slice
console.log(backbencher.slice(1,3)); 
// here it gives hatela and jhamela beacuse in above we do opeartion arrray so WKT array is muttable.