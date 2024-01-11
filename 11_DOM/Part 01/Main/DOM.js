// The method of accessing HTML code in JavaScript is through the Document Object Model (DOM).
// The DOM Is used in Dynamic Changes And Manipulation.
// Why We link Script js just before ending body Tag?
// --> If we write script tag befor body tag, then thats why the DOM Elments will not accessable.so thats why we write script tag on before ending body tag.
// --> Because we want to make sure that all elements are loaded before our script runs.


// HTMl Access
console.dir(document.body.childNodes[3]);

// Dynamic Chnages
document.body.childNodes[1].style.color="Red";
