//write collectStrings, which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
    let arr = []
    for (let key in obj) {
        console.log(obj[key])
        if (typeof obj[key] === 'string') arr.push(obj[key])
        if (isObject(obj[key])) {
            console.log(`return value i'm tring to concat: ${collectStrings(obj[key])}`)
            console.log(`return value is a ${typeof collectStrings(obj[key])}`)
            arr = arr.concat(collectStrings(obj[key]))
            console.log(`this is the array in the if: ${arr}`)
        }
    }
    console.log(arr)
    return arr
}

function isObject(val) {
    if (val === null) return false;
    if (Array.isArray(val)) return false;
    if (typeof val === 'object') return true;
}

//define empty array
//traverse object values
    //if value = string, push to empty array
    //return final array
    //if value = object
        // return empty array.concat(call collectStrings on that value)
//return newArray

collectStrings({one: 'value one', two: 'value two', three: 'value three', nestedObject: {nestedKey: 'nested string'}})