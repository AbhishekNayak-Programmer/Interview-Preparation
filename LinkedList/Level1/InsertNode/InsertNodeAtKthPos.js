class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const insertNodeAtKthPos = (head, value, pos) => {
  let newNode = new Node(value);
  if (pos === 1) {
    newNode.next = head;
    return newNode;
  }

  // Find the position to insert
  let posCount = 1,
    temp = head;
  while (posCount < pos - 1 && temp !== null) {
    posCount++;
    temp = temp.next;
  }

  // Checking for Outside case when k pos is outside the linked list
  if (temp === null) return console.log("Out of Bound in Linked List!");

  //Adding the Node at the Middle
  newNode.next = temp.next;
  temp.next = newNode;

  return head;
};

const head = new Node(16);
console.log(insertNodeAtKthPos(head, 123, 2));
