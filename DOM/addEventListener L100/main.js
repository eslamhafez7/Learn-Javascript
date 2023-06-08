/*DOM L100
    - AddEventListener
    - use event without on
    - attatch multiple events
    - error test
Search 
    - Capture & Bubbling javascript
    - removeEventListener
*/




// let scrollH = document.querySelector("html");
// let bh = document.querySelector('body, html');
// console.log(bh)

// window.addEventListener('scroll', function() {
//     console.log(bh.scrollTop);
// });
// let myp = document.querySelector(".myp");
/*
myp.onclick = one;
myp.onclick = two;
myp.onclick = three;
function one() {
    console.log("message from onclick one");
};
function two() {
    console.log("message from onclick two");
}; // it will override the first function and this will print
function three() {
    console.log("message from onclick three");
}; // it will override the first function and this will print

let newP = myp.cloneNode(true);

// myp.onclick = function() {
//     document.body.appendChild(newP);
// }
myp.addEventListener ('click', function() {
    document.body.appendChild(newP);
});

myp.addEventListener("click", one);
myp.addEventListener("click", two);
myp.addEventListener("click", three);
newP.addEventListener("click", function() {
    console.log("message from event listener click cloned");
});

// window.onload = "string"; // not error
// window.addEventListener("load", "eslam"); // error

myp.onclick = function() {
    let newp = myp.cloneNode(true);
    newp.className = "cloned";
    document.body.appendChild(newp);
}
let cloned = document.querySelector(".cloned");

document.addEventListener("click", (e) => {
    if(e.target.className === "cloned") {
        console.log(console.log("iam cloned"));
    };
});
*/

