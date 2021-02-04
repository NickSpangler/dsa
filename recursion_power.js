//Write a function called power which accepts a base and an exponent.
//Should return the power of the base to the exponent
//This should mimic Math.pow() - do not worry about negative bases and exponents

function power(base, exponent) {
    let total = base
    console.log(`Total = ${total}`)
    function recursiveHelper(exp) {
        if (exp === 0) return total * 1;
        console.log(`Multiplying ${total} by helper ${exp}`)
        return total *= recursiveHelper(exp - 1)
    }
    recursiveHelper(exponent - 1)
    console.log(total)
    return total;
}

//define total = 1
//define recursive function that takes in a power
//multiple base by itself until the power = 0
//BASE CASE IS WHEN POWER = 0
//total will accrue the value
//return the total

power(2, 3)
power(3, 2)
power(5, 5)
