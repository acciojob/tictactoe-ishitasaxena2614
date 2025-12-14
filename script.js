let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "x";
let gameActive = true;

const winPatterns = [
  [1,2,3], [4,5,6], [7,8,9],
  [1,4,7], [2,5,8], [3,6,9],
  [1,5,9], [3,5,7]
];

document.getElementById("submit").addEventListener("click", function () {
  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  if (player1 === "" || player2 === "") {
    alert("Please enter both player names");
    return;
  }

  document.getElementById("player-form").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  currentPlayer = player1;
  document.querySelector(".message").innerText = `${currentPlayer}, you're up`;
});

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", function () {
    if (!gameActive || cell.innerText !== "") return;

    cell.innerText = currentSymbol;

    if (checkWin()) {
      document.querySelector(".message").innerText =
        `${currentPlayer} congratulations you won!`;
      gameActive = false;
      return;
    }

    switchPlayer();
  });
});

function switchPlayer() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
    currentSymbol = "o";
  } else {
    currentPlayer = player1;
    currentSymbol = "x";
  }
  document.querySelector(".message").innerText = `${currentPlayer}, you're up`;
}

function checkWin() {
  return winPatterns.some(pattern => {
    return pattern.every(id => {
      return document.getElementById(id.toString()).innerText === currentSymbol;
    });
  });
}

