//Creates a new array with the results of some operation. The value its callback returns are used to form new array
arr = [1, 2, 3, 4, 5, 6];
let newarr = arr.map((val) => {
  console.log(val * 2);
});
