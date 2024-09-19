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

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound() {
    switch(true) {
        case (humanChoice === computerChoice):
            console.log(
                "Human: " + humanChoice + "\n" +
                "Computer: " + computerChoice + "\n" +
                "It's a tie!" + "\n" +
                "Human: " + humanScore + "\n" +
                "Computer: " + computerScore);
            break;
        case (humanChoice === "rock" && computerChoice === "paper"
            ||humanChoice === "paper" && computerChoice === "scissors"
            ||humanChoice === "scissors" && computerChoice === "rock"):
            computerScore++;
            console.log(
                "Human: " + humanChoice + "\n" +
                "Computer: " + computerChoice + "\n" +
                "Computer Wins!" + "\n" +
                "Human: " + humanScore + "\n" +
                "Computer: " + computerScore);
            break;
        case (computerChoice === "rock" && humanChoice === "paper"
            ||computerChoice === "paper" && humanChoice === "scissors"
            ||computerChoice === "scissors" && humanChoice === "rock"):
            humanScore++;
            console.log(
                "Human: " + humanChoice + "\n" +
                "Computer: " + computerChoice + "\n" +
                "Human Wins!" + "\n" +
                "Human: " + humanScore + "\n" +
                "Computer: " + computerScore);
            break;
        default:
            break;
    }
}

playRound();