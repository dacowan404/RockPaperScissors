
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

function playRound() {
  const playerSelection = "Rock".toLowerCase();
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    console.log(`tie, both selected ${playerSelection}`);
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }
    else {
      console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }
    else {
      console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    }
    else {
      console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    }
  }
}

for (let i = 0; i < 10; i++) {
  console.log(playRound());
}