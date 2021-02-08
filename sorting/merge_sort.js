//MERGE SORT

//COMBINATION OF 1) SPLITTING UP, 2) SORTING, 3) MERGING

//TAKES ADVANTAGE OF THE FACT THAT 1-ELEMENT OR EMPTY ARRAYS ARE ALREADY SORTED!

//MERGING FUNCTION:

//NOTE: PROBABLY SHOULD NOT MUTATE ARRAYS AS YOU GO. USE COUNTERS INSTEAD

// function merge(A, B) {
//     let merged = []
//     while (A.length > 0 && B.length > 0) {
//         merged.push(A[0] < B[0] ? A.shift() : B.shift())
//     }
//     console.log(merged.concat(A).concat(B))
//     return merged.concat(A).concat(B)
// }

//USING COUNTERS:

// function merge(A, B) {
//     let results = []
//     let i = 0
//     let j = 0
//     console.log(j)
//     while (i < A.length && j < B.length) {
//         if (A[i] < B[j]) {
//             results.push(A[i])
//             i++
//         } else {
//             results.push(B[j])
//             j++
//         }
//     }
//     console.log(results.concat(A.slice(i)).concat(B.slice(j)))
//     return results.concat(A.slice(i)).concat(B.slice(j))
// }


function merge(A, B) {
    let i = 0, j = 0, results = []
    while (i < A.length && j < B.length) (A[i] < B[j]) ? (results.push(A[i]), i++) : (results.push(B[j]), j++)
    return results.concat(A.slice(i)).concat(B.slice(j))
}


merge([1, 2, 7, 25], [0, 3, 4, 6, 8, 9, 10, 12, 24])

//THE SORTING PART!
//RECURSION:

function mergeSort(A) {
    if (A.length <= 1) return A

    let mid = Math.floor(A.length / 2), leftSide = A.slice(0, mid), rightSide = A.slice(mid)

    return merge(mergeSort(leftSide), mergeSort(rightSide))
}

console.log(mergeSort([100, 54, 234, 6, 78, 13, 10]))
