const getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null; // Edge cases
  let temp1 = headA,
    temp2 = headB; // Storing pointers reference

  // Until temp1 and temp2 are same
  while (temp1 !== temp2) {
    temp1 = temp1.next; // Move temp 1 and temp 2 by 1 steps
    temp2 = temp2.next; // Move temp 1 and temp 2 by 1 steps
    if (temp1 === temp2) return temp1; // If equal just retrun any node in the case of no intersection temp1 and temp2 will meet at null and returns null at end
    if (temp1 === null) temp1 = headB; // If temp1 reaches end swap head2
    if (temp2 === null) temp2 = headA; // If temp2 reaches end swap head1
  }

  return temp1;
};
