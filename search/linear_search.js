//linearSearch accepts an array and a value
//loop through array and see if current element equals value
//if so return index
//if not found, return negative one

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val) return i;
    }
    return -1
}