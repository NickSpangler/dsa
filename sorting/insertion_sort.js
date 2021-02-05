//INSERTION SORT

//Start by picking the second element in an array
//compare it to the one before it, and swap if necessary
//continue to the next element, and the iterate through the SORTED PORTION and place element in the correct place
//repeat until the array is sorted

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > current) {
           arr[j+1] = arr[j]
           j--
        }
        arr[j+1] = current
    }
    return arr;
}

console.log(insertionSort([6, 22, -4, 73, 100, 10]))
console.log('hi')