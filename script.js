// round 1, round line says title, other lines blank
// if player clicks button, playRound is called:
//      get player choice
//      get computer choice
//      call showRoundResult
//      call updateScore
//      increment roundIndex 
// if roundIndex = rounds when button is clicked, also call showGameResult
// if roundIndex = rounds+1 when button is clicked, only call newGame
/*

let humanScore = 0;
let computerScore = 0;
let roundIndex = 1;

buttons.addEventListener('click', (event) => buttonClickHandler(event));

function buttonClickHandler(event) {
    playerChoice = event.target.id || event.target.parentNode.id;

    if (roundIndex === ROUNDS + 1) {
        restartGame();
    } else if (roundIndex === ROUNDS) {
        playRound();
        showGameResult();
    } else {
        playRound(); 
    }
}

function playRound (playerChoice, getComputerChoice) {
    *calculate winner*

    showRoundResult();
    updateScore();

    roundIndex++;
}

function newGame () {
    let humanScore = 0;
    let computerScore = 0;
    let roundIndex = 1;

    roundLine = "title";
    logLine = " ";
    scoreLine = " ";
}

*/


const ROUNDS = 5;

const roundLine = document.querySelector('#round-text');
const buttons = document.querySelector('#buttons');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const logLine = document.querySelector('#log');
const scoreLine = document.querySelector('#score');

let humanChoice;
let humanScore = 0;
let computerScore = 0;
let roundIndex = 1;

buttons.addEventListener('click', (event) => buttonClickHandler(event));

function buttonClickHandler(event) {
    
    roundLine.textContent = " ";
    
    humanChoice = event.target.id || event.target.parentNode.id;

    if (roundIndex === ROUNDS + 1) {
        newGame();
    } else if (roundIndex === ROUNDS) {
        playRound(humanChoice, getComputerChoice());
        showGameResult();
    } else {
        playRound(humanChoice, getComputerChoice()); 
    }
}

function playRound (humanChoice, computerChoice) {
    
    let result;

    if (humanChoice === computerChoice) {
        result = "tie";
    } else {
        switch (humanChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'paper': result = "lose"; break;
                case 'scissors': result = "win"; break;
            };
        break;
        case 'paper':
            switch (computerChoice) {
                case 'scissors': result = "lose"; break;
                case 'rock': result = "win"; break;
            }
        break;
        case 'scissors':
            switch (computerChoice) {
                case 'rock': result = "lose"; break;
                case 'paper': result = "win"; break;
            }
        break;
    }
    }
    
    showRoundResult(result, humanChoice, computerChoice);
    updateScore(result);

    roundIndex++;
}

function getComputerChoice () {
    
    let choice;
    let randomNumber = Math.random();
    
    if (randomNumber < 1/3) {
        choice = "rock";
    }
    else if (randomNumber < 2/3) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }

    return choice;
}

function showRoundResult (result, humanChoice, computerChoice) {
    
    if (result === 'win') {
        logLine.textContent = `you win! ${humanChoice} beats ${computerChoice}.`;
    }
    else if (result === 'lose') {
        logLine.textContent = `you lose! ${computerChoice} beats ${humanChoice}.`;
    }
    else {
        logLine.textContent = `it's a tie! ${humanChoice} against ${computerChoice}.`;
    }

    //roundLine.textContent = `round ${roundIndex}!`;
}

function updateScore (result) {
    switch (result) {
        case 'win' : humanScore++; break;
        case 'lose' : computerScore++; break;
    }
    scoreLine.textContent = `${humanScore} - ${computerScore}`;
}

function showGameResult () {

    let scoreDisplay = `${humanScore} - ${computerScore}`;
    
    if (humanScore > computerScore) {
        scoreLine.textContent = `congratulations! you have won with a score of ${scoreDisplay}. click any button to restart.`;
        scoreLine.setAttribute("style", "color: green;");
    }
    else if (humanScore < computerScore) {
        scoreLine.textContent = `better luck next time! you have lost with a score of ${scoreDisplay}. click any button to restart.`;
        scoreLine.setAttribute("style", "color: red;");
    }
    else {
        scoreLine.textContent = `the game is over and it's a tie! click any button to restart.`;
        scoreLine.setAttribute("style", "color: orange;");
    }
}

function newGame () {
    humanScore = 0;
    computerScore = 0;
    roundIndex = 1;

    roundLine.textContent = "rock, paper, scissors?";
    scoreLine.setAttribute("style", "color: black;");
    logLine.textContent = " ";
    scoreLine.textContent = " ";
}
