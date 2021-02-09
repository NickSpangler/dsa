//Rewrite quickSort()

function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start], count = start
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            count++
            [arr[count], arr[i]] = [arr[i], arr[count]]
        }
    }
    [arr[start], arr[count]] = [arr[count], arr[start]]
    return count;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivot = pivotHelper(arr, left, right)
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr
}

console.log(quickSort([77, 56, 889, -34, 0, 99, 90, 6, 22]))