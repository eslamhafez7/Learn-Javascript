/*
    DOM - Create And Append Elements L89
        - CreateElement
        - createComment
        - createTextNode
        - createAttribute
        - appendChild  [Add child]
            - append : add content at the end.
            - prappend : add content at first.
    */

/*
let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Hello this div created in js file");
let comment = document.createComment("This is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-src", "img.jpg");
myElement.appendChild(comment);
myElement.appendChild(myText);
console.log(myElement);
document.body.appendChild(myElement);
*/

/*
let myElement = document.createElement("div");
myElement.classList.add("my-div");
myElement.textContent = "This is a dynamicly created div";
document.body.appendChild(myElement);

let styleElement = document.createElement("style");
styleElement.textContent = `
    .my-div {
        background-color: black;
        color: #fff;
        padding: 40px 20px;
        width: 300px;
        position: relative;
    }
    .my-div::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        bottom: 0;
        left: 0;
        background-color: blue;
    }
    .my-div::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        bottom: 0;
        right: 0;
        background-color: blue;
    }
`;
document.head.appendChild(styleElement);

*/
/*/////////////////////////////////////////////////////////////////////////// */
/*
DOM [Create Elements]
    - Product With Title And Description Practice L90
*/


/*
for(let i = 0; i < 100; i++) {
let mainele = document.createElement("div");
let heading = document.createElement("h3");
heading.textContent = "Product " + (i + 1);
// let paragraph = document.createTextNode("lorem loremloremloremloremloremloremloremloremloremloremlorem");
let paragraph = document.createElement("p");
paragraph.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing
elit. Tenetur facilis repellat soluta.
Possimus, delectus asperiores. Expedita dignissimos voluptatum odio odit!`;




let styleElement = document.createElement("style");

styleElement.textContent = `
    .product {
        width: 300px;
        box-shadow: 20px 20px 10px 4px rgba(0, 0, 0, 0.3);
        padding-bottom: 20px;
    }
`;
    document.head.appendChild(styleElement);
    mainele.className = "product";
    mainele.appendChild(heading);
    mainele.appendChild(paragraph);
    document.body.appendChild(mainele);
}
*/



