const deleteMiddle = function (head) {
  if (head === null || head.next === null) return null; // If no or only one node is there then returning null

  let fast = head,
    slow = head; // Storing reference of head in both
  fast = fast.next.next; // Moving fast and skipping one jump for slow so that we will end up in prev of mid element

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow.next = slow.next.next; // Connecting with the next of next node so that mid node will be detached

  return head;
};
