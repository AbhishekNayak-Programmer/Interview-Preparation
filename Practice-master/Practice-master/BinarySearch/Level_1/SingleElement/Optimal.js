const singleElement = (arr) => {
  let len = arr.length;
  if (len === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[len - 1] !== arr[len - 2]) return arr[len - 1];

  let low = 1,
    high = len - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) return mid;

    // Left Side Array [even, odd] sequence then exclude left array as element will be on right part
    if (
      (mid % 2 === 1 && arr[mid] === arr[mid - 1]) ||
      (mid % 2 === 0 && arr[mid] === arr[mid + 1])
    ) {
      low = mid + 1;
    }
    // Right Side Array [odd, even] sequence then exclude right array as element will be on left part
    else high = mid - 1;
  }
  return -1;
};

console.log(singleElement([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]));
