// Function: getComputerChoice
    // Define choices array: ["rock", "paper", "scissors"]
    // Generate a random number between 0 and 2 using RNG function
    // Round the number down to the nearest integer
    // Access the choice from the array using the generated number
    // Return the chosen value

// Function: getHumanChoice
    // Declare variable 'choice'
    // Prompt user for input and store it in 'choice'
    // Convert 'choice' to lowercase
    // If 'choice' is "rock", "paper", or "scissors"
        // Return the 'choice'
    // Else
        // Display "Invalid choice, please enter rock, paper, or scissors"

// Initialize humanScore to 0
// Initialize computerScore to 0
// Set humanChoice to the return value of getHumanChoice()
// Set computerChoice to the return value of getComputerChoice()

// Function: playRound (humanChoice, computerChoice)
    // Use switch(true) for decision-making
        // Case 1: humanChoice equals computerChoice
            // Display "It's a tie!"
            // break

        // Case 2: humanChoice is "scissors" and computerChoice is "paper", 
        // or humanChoice is "paper" and computerChoice is "rock",
        // or humanChoice is "rock" and computerChoice is "scissors"
            // Display "Human wins!"
            // Increment humanScore
            // break

        // Default case:
            // Display "Computer wins!"
            // Increment computerScore
            // break

// Call playRound with humanChoice and computerChoice as arguments
