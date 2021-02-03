//write a function called isSubsequence which takes in two strings and checks
//whether the charactrs in the first string appear somewhere in the second string
//without their order changing

//USE MULTIPLE POINTERS

function isSubsequence(sub, string) {
    if (sub.length > string.length) return false
    let subPointer = 0, stringPointer = 0
    while (stringPointer < string.length) {
        if (sub[subPointer === string[stringPointer]]) {
            subPointer++
            stringPointer++
            if (subPointer === sub.length - 1) {
                console.log('true')
                return true
            }
        } else if (subPointer !== 0) {
            subPointer = 0
        } else {
            stringPointer++
        }
    }
    console.log('false')
    return false
}


//create a pointer starting at zero for sub
//create a pointer starting at zero for string
//iterate through the string
    //if the char in both strings at both pointers ===, advance both
    //if the char does not match, reset sub to 0, advance string pointer