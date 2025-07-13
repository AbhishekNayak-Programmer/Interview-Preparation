class Solution {
  merge(list1, list2) {
    let dummyNode = new Node(-1),
      temp = dummyNode;

    while (list1 !== null && list2 !== null) {
      if (list1.data < list2.data) {
        temp.bottom = list1;
        list1 = list1.bottom;
      } else {
        temp.bottom = list2;
        list2 = list2.bottom;
      }
      temp = temp.bottom;
      temp.next = null;
    }

    if (list1) temp.bottom = list1;
    else temp.bottom = list2;

    if (dummyNode.bottom) {
      dummyNode.bottom.next = null;
    }

    return dummyNode.bottom;
  }

  flatten(root) {
    if (root === null || root.next === null) return root;

    let mergedHead = this.flatten(root.next);
    root = this.merge(root, mergedHead);

    return root;
  }
}
