const exist = function (board, word) {
  let rowLen = board.length,
    colLen = board[0].length; // Storing the row and col lengths
  let visited = board.map((row) => row.map((el) => 0)); // Creating a copy of board matrix with value 0 in each indexes

  // This function takes row and col index and position upto which our current recursion is matched with word
  const searchRecursively = (row, col, position) => {
    if (position === word.length) return true; // when position is equal to the words length then we got our word
    // We are checking that does col or row is going less than 0 or more than boundary or have we visited the word already or does our word position char is not equal with the boards index then we simply return
    if (
      row < 0 ||
      col < 0 ||
      row >= rowLen ||
      col >= colLen ||
      word[position] !== board[row][col] ||
      visited[row][col] === 1
    )
      return false;

    visited[row][col] = 1; // mark that index in the board as 1 means visited
    res =
      searchRecursively(row + 1, col, position + 1) ||
      searchRecursively(row - 1, col, position + 1) ||
      searchRecursively(row, col + 1, position + 1) ||
      searchRecursively(row, col - 1, position + 1); // Checking in all four directions for the matching next characters
    visited[row][col] = 0; // unmark that index in the board as 0 means unvisited
    return res; // If anywhere we got true or false we return that
  };

  // We have to Iterate from each indexes to find our word
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (searchRecursively(i, j, 0)) return true;
    }
  }

  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
