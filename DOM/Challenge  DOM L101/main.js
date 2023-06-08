// DOM CHALLENGE L101


let header = document.createElement("header");
header.className = "header";
let logo = document.createElement("a");
logo.className = "logo";
logo.textContent = "Elzero";
header.appendChild(logo);
let list = document.createElement("ul");
header.appendChild(list);
let item = document.createElement("li");
let item2 = document.createElement("li");
let item3 = document.createElement("li");
let item4 = document.createElement("li");
list.appendChild(item);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);
let link = document.createElement("a");
let link2 = document.createElement("a");
let link3 = document.createElement("a");
let link4 = document.createElement("a");

link.setAttribute("href", "#")
link2.setAttribute("href", "#")
link3.setAttribute("href", "#")
link4.setAttribute("href", "#")
link.textContent = "Home";
link2.textContent = "About";
link3.textContent = "Services";
link4.textContent = "Contact";
item.append(link);
item2.append(link2);
item3.append(link3);
item4.appendChild(link4);
document.body.appendChild(header);


let productsContainer = document.createElement("div");
productsContainer.className = "products-container container";

for(let i = 0; i < 15; i++) {
let product = document.createElement("div");
product.className = "product";

let span = document.createElement("span");
span.className = "number";
span.textContent = `${i + 1}`;
product.appendChild(span);
let p = document.createElement("p");
p.textContent = "Product";
product.appendChild(p);

productsContainer.appendChild(product);
}
document.body.appendChild(productsContainer);



let footer = document.createElement("footer");

footer.className = "footer";
let footerdiv = document.createElement("div");
footerdiv.className = "copyright container";

let footerp = document.createElement("p");
footerp.textContent = "\u00A9 Elzero Web School";

footerdiv.appendChild(footerp);
footer.appendChild(footerdiv);
document.body.appendChild(footer);




let style = document.createElement("style");
style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;500;600;800;1000&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,300;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,900&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
    .container {
        padding: 30px 20px;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
    }
    .header .logo {
        color: #077d2c;
        font-size: 22px;
        font-weight: bold;
    }
    ul {
        display: flex;
        list-style: none;
    }
    ul li a {
        margin-left: 20px;
        font-weight: 600;
        position: relative;
        text-decoration: none;
        color: #000;
    }
    ul li a::before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background-color: green;
        bottom: -3px;
        left: 0;
        transition: 0.4s all;
    }
    ul li a:hover::before {
        width: 100%;
    }
    .products-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        background-color: #cccccc78;
    }
    .product {
        text-align: center;
        border: 1px solid transparent;
        padding: 15px; 
        background-color: #fff;
        transition: 0.4s all;
    }
    .product:hover {
        box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.3);
    }
    .copyright {
        background-color: #077d2c;
        color: #fff;
        text-align: center;
    }
`
document.head.appendChild(style);
