// define gloval variables
var userScore = 0;

var compScore = 0;

var currentRound = 0;

// assign html to js variables
let score = document.querySelector("#score")
let round = document.querySelector("#round")
let result = document.querySelector("#result")
let finalResult = document.querySelector("#finalResult")

// set initial text content
score.textContent = `Current score: ${userScore} - ${compScore}`
round.textContent = `Round ${currentRound}`

//Function for generating a random choice for the computer
    function computerSelection() {
    random = Math.floor(Math.random() * 3);
        if (random == 0) {
            return "rock";
        } else if (random == 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    

// function to play one round
function oneRound(userChoice) {
    computerChoice = computerSelection()
    /* Check if user wins*/
    if ((userChoice == "rock" && computerChoice == "scissors") ||
            (userChoice == "scissors" && computerChoice == "paper") ||
            (userChoice == "paper" && computerChoice == "rock")) {
            userScore++
            score.textContent = `Current score: ${userScore} - ${compScore}`
            currentRound++
            round.textContent = `Round ${currentRound}`
            result.textContent = `${userChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
            return "win";
            /* Check if it's a tie*/
            } else if (userChoice === computerChoice){
            score.textContent = `Current score: ${userScore} - ${compScore}`
            currentRound++
            round.textContent = `Round ${currentRound}`
            result.textContent = `${userChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
            return "tie";
            /* Otherwise computer wins */
            } else {
            compScore++
            score.textContent = `Current score: ${userScore} - ${compScore}`
            currentRound++
            round.textContent = `Round ${currentRound}`
            result.textContent = `${userChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}`
            return "lose";
            }
}

// function to check who the winner is upon reach a score of 5
function checkWinner() {
    if (userScore == 5) {
        finalResult.textContent = "You are the Grand Champion!";
        userScore = 0;
        compScore = 0;
        currentRound = 0;
    } else if (compScore == 5){
        finalResult.textContent = "You lose! Better luck next time.";
        userScore = 0;
        compScore = 0;
        currentRound = 0;
    } else {
        finalResult.textContent = ``;
    }
}

// event listeners to get everything in motion
    
let rock = document.querySelector("#rock") 

rock.addEventListener("click", () => {oneRound("rock")});
rock.addEventListener("click", () => userChoice = "rock");
rock.addEventListener("click", () => {checkWinner()});

let paper = document.querySelector("#paper") 

paper.addEventListener("click", () => {oneRound("paper")});
paper.addEventListener("click", () => userChoice = "paper");
paper.addEventListener("click", () => {checkWinner()});

let scissors = document.querySelector("#scissors") 

scissors.addEventListener("click", () => {oneRound("scissors")});
scissors.addEventListener("click", () => userChoice = "scissors");
scissors.addEventListener("click", () => {checkWinner()});

