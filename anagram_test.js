function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        console.log("false")
        return false
    }
    let object1 = {}
    let object2 = {}
    for (let char in string1) {
        object1[char] = ++object1[char] || 1
    }
    for (let char in string2) {
        object2[char] = ++object2[char] || 1
    }
    for (let key in object1) {
        if (object1[key] !== object2[key]) {
            console.log("false")
            return false
        }
    }
    console.log("true")
    return true
}

