function randNum(n) {
  return Math.floor(Math.random() * n);
} 
//generates a random number between 0 and n

function getComputerChoice() {
  const myList = ["rock", "paper", "scissors"]; //a list of possible choices
  const index = randNum(myList.length); //index = a random number between 0 and 2 (plugs 3 into randNum)
  return myList[index]; //returns a random item from myList
}

let playerInput = prompt("Choose your weapon (rock, paper, scissors)");
let playerChoice = playerInput.toLowerCase() //turns input into all lowercase

if (playerChoice === getComputerChoice()) {
    alert("It's a tie!");
}
else if (playerChoice === "rock" && getComputerChoice() === "paper") {
    alert("You lose! Paper beats rock");
}
else if (playerChoice === "rock" && getComputerChoice() === "scissors") {
    alert("You win! Rock beats scissors");
}
else if (playerChoice === "scissors" && getComputerChoice() === "rock") {
    alert("You lose! Rock beats scissors");
}
else if (playerChoice === "scissors" && getComputerChoice() === "paper") {
    alert("You win! Scissors beats paper");
}
else if (playerChoice === "paper" && getComputerChoice() === "scissors") {
    alert("You lose! Scissors beats paper");
}
else if (playerChoice === "paper" && getComputerChoice() === "rock") {
    alert("You win! Paper beats rock");
}
else {
    alert("You mistyped that, buckaroo!")
}
