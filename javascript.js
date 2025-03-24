let humanScore = 0;
let computerScore = 0;

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
        console.log("Tie!");
    } else if (hChoice === "rock" && cChoice === "scissors") {
        ++humanScore;
        console.log("You WIN! " + hChoice + " beats " + cChoice);
    } else if (hChoice === "paper" && cChoice === "rock") {
        ++humanScore;
        console.log("You WIN! " + hChoice + " beats " + cChoice);
    } else if (hChoice === "scissors" && cChoice === "paper") {
        ++humanScore;
        console.log("You WIN! " + hChoice + " beats " + cChoice);
    } else {
        ++computerScore;
        console.log("You LOSE! " + cChoice + " beats " + hChoice);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        c = getComputerChoice();
        h = getHumanChoice();

        playRound(h, c);
    }

    humanScore > computerScore ?
        console.log("Final: You Win!") :
        (humanScore < computerScore ? 
            console.log("Final: Computer Wins! :(") : 
            console.log("Final: TIE!"));

    
}

playGame();