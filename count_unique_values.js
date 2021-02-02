// implement a function called countUniqueValues which accepts a sorted array
// and counts the unique values in the array. There can be negative numbers in 
// the array, but it will always be sorted

function countUniqueValues(arr) {
    counter = 0
    let left = 0;
    let right = 1;
    while (right < arr.length) {
        //start with first and second value
        // compare
        //if left does not equal right 
            //increment counter
            //make left equal right
            //increment right
        //if left does equal right
            //increment right until it does not equal left
            //make left equal right, and increment right

        if (arr[left] !== arr[right]) {
            counter++
            left = right
            right++
        } else {
            while (arr[left] === arr[right]) {
                right++
            }
            left = right
            right++
        }
    }
    return counter
}
