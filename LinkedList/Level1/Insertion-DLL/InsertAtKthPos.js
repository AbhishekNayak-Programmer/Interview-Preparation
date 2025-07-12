class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

const insertNodeAtEnd = (head, value) => {
  let newNode = new Node(value);
  if (head === null) return newNode;
  let temp = head;

  while (temp.next !== null) {
    temp = temp.next;
  }

  temp.next = newNode;
  newNode.prev = temp;
  return head;
};

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

// Insert previous to pos
const insertAtKthPos = (head, value, pos) => {
  if (head === null) return console.log("Invalid Linked List");
  if (pos <= 1 || head === null) return insertAtBegin(head, value);

  let newNode = new Node(value),
    temp = head,
    count = 0;

  while (temp !== null) {
    count++;
    if (count === pos) break;
    temp = temp.next;
  }

  let prevNode = temp.prev;
  newNode.next = temp;
  newNode.prev = prevNode;

  prevNode.next = newNode;
  temp.prev = newNode;

  return head;
};

let head = new Node(16);
head = insertNodeAtEnd(head, 123);
head = insertNodeAtEnd(head, 45);
head = insertNodeAtEnd(head, 576);
head = insertNodeAtEnd(head, 90);
head = insertNodeAtEnd(head, 4);
traverseLinkedList(head);
head = insertAtKthPos(head, 90, 3);
traverseLinkedList(head);
