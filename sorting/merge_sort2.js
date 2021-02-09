//Rewrite mergeSort()

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2), left = arr.slice(0, mid), right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(A, B) {
    let results = [], i = 0, j  = 0
    while (i < A.length && j < B.length) A[i] < B[j] ? (results.push(A[i]), i++) : (results.push(B[j]), j++)
    return results.concat(A.slice(i)).concat(B.slice(j))
}

console.log(mergeSort([98, 100, 7, -5, 54, 21, 987, 1004, -600]))

//Great job!