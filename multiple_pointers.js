//MULTIPLE POINTERS
//Creating pointers, or values, that correspond to an index or position and move towards
//the beginning, end, or middle, based on a certain condition

//Efficient for solving problems with minimal space complexity

//sumZero, using Multiple Pointers
//given a sorted array, return the first two numbers whose sum is zero

function sumZero(arr) {
    let left = 0; //first index
    let rigth = arr.length - 1; //last index
    while (left < right) { // if they cross over, or meet, then we have done all pairs
        let sum = arr[left] + arr[right]; // get the sum
        if (sum === 0) { // if it's zero, return!
            return [arr[left], arr[right]];
        } else if (sum > 0) { // if the sum is too much, move in from the right
            right--
        } else { // if the sum is too little, move in from the left
            left++
        }
    }
}