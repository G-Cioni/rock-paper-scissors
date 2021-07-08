/* Function for generating a random choice or the computer */
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

/* Function that runs one round and declares the winner*/
function oneRound(userChoice, computerChoice) {

    /* Check if user wins and declare if user wins*/
    if ((userChoice == "rock" && computerChoice == "scissors") ||
         (userChoice == "scissors" && computerChoice == "paper") ||
         (userChoice == "paper" && computerChoice == "rock")) {
            alert("You win this round!");
            return "win"

         /* Check if it's a tie and declare tie*/
         } else if (userChoice === computerChoice){
            alert("This round is a tie");
            return "tie"

         /* Otherwise computer wins and declare if computer wins */
         } else {
            alert("Computer wins this round");
            return "lose"
         }
}

/* Create a function called game() to play 5 rounds and keep score */
function game() {
    
    /* Create variables to keep track of the score*/
    let userScore = 0
    let compScore = 0

    /*Loop to run 5 rounds */
    for (i=0; i<4; i++) {

        /* Receive input from user and make sure it is case insensitive value*/
        let userChoice = window.prompt("Choose your weapon: Rock, Paper or Scissors").trim();
        alert(" You have chosen: " + userChoice)
  
        /* Assign userChoice and compChoice*/
        userChoice = userChoice.toLowerCase();
    
        compChoice = computerChoice()
        
        /* Play one round and return the result*/
        result = oneRound(userChoice, compChoice);
  
        /* Assign a point to the winner of the round and do nothing if its a tie */
        if (result === "win") {
            userScore++;
        } else if (result === "lose") {
            compScore++;
        }
        
        /*Let user know the current score */
        alert(`Current score is: ${userScore} to ${compScore}`)  
        }  
        
        /* Declare the winner*/
        if (userScore > compScore) {
            alert("You are the Grand Champion!")
        } else if (userScore == compScore) {
            alert("It's a tie")
        } else {
            alert("You lose. Better luck next time!")
        }

}

/*Run the game*/
game()
