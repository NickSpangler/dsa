//write a recursive Factorial
//0! should return one

function factorial(number) {
    if (number === 0) return 1
    return number * factorial(number - 1)
}

