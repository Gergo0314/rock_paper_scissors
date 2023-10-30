function randNum(n) {
  return Math.floor(Math.random() * n); //generates a random number between 0 and n
}

function getComputerChoice() {
  const myList = ["rock", "paper", "scissors"]; //a list of possible choices
  const index = randNum(myList.length); //index = a random number between 0 and 2 (plugs 3 into randNum)
  return myList[index]; //returns a random item from myList
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
  playRound('rock');
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
  playRound('paper');
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
  playRound('scissors');
});

var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    alert("It's a tie!");
    return "tie";
    playerScore++;
    computerScore++;
  }  if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! Paper beats rock");
    return "computer";
    computerScore++;
  }  if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win! Rock beats scissors");
    return "player";
    playerScore++;
  }  if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lose! Rock beats scissors");
    return "computer";
    computerScore++;
  }  if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You win! Scissors beats paper");
    return "player";
    playerScore++;
  }  if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lose! Scissors beats paper");
    return "computer";
    computerScore++;
  }  if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win! Paper beats rock");
    return "player";
    playerScore++;
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

if (playerScore === computerScore) {
  alert("No one wins this game. Play another 5 rounds to prove your worth!");
} else if (playerScore > computerScore) {
  alert("Congratulations, you won the game!");
} else {
  alert("Pfff, looooser! You lost...");
}
*/