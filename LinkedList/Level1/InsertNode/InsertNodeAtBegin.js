class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const insertNodeAtStart = (head, value) => {
  let newNode = new Node(value);
  if (head === null) return newNode;
  newNode.next = head;
  return newNode;
};

const head = new Node(16);
console.log(insertNodeAtStart(head, 123));
