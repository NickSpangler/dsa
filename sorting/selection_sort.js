//SELECTION SORT

//pseudocode
//store the first element as the smallest value you've seen so far
//compare to next item, update smallest IF that's smaller (but save index)
//if the index of the smallest value is NOT the index you began with, then swap them

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        let minIndex = i
        console.log(minIndex)
        for (let j = i; j < arr.length; j++ ) {
            console.log(`comparing index ${j} to index ${minIndex}`)
            if (arr[j] < min) {
                console.log(`SETTING minIndex to ${j}`)
                min = arr[j]
                minIndex = j
            }
        }
        console.log(`${minIndex} is not ${i} so imma swap em `)
        console.log(`what is this value? ${arr[i]}`)
        if (minIndex !== i) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

console.log(selectionSort([65, 76, -3, 1, 44, 2]))