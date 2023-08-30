function playGame() {
  // Get the user's choice
  var userChoice = document.querySelector("input[name='choice']:checked").value;

  // Generate a random number from 1 to 3
  var randomNumber = Math.floor(Math.random() * 3) + 1;

  // Get the computer's choice
  var computerChoice = "";
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  // Compare the user's choice to the computer's choice
  if (userChoice == computerChoice) {
    alert("It's a tie!");
  } else if (userChoice == "rock" && computerChoice == "scissors") {
    alert("You win!");
  } else if (userChoice == "paper" && computerChoice == "rock") {
    alert("You win!");
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    alert("You win!");
  } else {
    alert("You lose!");
  }
}
