// DOM - Selectors L86
/*
    - Find element by id
    - find element by tag name
    - find element by class name
    - find element by css selextors [querySelector()]
    - find element by collection [querySelectorAll()] 
    - title
    - body
    - images
    - forms
    - links
*/
/*
let idSelector = document.getElementById("my-div");
let tagSelector = document.getElementsByTagName("p");
tagSelector[1].innerHTML = "Hello world";
let classSelector = document.getElementsByClassName("my-span");
let query1Selector = document.querySelector("my-span");
let querySelector = document.querySelector(".special");
let queruSelectorAll = document.querySelectorAll(".my-span");
console.log(idSelector);
console.log(tagSelector);
console.log(classSelector);
console.log(query1Selector);
console.log(querySelector);
console.log(queruSelectorAll);


console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[1]);
console.log(document.forms[0].one.value);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.links[0].href);

console.log(document.images); // Length 0
*/
/*////////////////////////////////////////////////////////////////////////////////////////////*/
/*

DOM - [Get / set elements content and attributes] L87
    - innerHTML
    - textContent
    - change attributes directly
    - change attributes with methods
        - Getattribute
        - setAttribute (attribute , value | qualified name)
    
    Search [
        - innerText ::  excludes the text content of elements that are styled with CSS to be hidden (display: none)
                        or have their visibility set to hidden.
    ]
*/

/*
let Myele = document.querySelector(".js");
console.log(Myele);
console.log(Myele.innerHTML);
console.log(Myele.textContent);

Myele.innerHTML  = "Hello from <span>main.js</span> file";
Myele.textContent  = "Hello from <span>main.js</span> file";

console.log(document.images);
document.images[0].src = "www.google.com";
document.images[0].alt = "Altrnate";
document.images[0].title = "altrnate"
document.images[0].className = "google-img";
document.images[0].id = "img-go";

let myLink = document.querySelector(".link");
console.log(myLink);
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "www.facebook.com");
*/

//innerText 
/*
    - The innerText property in JavaScript is used to get or set the visible text content of an element,
    excluding any HTML tags.
    It represents the rendered text within an element, including the text of its descendants.
    Exapmle: 1
let element1 = document.getElementById("title");
let text = element.innerText;

console.log(text);
    Example: 2
let element2 = document.getElementById("title");
    element2.innerText;
console.log("New text content")

// Example to explain the differnce between innerText and textContent
let element = document.getElementById("myElement");
console.log(element);
console.log(element.innerText);
console.log(element.textContent);
*/
let element = document.getElementById("myElement");
console.log(element.getAttribute("id"));
element.setAttribute("class", "hello-world!");
console.log(element.textContent);
console.log(element.innerText);