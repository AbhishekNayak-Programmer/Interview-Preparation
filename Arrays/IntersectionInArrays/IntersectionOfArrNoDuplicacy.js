const intersectionInArray = (arr1, arr2) => {
  let len1 = arr1.length,
    len2 = arr2.length,
    pos1 = 0,
    pos2 = 0,
    set = new Set();

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (pos1 < len1 && pos2 < len2) {
    if (arr1[pos1] < arr2[pos2]) {
      pos1++;
    } else if (arr2[pos2] < arr1[pos1]) {
      pos2++;
    } else {
      set.add(arr1[pos1]);
      pos1++;
      pos2++;
    }
  }

  return Array.from(set);
};

console.log(intersectionInArray([1, 2, 1, 2], [2, 2]));
