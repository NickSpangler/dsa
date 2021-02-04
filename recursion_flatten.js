//write flatten, which takes an array of arrays and returns a new array with all values flattened

function flatten(arr) {
    let flattened = []
    function recursion(arr) {
        if (arr.length === 0) return
        if (typeof(arr[0]) !== "object") {
            flattened.push(arr[0])
            return recursion(arr.slice(1))
        } else {
            return recursion(arr[0])
        }
    }
    return flattened
}

//define empty array
//define recursion
//look at first element, if it is not an array, push it to new array
//recursively call recursion with new slice
//if it is an array, call 
//return array