function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 2)].toString();
}

function playGame() {
    let round = 0;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        round++;
        switch(true) {
            case (humanChoice === computerChoice):
                console.log(
                    "ROUND " + round + "\n\n" +
                    "Human chose " + humanChoice + "!\n" +
                    "Computer chose " + computerChoice + "!\n\n" +
                    "It's a tie!\n\n" +
                    "SCORE:\n" +
                    "Human: " + humanScore + "\n" +
                    "Computer: " + computerScore);
                break;
            case (humanChoice === "rock" && computerChoice === "paper"
                ||humanChoice === "paper" && computerChoice === "scissors"
                ||humanChoice === "scissors" && computerChoice === "rock"):
                computerScore++;
                console.log(
                    "ROUND " + round + "\n\n" +
                    "Human chose " + humanChoice + "!\n" +
                    "Computer chose " + computerChoice + "!\n\n" +
                    "Computer Wins this Round!\n\n" +
                    "SCORE:\n" +
                    "Human: " + humanScore + "\n" +
                    "Computer: " + computerScore);
                break;
            case (computerChoice === "rock" && humanChoice === "paper"
                ||computerChoice === "paper" && humanChoice === "scissors"
                ||computerChoice === "scissors" && humanChoice === "rock"):
                humanScore++;
                console.log(
                    "ROUND " + round + "\n\n" +
                    "Human chose " + humanChoice + "!\n" +
                    "Computer chose " + computerChoice + "!\n\n" +
                    "Human Wins this Round!\n\n" +
                    "SCORE:\n" +
                    "Human: " + humanScore + "\n" +
                    "Computer: " + computerScore);
                break;
            default:
                break;
        }
        switch (true) {
            case (computerScore === 5):
                console.log("Computer Wins the Game!")
                break;
            case (humanScore === 5):
                console.log("Human Wins the Game!")
                break;
        }
    }

    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const results = document.querySelector("#results");

playGame();


