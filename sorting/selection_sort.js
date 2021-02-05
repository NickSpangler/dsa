//SELECTION SORT

//pseudocode
//store the first element as the smallest value you've seen so far
//compare to next item, update smallest IF that's smaller (but save index)
//if the index of the smallest value is NOT the index you began with, then swap them

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++ ) {
            if (arr[j] < arr[min]) min = j
        }
        if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

console.log(selectionSort([65, 76, -3, 1, 44, 2]))