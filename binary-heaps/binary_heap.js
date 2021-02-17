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

    extractMax() {
        let extracted = this.values.shift()
        this.values.unshift(this.values.pop())
        let current = 0

            while (current < this.values.length) {
                let left = this.values[current*2+1] ? current*2+1 : null
                let right = this.values[current*2+2] ? current*2+2 : null
                console.log(this.values[current])
                console.log(this.values[left])
                console.log(this.values[right])
                if (this.values[left] > this.values[current] && this.values[right] > this.values[current]) {
                    let maxIndex = this.values[left] > this.values[right] ? left : right
                    [this.values[current], this.values[maxIndex]] = [this.values[maxIndex], this.values[current]]
                    current = maxIndex
                    console.log(this.values)
                } else if (this.values[left] > this.values[current] || this.values[right] > this.values[current]) {
                    let maxIndex = this.values[left] > this.values[right] ? left : right
                    [this.values[current], this.values[maxIndex]] = [this.values[maxIndex], this.values[current]]
                    current = maxIndex
                } else {
                    break
                }
            }
        
        console.log(this.values)
        console.log(extracted)
        return extracted
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