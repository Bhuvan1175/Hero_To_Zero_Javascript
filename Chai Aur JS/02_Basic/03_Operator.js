// You Have Top find Discount -->
// Discount = (Old Price - New Price)/Old Price *100

// If You Have Given A Old Price and Discount then you need to find new Price -->
// New Price =old price -(old price X Discount)

// PART I
const sellingPrice = 199;
const listingPrice = 799;
const discountPercentage = Math.round(
  ((listingPrice - sellingPrice) / listingPrice) * 100
);
console.log(
  `You Get A ${discountPercentage}% On ${listingPrice}rs Now You have to pay ${sellingPrice}rs`
);

//PART II

const oldPrice = 449;
const givenDiscountPercentage = 15;
const newPrice = oldPrice - oldPrice * (givenDiscountPercentage / 100);
console.log(
  `You Get ${givenDiscountPercentage}% OFF on ${oldPrice} Rs , Now You have To Pay ${newPrice} Rs`
);
