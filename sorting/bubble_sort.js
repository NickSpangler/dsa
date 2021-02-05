//BUBBLE SORT

//compares two elements at a time, (a,b) and if a is larger, swaps the values, then moves on.
//write your own swap method

//IMPLEMENT
//Start loopoing through array with a variable called i, start from the end, moving towards the begining 
//start an inner loop called j, from the beginning until i  -1
//if arr[i] is greater than arr[j+1], swap

//optimized with variable noSwaps
function bubbleSort(array) {
    let noSwaps;
    let arr = array.slice(0)
    for (let i = arr.length; i > 0; i--){
        noSwaps = true;//in outter loop, noSwaps always becomes true
        for (let j = 0; j < i - 1; j++){
            if (arr[j] > arr[j+1]) swap(arr, j)
            noSwaps = false //noSwaps is set to false, after our first swap
        }
        if (noSwaps) break;//outter loop checks if noSwaps is true/false
    }
    return arr;
}

function swap(arr, j) {
    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
}

console.log(bubbleSort([23, 5, 6, 90, 9000, 45, -11]))

//sorthing this way (with index at the end and a nested loop) 
//shortens the number of passes with each iteration in the first loop
//each pass cememnts the largest number at the end

