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

    unshift(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let count, current
        if (index <= this.length / 2) {
            count = 0
            current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while (count !== index) {
                current = current.prev
                count--
            }
        }
        return current
    }

    set(index, val) {
        let node = this.get(index)
        if (node) {
            node.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)

        let newNode = new Node(val)
        let previous = this.get(index - 1)
        let next = previous.next

        newNode.prev = previous
        newNode.next = next
        previous.next = newNode
        next.previous = newNode
        this.length++
        return true
    }
}

let list = new doublyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)