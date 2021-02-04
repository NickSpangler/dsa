//write flatten, which takes an array of arrays and returns a new array with all values flattened

//COULD NOT SOLVE

function flatten(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
// function flatten(arr) {
//     let flattened = []
//     function recursion(arr) {
//         if (arr.length === 0) return
//         if (typeof(arr[0]) === "number") {
//             console.log('I am not an array!')
//             flattened.push(arr[0])
//             return recursion(arr.slice(1))
//         } else {
//             return recursion(arr[0])
//         }
//     }
//     recursion(arr)
//     return flattened
// }

// flatten([1, 2, 3, [4, 5] ])
//define empty array
//define recursion
//look at first element, if it is not an array, push it to new array
//recursively call recursion with new slice
//if it is an array, call 
//return array