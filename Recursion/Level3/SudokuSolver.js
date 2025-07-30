const isValidNumber = (board, row, col, num) => {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) return false;
    if (board[row][i] === num) return false;
    let rowNum = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let colNum = 3 * Math.floor(col / 3) + (i % 3);
    if (board[rowNum][colNum] === num) return false;
  }

  return true;
};

const solve = (board) => {
  let colLen = board[0].length,
    rowLen = board.length;
  for (let row = 0; row < rowLen; row++) {
    for (let col = 0; col < colLen; col++) {
      if (board[row][col] === ".") {
        for (let num = 1; num <= 9; num++) {
          if (isValidNumber(board, row, col, String(num))) {
            board[row][col] = String(num);
            if (solve(board) === true) return true;
            else board[row][col] = ".";
          }
        }

        return false;
      }
    }
  }

  return true;
};

const solveSudoku = function (board) {
  solve(board);
};

let boardSudoku = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(solveSudoku(boardSudoku));
