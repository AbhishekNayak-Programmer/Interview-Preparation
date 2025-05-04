const medianOfSortedArrays = (arr1, arr2) => {
  let len1 = arr1.length,
    len2 = arr2.length,
    ind2 = Math.floor((len1 + len2) / 2),
    ind1 = ind2 - 1,
    count = 0,
    el1 = -1,
    el2 = -1,
    i = 0,
    j = 0;

  while (i < len1 && j < len2) {
    if (arr1[i] <= arr2[j]) {
      if (count === ind1) el1 = arr1[i];
      if (count === ind2) el2 = arr1[i];
      count++;
      i++;
    } else {
      if (count === ind1) el1 = arr2[j];
      if (count === ind2) el2 = arr2[j];
      count++;
      j++;
    }
  }

  while (i < len1) {
    if (count === ind1) el1 = arr1[i];
    if (count === ind2) el2 = arr1[i];
    count++;
    i++;
  }

  while (j < len2) {
    if (count === ind1) el1 = arr2[j];
    if (count === ind2) el2 = arr2[j];
    count++;
    j++;
  }

  if ((len1 + len2) % 2 === 1) return el2;
  return (el1 + el2) / 2;
};

console.log(medianOfSortedArrays([1, 2], [3, 4]));
