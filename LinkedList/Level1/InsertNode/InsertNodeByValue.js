class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
// Inserting Before the Matched Value
const insertNodeByValue = (head, value, checkingVal) => {
  let newNode = new Node(value);
  if (head.data === checkingVal) {
    newNode.next = head;
    return newNode;
  }

  // Find the position where value matches to insert new node
  let temp = head;
  while (temp !== null) {
    if (temp.next.data === checkingVal) {
      newNode.next = temp.next;
      temp.next = newNode;
      break;
    }
    temp = temp.next;
  }

  return head;
};

const head = new Node(16);
console.log(insertNodeByValue(head, 123, 16));
