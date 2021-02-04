//write flatten, which takes an array of arrays and returns a new array with all values flattened

//COULD NOT SOLVE

function flatten(arr) {
    let newArr = [] //define empty array
    for (let i = 0; i < arr.length; i++) {//loop through array
        if (Array.isArray(arr[i])) {//if an element IS itself an array
            newArr = newArr.concat(flatten(arr[i]))//concat the empty array with the return value of this function called on that array
        } else {//if the element is NOT an arraay
            newArr.push(arr[i])//push it into the newArray
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