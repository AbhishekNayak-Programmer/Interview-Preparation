function traverseRecursively(
  row,
  col,
  rowLen,
  colLen,
  maze,
  moves,
  visited,
  ans
) {
  if (row === rowLen - 1 && col === colLen - 1) return ans.push(moves);

  // We check for boundary case, visited case then check that is 1 or not
  // Go downwards
  if (
    row + 1 < rowLen &&
    visited[row + 1][col] === 0 &&
    maze[row + 1][col] === 1
  ) {
    visited[row][col] = 1;
    traverseRecursively(
      row + 1,
      col,
      rowLen,
      colLen,
      maze,
      moves + "D",
      visited,
      ans
    );
    visited[row][col] = 0;
  }

  // Go leftwards
  if (col - 1 >= 0 && visited[row][col - 1] === 0 && maze[row][col - 1] === 1) {
    visited[row][col] = 1;
    traverseRecursively(
      row,
      col - 1,
      rowLen,
      colLen,
      maze,
      moves + "L",
      visited,
      ans
    );
    visited[row][col] = 0;
  }

  // Go rightwards
  if (col < colLen && visited[row][col + 1] === 0 && maze[row][col + 1] === 1) {
    visited[row][col] = 1;
    traverseRecursively(
      row,
      col + 1,
      rowLen,
      colLen,
      maze,
      moves + "R",
      visited,
      ans
    );
    visited[row][col] = 0;
  }

  // Go upwards
  if (row - 1 >= 0 && visited[row - 1][col] === 0 && maze[row - 1][col] === 1) {
    visited[row][col] = 1;
    traverseRecursively(
      row - 1,
      col,
      rowLen,
      colLen,
      maze,
      moves + "U",
      visited,
      ans
    );
    visited[row][col] = 0;
  }
}

class Solution {
  // Function to find all possible paths
  ratInMaze(maze) {
    let ans = [];
    let visited = maze.map((row) => row.map(() => 0));
    if (maze[0][0] === 1)
      traverseRecursively(
        0,
        0,
        maze.length,
        maze[0].length,
        maze,
        "",
        visited,
        ans
      );
    return ans;
  }
}

const sol = new Solution();
console.log(sol.ratInMaze([
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
]))