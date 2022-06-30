//computerPlay randomly return Rock Paper Scissors
// function a(playerSelection,computerSelection)
//returns "You win or You lose + `${winnerSelection} beats ${loserSelection}`"
//case insensitive input
let winMessage = `You win!`;
let loseMessage = `You lose!`;
let tieMessage = `It's a tie!`;
////////////////////////
let rock = "rock";
let scissors = "scissors";
let paper = "paper";

function playerSelection() {
  let playerInput = prompt("Choose between: Rock, Paper, Scissors.");
  if (playerInput == false) {
    alert("Invalid choice, choose again");
    playerSelection();
  } else {
    return playerInput.toLowerCase();
  }
}

function computerSelection() {
  const selections = ["rock", "paper", "scissors"];
  return selections[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
  let playerChoice = player();
  let computerChoice = computer();
  ////////////////////////

  ////////////////////////
  if (playerChoice == rock && computerChoice == rock) {
    return tieMessage;
  } else if (playerChoice == rock && computerChoice == scissors) {
    return winMessage;
  } else if (playerChoice == rock && computerChoice == paper) {
    return loseMessage;
  } else if (playerChoice == paper && computerChoice == paper) {
    return tieMessage;
  } else if (playerChoice == paper && computerChoice == rock) {
    return winMessage;
  } else if (playerChoice == paper && computerChoice == scissors) {
    return loseMessage;
  } else if (playerChoice == scissors && computerChoice == scissors) {
    return tieMessage;
  } else if (playerChoice == scissors && computerChoice == paper) {
    return winMessage;
  } else if (playerChoice == scissors && computerChoice == rock) {
    return loseMessage;
  }
}

// playRound(playerSelection, computerSelection)

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }
}
