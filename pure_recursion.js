//The function itself IS recursive


//my first try
function collectOdds(arr, odds = []) {
    if (arr.length === 0) return
    if (arr[0] % 2 !== 0) {
        odds.push(arr[0])
    }
    collectOdds(arr.slice(1), odds)
    console.log(odds)
    return odds
}

collectOdds([1,2,3,4,5,6,7,8])

//ACTUAL ANSWER

function pureRecursion(arr) {
    let odds = [] //collector IS reset in each recursion, which is ok, because it will be returned every time, then concatinated
    if (arr.length === 0) return odds; //BSE CASE
    if (arr[0] % 2 !== 0) {
        odds.push(arr[0]) //just checking one element every time. Putting it in odds if it's odds, which will be returned, and concatinated
    }
    odds.concat(pureRecursion(arr.slice(1))) //here is the recursion. We end up concatinating EVERY return value into one return value
    return odds
}