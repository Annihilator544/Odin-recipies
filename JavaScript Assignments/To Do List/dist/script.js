let GettingStarted=[];

let count=0;

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
    let calender='<input type="date" id="Date" onfocus="this.showPicker()">';
    button.innerHTML+=calender;
}
function Submit(){
    event.preventDefault();
    console.log("hi");
    let Task = document.getElementById("Task").value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    date = document.getElementById("Date").value;
    if(date==""){
        date=today;
    }
    console.log(date);
    tsk(Task,date);
    let taskele=document.getElementsByClassName("addTask")[0];
    taskele.innerHTML="";
    for(let i=0; i<GettingStarted.length;i++){
        taskele.innerHTML+=`<div class="task">
        <svg xmlns="http://www.w3.org/2000/svg" onclick="taskDone();" width="21" height="21" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg> 
                             <div class="taskName">${GettingStarted[i].Task}</div></div>`
    }
  }
  document.onkeypress = keyPress;

function tsk(Task , Date){
    Object.assign(GettingStarted, {[count]:{Task,Date}});
    count++;
}


function keyPress(e){
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if(key == 13 || key == 3){
   //  myFunc1();
   document.yourFormName.submit();
  }
}