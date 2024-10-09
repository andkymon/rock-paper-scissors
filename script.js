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
                results.textContent = "ROUND " + round + "\n\n" +
                    "Human chose " + humanChoice + "!\n" +
                    "Computer chose " + computerChoice + "!\n\n" +
                    "It's a tie!\n\n" +
                    "SCORE:\n" +
                    "Human: " + humanScore + "\n" +
                    "Computer: " + computerScore;
                break;
            case (humanChoice === "rock" && computerChoice === "paper"
                ||humanChoice === "paper" && computerChoice === "scissors"
                ||humanChoice === "scissors" && computerChoice === "rock"):
                computerScore++;
                results.textContent = "ROUND " + round + "\n\n" +
                    "Human chose " + humanChoice + "!\n" +
                    "Computer chose " + computerChoice + "!\n\n" +
                    "Computer Wins this Round!\n\n" +
                    "SCORE:\n" +
                    "Human: " + humanScore + "\n" +
                    "Computer: " + computerScore;
                break;
            case (computerChoice === "rock" && humanChoice === "paper"
                ||computerChoice === "paper" && humanChoice === "scissors"
                ||computerChoice === "scissors" && humanChoice === "rock"):
                humanScore++;
                results.textContent = "ROUND " + round + "\n\n" +
                    "Human chose " + humanChoice + "!\n" +
                    "Computer chose " + computerChoice + "!\n\n" +
                    "Human Wins this Round!\n\n" +
                    "SCORE:\n" +
                    "Human: " + humanScore + "\n" +
                    "Computer: " + computerScore;
                break;
            default:
                break;
        }
        switch (true) {
            case (computerScore === 5):
                results.textContent += "\n\nComputer Wins the Game! Select a choice to restart.";
                round = 0;
                humanScore = 0;
                computerScore = 0;
                break;
            case (humanScore === 5):
                results.textContent += "\n\nHuman Wins the Game! Select a choice to restart.";
                round = 0;
                humanScore = 0;
                computerScore = 0;
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


