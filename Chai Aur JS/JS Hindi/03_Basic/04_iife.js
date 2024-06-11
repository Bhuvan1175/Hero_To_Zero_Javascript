// Immediately Invoked Function Expression (IIFE)

(function chai() {
  console.log("DB Connected");
})();

// chai();
// () -> first Paranthesis is for function.
// () -> second paranthesis is for execution call.
// end this IIFE with semicolon (;) , otherwise you used multiple time and you forget to end with (;) 
// then it will throw error.
// Global scope ke polutions se problem hoti hai to jo bhi global scope ke declration hia uske
// polution ko hatane se IIFE ka used karte hai

// Arrow Function

(() => {
  console.log("DBs Connected Succesfully");
})();


// Example
// Unnamed IIFE
((name) => {
    console.log(`hello ${name}`);
  })('bhuvi');
  