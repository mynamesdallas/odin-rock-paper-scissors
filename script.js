const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const scoreDisplay = document.querySelector("#scoreDisplay");
const roundResult = document.querySelector("#roundResult");

const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice) {
        case 0: 
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors"
    }
    return computerChoice
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        const human = humanChoice.toLowerCase();
        const computer = computerChoice.toLowerCase();

        if (human === computer) {
            roundResult.textContent = `It's a tie! You both chose ${humanChoice}.`
            return;
        }

        if (human === "rock" && computer === "scissors" ||
            human === "paper" && computer === "rock" ||
            human === "scissors" && computer === "paper") {
                humanScore++;
                roundResult.textContent = `You win this round! ${human} beats ${computer}.`
            } else {
                computerScore++;
                roundResult.textContent = `You lose! ${computer} beats ${human}.`
            }
            scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    };
    rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
}

playGame()