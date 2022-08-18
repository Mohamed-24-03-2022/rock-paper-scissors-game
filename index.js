const resultText = document.querySelector(".result");
const computerChoiceText = document.querySelector(".computerChoice");

// generate the computer choice
const getComputerChoice = () => {
    const generateChoice = Math.floor(Math.random() * 3) + 1;
    if (generateChoice === 1) {
        return "rock";
    } else if (generateChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
};


// compare player input with the computer choice
const comparePlayerAndComputer = (playerSelection, computerSelection) => {
    computerChoiceText.textContent = `Computer chose: ${computerSelection}`

    if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper")
    ) {
        resultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        resultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        resultText.textContent = "Draw!";
    }
};

const playRound = (e) => {
    let playerChoice = '';
    let computerChoice = getComputerChoice();
    if (e.target.getAttribute("class") === "rock") playerChoice = "rock";
    if (e.target.getAttribute("class") === "paper") playerChoice = "paper";
    if (e.target.getAttribute("class") === "scissors") playerChoice = "scissors";
    comparePlayerAndComputer(playerChoice, computerChoice);
}

const buttonList = document.querySelectorAll("button");
buttonList.forEach((button) => {
    button.addEventListener("click", playRound);
});


