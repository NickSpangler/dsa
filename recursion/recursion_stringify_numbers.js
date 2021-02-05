//write stringifyNumbers() which takes an object and finds all values which are numbers, and converts them to strings.

//use recursion

//THIS SOLUTION USES OBJECT.ASSIGN, AS COURSE WOULD NOT LET ME USE SPREAD OPERATOR
function stringifyNumbers(obj) {
    let newObj = Object.assign({}, obj)
    for (let key in newObj) {
        if (typeof newObj[key] === 'number') {
            newObj = Object.assign({}, newObj, {[key]: newObj[key].toString()})
        } else if (isObject(newObj[key])) {
            newObj = Object.assign({}, newObj, {[key]: stringifyNumbers(newObj[key])})
        }
    }
    return newObj
}

//THIS SOLUTION USES SPREAD OPERATOR
function stringifyNumbers(obj) {
    let newObj = {...obj}
    for (let key in newObj) {
        if (typeof newObj[key] === 'number') {
            newObj = Object.assign({}, newObj, {[key]: newObj[key].toString()})
        } else if (isObject(newObj[key])) {
            newObj = {...newObj, [key]: stringifyNumbers(newObj[key])}
        }
    }
    return newObj
}

function isObject(val) {
    if (val === null) return false;
    if (Array.isArray(val)) return false;
    if (typeof val === 'object') return true;
}

//create a new copy of the object
//obj.keys = array of object's keys
    //if Obj[key] is a number, set Obj[key] = Obj[key].toString()
    //if Obj[key] is an object, call stringifyNumbers(Obj[key])
//return new obj

stringifyNumbers({hello: 'hello', four: 4, fourString: 'four', nestedObject: {nestedThree: 3, secondNested: {number: 1}}})