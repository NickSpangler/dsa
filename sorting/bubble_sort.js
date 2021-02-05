//BUBBLE SORT

//compares two elements at a time, (a,b) and if a is larger, swaps the values, then moves on.
//write your own swap method

//IMPLEMENT
//Start loopoing through array with a variable called i, start from the end, moving towards the begining 
//start an inner loop called j, from the beginning until i  -1
//if arr[i] is greater than arr[j+1], swap

function bubbleSort(array) {
    let arr = array.slice(0)
    for (let i = arr.length - 1; i >= 0; i++){
        for (let j = 0; j < i -1; j++){
            if (arr[j] > arr[j+1]) swap(arr, j)
        }
    }
    return arr;
}

function swap(arr, j) {
    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
}

