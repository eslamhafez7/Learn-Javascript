/** 
    DOM - [Chek Attributes]:
        - element.attributes
        - element.hasAttribute
        - element.hasAttributes 
        - eement.removeAtributes
 */
/*
console.log(document.getElementsByTagName("p")[0].attributes);
let myP = document.getElementsByTagName("p")[0];
if (myP.hasAttribute("data-src")) {
    if (myP.getAttribute === "") {
        myP.removeAttribute("data-src");
    }else {
        myP.setAttribute("data-src", "new value")
    }
}else {
    console.log("not found");
};

if (myP.hasAttributes) {
    console.log("hello world!");
}else{
    console.log("no attributes");
}
*/
/*
// EX 1
var element = document.getElementById("myElement");
var value = element.getAttribute("data-src");
console.log(value);

// EX 2
element.setAttribute("src", "image.jpg");
element.removeAttribute("class");
console.log(element.hasAttribute("data-src"));

if(element.hasAttribute("data-src")) {
    console.log("Yes there is a data-src attribute");
}else {
    console.log("No there is no data-src attribute");
}

let ele = document.getElementById("myElement");
let attributeList = ele.attributes;

for(let i = 0; i < attributeList.length; i++) {
    var attribute = attributeList[i];
    console.log(attribute.name, ":", attribute.value);
}
*/