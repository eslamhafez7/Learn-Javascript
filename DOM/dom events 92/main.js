/*
DOM Events L92
    - Useg in html and javasript
    - onclick
    - oncontextmenu (mouse right click)
    - onmouseenter (on hover on something)
    - onmouseleave

    - onload
    - onscroll
    - onresize (on resize the screen)

    - onfocus
    - onblur (when you leave the focus mode)
    - onsubmit
*/
/*
let myBtn = document.getElementById("btn");

myBtn.onclick = function() {
    document.write('clicked');
};
myBtn.oncontextmenu = function() {
    document.write("You clicked right click on the button");
};
myBtn.onmouseenter = function() {
    document.write("mouse enter event")
}
myBtn.onmouseleave = function() {
    document.write("mouse enter event")
}

window.onload = function() {
    console.log("Hello Load");
};
window.onscroll = function() {
    console.log("Hello Scroll");
};
window.onresize = function() {
    console.log("Hello Resize");
};
*/



/*///////////////////////////////////////////////////////////////////////////////////////////// */
/*
[DOM events] 
    - Validate form practice
    - prevent default L93
*/

/*
let userinput = document.querySelector("[name=username]");
let userage = document.querySelector("[name=userage]");
document.forms[0].onsubmit = function(e) {
    let userValid = false;
    let ageValid = false;

    console.log(userinput.value);
    console.log(userinput.value.length);

    if(userinput.value !== "" && userinput.value.length <= 10) {
        userValid = true;
        console.log("valid");
    } // if the input characters value  empty or greater than 10 the form won't send the data
    if(userage.value !== "") {
        ageValid = true;
    } // if input age value empty the form won't send the data
    if(userValid === false || ageValid === false) {
        e.preventDefault();
    } // this condition prevent the default value of sending data
}

document.links[0].onclick = function(event) {
    console.log(event);
    event.preventDefault();
    console.log(event.clientX); // 42 // means that  the mouse pointer's horizontal position is at 42 pixels from the left edge of the viewport.
}
*/


/*///////////////////////////////////////////////////////////////////////////////////////////// */
/*
DOM Events
    - Events simulation L94
        - click
        - focus 
        - blur
*/

/*
let one = document.querySelector(".one");
let two = document.querySelector(".two");
console.log(one);
console.log(two);

window.onload = function() {
    two.focus();
}
one.onblur = function() {
    document.links[0].click();
}
*/