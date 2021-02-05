//Write a recursive function called reverse which accepts a string and returns a new string in reverse

function reverse(string) {
    if (string.length === 0) {
        console.log('END')
        return ''
    }
    return string[string.length - 1] + reverse(string.slice(0, string.length - 1))
}

reverse('hello')
// string[string.length - 1] + reverse(string.slice(0, string.length - 1))