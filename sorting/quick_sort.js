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

    