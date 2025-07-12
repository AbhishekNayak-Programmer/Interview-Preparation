class Solution {
  deleteAllOccurOfX(head_ref, key) {
    let temp = head_ref;

    while (temp !== null) {
      if (temp.data === key) {
        if (temp === head_ref && temp.data === key) {
          head_ref = head_ref.next;
        }

        let nextNode = temp.next;
        let previousNode = temp.prev;
        if (previousNode) previousNode.next = nextNode;
        if (nextNode) nextNode.prev = previousNode;
        temp = temp.next;
      } else temp = temp.next;
    }

    return head_ref;
  }
}
