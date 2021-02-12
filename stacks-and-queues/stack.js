//Stack Implementation
//Similar to singly linked list

//BEST POSSIBLE STACK

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        let node = new Node(val)
        if (!this.first) {
            this.first = node
            this.last = node
        } else {
            let first = this.first
            this.first = node
            node.next = first
        }
        return ++this.size
    }

    pop() {
        if (!this.first) return null
        let temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.val
    }
}
let stack = new Stack()
