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
        let obj = {}, validWords = 0, keyLetter = keypad[0]
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
function numKeypadSolutions(wordlist, keypads) {
    let results = []                            //create an empty array to store the results
    for (let keypad of keypads) {               //iterate over each keypad. This is your outter loop, since 1 keypad = 1 element in results array
        let obj = {}                            //create an empty object to store all the letters on the keypad
        let validWords = 0                      //counter, which will increment if a valid word is found, this is pushed to results at the end
        let keyLetter = keypad[0]               //the first letter on the keypad MUST be in a word for it to be valid, so store it for later
        for (let letter of keypad) {            //iterate through a single keypad
            obj[letter] = true                  //for each letter on the keypad, set it as a key in your empty object
        }                                       //you now have an object that looks like this obj = {'A': true, 'E': true, 'L': true... etc.}
        for (let word of wordlist) {            //iterate over each word in the word list to see if it's valid
            let includesKey = false             //assume at the START of a word that it does not include the key letter
            for (let i = 0; i < word.length; i++) {     //iterate over each letter in the given word
                if (!obj[word[i]]) break;               //check to see if that letter is stored as a key in your object. If not, break from that word
                if (word[i] === keyLetter) includesKey = true; //if you encounter the key letter, switch the flag to true, this word contains it
                if (i === word.length - 1 && includesKey === true) validWords++     //if you've made it to the end of the word AND it included
            }                                                                       //the key letter, you've found a valid word! Increment the counter!
        }
        results.push(validWords)                //you've made it through all the words in the wordlist, so you've checked them all against this keypad
    }                                           //so push your counter into the results array you defined at the top
    return results                              //after the iterations have run for each keypad, just return your results array
}



const wordList = ['APPLE', 'PLEAS', 'PLEASE']
const keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']
const keypadTwo = ['AELPXYZ']
numKeypadSolutions(wordList, keypads)