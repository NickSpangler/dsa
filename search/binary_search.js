//binarySearch accepts a sorted array and a value
//create left point at start and right pointer at end
//while left < right, pick a middle
    //check if mid === target
    //if mid is too smalle, move left up
    //if mid is too big, move right down
//if you never find the value, return - 1

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((right - left) / 2)
    while (arr[mid] !== target) {
        if (arr[mid] > target) {
            right = mid - 1
            mid = Math.floor((right - left) / 2)
        } else {
            left = mid + 1
            mid = Math.floor((right - left) / 2)
    }
    return middle
}

binarySearch([1,2,3,4,5], 2)