const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice) {
        case 0: 
            return "Rock";
        case 1: 
            return "Paper";
        case 2: 
            return "Scissors"
    }
    return
}

const getHumanChoice = (player) => {
    const computerChoice = computerChoice();

    if (player === computerChoice) {
        alert(`It's a tie! Both chose ${player}`)

        return
    }
}