//DIVIDE AND CONQUER
//divide data set into smaller chunks and then repeating
//a process with a subset of data

//can tremendously decrease time complexity

//BINARY SEARCH is an example of this, as seen below

function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1
    while (left < right) {
        let mid = Math.floor((min + max) / 2)
        let currentElement = array[mid]

        if (array[mid] < value) {
            left = mid + 1
        } else if (array[mid] > value) {
            right = mid - 1
        } else {
            return middle;
        }
    }
    return -1
}