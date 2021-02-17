class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    //to insert, add to the end of the array, and then BUBBLE UP
    insert(val) {
        this.values.push(val)
        let currentIndex = this.values.length - 1
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1)/2)
            if (this.values[parentIndex] < this.values[currentIndex]) {
                [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentIndex]]
                currentIndex = parentIndex
            } else {
                break
            }
        }
        console.log(this.values)
    }
}

let heap = new MaxBinaryHeap
console.log(heap.values)
heap.insert(50)
heap.insert(34)
heap.insert(75)
heap.insert(1)
heap.insert(5)
heap.insert(74)
heap.insert(100)
heap.insert(2)
heap.insert(400)