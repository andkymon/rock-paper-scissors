function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 2)].toString();
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors?");
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice.toLowerCase();
    } else if (choice === null) {
        alert("Cancelled");
    } else {
        alert("Invalid choice, please choose between rock, paper, or scissors");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(round, humanChoice, computerChoice) {
        switch(true) {
            case (humanChoice === computerChoice):
                console.log(
                    "Round:" + round + "\n\n" +
                    "Human: " + humanChoice + "\n" +
                    "Computer: " + computerChoice + "\n\n" +
                    "It's a tie!");
                break;
            case (humanChoice === "rock" && computerChoice === "paper"
                ||humanChoice === "paper" && computerChoice === "scissors"
                ||humanChoice === "scissors" && computerChoice === "rock"):
                console.log(
                    "Round:" + round + "\n\n" +
                    "Human: " + humanChoice + "\n" +
                    "Computer: " + computerChoice + "\n\n" +
                    "Computer Wins this Round!");
                computerScore++;
                break;
            case (computerChoice === "rock" && humanChoice === "paper"
                ||computerChoice === "paper" && humanChoice === "scissors"
                ||computerChoice === "scissors" && humanChoice === "rock"):
                console.log(
                    "Round:" + round + "\n\n" +
                    "Human: " + humanChoice + "\n" +
                    "Computer: " + computerChoice + "\n\n" +
                    "Human Wins this Round!");
                humanScore++;
                break;
            default:
                break;
        }
    }

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        if (humanSelection === undefined) i--;
        playRound(i + 1, humanSelection, computerSelection);
        
    }
}
playGame();
