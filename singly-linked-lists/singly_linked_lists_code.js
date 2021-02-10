class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        //create a new Node
        //if the list is empty, set head and tail to this new node
        //else set the next property on the tail to be the new node, and set the tail property on the list to the 
        //newly created node
        //increment length by one
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
}