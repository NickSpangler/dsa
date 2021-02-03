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

uniqueSubstring('tnenent')