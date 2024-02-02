/*functions for fetching both PC, and the player's choice */

function getComputerSelection() {
    const selection = ["paper", "rock", "scissors", "lizard", "spock"];
    const randomSelection = Math.floor(Math.random() * 5);
    return selection[randomSelection];

}


function getPlayerSelection(currentRound) {
    let playerSelection;
    playerSelection = prompt(`Round ${currentRound} FIGHT! Pick one: Paper, Rock, Scissors, Lizard, or Spock!`)
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}
/*All options with their results. 
Each result is stored separately as the rules to Paper rock 
scissors lizard spock can be complicated.
Returning not just 'win or lose', but how the game got to that result
teaches players the rules of the game 'AS' they explore the options,
and heavily simplifies the rules for those unfamiliar with the IPS,
Star Trek, or The Big Bang Theory. */
function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Computer Chose: ${computerSelection} "It's a tie!`;
    }
    /*Options for player chooses rock*/
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer Chose: Paper... YOU LOSE! Paper Covers Rock..."
    } else if (playerSelection === "rock" && computerSelection === "spock") {
        return "Computer Chose: Spock... YOU LOSE! Spock Vaporises Rock..."
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Computer Chose: Scissors... YOU WIN! Rock breaks scissors!"
    } else if (playerSelection === "rock" && computerSelection === "lizard") {
        return "Cromputer Chose: Lizard... YOU WIN! Rock crushes lizard!"
    }
    /*Options for player chooses paper*/
    else if (playerSelection === "paper" && computerSelection === "spock") {
        return "Computer Chose: Spock... YOU WIN! Paper Disproves Spock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer Chose: Scissors... YOU LOSE! Scissors Cuts Through Paper..."
    } else if (playerSelection === "paper" && computerSelection === "lizard") {
        return "Computer Chose: Lizard... YOU LOSE! Lizard Eats Paper..."
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Computer Chose: Rock... YOU WIN! Paper Covers Rock!"
    }
    /*Options for Player chooses scissors*/
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer Chose: Rock... YOU LOSE! Rock Breaks Scissors..."
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Computer Chose: Paper... YOU WIN! Scissors Cuts Through Paper!"
    } else if (playerSelection === "scissors" && computerSelection === "spock") {
        return "Computer Chose: Spock... YOU LOSE! Spock Smashes Scissors..."
    } else if (playerSelection === "scissors" && computerSelection === "lizard") {
        return "Computer Chose: Lizard... YOU WIN! Scissors Decapitate Lizard!"
    }
    /*Options for Player chooses Lizard*/
    else if (playerSelection === "lizard" && computerSelection === "rock") {
        return "Computer Chose: Rock... YOU LOSE! Rock Crushes Lizard..."
    } else if (playerSelection === "lizard" && computerSelection === "paper") {
        return "Computer Chose: Paper... YOU WIN! Lizard Eats Paper!"
    } else if (playerSelection === "lizard" && computerSelection === "scissors") {
        return "Computer Chose: Scissors... YOU LOSE! Scissors Decapitates Lizard..."
    } else if (playerSelection === "lizard" && computerSelection === "spock") {
        return "Computer Chose: Spock... YOU WIN! Lizard Poisons Spock!"
    }
    /*Options for Player chooses spock*/
    else if (playerSelection === "spock" && computerSelection === "rock") {
        return "Computer Chose: Rock... YOU WIN! Spock Vaporizes Rock!"
    }
    else if (playerSelection === "spock" && computerSelection === "paper") {
        return "Computer Chose: Paper... YOU LOSE! Paper Disproves spock..."
    }
    else if (playerSelection === "spock" && computerSelection === "scissors") {
        return "Computer Chose: Scissors... YOU WIN! spock Smashes Scissors!"
    }
    else if (playerSelection === "spock" && computerSelection === "lizard") {
        return "Computer Chose: Lizard... YOU LOSE! Lizard Poisons Spock..."
    } else { return ("ERROR: Please pick either Paper, Rock, Scissors, Lizard, or Spock.") }
}

/*set loop for rounds
trigger game to play
calculate victor of round
store current scores for PC and Player */

let playerScore = 0;
let computerScore = 0
for (let currentRound = 1; currentRound <= 10; currentRound++) {
    const computerSelection = getComputerSelection();
    const playerSelection = getPlayerSelection(currentRound);
    const result = playGame(playerSelection, computerSelection);
    console.log(result);
    console.log(`Round ${currentRound} FIGHT! ${playGame(playerSelection, computerSelection)}`)
    if (result.includes("WIN!")) {
        playerScore++;
    } else if (result.includes("LOSE")) {
        computerScore++
    } else if (result.includes("ERROR:")) {
        currentRound--
    }
    console.log(`Computer Score = ${computerScore}, Player Score = ${playerScore}`)
    alert(result);
}

/*getting the final score*/

function gameOver(finalPlayerScore, finalComputerScore) {
    if (finalPlayerScore > finalComputerScore) { return "YOU WIN!" } else if (finalComputerScore > finalPlayerScore) { return "YOU LOSE" } else { return "IT's A TIE!" }
}

alert(`GAME OVER!! You scored ${playerScore}, computer scored ${computerScore}... ${gameOver(playerScore, computerScore)}! Refresh the page to play again!`)


//TO END GAME EARLY: JUST HIT CANCEL!

