/*
css styling and stylesheets L96
    style
    css text
    removeProperty [property name , insline style]
    setProperty [propertyname , value, piriority(important)]
*/
/*
let myDiv = document.getElementById("mydiv");

myDiv.style.color = "red";
myDiv.style.fontWeight = "bold";

myDiv.style.cssText = "font-weight: bold; color: green; background-color: red;"

myDiv.style.removeProperty("background-color");
myDiv.style.setProperty("background-color", "#000", "important");
myDiv.style.setProperty("font-size", "40px", "important");

console.log(document.styleSheets[0].rules[0]); // old method not supported by all browsers
console.log(document.styleSheets[0].cssRules[0]); // modern method suported by all browsers
document.styleSheets[0].rules[0];
console.log(document.styleSheets[0].rules[0]);

document.styleSheets[0].rules[0].style.setProperty("text-align", "center");
document.styleSheets[0].rules[0].style.removeProperty("line-height");
*/


/*////////////////////////////////////////////////////////////////////////////////////////// */

/*
Dom L97
    Before [string]  // insert content before the specified element as a sibling(اخ)
    After [string] // inserts content after the specified element as a sibling
    Prepend [string] // inserts content as the first child of the specified element
    Append [string] // inserts content as the last child of the specified element
    Remove [string] // completely removes the element and its child nodes from the document structure.
*/

/*
let element = document.getElementById("mydiv");
let cele = document.createElement("p");
element.before("hello from js before");
element.after("hello from js after");
element.prepend(cele);
element.remove();
*/