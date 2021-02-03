//write a function called minSubArrayLen which takes an array of positive integers
//and a single positive integer

//return the minimal length of a contiguous subarray of which the sum is greater than or equal to
//the integer passed in

//if there isn't one, return 0 instead

// function minSubArrayLen(arr, num) {
//     let len = Infinity
//     let current_total = 0, current_length = 0
//     let left = 0, right = 0
//     while (right < arr.length) {
//         if (arr[right] >= num) return 1
            
//         current_total += arr[right]
//         if (current_total >= num) {
//             current_length = right - left + 1
//             len = Math.min(len, current_length)
//             current_total -= arr[left]
//             left++
//             while (current_total >= num) {
//                 current_length = right - left + 1
//                 len = Math.min(len, current_length)
//                 current_total -= arr[left]
//                 left++
//             }
//         }
//     }
//     return len
// }

//define len as 0
//define current_total as 0
//set two counters at zero

//short circuit -> if arr[right] >= num, return 1

//else add arr[right] to current total
    //if current_total < num, right++
    //if current_total >= num, len = right - left + 1, 


function minSubArrayLen(arr, sum) {
    if (arr.length === 0) return null
    let len = Infinity
    let current_total = arr[0]
    let left = 0
    let right = 0
    
    while (right < arr.length) {
        if (current_total < sum) {
            right++
            current_total += arr[right]
        } else {
            let current_len = right - left + 1;
            len = Math.min(len, current_len)
            current_total -= arr[left];
            left++
        }
    }
    if (len === Infinity) {
        console.log(0)
        return 0;
    } else {
        console.log(`Final len is ${len}`)
        return len
    }
}
console.log('hello')
minSubArrayLen([2,3,1,2,4,3], 7)


// if (current_total >= sum) {
//     console.log(`${current_total} is more than ${sum}. Left is ${left}, Right is ${right}.`)
//     let current_len = right - left -1
//     console.log(`From index ${left} to index ${right} is ${current_len}`)
//     len = Math.min(len, current_len)
//     console.log(`${current_total} is more than ${sum}. Subtracting ${arr[left]} from ${current_total}`)
//     current_total -= arr[left]
//     left++
// } else {
//     console.log(`${current_total} is less than ${sum}. Adding ${arr[right]} to ${current_total}`)
//     current_total += arr[right]
//     right++
// }