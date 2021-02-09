//RADIX SORT
//Not a comparison sort
//works with NUMBERS
//make buckets 0 - 9
//go through digits right to left, sorting into buckets
//reform list each time
//iterate as many times as there are digits in the largest number

//HELPER METHODS
    //GET DIGIT

function getDigit(num, place) {
    let string = num.toString()
    if (place >= string.length) return 0
    let digit = place === 0 ? string[string.length -1] : string[string.length - 1 - place]
    return parseInt(digit)
}

console.log(getDigit(1234, 0))
console.log(getDigit(51, 1))
console.log(getDigit(1234, 2))
console.log(getDigit(1234, 3))
console.log(getDigit(1234, 6))
