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

function merge(A, B) {
    let results = []
    let i = 0
    let j = 0
    console.log(j)
    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            results.push(A[i])
            i++
        } else {
            results.push(B[j])
            j++
        }
    }
    console.log(results.concat(A.slice(i)).concat(B.slice(j)))
    return results.concat(A.slice(i)).concat(B.slice(j))
}


merge([1, 2, 7, 25], [0, 3, 4, 6, 8, 9, 10, 12, 24])

