/* Function for computerPlay */
function computerChoice() {

/* Generate random value that corresponds to rock paper or scissors  */
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
             alert("You win this round!")
             return userScore++

         /* Check if it's a tie and declare tie*/
         } else if (userChoice === computerChoice){
            alert("This round is a tie")
            return 

         /* Otherwise computer wins and declare if computer wins */
         } else {
             alert("Computer wins this round")
             return compScore++
         }
        

}


/*let userChoice = window.prompt("Choose your weapon: Rock, Paper or Scissors").trim();
    alert(" You have chosen: " + userChoice)
    userChoice = userChoice.toLowerCase();

compChoice = computerChoice()

oneRound(userChoice, compChoice);*/

/* Create a function called game() to play 5 rounds and keep score */
    
function game() {
    
    let userScore = 0
    let compScore = 0

    /* Receive input from user and make sure it is case insensitive value*/
    let userChoice = window.prompt("Choose your weapon: Rock, Paper or Scissors").trim();
    alert(" You have chosen: " + userChoice)
    userChoice = userChoice.toLowerCase();

    compChoice = computerChoice()

    oneRound(userChoice, compChoice);
}

game()
    /* Repeat everything 5 times */
    
    /* Keep track of score */

        /* Declare the champion */