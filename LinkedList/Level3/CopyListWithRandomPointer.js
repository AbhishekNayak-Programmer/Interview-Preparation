const copyRandomList = function(head) {
    // Add Nodes in the Middle
    let temp = head;
    while(temp !== null){
        let copiedNode = new _Node(temp.val);
        copiedNode.next = temp.next;
        temp.next = copiedNode;
        temp = temp.next.next;
    }

    // Add Random Pointers 
    temp = head;
    while(temp !== null){
        let copiedNode = temp.next;
        if(temp.random) copiedNode.random = temp.random.next; 
        else copiedNode.random = null;
        temp = temp.next.next;
    }

    // Create a Seprate Linked List and Make Original As it is
    let dummyNode = new _Node(-1), dummyNodePointer = dummyNode;
    temp = head;
    while(temp !== null){
        dummyNodePointer.next = temp.next;
        dummyNodePointer = dummyNodePointer.next;
        temp.next = temp.next.next;
        temp = temp.next;
    }

    return dummyNode.next;
};