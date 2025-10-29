//this is new branch

let round = 0;
let computerScore = 0;
let playerScore = 0;

const choice = document.querySelectorAll('.choice');
const resultDisplay = document.querySelector('.result');

const scoreDiv = document.querySelector('.score');
const dispPlayerScore = document.querySelector('.playerScore');
const dispComputerScore = document.querySelector('.computerScore');

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

// function getPlayerChoice() {
//     let playerChoice = prompt("Enter your choice. Rock/Paper/Scissors").toLowerCase();
//     return playerChoice;
// } 

function updateResult(result,elem){
    const newE = document.createElement(elem);
    newE.textContent = result;
    // if(resultDisplay.firstElementChild){resultDisplay.removeChild(resultDisplay.firstElementChild);}
    resultDisplay.appendChild(newE);
}

function checkWinner(){
    if(playerScore === 5){
        updateResult('Player Wins !!!!!!!!','h1');
        playerScore = 0;
        computerScore = 0;
        round = 0;
    }
    else if(computerScore === 5){
        updateResult('Computer Wins !!!!!!!!!','h1');
        playerScore = 0;
        computerScore = 0;
        round = 0;
    }

}


function playRound (btn){

    let computer = getComputerChoice().toLowerCase();
    let playerSelection = btn.srcElement.attributes.value.value;
    if(playerSelection === computer){
        updateResult(`Round: ${round} `+'Tie! '.concat("player:"+playerSelection+" "+"computer:"+computer),'p');
        //return 'Tie! '.concat("player:"+playerSelection+" "+"computer:"+computer);
    }
    else if(playerSelection == 'rock'){
        if(computer == 'paper'){
            computerScore++;
            updateResult(`Round: ${round} `+'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer),'p');
            //return 'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }else{
            playerScore++;
            updateResult(`Round: ${round} `+'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer),'p');
            //return 'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }
    }
    else if(playerSelection == 'scissors'){
        if(computer == 'rock'){
            computerScore++;
            updateResult(`Round: ${round} `+'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer),'p');
            //return 'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }else{
            playerScore++;
            updateResult(`Round: ${round} `+'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer),'p');
            //return 'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }
    }
    else if(playerSelection == 'paper'){
        if(computer == 'scissors'){
            computerScore++;
            updateResult(`Round: ${round} `+'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer),'p');
            //return 'Computer Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }else{
            playerScore++
            updateResult(`Round: ${round} `+'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer),'p');
            //return 'Player Won!  '.concat("player:"+playerSelection+" "+"computer:"+computer);
        }
    }

}

function updateScore(){
    dispPlayerScore.textContent = playerScore;
    dispComputerScore.textContent = computerScore;
}

function game(e){
    round++;
    playRound(e);
    checkWinner();
    updateScore();
}


for(let btn of choice){
    btn.addEventListener('click',(e)=>{game(e);});
}
