// Que 01. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array
// to store final price after applying offer.

let Items = [250, 645, 300, 900, 50];
// To Find Offer --> Value/Discount Number;
let i = 0;
for (var value of Items) {
  let offer = value / 10;
  Items[i] = Items[i] - offer;
  console.log(`final price after applying offer : ${Items[i]}`);
  i++;
}
