
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) 
// such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
console.log('hi')
var arrayPairSum = function(nums) {
    let sorted = nums.sort((a, b) => a - b), result = 0
    console.log(sorted)
    for (let i = 0; i < nums.length; i += 2) {
        result += sorted[i]
    }
    console.log(result)
};

arrayPairSum([1,4,3,2])
arrayPairSum([6,2,6,5,1,2])
// sort Array
// sum every other Number
// return result