const unionArray = (arr1, arr2) => {
  let set = new Set();

  for (let i = 0; i < arr1.length; i++) {
    if (!set.has(arr1[i])) set.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!set.has(arr2[i])) set.add(arr2[i]);
  }

  return [...set];
};

console.log(unionArray([11, 2, 3, 4], [12, 3, 4, 1, 1]));
