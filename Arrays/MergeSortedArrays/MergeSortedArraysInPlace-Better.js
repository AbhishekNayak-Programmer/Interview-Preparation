const mergeSortedArrays = (arr1, arr2) => {
  let len1 = arr1.length,
    len2 = arr2.length,
    left = len1 - 1,
    right = 0;

  while (left >= 0 && right < len2) {
    if (arr1[left] > arr2[right]) {
      let temp = arr1[left];
      arr1[left] = arr2[right];
      arr2[right] = temp;
      left--;
      right++;
    } else break;
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  return [arr1, arr2];
};

console.log(mergeSortedArrays([1, 3, 3, 5], [2, 4, 6, 6]));
