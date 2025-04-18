const rotateArray = (arr, rotateBy) => {
  let len = arr.length;
  let rotate = rotateBy % len;
  let storeRightElements = arr.slice(len - rotate);

  for (let i = len - 1; i >= rotate; i--) {
    arr[i] = arr[i - rotate];
  }

  for (let i = 0; i < rotate; i++) {
    arr[i] = storeRightElements[i];
  }

  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
