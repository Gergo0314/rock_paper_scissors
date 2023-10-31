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
let clicks = 0;

score.textContent =
  "You will play 5 rounds against the computer.";

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    announcement.textContent = "It's a tie!";
    playerScore++;
    computerScore++;
    clicks++;
    score.textContent =
      "Player " + playerScore + " - " + computerScore + " Computer";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    announcement.textContent = "Paper beats rock, you lose!";
    computerScore++;
    clicks++;
    score.textContent =
      "Player " + playerScore + " - " + computerScore + " Computer";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    announcement.textContent = "Rock beats scissors, you win!";
    playerScore++;
    clicks++;
    score.textContent =
      "Player " + playerScore + " - " + computerScore + " Computer";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    announcement.textContent = "Rock beats scissors, you lose!";
    computerScore++;
    clicks++;
    score.textContent =
      "Player " + playerScore + " - " + computerScore + " Computer";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    announcement.textContent = "Scissors beat paper, you win!";
    playerScore++;
    clicks++;
    score.textContent =
      "Player " + playerScore + " - " + computerScore + " Computer";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    announcement.textContent = "Scissors beat paper, you lose!";
    computerScore++;
    clicks++;
    score.textContent =
      "Player " + playerScore + " - " + computerScore + " Computer";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    announcement.textContent = "Paper beats rock, you win!";
    playerScore++;
    clicks++;
    score.textContent =
      "Player " + playerScore + " - " + computerScore + " Computer";
  }

  buttons.forEach((button) => {
    if (clicks === 5) {
      button.disabled = true;
    }
  });

  if (clicks === 5 && playerScore > computerScore) {
    announcement.textContent = "Congratulations, you beat the computer! Reload the page to play again.";
  }
  if (clicks === 5 && playerScore < computerScore) {
    announcement.textContent = "Wah-wah-waaah. The computer beat you, loser! Reload the page to play again.";
  }
  if (clicks === 5 && playerScore === computerScore) {
    announcement.textContent = "It is a tie! Reload the page to play again.";
  }
  
  
}


