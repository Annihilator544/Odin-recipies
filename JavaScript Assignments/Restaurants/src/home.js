const home = () => {
let view = document.getElementsByTagName("view");
view = view[0];
view.innerHTML = "";
let p=document.createElement("p");
p.innerHTML="Best Pizza in Town";
view.appendChild(p);
p=document.createElement("p");
p.innerHTML="Made with love and care";
view.appendChild(p);
p=document.createElement("p");
p.innerHTML="Order Online or Call Us";
let img=document.createElement("img");
img.classList.add("circular_image");
img.src="victoria-kubiaki-4zubM5mJIwI-unsplash.jpg";
view.appendChild(img);
view.appendChild(p);
}
export default home;