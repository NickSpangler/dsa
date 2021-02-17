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


    //save first element (root) to return at end
    //pop last element and make it the value of the first element
    //make sure the array/heap was larger than one element

    //sink down logic
    //start at first index, set left and right INDEXES first
    //define SWAP as the index you might be swapping with, initialized as null
    //do all comparisons with left first, making sure it exists, seeing if it's larger, and setting swap if so
    //do comparisons with right, making sure it exists
        //DOUBLE IF to check both conditionals against SWAP variable
    //swap is the break, if it remains null
    //if not, make the swap, and set INDEX to the value of SWAP
    //return the extracted value
    extractMax() {
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
                if (leftChild > element) {
                    swap = leftIndex
                }
            }
            if (rightIndex < length) {
                rightChild = this.values[rightIndex]
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightIndex
                }
            }
            if (swap === null) break
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]]
            index = swap
        }
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
heap.extractMax()