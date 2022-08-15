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

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper")
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === computerSelection) {
        return "Draw!";
    }
    else {
        return "Invalid Input, try again with a valid choice";
    }
};

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
};
