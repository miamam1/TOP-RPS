
function getComputerChoice() {
    
    return rps[Math.floor(Math.random() * rps.length)];
     
}

let playerScore = 0
let computerScore = 0
let rounds = 0
let rps = ["rock", "paper", "scissors"]


function userInput() {
    playerSelection = prompt("Rock paper or scissors?")
    playerSelection = playerSelection.toLowerCase()
    while(rps.includes(playerSelection) == false) {
        playerSelection = prompt("Not a choice. Rock, paper or scissors?")
        playerSelection = playerSelection.toLowerCase()
    }
    
    
}

function whoWon(playerScore, computerScore) {
    if(playerScore > computerScore) {
        return("You won.")
    }
    else{
        return("You lost")
        // maybe bad to do this but they way the game works currently there are no ties, so no potential for a 5 - 5 or something. saves some code.
        
    }

}
function RPSround(playerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = playerSelection.toLowerCase()
    console.log("Player throws: " + playerSelection)
    console.log("Computer throws: " + computerSelection)
    if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' ||
     playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1
        playerScoreText.textContent = "Player score: " + playerScore 
        return result.textContent = "You win this round as your choice, " + playerSelection + "," + ' beats ' + computerSelection + "." , game()
        
    }
    else if(playerSelection === computerSelection) {
        return result.textContent = "It's a tie!"
    }
    else {
        computerScore += 1
        rounds += 1
        computerScoreText.textContent = "Computer score: " + computerScore
        return result.textContent = "You lose this round as the computers choice," + computerSelection + "," + ' beats ' + playerSelection + ".", game()
        
        
    }
    
}





//function game() {
    //while(rounds != 5) {
    //userInput()
    //let computerSelection = getComputerChoice()
    //console.log(RPSround(playerSelection, computerSelection))
    //}
    //if(rounds == 5) {
        //console.log("Games over, GGs")
        //console.log("Your score: " + playerScore + "Computer Score: " + computerScore)
        //console.log(whoWon(playerScore, computerScore))
        
        //playerScore = 0
        //computerScore = 0
        //rounds = 0
    //}
//}



function game() {
    if(playerScore == 5) {
        result.textContent = "You won! Good job. To play agian, pick another option."
        playerScore = 0
        computerScore = 0
        playerScoreText.textContent = "Player Score: " + playerScore
        computerScoreText.textContent = "Computer Score: " + computerScore
    }
    else if(computerScore == 5) {
        result.textContent = "You lost! To play agian, pick another option."
        playerScore = 0 
        computerScore = 0
        playerScoreText.textContent = "Player Score: " + playerScore
        computerScoreText.textContent = "Computer Score: " + computerScore
    }
}

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => RPSround('rock'))

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => RPSround('paper'))

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => RPSround('scissors'))