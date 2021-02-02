function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        console.log("false")
        return false
    }
    let object1 = {}
    let object2 = {}
    for (let char of string1) {
        object1[char] = ++object1[char] || 1
    }
    for (let char of string2) {
        object2[char] = ++object2[char] || 1
    }
    console.log(object1)
    console.log(object2)
    for (let key in object1) {
        if (object1[key] !== object2[key]) {
            console.log("false")
            return false
        }
    }
    console.log("true")
    return true
}

isAnagram('', '')
isAnagram('aaz','zza')
isAnagram('anagram', 'nagaram')
isAnagram('rat', 'car')
isAnagram('awesome', 'awesom')
isAnagram('qwerty','qeywrt')
isAnagram('texttwisttime','timetwisttext')
