

// declare game variables initialized to 0
    //  humanScore, computerScore
let humanScore = 0;
let computerScore = 0;
let numberOfGames = 0;

console.log("Play game");
playFullGame();


// function to get computer choice
    // return “rock”, “paper” or “scissors”
function getComputerChoice(){
    var random = (Math.floor(Math.random() * 3));
    switch (random){
        case 0:
            return "ROCK"
            break;
        

        case 1:
            return "PAPER"
            break;
        

        case 2:
            return "SCISSORS"
            break;
        
    }
}

// function to get human choice
    // return “rock”, “paper” or “scissors”
function getHumanChoice(){
    return prompt("What will you play?").toUpperCase();
}

// funtion to keep track of player scores

function updateHumanScore(computerChoice, humanChoice){
    humanScore++
    console.log("You WIN!!" + humanChoice + " beats " + computerChoice )

}

function updateComputerScore(computerChoice, humanChoice){
    computerScore++;
    console.log("You LOSE!!" + computerChoice + " beats " + humanChoice );
}

function playTie(){
    console.log("There was a tie");
}

// function to declare the player scores

function declarePlayerScores(){
    console.log("Your Score: " + humanScore);
    console.log("Computer's Score: " + computerScore);
}

//  function that make human and computer play a single round against each other
    // param humanChoice, PlayerChoice - canse insensitive
    // increment player scores

function playRound(humanChoice, computerChoice){
    if (humanChoice == "ROCK"){
        switch (computerChoice){
            case "ROCK":
                playTie();
                break;

            case "PAPER":
                updateComputerScore(computerChoice, humanChoice);
                break;

            case "SCISSORS":
                updateHumanScore(computerChoice, humanChoice);
                break;
            
            default: console.log("Something went wrong, there is no winner")
        }
    }

    else if (humanChoice == "PAPER"){
        switch (computerChoice){
            case "ROCK":
                updateHumanScore(computerChoice, humanChoice);
                break;

            case "PAPER":
                playTie();
                break;

            case "SCISSORS":
                updateComputerScore(computerChoice, humanChoice);
                break;
            
            default: console.log("Something went wrong, there is no winner")
        }
    }

    else if (humanChoice == "SCISSORS"){
        switch (computerChoice){
            case "ROCK":
                updateComputerScore(computerChoice, humanChoice);
                break;

            case "PAPER":
                updateHumanScore(computerChoice, humanChoice);
                break;

            case "SCISSORS":
                playTie();
                break;
            
            default: console.log("Something went wrong, there is no winner");
        }
    }

    else {
        console.log("Something went wrong, there is no winner");
    }
}

// funtion to make players play a full game

function playFullGame(){
    while(numberOfGames < 5){
        console.log("Round: " + (numberOfGames+1));
        var humanChoice = getHumanChoice();
        console.log("Your play: " + humanChoice);
        var computerChoice = getComputerChoice();
        console.log("Computer's Play " + computerChoice);
        playRound(humanChoice,computerChoice );
        numberOfGames++;
    }
    console.log("GAME OVER!!");
    declarePlayerScores();
    numberOfGames = 0;
}