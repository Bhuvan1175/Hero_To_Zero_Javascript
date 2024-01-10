let arr = [2123, 455, 766, 35, 87, 3533];
let max = arr.reduce((prev, cur) => {
  return prev > cur ? prev : cur;
});
console.log(max);
