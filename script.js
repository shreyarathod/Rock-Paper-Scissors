const userChoiceDisplay = document.getElementById("your-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".Choices");



let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    getComputerChoice();
    getResult();
}))


function getComputerChoice(){
    let random = Math.floor((Math.random() * possibleChoices.length)) + 1; // index 1,2,3 for the choices

    switch(random){
        case 1: computerChoice = "rock";
        break;
        case 2: computerChoice = "paper";
        break;
        case 3: computerChoice = "scissors";
        break;
        default: computerChoice = "invalid";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(userChoice === computerChoice){
        result="its a tie!";
    }else if(userChoice === "rock" && computerChoice ==="paper"){
        result = "you lose!";
    }else if(userChoice === "rock" && computerChoice ==="scissors"){
        result = "you win!";
    }else if(userChoice === "paper" && computerChoice ==="rock"){
        result = "you win!";
    }else if(userChoice === "paper" && computerChoice ==="scissors"){
        result = "you lose!";
    }else if(userChoice === "scissors" && computerChoice ==="paper"){
        result = "you win!";
    }else if(userChoice === "scissors" && computerChoice ==="rock"){
        result = "you lose!";
    }

    resultDisplay.innerHTML = result;
}