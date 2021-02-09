//QUICK SORT

//PIVOT HELPER PSEUDO CODE
    //accepts three arguments, arr, start = 0, end = arr.length - 1
    //grab pivot from start of array
    //store current pivot INDEX in a variable (this keeps track of where it should end up)
    //loop through the array from start to end
        //if pivot is greater than the current element, increment the pivot index counter, and swap current element with the element AT THE PIVOT INDEX COUNTER
    //swap the starting element (ie pivot) with the pivot index (this takes the final element that is known to be smaller than the pivot, 
    // puts it at the beginning, and puts pivot directly after all elements smaller than itself)
    //RETURN the pivot index

    //IMPORTANT - pivot counter needs to = start, loop needs to begin at start + 1

    function pivotHelper(arr, start = 0, end = arr.length - 1) {
        let pivot = arr[start]
        let pivotCounter = start
        for (let i = start + 1; i < arr.length; i++) {
            if (pivot > arr[i]) {
                pivotCounter++
                [arr[i], arr[pivotCounter]] = [arr[pivotCounter], arr[i]]
            }
        }
        [arr[start], arr[pivotCounter]] = [arr[pivotCounter], arr[start]]
        // console.log(arr)
        // console.log(`Counter: ${pivotCounter}`)
        return pivotCounter
    }

    quickSort([69, 1, 72, 55, 90, 26, 13, -2])

    //QUICKSORT PSEUDOCODE
    //call pivotHelper on the array
    //when that returns the updated pivot index, recursively call the pivot helper
    //on the subarray to the left and the subarray to the right of that index
    //base case occurs when you consider a subarray with less than 2 elements

    function quickSort(arr, left = 0, right = arr.length - 1) {
        if (left < right) {
            let pivot = pivotHelper(arr, left, right)
            quickSort(arr, left, pivot - 1)
            quickSort(arr, pivot + 1, right)
        }
        console.log(arr)
        return arr;
    }