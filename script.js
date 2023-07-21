
function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"]
    return rps[Math.floor(Math.random() * rps.length)];
     
}

let playerScore = 0
let computerScore = 0
let rounds = 0


function RPSround(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    console.log("Player throws: " + playerSelection)
    console.log("Computer throws: " + computerSelection)
    if(playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' ||
     playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1
        rounds += 1
        return("You win, " + playerSelection + ' beats ' + computerSelection)
        
        
        
    }
    else if(playerSelection === computerSelection) {
        return("Tie")
    }
    else {
        computerScore += 1
        rounds += 1
        return("You lose, " + computerSelection + ' beats ' + playerSelection)
        
        
    }
}




function game() {
    
    while(rounds != 5) {
    let playerSelection = prompt("Rock, paper, or scissors?")
    let computerSelection = getComputerChoice()
    console.log(RPSround(playerSelection, computerSelection))
    
    }
    if(rounds == 5) {
        console.log("Games over, GGs")
        console.log(playerScore, computerScore)
        playerScore = 0
        computerScore = 0
        rounds = 0
    }
}



