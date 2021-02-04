//Writing factorial iteratively

function iterativeFactorial(num) {
    let total = 1
    for (let i = num; i > 1; i--) {
        total *= i
    }
    console.log(total)
}

iterativeFactorial(3)
iterativeFactorial(4)
iterativeFactorial(5)

//Writing factorial recursively

function recursiveFactorial(num) {
    if (num === 1) return 1
    return num * recursiveFactorial(num - 1)
}

recursiveFactorial(3)
recursiveFactorial(4)
recursiveFactorial(5)