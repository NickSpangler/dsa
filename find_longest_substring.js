//write a function findLongestSubstring, which accepts a string and returns the length 
//of the longest substring with all distinct characters

function findLongestSubstring(string) {
    if (string.length === 0) return 0
    let set = new Set()
    let max = 0;
    let left = 0;
    let right = 0;
    while (right < string.length) {
        if (!set.has(string[right])) {
            set.add(string[right])
            max = Math.max(max, set.size)
            right++
        } else {
            set.delete(string[left])
            left++
        }
    }
    return max;
}