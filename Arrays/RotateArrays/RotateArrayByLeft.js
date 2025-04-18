const rotateArray = (arr, rotateBy) => {
  let len = arr.length;
  let rotate = rotateBy % len;
  let storeLeftElements = arr.slice(0, rotate);

  for (let i = rotate; i < len; i++) {
    arr[i - rotate] = arr[i];
  }

  let pos = 0;
  for (let i = len - rotate; i < len; i++) {
    arr[i] = storeLeftElements[pos];
    pos++;
  }

  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
