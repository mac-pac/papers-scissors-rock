
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
        updateScoreboard();
    } else {
        endGame();
    }
};

const buttons = document.querySelectorAll(".buttons button");
const results = document.querySelector('#results');
const roundCounter = document.querySelector('#round');
const humanScoreBoard = document.querySelector("#humanScore");
const compScoreBoard = document.querySelector("#compScore");
const gameBoard = document.querySelector('#gameBoard');
const result = document.querySelector('#result');
const gameOverModal = document.querySelector('#gameOverModal');
const restartBtn = document.querySelector("#restart");

let round = 1;
updateScoreboard();


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
        console.log(button.id);
    });
});

restartBtn.addEventListener("click", restart);


function endGame() {
    
    gameOverModal.style.display = "block";

    if (humanScore > computerScore) {
        result.textContent = "YOU WIN!"
    }
    if (computerScore > humanScore) {
        result.textContent = "YOU LOOSE!"
    }
    if (computerScore === humanScore) {
        result.textContent = "IT'S A DRAW!"
    }

}

function updateScoreboard() {
    roundCounter.textContent = `ROUND: ${round}`;
    humanScoreBoard.textContent = humanScore;
    compScoreBoard.textContent = computerScore;
};

function restart() {
    
    gameOverModal.style.display = "none";

    round = 1;
    humanScore = 0;
    computerScore = 0;
    results.textContent = '';
    updateScoreboard();
}
