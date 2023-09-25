

let computerScore;
let playerScore;

function getComputerChoice() {
    let randNum = Math.floor((Math.random()*3)+1);
    switch (randNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3: 
            return "Scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice. Rock/Paper/Scissors").toLowerCase();
    return playerChoice;
} 



function playRound (playerSelection, computerSelection){

    let computer = computerSelection.toLowerCase();
    if(playerSelection === computer){
        return 'Tie! '.concat("player:"+playerSelection+" "+"computer:"+computer);
    }
    else if(playerSelection == 'rock'){
        if(computer == 'paper'){
            computerScore++;
            return 'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }else{
            playerScore++;
            return 'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }
    }
    else if(playerSelection == 'scissors'){
        if(computer == 'rock'){
            computerScore++;
            return 'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }else{
            playerScore++;
            return 'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }
    }
    else if(playerSelection == 'paper'){
        if(computer == 'scissors'){
            computerScore++;
            return 'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }else{
            playerScore++
            return 'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }
    }

}

function game(){
    
    for(let i=0; i<5; i++){
        console.log("Round " + (i+1));
        console.log(playRound(getPlayerChoice(),getComputerChoice()));
    }

    return (playerScore==computerScore)?"TIE !! Nobody wins ": (playerScore>computerScore)?"Player WON!!!":"Computer WON!!! "; 




}

console.log(game());