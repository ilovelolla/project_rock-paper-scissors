let humanScore = 0;
let computerScore = 0;
let moveCount = 0
const maxRound = 5;

function getComputerchoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(humanChoice) {
    
    if(moveCount >= maxRound) return;
    
    const computerChoice = getComputerchoice();
    let resultText =""

    if (humanChoice === computerChoice) {
        resultText= `It’s a tie! <br>You chose ${humanChoice} and the computer chose ${computerChoice}.`;

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper") ) {
        resultText = `You win! <br>You chose ${humanChoice} and the computer chose ${computerChoice}.`;
        humanScore++;
    } else if ( 
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") ) {
        resultText = `You lose! <br>You chose ${humanChoice} and the computer chose ${computerChoice}.`
        computerScore++;
    };
    

    moveCount++;

    updateText(resultText);
    
    if (
        moveCount === maxRound){
            endGame();
    };
}

// UI HERE!!

const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");
const playAgain = document.getElementById('playAgain');

rockButton.addEventListener ("click",function(){ 
    playRound("rock")}) ;
paperButton.addEventListener("click",function(){
    playRound("paper")});
scissorsButton.addEventListener("click",function(){
    playRound("scissors")});
playAgain.addEventListener("click", restartGame);

function updateText(resultText) {
    document.getElementById('computerScore').textContent = `Computer: ${computerScore}`;
    document.getElementById('humanScore').textContent = `Player: ${humanScore}`;
    document.getElementById('txt').innerHTML = resultText;
};

function endGame() {
    if (humanScore > computerScore) {
        document.getElementById("result").textContent = 
        "You win! You just beat the Computer"
    } else if (humanScore < computerScore) {
    document.getElementById("result").textContent = 
        "You lose! The computer beats you"
    } else {
    document.getElementById("result").textContent =
    "Its a tie! You and the Computer Win"  
}
    document.getElementById('playAgain').disabled = false
};

function restartGame () {

humanScore = 0;
computerScore = 0;
moveCount = 0;

    document.getElementById('computerScore').textContent = `Computer: ${computerScore}`;
    document.getElementById('humanScore').textContent = `Player: ${humanScore}`;
    document.getElementById('txt').innerHTML = "Pick your weapon! <br>The first to reach 5 points claims victory";
    document.getElementById("result").textContent = "";
    document.getElementById('playAgain').disabled = true;
}
