// Given an array of integers arr, 
// write a function that returns true if and only if the number 
// of occurrences of each value in the array is unique.

console.log('heloo')
//CLEAN, NO CONSOLES
var uniqueOccurrences = function(arr) {
    let map = {}
    for (val of arr) map[val] ? map[val]++ : map[val] = 1
    return Object.values(map).length === new Set(Object.values(map)).size ? true : false
};


// var uniqueOccurrences = function(arr) {
//     let map = {}
//     for (val of arr) {
//         map[val] ? map[val]++ : map[val] = 1
//     }

//     console.log(Object.values(map))
//     console.log(new Set(Object.values(map)))

//     console.log(Object.values(map).length === new Set(Object.values(map)).size ? true : false)
//     return Object.values(map).length === new Set(Object.values(map)).size ? true : false
// };

uniqueOccurrences([1,2,2,1,1,3])

// create map
// create array of values AND set from values
// if same size, true, else false