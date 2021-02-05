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
    while (left < right) {
        let mid = Math.floor((right - left) / 2)
        console.log(mid, arr[mid])
        if (arr[mid] === target) {
            console.log(`i found it at index ${mid}`)
            return mid;
        }
        if (arr[mid] > target) {
            right = mid
            console.log('Too Big')
            console.log(`Right is now ${right}`)
        } else {
            left = mid + 1
            console.log('Too Small')
            console.log(`Left is now ${left}`)
        }
    }
    return - 1
}

binarySearch([1,2,3,4,5], 2)