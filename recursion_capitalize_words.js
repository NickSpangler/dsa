//write capitalizeWords, which takes an array of words and returns a new array with each of the words in all capitals

function capitalizeWords(arr) {
    if (arr.length === 0) return arr;
    let newArr = []
    newArr.push(capitalize(arr[0]))
    return newArr.concat(capitalizeWords(arr.slice(1)))
}

function capitalize(str) {
    if (str.length === 0) return ''
    let newStr = ''
    newStr += str.charAt(0).toUpperCase()
    return newStr += capitalize(str.substring(1))
}

console.log(capitalizeWords(['hello', 'mayor', 'funny']))