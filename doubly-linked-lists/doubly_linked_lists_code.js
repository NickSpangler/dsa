class Node {
//val
//next
//prev
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null //only difference in node class from SinglyLinkedList
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
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
        return this;
    }

    pop() {
        if (!this.head) return undefined
        let node = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail.prev = this.tail
            this.tail.next = null
        }
        this.length--
        return node
    }
}

let list = new doublyLinkedList()
