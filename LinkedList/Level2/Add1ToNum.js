class Solution {
  reverse(head) {
    let frontNode = null,
      previousNode = null,
      current = head;

    while (current !== null) {
      frontNode = current.next;
      current.next = previousNode;
      previousNode = current;
      current = frontNode;
    }

    head = previousNode;
    return head;
  }

  addOne(node) {
    head = this.reverse(node);
    let carry = 1,
      temp = head;

    while (temp !== null) {
      temp.data = temp.data + carry;

      if (temp.data < 10) {
        carry = 0;
        break;
      } else {
        temp.data = 0;
        carry = 1;
      }

      temp = temp.next;
    }

    head = this.reverse(head);

    if (carry === 1) {
      let newNode = new Node(1, head);
      newNode.next = head;
      return newNode;
    }

    return head;
  }
}
