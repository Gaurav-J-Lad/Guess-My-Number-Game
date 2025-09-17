"use strict";

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    displayMessage("⛔ No Number !");
  }
  //When the Input is correct (When Player Wins)
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Answer");
    document.querySelector("body").style.backgroundColor = "#4da533ff";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //When input is wrong (Too high or too low)
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📈 Too High Value" : "📉 Too Low Value"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You Lost the Game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 30) + 1;

  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
