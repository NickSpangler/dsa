// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

var diagonalSum = function(mat) {
    let size = mat.length, sum = 0
    console.log(size)
    for (let i = 0, j = size - 1; i < size; i++, j--) {
        if (j < i) break
        if (i === j) {
            sum+= mat[i][j]
            break
        }
        else {
            console.log(`Adding ${mat[i][i]}`)
            sum+= mat[i][i]
            console.log(`Adding ${mat[i][j]}`)
            sum+= mat[i][j]
            console.log(`Adding ${mat[j][j]}`)
            sum+= mat[j][j]
            console.log(`Adding ${mat[j][i]}`)
            sum+= mat[j][i]
        }
    }
    console.log(sum)
    return sum
};

// diagonalSum([[1,2,3],
//     [4,5,6],
//     [7,8,9]])

let arr = Array(7).fill('a')
console.log(arr)
arr.push('b')
console.log(arr)
console.log(arr.join(''))