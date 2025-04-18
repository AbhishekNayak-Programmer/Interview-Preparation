const mergeSorted = function (nums1, m, nums2, n) {
  //storing the length of nums1 & nums2 arr and total length
  let len1 = m - 1,
    len2 = n - 1,
    totalLen = m + n - 1;

  // Starting the array iteration from last to first
  for (let i = totalLen; i >= 0 && len2 >= 0; i--) {
    //Every time checking if len1 is greater than 0 and nums1 current element is greater than nums2 current element
    if (len1 >= 0 && nums1[len1] > nums2[len2]) {
      nums1[i] = nums1[len1--]; //Then updating the nums1 element and decrementing len1
    } else nums1[i] = nums2[len2--]; // else updating the nums2 element and decrementing the len2
  }

  return nums1;
};

console.log(mergeSorted([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
