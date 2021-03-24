
// Given an array A of strings made only from lowercase letters, 
// return a list of all characters that show up in all strings within the list (including duplicates).  
// For example, if a character occurs 3 times in all strings but not 4 times, 
// you need to include that character three times in the final answer.

// You may return the answer in any order.

var commonChars = function(A) {
    let maps = [], results = []
    for (word of A) {
        let obj = {}
        for (letter of word) {
            obj[letter] ? obj[letter]++ : obj[letter] = 1
        }
        maps.push(obj)
    }
    let keys = Object.keys(maps[0])
    for (key of keys) {
        let counts = []
        for (let i = 0; i < maps.length; i++) {
            maps[i][key] ? counts.push(maps[i][key]) : counts.push(0)
        }
        let count = Math.min(...counts)
        while (count > 0) {
            results.push(key)
            count--
        }
    }
    return results
}

// THIS IS A MUCH BETTER SOLUTION:
// var commonChars = function(A) {
//     const result = []
//     const firstWordArr = [...A[0]]
    
//     for(const letter of firstWordArr) {
//         if(A.every(word => word.includes(letter))) {
//             result.push(letter)
//             A = A.map(word => word.replace(letter, ''))
//         }
//     }    
    
//     return result
// };

// create map of all characters in all words
// select one and iterate, checking for same letter in all
// if all still contain a letter, push to results array AND decrease count of letter in each map

commonChars(["bella","label","roller"])
commonChars(["cool","lock","cook"])