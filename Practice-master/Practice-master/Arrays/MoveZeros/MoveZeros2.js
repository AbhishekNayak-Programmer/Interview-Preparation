let arr = [0, 1, 2, 0, 54, 0, 7];
let pos = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[pos] = arr[i];
    pos++;
  }
}

for (let i = pos; i < arr.length; i++) arr[i] = 0;

console.log(arr);
