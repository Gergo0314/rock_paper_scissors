function randNum(n) {
  return Math.floor(Math.random() * n);
} 
//generates a random number between 0 and n

function getComputerChoice() {
  const myList = ["rock", "paper", "scissors"]; //a list of possible choices
  const index = randNum(myList.length); //index = a random number between 0 and 2 (plugs 3 into randNum)
  return myList[index]; //returns a random item from myList
}
console.log(getComputerChoice());
