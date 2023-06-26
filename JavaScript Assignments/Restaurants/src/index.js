import home from "./home";
import loadmenu from "./menu";
import loadContact from "./contact";
const content=document.getElementById("content");
const header=document.createElement("header");
const p=document.createElement("p");
p.innerHTML="Mozzarella Cheese";
content.appendChild(header);
header.appendChild(p);
console.log(content);
const buttons=document.createElement("div");
buttons.appendChild(button("Home", home));
buttons.appendChild(button("Menu", loadmenu));
buttons.appendChild(button("Contact", loadContact));
header.appendChild(buttons);
const view=document.createElement("view");
content.appendChild(view);
home();
function button(name, functions){
    const button=document.createElement("button");
    button.innerHTML=name;
    button.onclick=functions;
    return button;
}

