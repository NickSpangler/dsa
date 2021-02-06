//FIRST IMPLEMENTATION WITH HELPFUL CONSOLE.LOGS
// function numKeypadSolutions(wordlist, keypads) {
//     let results = []
//     for (let keypad of keypads) {
//         console.log(`CURRENTLY WORKING KEYPAD ${keypad}`)
//         let obj = {}
//         let validWords = 0
//         let keyLetter = keypad[0]
//         for (let letter of keypad) {
//             obj[letter] = true
//         }
//         for (let word of wordlist) {
//             let includesKey = false
//             for (let i = 0; i < word.length; i++) {
//                 if (!obj[word[i]]) {
//                     console.log(`${word[i]} is not in the object. So I'm breaking!`)
//                     break;
//                 }
//                 if (word[i] === keyLetter) {
//                     console.log(`${word[i]} is the key letter, and it's in ${word}`)
//                     includesKey = true;
//                     console.log(includesKey)
//                 }
//                 console.log(`${word[i]} is valid at index ${i}`)
//                 if (i === word.length - 1 && includesKey === true) {
//                     console.log(`includes key equals: ${includesKey}`)
//                     console.log(`FOUND A VALID WORD!!!!`)
//                     validWords++
//                 }
//             }
//         }
//         results.push(validWords)
//     }
//     console.log(results)
// }

//CLEAN VERSION, NO COMMENTS OR LOGS
function numKeypadSolutions(wordlist, keypads) {
    let results = []
    for (let keypad of keypads) {
        let obj = {}
        let validWords = 0
        let keyLetter = keypad[0]
        for (let letter of keypad) {
            obj[letter] = true
        }
        for (let word of wordlist) {
            let includesKey = false
            for (let i = 0; i < word.length; i++) {
                if (!obj[word[i]]) break;
                if (word[i] === keyLetter) includesKey = true;
                if (i === word.length - 1 && includesKey === true) validWords++
            }
        }
        results.push(validWords)
    }
    return results
}

//CLEAN VERSION, ADD COMMENTS TO EXPLAIN



const wordList = ['APPLE', 'PLEAS', 'PLEASE']
const keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']
const keypadTwo = ['AELPXYZ']
numKeypadSolutions(wordList, keypads)