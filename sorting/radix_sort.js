//RADIX SORT
//Not a comparison sort
//works with NUMBERS
//make buckets 0 - 9
//go through digits right to left, sorting into buckets
//reform list each time
//iterate as many times as there are digits in the largest number

//HELPER METHODS
    //GET DIGIT

// function getDigit(num, place) {
//     let string = num.toString()
//     if (place >= string.length) return 0
//     let digit = place === 0 ? string[string.length -1] : string[string.length - 1 - place]
//     return parseInt(digit)
// }

// function getDigitMath(num, place) {
//     return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
// }

const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10

// DIGIT COUNT

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function maxDigits(arr) {
    return Math.max(...arr.map(i => digitCount(i)))
}

//RADIX SORT PSEUDOCODE
    //takes an array of numbers
    //find how many max digits there are
    //loop from 0 to max digits
        //create buckets, 0 - 9 (array of empty arrays) (use index for what bucket it is)
        //place number into corresponding bucket based on kth digit
    //replace our existing array with values in buckets
    //return list at end

function radixSort(arr) {
    let max = maxDigits(arr)
    for(let i = 0; i < max; i++) {
        let buckets = Array.from({length: 10}, () => [])
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i)
            buckets[digit].push(arr[j])
        }
        arr = buckets.flat()
    }
    return arr
}

console.log(radixSort([23, 1, 5, 200, 0, 9, 100]))
