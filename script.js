
let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    let computerChoice = "";

    if (randomChoice === 0) {
        computerChoice = "rock";
    }

    if (randomChoice === 1) {
        computerChoice = "paper";
    }

    if (randomChoice === 2) {
        computerChoice = "scissors";
    }

    return computerChoice;

}

function getHumanChoice() {
    let humanChoice = prompt("Paper, Scissors or Rock?").toLowerCase();
    return humanChoice;
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === "rock" && computerSelection === "scissors") {
        results.textContent = ("You Win! " + humanSelection + " beats " + computerSelection);
        humanScore += 1;
    }else if (humanSelection === "paper" && computerSelection === "rock") {
        results.textContent = ("You Win! " + humanSelection + " beats " + computerSelection);
        humanScore += 1;
    }else if (humanSelection === "scissors" && computerSelection === "paper") {
        results.textContent = ("You Win! " + humanSelection + " beats " + computerSelection);
        humanScore += 1;
    }else if (humanSelection === computerSelection) {
        results.textContent = ("Its a draw!");
    } else {
        results.textContent = ("You Loose! " + computerSelection + " beats " + humanSelection);
        computerScore += 1;
    }
round ++;

    if (round < 5) {
        updateCounter();
    } else {
        endGame();
    }
};

const buttons = document.querySelectorAll("button");
const results = document.querySelector('#results');
const counter = document.querySelector('#counter');

counter.textContent = "Round 1: Human Score 0 | Computer Score 0"

let round = 1;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
        console.log(button.id);
    });
});

function endGame() {
    if (humanScore > computerScore) {
        alert("End of Game - YOU WIN!")
    }
    if (computerScore > humanScore) {
        alert("End of Game - YOU LOOSE!")
    }
    if (computerScore === humanScore) {
        alert("End of Game - ITS A DRAW!")
    }
    round = 1;
    humanScore = 0;
    computerScore = 0;
    results.textContent = '';
    updateCounter();
}

function updateCounter() {
    counter.textContent = (`Round ${round} - Human Score: ${humanScore} | Computer Score ${computerScore}`)
};
