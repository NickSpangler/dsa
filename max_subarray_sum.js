//Given an array of integers and a number, write a function called maxSubarraySum which finds the maximum sum
//of a subarray with the length of the number passed in to the function

function maxSubarraySum(array, num) {
    if (array.length < num) return null;
    let max = -Infinity
    let currentSum = 0
    for (let i = 0; i < num; i++) {
        currentSum += array[i]
    }
    console.log(currentSum)
    max = Math.max(max, currentSum)

    for (let i = num; i < array.length; i++) {
        console.log(array[i - num], array[i])
        currentSum = (currentSum - array[i - num]) + array[i]
        console.log(currentSum)
        max = Math.max(max, currentSum)
    }
    console.log(max)
    return max
}

// maxSubarraySum([100, 200, 300, 400], 2)
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)
// maxSubarraySum([-3,4,0,-2,6,-1], 2)
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)
// maxSubarraySum([2,3], 3)
//define max as -Infinity
//sum first num elements, compare to max
//begin iteration at num + 1
//move forward, subtracting first element in the window and adding new element
//continue to compare current sum to max
//return max sum