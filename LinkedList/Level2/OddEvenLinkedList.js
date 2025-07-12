const oddEvenList = function (head) {
  if (head === null || head.next === null) return head; // If single element is there or head is null just return it

  // Starting the odd head from 0 th index and even from 1st index as that will be the even and odd indexes
  let oddHead = head,
    evenHead = head.next,
    evenHeadStore = head.next; // Storing evenHead as we need to connect that with the end of odd Nodes

  // As even head will always reach end first so checking for that should not be null or next should not be null
  while (evenHead !== null && evenHead.next !== null) {
    oddHead.next = oddHead.next.next; // Jumping two steps for connections
    evenHead.next = evenHead.next.next; // Jumping two steps for connections

    oddHead = oddHead.next; // Moving the pointers forward by one step
    evenHead = evenHead.next; // Moving the pointers forward by one step
  }

  oddHead.next = evenHeadStore; // Connecting odd nodes end with even nodes

  return head;
};
