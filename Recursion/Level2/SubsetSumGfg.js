// Given an array of positive integers arr[] and a value sum, determine if there is a subset of arr[] with sum equal to given sum.

const isSubsetSum = (arr, sum) => {
  const getSubsetSum = (index, total) => {
    if (sum === total) return true;
    if (index === arr.length || total > sum) return false;
    return (
      getSubsetSum(index + 1, total + arr[index]) ||
      getSubsetSum(index + 1, total)
    );
  };

  return getSubsetSum(0, 0);
};

console.log(isSubsetSum([3, 34, 4, 12, 5, 2]), 9);
