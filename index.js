/* Function for generating a random choice for the computer */
function computerChoice() {

/* Return random value that corresponds to rock paper or scissors*/
   random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* Function that runs one round*/
function oneRound(userChoice, computerChoice) {

    /* Check if user wins*/
    if ((userChoice == "rock" && computerChoice == "scissors") ||
         (userChoice == "scissors" && computerChoice == "paper") ||
         (userChoice == "paper" && computerChoice == "rock")) {
            return "win";
         /* Check if it's a tie*/
         } else if (userChoice === computerChoice){
            return "tie";
         /* Otherwise computer wins */
         } else {
            return "lose";
         }
}

/* Function to run 5 rounds and keep score */
function game() {
    
    /* Variables to keep track of the score */
    let userScore = 0

    let compScore = 0

    /* Loop to run 5 rounds */
    for (round = 1; round < 6; round++) {

        /* Receive input from user and make sure it's always valid*/
        let userChoice

        while (userChoice !== "rock" && userChoice !== "scissors" && userChoice !== "paper") {
        userChoice = window.prompt(`| Round ${round}/5 |
Choose your weapon: Rock, Paper or Scissors`).trim();
        } 
  
        /* Assign userChoice and compChoice and let the user know*/
        userChoice = userChoice.toLowerCase();
    
        compChoice = computerChoice();

        /* Tell user about userChoice and computerChoice */
        alert(`You choose: ${userChoice.toUpperCase()} | Computer chooses: ${compChoice.toUpperCase()}`);
        
        /* Play one round and return the result */
        result = oneRound(userChoice, compChoice);
  
        /* Assign a point to the winner and update user on current score */
        if (result === "win") {
            userScore++;
            alert(`You win round ${round}! Current score is: ${userScore} to ${compScore}`);
        } else if (result === "lose") {
            compScore++;
            alert(`You lose round ${round}. Current score is: ${userScore} to ${compScore}`);
        } else {
            alert(`Round ${round} is a tie. Current score is: ${userScore} to ${compScore}`);
        }
        }  
        
        /* Declare the winner */
        if (userScore > compScore) {
            alert("You are the Grand Champion!");
        } else if (userScore == compScore) {
            alert("It's a tie");
        } else {
            alert("You lose. Better luck next time!");
        }

        /* Ask user to play again */
        replay = window.prompt("Play again?: ").trim();

        replay = replay.toLowerCase();
        
        if (replay == "yes") {
            game();
        } else {
            alert("Thanks for playing")
        }
}

/* Start the game */
game()
