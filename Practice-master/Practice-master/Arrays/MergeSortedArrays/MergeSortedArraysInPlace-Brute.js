const mergeSortedArrays = (arr1, arr2) => {
  let len1 = arr1.length,
    len2 = arr2.length,
    pos1 = 0,
    pos2 = 0,
    ans = [];

  while (pos1 < len1 && pos2 < len2) {
    if (arr1[pos1] < arr2[pos2]) {
      ans.push(arr1[pos1]);
      pos1++;
    } else {
      ans.push(arr2[pos2]);
      pos2++;
    }
  }

  while (pos1 < len1) {
    ans.push(arr1[pos1]);
    pos1++;
  }

  while (pos2 < len2) {
    ans.push(arr2[pos2]);
    pos2++;
  }

  for (let i = 0; i < ans.length; i++) {
    if (i < len1) {
      arr1[i] = ans[i];
    } else {
      arr2[i - len1] = ans[i];
    }
  }

  return [arr1, arr2];
};

console.log(mergeSortedArrays([1, 3, 3, 5], [2, 4, 6, 6]));
