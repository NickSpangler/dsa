//A pattern involving creating a window, which can be either an array or a number
//from one position to another

//Depending on a condition, the window either increases or closes, (and then a new
//window is created)

//Useful for keeping traack of a subset of data in an array or string.

//EXAMPLE
//maxSubarraySum - accepts an array of integers and a number, n, and returns the maximum
//sum of n consecutive numbers in the array

function maxSubarraySum(arr, num) {
    let maxSum = -Infinity; //start here, in case all numbers in array are negative
    let tempSum = 0
    if (arr.length < num) return null //handles edge case if there are not num numbers
    for (let i = 0; i < num; i++) {
        maxSum += arr[i] //sets maxSum to the initial subset
    }
    tempSum = maxSum //sets starting point for sliding window
    for (let i = num; i < arr.length; i++) {// now we have to go to the end of the array
        tempSum = tempSum - arr[i - num] + arr[i]; //starts at next element, after initial
        //subarray, subtracts original first element, adds current element
        maxSum = Math.max(tempSum, maxSum) // sets maxSum to whichever is larger
    }
    return maxSum
}