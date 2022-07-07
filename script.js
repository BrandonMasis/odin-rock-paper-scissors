const playerPoints = document.getElementById("playerPoints");
let playerCount = parseInt(playerPoints.textContent);
const computerPoints = document.getElementById("computerPoints");
let computerCount = parseInt(computerPoints.textContent);
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const buttons = document.getElementById("buttons");
const playAgain = document.getElementById("playAgain");
const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");

let rockPng = "./images/rock.png";
let paperPng = "./images/paper.png";
let scissorsPng = "./images/scissors.png";

const img2 = document.getElementById("computerHand").firstChild;

rockBtn.addEventListener("click", () => {
  playRound("rock", computerSelection);
  check();
});

paperBtn.addEventListener("click", () => {
  playRound("paper", computerSelection);
  check();
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", computerSelection);
  check();
});
// ////////////////////////////
function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function computerHandImg(choice) {
  if (choice === "rock") {
    img2.setAttribute("src", rockPng);
    computerHand.style.cssText = "";
  } else if (choice === "paper") {
    img2.setAttribute("src", paperPng);
    computerHand.style.cssText = "transform: scaleX(-1);";
  } else if (choice === "scissors") {
    img2.setAttribute("src", scissorsPng);
    computerHand.style.cssText = "transform: scaleX(-1);";
  } else {
    console.log("Something went wrong with computerHandImg()");
  }
}

function playRound(player, computer) {
  computer = computer();

  // tie
  if (player === computer) {
    computerHandImg(computer);
    tie();
  }
  // rock
  else if (player === "rock" && computer === "paper") {
    computerHandImg(computer);
    loser();
  } else if (player === "rock" && computer === "scissors") {
    computerHandImg(computer);
    winner();
  }

  // paper
  else if (player === "paper" && computer === "rock") {
    computerHandImg(computer);
    winner();
  } else if (player === "paper" && computer === "scissors") {
    computerHandImg(computer);
    loser();
  }
  // scissors
  else if (player === "scissors" && computer === "rock") {
    computerHandImg(computer);
    loser();
  } else if (player === "scissors" && computer === "paper") {
    computerHandImg(computer);
    winner();
  }
}

// //////////////////////////
function winner() {
  console.log("You win");
  playerPoints.textContent = playerCount += 1;
  subtitle.textContent = "You win!";
}

function loser() {
  console.log("you lose");
  computerPoints.textContent = computerCount += 1;
  subtitle.textContent = "You lose!";
}

function tie() {
  console.log("it's a tie!");
  subtitle.textContent = "It's a tie!";
}
// ////////////////////////////

function check() {
  if (playerCount === 5 && computerCount === 5) {
    title.textContent = "It's a tie";
    console.log("Game result: It's a tie");
    gameOver();
  } else if (playerCount === 5 && computerCount < 5) {
    title.textContent = "You won!";
    console.log("Game result: You won");
    gameOver();
  } else if (computerCount === 5 && playerCount < 5) {
    title.textContent = "You lost.";
    console.log("Game result: You lost");
    gameOver();
  }
}

function gameOver() {
  playAgain.classList.toggle("displayNone");
  buttons.classList.toggle("displayNone");
  if (subtitle.textContent === "You win!") {
    const winPhrases = [
      "Congratulations!",
      "FINALLY!!!",
      "Being honest... it was easy",
    ];
    subtitle.textContent =
      winPhrases[Math.floor(Math.random() * winPhrases.length)];
  } else if (subtitle.textContent === "You lose!") {
    const losePhrases = [
      "This game is rigged",
      "Maybe you should take a nap",
      "But it doesn't matter, because this is a game for kids anyway",
      "Keep trying",
      "Don't give up",
    ];
    subtitle.textContent =
      losePhrases[Math.floor(Math.random() * losePhrases.length)];
  } else {
    const tiePhrases = [
      "That was close",
      "At least you didn't lose",
      "So close",
      "How come",
    ];
    subtitle.textContent =
      tiePhrases[Math.floor(Math.random() * tiePhrases.length)];
  }
}

playAgain.addEventListener("click", () => {
  playAgain.classList.toggle("displayNone");
  buttons.classList.toggle("displayNone");

  title.textContent = "ROCK PAPER SCISSORS";
  subtitle.textContent = "Good luck!";
  playerPoints.textContent = 0;
  computerPoints.textContent = 0;
  playerCount = 0;
  computerCount = 0;
});

// VISUAL
let img1 = document.getElementById("playerHand").firstChild;
console.log(img1);

//On button hover change player hand image
rockBtn.addEventListener("mouseenter", () => {
  img1.setAttribute("src", rockPng);
  playerHand.style.cssText = "";
});
rockBtn.addEventListener("mouseleave", () => {
  img1.setAttribute("src", rockPng);
  playerHand.style.cssText = "";
});

paperBtn.addEventListener("mouseenter", () => {
  img1.setAttribute("src", paperPng);
  playerHand.style.cssText = "transform: scaleX(-1);";
});

paperBtn.addEventListener("mouseleave", () => {
  img1.setAttribute("src", rockPng);
  playerHand.style.cssText = "";
});

scissorsBtn.addEventListener("mouseenter", () => {
  img1.setAttribute("src", scissorsPng);
  playerHand.style.cssText = "transform: scaleX(-1);";
});
scissorsBtn.addEventListener("mouseleave", () => {
  img1.setAttribute("src", rockPng);
  playerHand.style.cssText = "";
});
//

// on computer selection change computer hand image
//pick animation maybe later
//grey hand without pick
//on hover or pick colored image
//timeout to add points
