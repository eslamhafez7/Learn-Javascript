/*
Deal With Childern L91
    - childern  // All Elements 
    - childNodes // Everythng including text spaces and elements
    - firstChild // anyway it's type
    - lastChild  // same
    - firstElementChild // elements only
    - lastElementChild // same
*/

let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children[0]);
console.log(myElement.childNodes);
console.log(myElement.childNodes[2]);
console.log(myElement.firstChild);
console.log(myElement.lastChild);
console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);