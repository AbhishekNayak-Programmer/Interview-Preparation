const unionArray = (arr1, arr2) => {
  let len1 = arr1.length,
    len2 = arr2.length,
    pos1 = 0,
    pos2 = 0,
    ans = new Set();

  while (pos1 < len1 && pos2 < len2) {
    if (arr1[pos1] < arr2[pos2]) {
      if (!ans.has(arr1[pos1])) {
        ans.add(arr1[pos1]);
      }
      pos1++;
    } else {
      if (!ans.has(arr2[pos2])) {
        ans.add(arr2[pos2]);
      }
      pos2++;
    }
  }

  while (pos1 < len1) {
    if (!ans.has(arr1[pos1])) {
      ans.add(arr1[pos1]);
    }
    pos1++;
  }

  while (pos2 < len1) {
    if (!ans.has(arr2[pos2])) {
      ans.add(arr2[pos2]);
    }
    pos2++;
  }

  return [...ans];
};

console.log(unionArray([1, 2, 3, 4], [3, 4, 5, 6]));
