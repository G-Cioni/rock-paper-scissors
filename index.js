
    var userScore = 0;

    var compScore = 0;

    var currentRound = 0;
    
    

    let score = document.querySelector("#score")
    let round = document.querySelector("#round")
    let result = document.querySelector("#result")
    score.textContent = `Current score: ${userScore} - ${compScore}`
    round.textContent = `Round ${currentRound}`
    
/* Function for generating a random choice for the computer */
function computerSelection() {
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
function oneRoundRock() {
    computerChoice = computerSelection()
    /* Check if user wins*/
    if (computerChoice === "scissors") {
            console.log("win")
            userScore++
            score.textContent = `Current score: ${userScore}-${compScore}`
            currentRound++
            round.textContent = `Round ${currentRound}`
            return "win";
         /* Check if it's a tie*/
         } else if (computerChoice === "rock"){
            console.log("tie")
            score.textContent = `Current score: ${userScore}-${compScore}`
            currentRound++
            round.textContent = `Round ${currentRound}`
            return "tie";
         /* Otherwise computer wins */
         } else {
            compScore++
            score.textContent = `Current score: ${userScore}-${compScore}`
            currentRound++
            round.textContent = `Round ${currentRound}`
            console.log("lose")
            return "lose";
         }
}

/* Function that runs one round*/
function oneRoundPaper() {
    computerChoice = computerSelection()
    /* Check if user wins*/
    if (computerChoice === "rock") {
        console.log("win")
        userScore++
        score.textContent = `Current score: ${userScore}-${compScore}`
        currentRound++
        round.textContent = `Round ${currentRound}`
        return "win";
         /* Check if it's a tie*/
         } else if (computerChoice === "paper"){
            console.log("tie")
            currentRound++
            round.textContent = `Round ${currentRound}`
            return "tie";
         /* Otherwise computer wins */
         } else {
            compScore++
            score.textContent = `Current score: ${userScore}-${compScore}`
            currentRound++
            round.textContent = `Round ${currentRound}`
            console.log("lose")
            return "lose";
         }
}

/* Function that runs one round*/
function oneRoundScissors() {
    computerChoice = computerSelection()
    /* Check if user wins*/
    if (computerChoice === "paper") {
            console.log("win")
            userScore++
            score.textContent = `Current score: ${userScore}-${compScore}`
            currentRound++
            round.textContent = `Round ${currentRound}`
            return "win";
         /* Check if it's a tie*/
         } else if (computerChoice === "scissors"){
            console.log("tie")
            currentRound++
            round.textContent = `Round ${currentRound}`
            return "tie";
         /* Otherwise computer wins */
         } else {
            compScore++
            score.textContent = `Current score: ${userScore}-${compScore}`
            currentRound++
            round.textContent = `Round ${currentRound}`
            console.log("lose")
            return "lose";
         }
}


function checkWinner() {
    if (userScore == 5) {
        result.textContent = "You are the Gand Champion!";
        userScore = 0;
        compScore = 0;
        currentRound = 0;
    } else if (compScore == 5){
        result.textContent = "You lose! Better luck next time.";
        userScore = 0;
        compScore = 0;
        currentRound = 0;
    
    } else {
        result.textContent = "";
    }
}


    
    let rock = document.querySelector("#rock") 

    rock.addEventListener("click", () => {oneRoundRock()});
    rock.addEventListener("click", () => {checkWinner()});

    let paper = document.querySelector("#paper") 

    paper.addEventListener("click", () => {oneRoundPaper()});
    paper.addEventListener("click", () => {checkWinner()});

    let scissors = document.querySelector("#scissors") 

    scissors.addEventListener("click", () => {oneRoundScissors()});
    scissors.addEventListener("click", () => {checkWinner()});

