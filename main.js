let humanScore = 0
let computerScore = 0

function getComputerchoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getHumanchoice() {
    let pickOne = prompt("Please enter your chosen choice: Rock, Paper, or Scissors ");
    let CpickOne = pickOne.toLowerCase();
    return CpickOne;
}
console.log(getHumanchoice());


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper") ) {
        console.log("You win! You just beat the Computer");
        humanScore++;
    }

    else {
        console.log("You lose! The Computer beats you.");
        computerScore++;
    }
}

function endGame () {
    if (humanScore > computerScore) {
        console.log('Game Over! You win!');
    } else if (computerScore > humanScore) {
        console.log('Game Over! You lose!');
    }
    else {
        console.log("Its a tie! You both win.")
    }
    
    console.log(`The Final Score:\nYour Score: ${humanScore}\nComputer Score:${computerScore}`)
}

function playGame() {
    if (humanScore < 5 && computerScore <5) {
        let humanChoice = getHumanchoice();
        let computerChoice = getComputerchoice();
        playRound(humanChoice, computerChoice);
        playGame();
    } else {
        endGame();
    }
}

playGame();
