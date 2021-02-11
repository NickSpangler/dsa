class Node {
//val
//next
//prev
    constructor(val) {
        this.val = val
        this.next = null
        this.previous = null //only difference in node class from SinglyLinkedList
    }
}

class doublyLinkedList {
//head
//tail
//length
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.previous = this.tail
            this.tail = node
        }
        this.length++
    }
}
