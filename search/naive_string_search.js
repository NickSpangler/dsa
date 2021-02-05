//count the number of times a small string appears in a longer string
//straightforward approach is checking each pair of characters individually

//loop over longer string
//loop over shorter string
//if charactrs don't match, break out of inner string
//if they do match, keep going

//if you complete the inner loop and find a match, increment the count of matches

//return the count

function naiveStringSearch(longString, shortString) {
    let count = 0
    for (let i = 0; i < longString.length; i++) {
        for (let j = 0; j < shortString.length; j++) {
            if (longString[i + j] !== shortString[j]) break
            if (j === shortString.length - 1) count++
        }
    }
    return count
}

console.log(naiveStringSearch('wowomgzomgomg', 'omg'))