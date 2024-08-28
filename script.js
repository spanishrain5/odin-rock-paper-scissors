
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice () {

    let choice = prompt("rock, paper, scissors?").toLowerCase();

    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        alert("illegal input!");
        choice = prompt("rock, paper, scissors?").toLowerCase();
    }

    return choice;

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
    
    adjustScore(result);
    showResult(result, humanChoice, computerChoice);
}

function adjustScore (result) {

}

function showResult (result, humanChoice, computerChoice) {
    
}

playRound(getHumanChoice(), getComputerChoice());

//console.log(getHumanChoice());

