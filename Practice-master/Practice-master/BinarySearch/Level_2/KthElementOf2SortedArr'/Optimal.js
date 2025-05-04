const kthElementOfSortedArr = (arr1, arr2, k) => {
  let len1 = arr1.length,
    len2 = arr2.length,
    count = 0,
    el = -1,
    i = 0,
    j = 0;

  while (i < len1 && j < len2) {
    if (arr1[i] <= arr2[j]) {
      if (count === k) el = arr1[i];
      count++;
      i++;
    } else {
      if (count === k) el = arr2[j];
      count++;
      j++;
    }
  }

  while (i < len1) {
    if (count === k) el = arr1[i];
    count++;
    i++;
  }

  while (j < len2) {
    if (count === k) el = arr2[j];
    count++;
    j++;
  }

  return el;
};

console.log(kthElementOfSortedArr([1, 2], [3, 4], 2));
