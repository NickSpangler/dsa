//Writing factorial iteratively

function iterativeFactorial(num) {
    let total = 1
    for (let i = num; i > 1; i++) {
        total *= i
    }
    console.log(total)
}

iterativeFactorial(3)
iterativeFactorial(4)
iterativeFactorial(5)