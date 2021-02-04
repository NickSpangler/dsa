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