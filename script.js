import { stopConfetti, startConfetti, removeConfetti } from "./confetti.js";

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");

const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");

const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const allGameIcons = document.querySelectorAll(".player-container i");

let computerChoice = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;

function computerRandomChoice() {
  const picks = Object.keys(choices);
  const computerChoiceNumber = Math.floor(Math.random() * picks.length);
  computerChoice = picks[computerChoiceNumber];
}

function resetSelectedIcons() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
  stopConfetti();
  removeConfetti();
}

function resetAll() {
  resetSelectedIcons();
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = " --- Take Your Choice";
  computerChoiceEl.textContent = "";
  resultText.textContent = "Let's Go!";
  stopConfetti();
}
window.resetAll = resetAll;

function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else if (choices[computerChoice]["defeats"].includes(playerChoice)) {
    computerScoreNumber++;
    resultText.textContent = "You Lost!";
    computerScoreEl.textContent = computerScoreNumber;
  } else {
    playerScoreNumber++;
    resultText.textContent = "You Won!";
    startConfetti();
    playerScoreEl.textContent = playerScoreNumber;
  }
}

function checkResult(playerChoice) {
  resetSelectedIcons();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

function select(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

window.select = select;

function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}
