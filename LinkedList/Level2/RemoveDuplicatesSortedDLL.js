class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Solution {
  /**
   * Function to remove duplicates from unsorted linked list.
   * @param {Node} head
   * @returns {Node}
   */
  removeDuplicates(head) {
    if (head === null || head.next === null) return head;

    let temp = head;
    while (temp !== null && temp.next !== null) {
      let nextNode = temp.next;
      while (nextNode !== null && nextNode.data === temp.data) {
        nextNode = nextNode.next;
      }

      temp.next = nextNode;
      if (nextNode) nextNode.prev = temp;

      temp = temp.next;
    }

    return head;
  }
}
