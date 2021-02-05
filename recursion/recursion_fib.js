//write fib, which accepts a number and returns the nth number in the Fibonacci sequence.
//Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 -> each number is a sum of the previous two numbers

// function fib(num) {
//     if (num === 1 || num === 2) return 1;
//     let previous = 1
//     let current = 1
//     function helper(num) {
//         let current = previous + current;
//         previous = current;
//         current = 
//     }


// }

//COULD NOT SOLVE ON MY OWN

// FIB(N) = FIB(N-1) + FIB(N-2)
//Because it's the sum of the previous two sums
//Base case is the function returning 1 because the argument gets down to 2, which returns one.
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2)
}
