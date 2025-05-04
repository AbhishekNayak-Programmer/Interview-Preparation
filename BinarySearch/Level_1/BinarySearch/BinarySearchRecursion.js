const BinarySearchRecursion = (arr, target, low, high) => {
  if (low > high) return -1;
  let mid = Math.floor((high + low) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target)
    return BinarySearchRecursion(arr, target, mid + 1, high);
  else return BinarySearchRecursion(arr, target, low, mid - 1);
};

let arr = [1, 2, 3, 4, 5, 6];
let target = 3;
console.log(BinarySearchRecursion(arr, target, 0, arr.length - 1));
