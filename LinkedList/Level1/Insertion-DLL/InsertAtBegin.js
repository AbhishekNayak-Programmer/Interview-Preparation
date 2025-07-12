class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

const insertAtBegin = (head, value) => {
  let newNode = new Node(value);
  if (head === null) return newNode;

  newNode.next = head;
  head.prev = newNode;
  newNode.prev = null;

  return newNode;
};

const traverseLinkedList = (head) => {
  let temp = head,
    arr = [];
  while (temp !== null) {
    arr.push(temp.data);
    temp = temp.next;
  }

  console.log(arr.join(" <----> "));
};

let head = new Node(16);
head = insertAtBegin(head, 123);
head = insertAtBegin(head, 45);
head = insertAtBegin(head, 576);
head = insertAtBegin(head, 90);
head = insertAtBegin(head, 4);
traverseLinkedList(head);
