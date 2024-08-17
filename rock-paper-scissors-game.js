

// declare game variables initialized to 0
    //  humanScore, computerScore
let humanScore = 0;
let computerScore = 0;

console.log("Hello World")
console.log(getComputerChoice());
console.log(getHumanChoice());
updateScores(humanScore);

// function to get computer choice
    // return “rock”, “paper” or “scissors”
function getComputerChoice(){
    var random = (Math.floor(Math.random() * 3));
    switch (random){
        case 0:
            return "rock"
            break;
        

        case 1:
            return "paper"
            break;
        

        case 2:
            return "scissors"
            break;
        
    }
}

// function to get human choice
    // return “rock”, “paper” or “scissors”
function getHumanChoice(){
    return prompt("What will your play?").toLowerCase();
}

// funtion to keep track of player scores

function updateScores(scoreVariable){
    scoreVariable = scoreVariable + 1;
}

// function to declare the player scores

//  function that make human and computer play a single round against each other
    // param humanChoice, PlayerChoice - canse insensitive
    // increment player scores


// funtion to make players play a full game