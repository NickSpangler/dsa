//define a function called sameFrequency that takes in two integers
//and returns true or false if they have the same frequency of digits
//must have a time complexity if O(n)

function sameFrequency(num1, num2) {
    //create an object from num1 listing frequency of each digit
    //iterate through num 2 to see if the key exists
    //if it does, -- that value and continue
    //if it does not return false
    let obj = {}
    let numString = num1.toString()
    let numString2 = num2.toString()
    if (numString.length !== numString2.length) {
        console.log('false')
        return false
    }
    for (let digit of numString) {
        obj[digit] = ++obj[digit] || 1
    }

    for (let digit of numString2) {
        if (obj[digit] && obj[digit] !== 0) {
            --obj[digit]
        } else {
            console.log('false')
            return false
        }
    }
    console.log('true')
    return true
}

sameFrequency(133266, 165633)