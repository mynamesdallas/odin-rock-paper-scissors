let humanScore = 0;
let computerScore = 0;

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

const getHumanChoice = (playerChoice) => {
    return playerChoice = prompt("Choose Rock, Paper, or Scissors");
}