class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
  return head;
};

const traverseLinkedList = (head) => {
  let temp = head,
    arr = [];
  while (temp !== null) {
    arr.push(temp.value);
    temp = temp.next;
  }

  console.log(arr.join(" ----> "));
};

const reverseLinkedList = function (head) {
  let frontNode = null,
    current = head,
    previousNode = null;

  while (current !== null) {
    frontNode = current.next; // Store for Forword Moving

    current.next = previousNode;
    previousNode = current;

    current = frontNode; // Using for Forword Moving
  }

  head = previousNode;

  return head;
};

let head = new Node(16);
head = insertNodeAtEnd(head, 123);
head = insertNodeAtEnd(head, 45);
head = insertNodeAtEnd(head, 576);
head = insertNodeAtEnd(head, 90);
head = insertNodeAtEnd(head, 4);
traverseLinkedList(head);
head = reverseLinkedList(head);
traverseLinkedList(head);
