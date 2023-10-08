//this is new branch

let round = 0;
let computerScore =0;
let playerScore =0;

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

function updateResult(result){
    const newp = document.createElement('p');
    newp.textContent = result;
    resultDisplay.appendChild(newp);
}

function checkWinner(){
    if(playerScore === 5){updateResult('Player Wins !!!!!!!!');}
    else if(computerScore === 5){updateResult('Computer Wins !!!!!!!!!');}
}


function playRound (btn){

    let computer = getComputerChoice().toLowerCase();
    let playerSelection = btn.srcElement.attributes.value.value;
    if(playerSelection === computer){
        updateResult('Tie! '.concat("player:"+playerSelection+" "+"computer:"+computer));
        //return 'Tie! '.concat("player:"+playerSelection+" "+"computer:"+computer);
    }
    else if(playerSelection == 'rock'){
        if(computer == 'paper'){
            computerScore++;
            updateResult('Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer));
            //return 'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }else{
            playerScore++;
            updateResult('Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer));
            //return 'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }
    }
    else if(playerSelection == 'scissors'){
        if(computer == 'rock'){
            computerScore++;
            updateResult('Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer));
            //return 'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }else{
            playerScore++;
            updateResult('Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer));
            //return 'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }
    }
    else if(playerSelection == 'paper'){
        if(computer == 'scissors'){
            computerScore++;
            updateResult('Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer));
            //return 'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }else{
            playerScore++
            updateResult('Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer));
            //return 'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }
    }

}

function game(e){
    round++;
    updateResult(`Round: ${round}`);
    playRound(e);
    checkWinner();
}

// ----------------------                 console.log(game());


const choice = document.querySelectorAll('.choice');
const resultDisplay = document.querySelector('.result');
//console.log(choice);
for(let btn of choice){
    btn.addEventListener('click',(e)=>{game(e);});
}
