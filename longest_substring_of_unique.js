//Given a string, find the longest substring of unique characters
//preferably using a sliding window.

function uniqueSubstring(string) {
    if (string.length === 0) return null;
    let maxSub = 1
    let left = 0
    let right = 1
    for (let i = 1; i < string.length; i++) {
        if (string.slice(left, i).contains(string[i])) {
            maxSub = Math.max(maxSub, string.slice(left, i))
            left++
        }
    }
    return maxSub;
}

"hello"