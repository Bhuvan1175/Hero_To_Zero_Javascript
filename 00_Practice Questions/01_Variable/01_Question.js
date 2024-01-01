//Que 1. Create a const object called “product” to store information shown in the picture

 const product={
    title:"Parker Jotter Standard CT Ball Pen (Black)",
    rating:4,
    isdeal:true,
    oldPrice:285,
    Comment:"5% off",
    MRP:function(){
        return this.oldPrice-(this.oldPrice*0.05);
    }
 }
 console.log(product);
 console.log("Discounted MRP :"+product.MRP());

// Find Discount is 
// Discounted Value = original price - (original price * Discount Percentage);