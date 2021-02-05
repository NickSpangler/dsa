//How does .sort() work in JS?

//it can take a comparator function, which takes (a, b)
//if the function returns a negative number, a comes first
//if the function returns a positive number, b comes first
//if the function returns 0, a and b are equal

//this will return negative, positive, or 0, and .sort() sorts on this criteria
function numberCompare(num1, num2) {
    return num1 - num2
}

console.log([500, -52, 49, 2, 17, 8000].sort(numberCompare))

function stringLengthCompare(string1, string2) {
    return string1.length - string2.length
}

console.log(["Hello, my name is...", "Peter Pan", "A", "This is a very, very, very long string", "But not as long as this one, I bet, you simple fool."].sort(stringLengthCompare))