let arr = [0, 1, 2, 0, 54, 0, 7];
let pos;

// Getting a position of first zero
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    pos = i;
    break;
  }
}

// Update Pos When we a non zero element
for (let i = pos + 1; i < arr.length; i++) {
  if (arr[i] !== 0) {
    let temp = arr[pos];
    arr[pos] = arr[i];
    arr[i] = temp;
    pos++;
  }
}

console.log(arr);
