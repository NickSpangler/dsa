// A pattern with an OUTER FUNCTION
//and inside there is an INNER FUNCTION that itself is recursive

//Commonly used when COLLECTING a set, or building an array

//1) Define outter function
//2) Define collection; let results = []
//3) Define inner/recursive funciton, which updates results
//4) CALL inner function with original input
//5) Return results

function collectOddNumbers(arr) {
    let odds = []
    function getOdds(array) {
        if (array.length === 0) return
        if (array[0] % 2 !== 0) {
            odds.push(array[0])
        }
        getOdds(array.slice(1))
    }
    getOdds(arr)
    return odds;
}