const getNodesCount = (head) => {
  let temp = head,
    nodesCount = 1; // Initially as we are standing on head so count of node starts from 1
  while (temp.next !== null) {
    temp = temp.next;
    nodesCount++;
  }
  return { nodesCount, tail: temp }; // Returns the total count of the nodes in Linked list
};

const rotateRight = function (head, k) {
  if (head === null || k === 0) return head; // Edge case when we don't need rotation

  const { nodesCount, tail } = getNodesCount(head); // Function to get total nodes count and tail of the LL
  let rotateTimes = k % nodesCount,
    newTailSteps = nodesCount - rotateTimes - 1,
    temp = head; // As we can get any k value so doing module to have a specific number of times rotations and newTailSteps will be totalCount - rotatetimes - 1 as we are currently standing at one node

  if (rotateTimes === 0) return head; // If after mod operation we got zero then we dont need to rotate

  tail.next = head; // Making the LL to a Circular LL

  // Traversing upto the new Tail
  while (newTailSteps > 0) {
    temp = temp.next;
    newTailSteps--;
  }

  let newHead = temp.next; // Storing the newHead as we will cutoff here
  temp.next = null; // cutting off the new tail and making next to null

  return newHead; // returning our new head
};
