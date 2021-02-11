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
        //important to sever connection going both ways from the popped Node
        if (!this.head) return undefined
        let node = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = node.prev
            this.tail.next = null
            node.prev = null //this is an important part
        }
        this.length--
        return node
    }

    shift() {
        if (!this.head) return undefined
        let node = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null 
        } else {
            this.head = node.next
            this.head.prev = null
            node.next = null
        }
        this.length--
        return node
    }
}

let list = new doublyLinkedList()
