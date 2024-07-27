function arrayConcat(arr) {
  var concatString = "";
  for (let i = 0; i < arr.length; i++) {
    concatString += arr[i];
  }
  return concatString;
}
let arr = ["Bhuvi", " Rajendra", " Bagde"];
console.log(arrayConcat(arr));
