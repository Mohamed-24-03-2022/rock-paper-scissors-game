const buttonList = document.querySelectorAll("button");
const resetButton = document.createElement("button");
resetButton.classList.add("reset");
const buttonsContainer = document.querySelector(".container .buttons");
const resultText = document.querySelector(".result");
const computerChoiceText = document.querySelector(".computerChoice");
const scoreContainer = document.querySelector(".container .score");
const scoreText = document.createElement("h3");
//! I must assign them first when page load not when we execute the playRound so they end up 0 each time we call the playRound
let playerScore = 0;
let computerScore = 0;
let result = "";



// generate the computer choice
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const generateChoice = Math.floor(Math.random() * 3);
    return choices[generateChoice];
};

// update the score then call the gameEnd
const getScore = () => {
    if (result === "computerWin") {
        computerScore += 1;
        scoreText.textContent = `The score is: ${playerScore} for player. | ${computerScore} for the computer.`;
        scoreContainer.appendChild(scoreText);
    } else if (result === "playerWin") {
        playerScore += 1;
        scoreText.textContent = `The score is: ${playerScore} for player. | ${computerScore} for the computer.`;
        scoreContainer.appendChild(scoreText);
    } else {
        scoreText.textContent = `The score is: ${playerScore} for player. | ${computerScore} for the computer.`;
        scoreContainer.appendChild(scoreText);
    }
    gameEnd(computerScore, playerScore);
};

// compare player input with the computer choice
const comparePlayerAndComputer = (playerSelection, computerSelection) => {
    computerChoiceText.textContent = `Computer choice: ${computerSelection}`;
    if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper")
    ) {
        // resultText.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}.`;
        return "computerWin";
    } else if (playerSelection === computerSelection) {
        // resultText.textContent = "Draw!";
        return "Draw";
    } else {
        // resultText.textContent = `Player wins! ${playerSelection} beats ${computerSelection}.`;
        return "playerWin";
    }
};

//generate player choice from html buttons
const playRound = (evt) => {
    const playerChoice = evt.target.getAttribute("class");
    const computerChoice = getComputerChoice();
    result = comparePlayerAndComputer(playerChoice, computerChoice);
    getScore();
};

const resetGame = () => {
    computerScore = 0;
    playerScore = 0;
    for (const button of buttonList) {
        button.disabled = false;
    }
    buttonsContainer.removeChild(resetButton);
    resultText.textContent = "";
    scoreText.textContent = "";
};


const gameEnd = (computerScore, playerScore) => {
    if (computerScore === 5 || playerScore === 5) {
        for (const button of buttonList) {
            button.disabled = true;
        }
        computerChoiceText.textContent = "";
        (computerScore > playerScore) ? (resultText.textContent = "Computer won the game.") : (resultText.textContent = "Player won the game.");
        resetButton.textContent = "Reset";
        buttonsContainer.appendChild(resetButton);
        resetButton.addEventListener("click", resetGame);
    }
};

// adding an event to all buttons
buttonList.forEach((button) => {
    button.addEventListener("click", playRound);
});
