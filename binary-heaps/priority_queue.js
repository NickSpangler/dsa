//What is a priority queue
    //A data structure where each element has a priority
    //Elements with higher priorities are served before elements with lower priorities

//SEPARATE FROM HEAPS!! THEY ARE AN ABSTRACT CONCEPT

//priority queue pseudocode:
//THIS WILL BE DONE AS A MINBINARYHEAP

class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}
class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        let node = new Node(val, priority)
        this.values.push(node)
        let currentIndex = this.values.length - 1
        while(currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1)/2)
            let parent = this.values[parentIndex]
            if (parent.priority > node.priority) {
                [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex],this.values[currentIndex]]
                currentIndex = parentIndex
            } else {
                break
            }
        }
        console.log(this)
        return this
    }

    dequeue() {
        let node = this.values[0]
        let end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        console.log(node)
        console.log(this.values)
        return node
    }

    sinkDown() {
        let index = 0
        const length = this.values.length
        const element = this.values[0]
        while(true) {
            let leftIndex = index*2 +1
            let rightIndex = index*2 +2
            let leftChild, rightChild, swap = null
            if (leftIndex < length) {
                leftChild = this.values[leftIndex]
                if (element.priority < leftChild.priority) {
                    swap = leftIndex
                }
            }
            if (rightIndex < length) {
                rightChild = this.values[rightIndex]
                if ((swap === null && element.priority < rightChild.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightIndex
                }
            }
            if (swap === null) break
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]]
            index = swap
        }
    }

}

let q = new PriorityQueue()
q.enqueue('boo boo', 4)
q.enqueue('needs stitches', 2)
q.enqueue('faking it', 5)
q.enqueue('gunshot wound', 0)
q.dequeue()