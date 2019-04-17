// return a random number between min and max. (including both)
let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function computerPlay() {
    let selectorNum = random(1,3); // get a random number as decider for selection
    switch (selectorNum){
        case 1: return "rock"; break;
        case 2: return "scissors"; break;
        case 3: return "paper"; break;
        default: console.error("Something is wrong!");
    } 
}

function game(numOfRounds = 5) {
    for (let i = 0; i < numOfRounds; i++) {
        console.log("Game "+ (i+1)); // print the number of the current round
        let playerSelection;
        while (true) {
            playerSelection = prompt("Rock/Scissors/Paper? :").toLowerCase();
            validSelections = ["rock", "paper", "scissors"];
            if (validSelections.includes(playerSelection)) {
                break;
            } else {
                confirm("Invalid Input! Please enter 'rock', 'scissors' or 'paper'");
            }
        }
        console.log(playRound(playerSelection, computerPlay()))
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if(playerSelection==="rock"){
        if (computerSelection === "paper") {
            return "Computer wins! Paper beats Rock!";
        } else {
            return ("You win! Rock beats " + computerSelection);
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "Computer wins! Scissors cuts Paper.";
        } else {
            return ("You win! Paper wraps " + computerSelection);
        }
    } else if (playerSelection === "scissors"){
        if(computerSelection === "rock") {
            return "Computer wins! Rock beats Scissors!";
        } else {
            return "You win! Scissors cuts Paper!";
        }
    } else {
        return "invalid input!"
    }
}
