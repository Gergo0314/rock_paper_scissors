function randNum(n) {
  return Math.floor(Math.random() * n);
}
//generates a random number between 0 and n

function getComputerChoice() {
  const myList = ["rock", "paper", "scissors"]; //a list of possible choices
  const index = randNum(myList.length); //index = a random number between 0 and 2 (plugs 3 into randNum)
  return myList[index]; //returns a random item from myList
}

const playerInput = prompt("Choose your weapon (rock, paper, scissors)");
const playerSelection = playerInput.toLowerCase(); //turns input into all lowercase
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! Paper beats rock");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win! Rock beats scissors");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lose! Rock beats scissors");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You win! Scissors beats paper");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lose! Scissors beats paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win! Paper beats rock");
  } else {
    alert("You mistyped that, buckaroo!");
  }
}
playRound(playerSelection, computerSelection)