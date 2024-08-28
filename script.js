
const ROUNDS = 5;

playGame(ROUNDS);

function playGame (rounds) {

    let humanScore = 0;
    let computerScore = 0;
    let result;

    for (let i = 1; i <= rounds; i++) {
        result = playRound(getHumanChoice(i), getComputerChoice());
        
        switch (result) {
            case "win": humanScore++; break;
            case "lose": computerScore++; break;
        }

        showScore(humanScore, computerScore);
    }

    showGameResult(humanScore, computerScore);
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

    return result;
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

function getHumanChoice (roundIndex) {

    let choice = prompt(`round ${roundIndex}!  rock, paper, scissors?`).toLowerCase();

    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        alert("illegal input!");
        choice = prompt(`round ${roundIndex}! rock, paper, scissors?`).toLowerCase();
    }

    return choice;

}

function showRoundResult (result, humanChoice, computerChoice) {
    
    if (result === 'win') {
        console.log(`you win! ${humanChoice} beats ${computerChoice}.`);
    }
    else if (result === 'lose') {
        console.log(`you lose! ${computerChoice} beats ${humanChoice}.`);
    }
    else {
        console.log(`it's a tie! ${humanChoice} against ${computerChoice}.`);
    }
}

function showScore (humanScore, computerScore) {
    console.log(`the score is ${humanScore} - ${computerScore}.`);
}

function showGameResult (humanScore, computerScore) {
    
    let scoreDisplay = `${humanScore} - ${computerScore}`;

    if (humanScore > computerScore) {
        console.log(`congratulations! you have won with a score of ${scoreDisplay}.`);
    }
    else if (humanScore < computerScore) {
        console.log(`better luck next time! you have lost with a score of ${scoreDisplay}.`);
    }
    else {
        console.log(`the game is over and it's a tie! the score is ${scoreDisplay}.`);
    }
}
