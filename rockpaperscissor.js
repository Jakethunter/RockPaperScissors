function getComputerChoice() {
let computer = Math.random();
    if (computer < 0.33) {
        computer = "Rock"
    } else if (computer >= 0.33 && computer <= 0.66 ) {
        computer = "Paper"
    } else {
        computer = "Scissor"
    }
console.log(computer)
}
function getHumanChoice() {
    let human = prompt("Pick Rock, Paper, or Scissors");
    console.log(human)
}

getHumanChoice()
getComputerChoice()

