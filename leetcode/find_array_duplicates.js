console.log('Find me!')

// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), 
// some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

var findDuplicates = function(nums) {
    let map = {}, results = []
    for (num of nums) {
        map[num] ? results.push(num) : map[num] = true
    }
    console.log(results)
    return results
}; 

findDuplicates([4,3,2,7,8,2,3,1])

// iterate through array once
// create keys in obj
// if duplicate found, push to results array
// return results