let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let currentPlayer = 'X';
let gameActive = true;
let isTwoPlayer = true; 

const cells = document.getElementsByClassName('cell');
const message = document.getElementById('message');

function startTwoPlayerGame() {
  isTwoPlayer = true;
  resetGame();
}

function startOnePlayerGame() {
  isTwoPlayer = false;
  resetGame();
}

for (let index = 0; index < cells.length; index++) {
  cells[index].onclick = function () {
    if (!gameActive) return;

    const row = Math.floor(index / 3);
    const col = index % 3;

    if (board[row][col] !== ' ') {
      return;
    }

    board[row][col] = currentPlayer;
    cells[index].textContent = currentPlayer;
    cells[index].style.backgroundColor = '#e0e0e0';
    cells[index].style.pointerEvents = 'none';

    if (checkWin()) {
      message.textContent = `Játékos ${currentPlayer} nyert! 🎉`;
      gameActive = false;
      return;
    }

    if (isBoardFull()) {
      message.textContent = 'Döntetlen! 🤝';
      gameActive = false;
      return;
    }

    if (isTwoPlayer) {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      message.textContent = `Játékos ${currentPlayer} következik!`;
    } else {
      currentPlayer = 'O';
      message.textContent = `Játékos ${currentPlayer} következik!`;
      computerMove();
    }
  };
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === currentPlayer &&
      board[i][1] === currentPlayer &&
      board[i][2] === currentPlayer
    ) {
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === currentPlayer &&
      board[1][i] === currentPlayer &&
      board[2][i] === currentPlayer
    ) {
      return true;
    }
  }

  if (
    board[0][0] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][2] === currentPlayer
  ) {
    return true;
  }

  if (
    board[0][2] === currentPlayer &&
    board[1][1] === currentPlayer &&
    board[2][0] === currentPlayer
  ) {
    return true;
  }

  return false;
}

function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === ' ') {
        return false;
      }
    }
  }
  return true;
}

function computerMove() {
  let emptyCells = [];
  for (let i = 0; i < 9; i++) {
    if (cells[i].textContent === '') {
      emptyCells.push(i);
    }
  }
  
  const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const row = Math.floor(randomIndex / 3);
  const col = randomIndex % 3;

  board[row][col] = 'O';
  cells[randomIndex].textContent = 'O';
  cells[randomIndex].style.backgroundColor = '#e0e0e0';
  cells[randomIndex].style.pointerEvents = 'none';

  if (checkWin()) {
    message.textContent = `Játékos O nyert! 🎉`;
    gameActive = false;
    return;
  }

  if (isBoardFull()) {
    message.textContent = 'Döntetlen! 🤝';
    gameActive = false;
    return;
  }

  currentPlayer = 'X';
  message.textContent = `Játékos X következik!`;
}

function resetGame() {
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  currentPlayer = 'X';
  gameActive = true;
  message.textContent = `Játékos ${currentPlayer} következik!`;

  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
    cells[i].style.backgroundColor = '#f9f9f9';
    cells[i].style.pointerEvents = 'auto';
  }
}
