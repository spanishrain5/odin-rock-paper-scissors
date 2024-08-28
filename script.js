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

    let choice = prompt("rock, paper, scissors?");

    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        alert("illegal input!");
        choice = prompt("rock, paper, scissors?");
    }

    return choice;

}

//console.log(getHumanChoice());

