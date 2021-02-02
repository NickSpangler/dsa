// implement a function called countUniqueValues which accepts a sorted array
// and counts the unique values in the array. There can be negative numbers in 
// the array, but it will always be sorted

// function countUniqueValues(arr) {
    // if (arr.length === 0) return 0
//     let left = 0;
//     let right = 1;
//     while (right < arr.length) {
//         if (arr[left] === arr[right]) {
//             right++
//         } else {
//             left++
//             arr[left] = arr[right]
//             right++
//         }
//     }
//     console.log(left + 1)
//     return left + 1
// }


//BETTER SOLUTION
function countUniqueValues(arr) {
    if (arr.length === 0) return 0
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

countUniqueValues([1,1,1,1,1,1,2])
countUniqueValues([1,1,1,2,3,3,4,4,5,6])