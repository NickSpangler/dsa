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
        return this;
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

    //return an item at a specific index (zero indexed)
    get(index) {
        if (index < 0 || index >= this.length) return null
        let current = this.head, count = 0
        while (count < index) {
            current = current.next
            count++
        }
        return current
    }

    //CHANGES VALUE OF NODE AT INDEX
    set(index, val) {
        if (!this.get(index)) return false
        this.get(index).val = val
        return true
    }

    //INSERTS A NEW NODE AT THE INDEX
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return this.push(val)
        if (index === 0) return this.unshift(val);

        let node = new Node(val)
        let beforeNode = this.get(index - 1);
        node.next = beforeNode.next;
        beforeNode.next = node
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()

        let previous = this.get(index - 1)
        let deletedNode = previous.next
        previous.next = deletedNode.next
        this.length--
        return deletedNode
    }
}

let list = new SinglyLinkedList()
list.push("FIRST ELEMENT")
list.push("SECOND ELEMENT")
list.push("THIRD ELEMENT")