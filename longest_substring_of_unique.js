//Given a string, find the longest substring of unique characters
//preferably using a sliding window.

// function uniqueSubstring(string) {
//     if (string.length === 0) return null;
//     let maxSub = 1
//     let left = 0
//     let right = 1
//     for (let i = 1; i <= string.length; i++) {
//         console.log(string.slice(left, i))
//         if (string.slice(left, i).includes(string[i])) {
//             maxSub = Math.max(maxSub, string.slice(left, i).length)
//             left = string.slice(left, i).indexOf(string[i]) + 1
//         } else {
//             maxSub = Math.max(maxSub, string.slice(left, i).length)
//         }
//     }
//     console.log(maxSub)
//     return maxSub;
// }

function uniqueSubstring(string) {
    let left = 0, right = 0, max = 0, charSet = new Set()
    //this has multiple pointers, a max, and a set object, of only unique values
    while (right < string.length) {
        console.log(charSet)
        //start BOTH pointers at 0, so the first character gets added to the Set
        if (!charSet.has(string.charAt(right))) {
            //set is empty, so char gets added
            charSet.add(string.charAt(right))
            right++
            //always update/compare max when you've expanded the window
            max = Math.max(charSet.size, max)
        } else {
            //this closes the window from the left, deleting each element as it
            //goes, until it has finally deleted the repeated char we have just encountered
            charSet.delete(string.charAt(left))
            left++
        }
    }
    console.log(max)
    return max
}

uniqueSubstring('aabcdabbcde')
