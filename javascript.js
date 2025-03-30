const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
let display = document.createElement("div");
let content = document.createElement("p");

let humanScore = 0;
let computerScore = 0;

document.body.appendChild(display);
display.appendChild(content);

const buttons = [rockBtn, paperBtn, scissorsBtn];


buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        const humanChoice = event.target.id.slice(0, -3);
        playRound(humanChoice, getComputerChoice());
        if (humanScore >= 5) {
            content.textContent = "HUMANS WIN";
        } else if (computerScore >= 5) {
            content.textContent = "COMPUTERS WIN";
        }
        if (humanScore >= 5 || computerScore >= 5) {
            rockBtn.style.display = "none";
            paperBtn.style.display = "none";
            scissorsBtn.style.display = "none";
        }
    });
});


const array = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return array[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let hChoice = humanChoice.toLowerCase();
    let cChoice = computerChoice.toLowerCase();

    if (hChoice == cChoice) {
        content.innerHTML = "Tie!" + "<br>" +
        humanScore + " | " + computerScore;
    } else if (hChoice === "rock" && cChoice === "scissors") {
        ++humanScore;
        content.innerHTML = "You WIN! " + hChoice + " beats " + cChoice + "<br>" +
        humanScore + " | " + computerScore;
    } else if (hChoice === "paper" && cChoice === "rock") {
        ++humanScore;
        content.innerHTML = "You WIN! " + hChoice + " beats " + cChoice + "<br>" +
        humanScore + " | " + computerScore;
    } else if (hChoice === "scissors" && cChoice === "paper") {
        ++humanScore;
        content.innerHTML = "You WIN! " + hChoice + " beats " + cChoice + "<br>" +
        humanScore + " | " + computerScore;
    } else {
        ++computerScore;
        content.innerHTML = "You LOSE! " + cChoice + " beats " + hChoice + "<br>" +
        humanScore + " | " + computerScore;
    }
}