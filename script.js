function getComputerChoice () {
    
    let choice;

    let randomNumber = Math.random();
    
    if (randomNumber < 1/3) {
        choice = "Rock";
    }
    else if (randomNumber < 2/3) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }

    return choice;
}

