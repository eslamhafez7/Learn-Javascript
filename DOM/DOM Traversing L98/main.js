/*
DOM Traversing L98
    - nextSibling
    - previousSipling
    - nextElementSibling
    - previousElementSibling
    - parentElement
*/
/*
let span = document.querySelector(".two");

console.log(span.nextSibling);
console.log(span.previousSibling);
console.log(span.nextElementSibling);
console.log(span.previousElementSibling);
console.log(span.parentElement);

span.onclick = function() {
    span.nextSibling.remove()
}
span.onclick = function() {
    span.parentElement.style.display = 'none';
}
span.onclick = function() {
    span.parentElement.remove();
}
*/

/*///////////////////////////////////////////////////////////////////////////////// */
/*
DOM Cloning L99
    - cloneNode (Deep) if true will copy everything else it will just copy the element without it't text
*/

/*
let mydiv = document.querySelector("div");
let p = document.querySelector("p").cloneNode(true);

p.id = `${p.id}-cloned`


mydiv.appendChild(p);
*/