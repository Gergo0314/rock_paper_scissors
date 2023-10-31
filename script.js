function randNum(n) {
  return Math.floor(Math.random() * n); //generates a random number between 0 and n
}

function getComputerChoice() {
  const myList = ["rock", "paper", "scissors"]; //a list of possible choices
  const index = randNum(myList.length); //index = a random number between 0 and 2 (plugs 3 into randNum)
  return myList[index]; //returns a random item from myList
}

const buttons = document.querySelectorAll(".playerBtn");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent.toLowerCase());
  });
});

const announcement = document.querySelector(".text");
const score = document.querySelector(".score");

let playerScore = 0;
let computerScore = 0;

score.textContent =
  "Player " + playerScore + " : " + computerScore + " Computer";

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    announcement.textContent = "It's a tie!";
    playerScore++;
    computerScore++;
    score.textContent =
      "Player " + playerScore + " : " + computerScore + " Computer";
    return "tie";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    announcement.textContent = "Paper beats rock, you lost!";
    computerScore++;
    score.textContent =
      "Player " + playerScore + " : " + computerScore + " Computer";
    return "computer";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    announcement.textContent = "Rock beats scissors, you won!";
    playerScore++;
    score.textContent =
      "Player " + playerScore + " : " + computerScore + " Computer";
    return "player";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    announcement.textContent = "Rock beats scissors, you lost!";
    computerScore++;
    score.textContent =
      "Player " + playerScore + " : " + computerScore + " Computer";
    return "computer";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    announcement.textContent = "Scissors beat paper, you win!";
    playerScore++;
    score.textContent =
      "Player " + playerScore + " : " + computerScore + " Computer";
    return "player";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    announcement.textContent = "Scissors beat paper, you lost!";
    computerScore++;
    score.textContent =
      "Player " + playerScore + " : " + computerScore + " Computer";
    return "computer";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    announcement.textContent = "Paper beats rock, you won!";
    playerScore++;
    score.textContent =
      "Player " + playerScore + " : " + computerScore + " Computer";
    return "player";
  }
}

/*
function game() {
  for (i = 0; i <= 4; i++) {
    const playerInput = prompt("Choose your weapon (rock, paper, scissors)");
    const playerSelection = playerInput.toLowerCase(); //turns input into all lowercase
    const computerSelection = getComputerChoice();
    winner = playRound(playerSelection, computerSelection);
    switch (winner) {
      case "player": // player
        playerScore++;
        break;
      case "computer": // cpu win
        computerScore++;
        break;
      default: //tie
        playerScore++;
        computerScore++;
    }
    alert("Player: " + playerScore + " / " + "Computer: " + computerScore);
  }
}
game();

/*
if (playerScore === computerScore) {
  alert("No one wins this game. Play another 5 rounds to prove your worth!");
} else if (playerScore > computerScore) {
  alert("Congratulations, you won the game!");
} else {
  alert("Pfff, looooser! You lost...");
}
*/

score.textContent =
  "Player " + playerScore + " : " + computerScore + " Computer";
score.textContent = `Clown ${playerScore} : ${computerScore} Computer`;
