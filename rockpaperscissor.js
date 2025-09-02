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


document.addEventListener("DOMContentLoaded", () => {
    const buttonDiv = document.querySelector(".buttons");
    const ComputerScoreCounter = document.querySelector(".Computer")
    const humanScoreCounter = document.querySelector(".human")
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


let humanScore = 0;
let computerScore = 0;



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
    }   else {
        console.log("Invalid Choice, please refresh and follow instructions")
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
        if (humanScore > computerScore) {
            console.log("You Win")
        }   else if (humanScore < computerScore) {
            console.log("Computer Wins")
        } else {
            console.log("its a tie")
        }
}
