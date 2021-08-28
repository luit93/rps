const choices = ["rock", "paper", "scissors"];
const computerPlay = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "Draw";
  }
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  ) {
    return "You Lose! Paper beats Rock";
  }
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors"
  ) {
    return "You Win! Rock beats Scissors";
  }
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  ) {
    return "You Win! Scissors beats Paper";
  }
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "rock"
  ) {
    return "You Lose! Rock beats Scissors";
  }
  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    return "You Win! Paper beats Rock";
  }

  return "You Lose! Scissors beats paper";
};

const game = () => {
  let counter = 0;
  let userScore = 0;
  let computerScore = 0;
  while (counter < 5) {
    const userChoice = prompt("rock, paper, scissor?");
    const computerChoice = computerPlay(choices);
    console.log(`you picked: ${userChoice}`);
    console.log(`computer picked: ${computerChoice}`);
    const res = playRound(userChoice, computerChoice);
    console.log(res);
    res.includes("Lose") && ++computerScore;
    res.includes("Win") && ++userScore;
    ++counter;
    console.log(`total games: ${counter}`);
    console.log(`user score: ${userScore}`);
    console.log(`computer score: ${computerScore}`);
  }
  if (userScore > computerScore) {
    console.log("you won!");
    return "You won!";
  }
  if (userScore < computerScore) {
    console.log("you lost!");
    return "You lost!";
  }
  console.log("Tie!");
  return "Tie!";
};
game();
