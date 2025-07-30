const solveRecursively = (
  col,
  board,
  result,
  leftRow,
  lowerDiagonal,
  upperDiagonal,
  n
) => {
  if (col === n) return result.push(board.map((row) => row.join(""))); // Before pushing to answer combining all columns in a row

  // In this column we will check for all the rows does we can place queen
  for (let row = 0; row < n; row++) {
    //Valid case when no queen can attack
    if (
      leftRow[row] === 0 &&
      lowerDiagonal[row + col] === 0 &&
      upperDiagonal[n - 1 + col - row] === 0
    ) {
      board[row][col] = "Q"; // Placing the queen

      // Marking in the marked array
      leftRow[row] = 1;
      lowerDiagonal[row + col] = 1;
      upperDiagonal[n - 1 + col - row] = 1;

      solveRecursively(
        col + 1,
        board,
        result,
        leftRow,
        lowerDiagonal,
        upperDiagonal,
        n
      );

      // After Backtracking
      board[row][col] = "."; // Unplacing the queen
      // Unmarking in the marked array
      leftRow[row] = 0;
      lowerDiagonal[row + col] = 0;
      upperDiagonal[n - 1 + col - row] = 0;
    }
  }
};

const solveNQueens = function (n) {
  let result = [],
    board = [];

  // Making the chess board with . in each element
  for (let i = 0; i < n; i++) board.push(new Array(n).fill("."));

  // Creating array to track marked status (creating only 3 diagonals as we have only added queens in left, left upper and lower diagonals)
  let lowerDiagonal = new Array(2 * n - 1).fill(0),
    upperDiagonal = new Array(2 * n - 1).fill(0),
    leftRow = new Array(n).fill(0);

  //Initially calling the recursive function for checking valid position for placing queen
  solveRecursively(0, board, result, leftRow, lowerDiagonal, upperDiagonal, n);

  return result;
};

console.log(solveNQueens(4));
