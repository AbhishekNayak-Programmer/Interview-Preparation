const getStart = (arr, target) => {
  let low = 0,
    high = arr.length - 1,
    start = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      start = mid;
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else high = mid - 1;
  }

  return start;
};

const getEnd = (arr, target) => {
  let low = 0,
    high = arr.length - 1,
    end = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      end = mid;
      low = mid + 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else high = mid - 1;
  }

  return end;
};

const findFirstAndLastOccurence = (arr, target) => {
  let start = getStart(arr, target);
  let end = getEnd(arr, target);
  return [start, end];
};

console.log(findFirstAndLastOccurence([1, 2, 3, 3, 3, 3, 5], 3));
