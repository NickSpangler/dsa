class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;   
        this.length = 0   
    }

    push(val){
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    unshift(val){
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return null
        let removedNode = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            removedNode.next.prev = null
            this.head = removedNode.next
        }
        removedNode.next = null
        this.length--
        return removedNode
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let current, count = 0
        if (index <= this.length / 2) {
            current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
        } else {
            current = this.tail
            count = this.length - 1
            while (count !== index) {
                current = current.prev
                count--
            }
        }
        return current
    }

    set(index, val){
        if (index < 0 || index >= this.length) return false
        this.get(index).val = val
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let removedNode = this.get(index)
        let before = removedNode.prev
        let after = removedNode.next

        before.next = after
        after.prev = before
        removedNode.prev = null, removedNode.next = null
        this.length--
        return removedNode
    }

    pop(){
        if (!this.head) return undefined
        let removedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let newTail = removedNode.prev
            newTail.next = null
            this.tail = newTail
            removedNode.prev = null
        }
        this.length--
        return removedNode
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.shift()
        if (index === this.length - 1) return !! this.pop()
        let newNode = new Node(val)
        let before = this.get(index - 1)
        let after = before.next

        before.next = after, after.prev = before
        newNode.prev = before, newNode.next = after
        this.length++
        return true
    }

    reverse() {
        if (this.length < 2) return this
        let current = this.head
        this.head = this.tail
        this.tail = current
        let next
        let previous = null
        for (let i = 0; i < this.length; i++) {
            next = current.next
            current.next = previous
            current.prev = next
            previous = current
            current = next
        }
        return this
    }

    print(){
        let array = []
        let current = this.head, count = 0
        while(count < this.length) {
            array.push(current.val)
            current = current.next
            count++
        }
        console.log(array)
    }
    
}

let list = new DoublyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)