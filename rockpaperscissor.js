let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
let computer = Math.random();
    if (computer < 0.33) {
        computer = "rock"
    } else if (computer >= 0.33 && computer <= 0.66 ) {
        computer = "paper"
    } else {
        computer = "scissor"
    }
    console.log(computer);
    return computer;
}

let scoreBoard;
let humanScoreCounter;
let computerScoreCounter;
let announceWinner;

document.addEventListener("DOMContentLoaded", () => {
    const buttonDiv = document.querySelector(".buttons");
    computerScoreCounter = document.createElement("h6")
    humanScoreCounter = document.createElement("h6")
    scoreBoard = document.querySelector(".scoreBoard")
    humanScoreCounter.setAttribute("class", "HumanScore")
    computerScoreCounter.setAttribute("class", "ComputerScore")
    announceWinner = document.querySelector(".winner")
    scoreBoard.appendChild(humanScoreCounter);
    scoreBoard.appendChild(computerScoreCounter);
    buttonDiv.addEventListener("click", getHumanChoice);

});




function getHumanChoice(event) {
    let target = event.target;
    switch(target.className) {
        case "rockButton":
            humanChoice = "rock"
            break;
        case "paperButton":
            humanChoice = "paper"
            break;
        case "scissorButton":
            humanChoice = "scissor"
            break;
    }
    console.log(humanChoice)
    let computerChoice = getComputerChoice()
    playRound (humanChoice, computerChoice)
}





function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Its a Tie!")
    }   else if(humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("Computer Wins!")
                computerScore = computerScore + 1
            }   else if (computerChoice === "scissor") {
                console.log("You Win!")
                humanScore = humanScore + 1
            }

    }   else if(humanChoice === "paper") {
            if (computerChoice === "scissor") {
                console.log("Computer Wins!")
                computerScore = computerScore + 1
            }   else if (computerChoice === "rock") {
                console.log("You Win!")
                humanScore = humanScore + 1
            }
    }   else if(humanChoice === "scissor") {
            if (computerChoice === "rock") {
                console.log("Computer Wins!")
                computerScore = computerScore + 1
            }   else if (computerChoice === "paper") {
                console.log("You Win!")
                humanScore = humanScore + 1
            }
    }  
    humanScoreCounter.textContent = `Human Score = ${humanScore}`;
    computerScoreCounter.textContent = `Computer Score = ${computerScore}`;

    if (humanScore === 5) {
        announceWinner.textContent = "You Win!"
    }
    if (computerScore === 5) {
        announceWinner.textContent = "computer Wins!"
    }

}