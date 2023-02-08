let winCount = 0;
let tieCount = 0;
let lossCount = 0;

const win = document.querySelector('.wins');
const tie = document.querySelector('.ties');
const loss = document.querySelector('.losses');

win.textContent = winCount;
tie.textContent = tieCount;
loss.textContent = lossCount;

function getComputerChoice() {
  let temp = Math.random();
  if (temp < 0.3334) {
    return "rock";
  }
  else if (temp < 0.6667) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function rock() {
  playRound("rock");
}

function paper() {
  playRound("paper");
}

function scissors() {
  playRound("scissors");
}


// returns 0 for user win, 1 for tie, and 2 for user loss
function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    tieCount += 1;
    tie.textContent = tieCount;
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      winCount += 1;
      win.textContent = winCount;
    }
    else {
      lossCount += 1;
      loss.textContent = lossCount;
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      winCount += 1;
      win.textContent = winCount;
    }
    else {
      lossCount += 1;
      loss.textContent = lossCount;
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      winCount += 1;
      win.textContent = winCount;
    }
    else {
      lossCount += 1;
      loss.textContent = lossCount;
    }
  }
}