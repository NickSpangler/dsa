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
        
    }

}

let q = new PriorityQueue()
q.enqueue('boo boo', 4)
q.enqueue('needs stitches', 2)
q.enqueue('faking it', 5)
q.enqueue('gunshot wound', 0)