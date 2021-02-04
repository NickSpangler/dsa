// A pattern with an OUTER FUNCTION
//and inside there is an INNER FUNCTION that itself is recursive

//Commonly used when COLLECTING a set, or building an array

//1) Define outter function
//2) Define collection; let results = []
//3) Define inner/recursive funciton, which updates results
//4) CALL inner function with original input
//5) Return results

function collectOddNumbers(arr) {
    let odds = [] //define collector
    function getOdds(array) { //define helper method
        if (array.length === 0) return //BASE CASE, when array is empty
        if (array[0] % 2 !== 0) {//Test if first element is odd
            odds.push(array[0])//if odd, push to collector
        }
        getOdds(array.slice(1))//call recursively, minus the first element, regardless
    }
    getOdds(arr)//call helper function
    return odds;//return collector
}

//NOTE: base case returns, and then OUTER FUNCTION RETURNS