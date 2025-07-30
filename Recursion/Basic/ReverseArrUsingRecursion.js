const arr = [1, 2, 3, 4, 5];

const reverseArr = (left, right) => {
  if (left >= right) return;

  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  return reverseArr(left + 1, right - 1);
};

let len = arr.length;
reverseArr(0, len - 1);
console.log(arr);
