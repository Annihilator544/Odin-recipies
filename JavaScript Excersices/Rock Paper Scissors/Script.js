console.log("Hello World");
alert("Hello World");
let Choice = (prompt("Please enter Your Choice: "));
let computerChoice = Math.random()*3;
if(computerChoice ==0){
    computerChoice = "rock";
}
else if(computerChoice ==1){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}