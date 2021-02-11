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

    pop() {
        if (!this.head) return undefined;
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head
        this.head = oldHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead
    }

    unshift(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node
        }
        this.length++
        return this;
    }
}

let list = new SinglyLinkedList()
list.push("FIRST ELEMENT")
list.push("SECOND ELEMENT")
list.push("THIRD ELEMENT")