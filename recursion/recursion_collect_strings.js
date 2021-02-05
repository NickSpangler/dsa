//write collectStrings, which accepts an object and returns an array of all the values in the object that have a typeof string

//I was very close when I hit my snag
//Remember to SET THE VALUE OF ARR = ARR.CONCAT(WHATEVER)
//I was calling .concat() but not saving it to the variable
function collectStrings(obj) {
    let arr = []
    for (let key in obj) {
        if (typeof obj[key] === 'string') arr.push(obj[key])
        if (isObject(obj[key])) {
            arr = arr.concat(collectStrings(obj[key]))
        }
    }
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