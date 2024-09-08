const ROUNDS = 10;
const ROUND_END_TIMEOUT = 1000;
const WIN_COLOR = 'green';
const LOSE_COLOR = 'red';

const startButton = document.querySelector('#start-button');
const roundLine = document.querySelector('#round-text');
const buttons = document.querySelector('#buttons');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const logLine = document.querySelector('#log');
const scoreLine = document.querySelector('#score');
let humanChoiceButton;

let humanChoice;
let humanScore;
let computerScore;
let roundIndex;
let result;
let scoreDisplay;
let choice;
let randomNumber;

startButton.addEventListener('click', () => startNewGame());
buttons.addEventListener('click', (event) => buttonClickHandler(event));
buttons.classList.add('hidden', 'disabled');

function startNewGame () {
    humanScore = 0;
    computerScore = 0;
    roundIndex = 1;

    roundLine.textContent = `round ${roundIndex}/${ROUNDS}`;
    roundLine.style.color = 'black';
    logLine.textContent = " ";
    scoreLine.textContent = `${humanScore} - ${computerScore}`;
    scoreLine.style.color = 'black';

    startButton.classList.add('hidden');
    buttons.classList.remove('hidden', 'disabled');  
}

function buttonClickHandler(event) {
    
    humanChoice = event.target.id || event.target.parentNode.id;

    if (humanChoice != 'buttons') {
        humanChoiceButton = document.querySelector(`#${humanChoice}`);
        playRound(humanChoice, getComputerChoice());
    }
    
}

function playRound (humanChoice, computerChoice) {
    
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
    
    if (result !== 'tie') updateScore(result);
    showRoundResult(result, humanChoice, computerChoice);
}

function getComputerChoice () {
    
    randomNumber = Math.random();
    
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
        humanChoiceButton.style.backgroundColor = WIN_COLOR;
        logLine.textContent = `${humanChoice} beats ${computerChoice}.`;
    }
    else if (result === 'lose') {
        humanChoiceButton.style.backgroundColor = LOSE_COLOR;
        logLine.textContent = `${computerChoice} beats ${humanChoice}.`;
    }
    else {
        logLine.textContent = `${humanChoice} against ${computerChoice}.`;
    }

    buttons.classList.add('disabled');

    setTimeout(() => {
        if (roundIndex < ROUNDS) {setupNewRound();}
        else {endGame();}
    }, ROUND_END_TIMEOUT);

}

function updateScore (result) {
    switch (result) {
        case 'win' : humanScore++; break;
        case 'lose' : computerScore++; break;
    }
    scoreLine.textContent = `${humanScore} - ${computerScore}`;
}

function setupNewRound() {
    roundIndex++;
    roundLine.textContent = `round ${roundIndex}/${ROUNDS}`;
    logLine.textContent = ' ';
    humanChoiceButton.style.backgroundColor = '';
    buttons.classList.remove('disabled');
}

function endGame() {

    logLine.textContent = " ";
    scoreLine.textContent = " ";
    humanChoiceButton.style.backgroundColor = '';
    
    scoreDisplay = `${humanScore} - ${computerScore}`;
    
    if (humanScore > computerScore) {
        roundLine.textContent = `you win with a score of ${scoreDisplay}.`;
    }
    else if (humanScore < computerScore) {
        roundLine.textContent = `you lost with a score of ${scoreDisplay}.`;
    }
    else {
        roundLine.textContent = `it's a tie.`;
    }

    buttons.classList.add('hidden');
    startButton.classList.remove('hidden');
    
    startButton.firstElementChild.innerText = 'play again';
    
}


