
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) 
// such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

var arrayPairSum = function(nums) {
    let sorted = nums.sort((a, b) => a - b)
    console.log(sorted)
};

// sort Array
// sum every other Number
// return result