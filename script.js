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

const getHumanChoice = (userChoice) => {
    return userChoice = prompt("Choose Rock, Paper, or Scissors");
}

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
        return;
    }

    if (human === "rock" && computer === "scissors" ||
        human === "paper" && computer === "rock" ||
        human === "scissors" & computer === "paper") {
            humanScore++;
            console.log(`You win: ${human} beats ${computer}`);
        } else {
            computerScore++;
            console.log(`You lose: ${computer} beats ${human}`);
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);