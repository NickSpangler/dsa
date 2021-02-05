//write stringifyNumbers() which takes an object and finds all values which are numbers, and converts them to strings.

//use recursion

function stringifyNumbers(obj) {
    let newObj = Object.assign({}, obj)
    console.log(`This is my current object: ${newObj}`)
    for (let key in newObj) {
        console.log(`I am now looking at key ${key}`)
        if (typeof newObj[key] === 'number') {
            console.log(`I'm looking at the number ${newObj[key]}`)
            newObj = Object.assign({}, newObj, {[key]: newObj[key].toString()})
        } else if (isObject(newObj[key])) {
            console.log(`I made it into ${key}`)
            newObj = Object.assign({}, newObj, {[key]: stringifyNumbers(newObj[key])} )
            // newObj = Object.assign({}, newObj, {[key]: stringifyNumbers(newObj[key])})
        }
    }
    console.log(newObj)
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

stringifyNumbers({hello: 'hello', four: 4, fourString: 'four', nestedObject: {nestedThree: 3}})