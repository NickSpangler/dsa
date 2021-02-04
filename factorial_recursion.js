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

function recursiveFactorial(num) {
    if (num === 1) return 1;
    let total = num
    total *= recursiveFactorial(num - 1)
    console.log(total)
}

recursiveFactorial(3)
recursiveFactorial(4)
recursiveFactorial(5)