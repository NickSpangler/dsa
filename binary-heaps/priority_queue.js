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
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        let currentIndex = this.values.length - 1
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1)/2)
            if (this.values[parentIndex].priority > this.values[currentIndex].priority) {
                [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentIndex]]
                currentIndex = parentIndex
            } else {
                break
            }
        }
        console.log(this.values)
    }

    //NOTE THIS IS NOW A MINBINARYHEAP AS A PRIORITY QUEUE
    //ALL COMPARISONS ARE BASED ON NODE.PRIORITY
    dequeue() {
        let extracted = this.values[0]
        let end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }
        return extracted
    }

    sinkDown() {
        let index = 0
        const length = this.values.length
        const element = this.values[0]
        while(true) {
            let leftIndex = 2*index+1
            let rightIndex = 2*index+2
            let leftChild, rightChild;
            let swap = null;
            if (leftIndex < length) {
                leftChild = this.values[leftIndex]
                if (leftChild.priority < element.priority) {
                    swap = leftIndex
                }
            }
            if (rightIndex < length) {
                rightChild = this.values[rightIndex]
                if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
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
q.enqueue('common cold', 5)
console.log(q.values)
q.enqueue('gunshot would', 1)
q.enqueue('high fever', 4)
q.enqueue('broken arm', 2)
q.enqueue('glass in foot', 3)
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
