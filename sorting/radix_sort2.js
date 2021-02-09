//HELPERS TO MEMORIZE
const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

const maxDigits = (arr) => Math.max(...arr.map(num => digitCount(num)))

//RADIX SORT FUNCTION
function radixSort(nums) {
    let max = maxDigits(nums)
    for (let i = 0; i < max; i++) {
        let buckets = Array.from({length: 10}, () => [])
        for (num of nums) {
            let digit = getDigit(num, i)
            buckets[digit].push(num)
        }
        nums = buckets.flat()
    }
    return nums
}

console.log(radixSort([99, 0, 76, 7, 880, 457, 2]))