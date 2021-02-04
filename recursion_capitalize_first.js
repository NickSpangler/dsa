//write recursive capitalizeFirst, which takes an array of strings and capitalizes the first letter of each string

function capitalizeFirst(arr) {
    let newArr = []
    if (arr.length === 0) return newArr;
    newArr.push(arr[0].charAt(0).toUpperCase()+arr[0].slice(1))
    return newArr.concat(capitalizeFirst(arr.slice(1)))
}

//define empty array
//BASE CASE if the array length is zero, return the empty array
//if it's not empty, push the first element into the empty array, capitalizing the first letter
//concat that with the result of the next iteration, which should always been a one-element array, until it's an empty array, at the base case