let player1 = "";
let player2 = "";
let currentPlayer = "";
let symbol = "x";
let gameOver = false;

const wins = [
  [1,2,3], [4,5,6], [7,8,9],
  [1,4,7], [2,5,8], [3,6,9],
  [1,5,9], [3,5,7]
];

document.getElementById("submit").addEventListener("click", () => {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  if (!player1 || !player2) return;

  document.getElementById("player-form").style.display = "none";
  document.getElementById("game").style.display = "block";

  currentPlayer = player1;
  document.querySelector(".message").innerText = `${currentPlayer}, you're up`;
});

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.innerText !== "" || gameOver) return;

    cell.innerText = symbol;

    if (checkWin()) {
      document.querySelector(".message").innerText =
        `${currentPlayer} congratulations you won!`;
      gameOver = true;
      return;
    }

    switchTurn();
  });
});

function switchTurn() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
    symbol = "o";
  } else {
    currentPlayer = player1;
    symbol = "x";
  }
  document.querySelector(".message").innerText = `${currentPlayer}, you're up`;
}

function checkWin() {
  return wins.some(pattern =>
    pattern.every(id =>
      document.getElementById(id).innerText === symbol
    )
  );
}


