
// Given an array A of strings made only from lowercase letters, 
// return a list of all characters that show up in all strings within the list (including duplicates).  
// For example, if a character occurs 3 times in all strings but not 4 times, 
// you need to include that character three times in the final answer.

// You may return the answer in any order.

var commonChars = function(A) {
    let maps = []
    for (word of A) {
        let map = new Map()
        for (letter of word) {
            map.has(letter) ? map.set(letter, map.get(letter) + 1) : map.set(letter, 1)
        }
        maps.push(map)
    }
    for (map of maps) console.log(map)
}

// create map of all characters in all words
// select one and iterate, checking for same letter in all
// if all still contain a letter, push to results array AND decrease count of letter in each map

commonChars(["bella","label","roller"])