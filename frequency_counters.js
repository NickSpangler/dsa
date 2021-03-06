//uses objects or sets to collect values/frequencies of values

//can avoid need for nestedd loops or O(N^2) operations with arrays and strings

// EXAMPLE
// define same(), which takes two arrays, and returns true if every value in the second array has a
// corresponding value squared in the second array

function same(arr1, arr2) {
    // check if both lengths are the same
    // create two objects containing frequency of each value of each Array
    // iterate through keys of arr1, testing to see if the value of arr1 matches the value of arr1 squared
    if (arr1.length == arr2.length) {
        obj1 = {}
        obj2 = {}
        for (let i = 0; i < arr1.length; i++) {
            obj1[arr1[i]] = ++obj1[arr1[i]] || 1
            obj2[arr2[i]] = ++obj2[arr2[i]] || 1
         }
         for (const key of Object.keys(obj1)) {
            if (obj1[key] !== obj2[key*key]) {
                console.log('false')
                return false
            }
         }
    } else {
        console.log('false')
        return false
    }
    console.log('true')
    return true
}

same([1, 2, 3], [4,1,9])
same([1, 2, 3, 2], [4,1,9, 4])
same([1, 2, 3], [1, 9])
same([1, 2, 1], [4, 4, 1])
