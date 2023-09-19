// Define choices
let choices = [
    "rock",
    "paper",
    "scissors"
]

// Get choices from computer and player
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice() {
    return prompt('Rock, Paper, or Scissors?').toLowerCase();
}


// Determine who wins
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return "Computer";
    } else if (playerSelection === computerSelection) {
        return "Tie";
    } else {
        return "Player";
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let tie = 0;
    let rounds = 1;


    while (rounds < 6 ) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        result = playRound(playerSelection, computerSelection);
    
        if (result === "Player") {
            playerWins++;
        } else if (result === "Computer") {
            computerWins++;
        }

        console.log(`------ROUND ${rounds}------`);
        console.log(`Player: ${playerSelection}`);
        console.log(`Computer: ${computerSelection}`);
        if (result === "Tie") {
            console.log("Result: It's a tie!")
        } else {
            console.log(`Result: ${result} wins!`);
        }
        console.log(`Player ${playerWins} vs Computer ${computerWins}`);

        rounds++;
    }

    console.log('------Game over!------')
    if (playerWins > computerWins) {
        console.log(`Player wins! ${playerWins} vs ${computerWins}`)
    } else if (computerWins > playerWins) {
        console.log(`Computer wins! ${computerWins} vs ${playerWins}`)
    } else {
        console.log(`It's a tie! ${playerWins} vs ${computerWins}`)
    }
}