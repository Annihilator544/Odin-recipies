let id=4;

function addTask(){
    let button= document.getElementsByTagName("button")[0];
    button.onclick=null;
    button.style.display="grid";
    button.innerHTML='<form class="form-container" name="myForm" id="myForm1" onsubmit="Submit()" ></form>'
    button=document.getElementById('myForm1');
    button.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>';
    let input= document.createElement("input");
    input.type="text";
    input.id="Task";
    input.placeholder="Try adding some tasks";
    input.classList.add("inputTask");
    button.appendChild(input);
    
    //console.log(document.getElementById("Task").value)
}
function Submit(){
    console.log("hi");
    let Task = document.getElementById("Task").value;
    
  }