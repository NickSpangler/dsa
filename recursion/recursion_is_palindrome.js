//write a recursive function isPalindeom which returns true if the string passed to it is a Palindrome

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1))
    }
    return false
}

//BASE CASE if string.length is 0 or 1
//each iteration check if str[0] === str[str.length - 1]
    //if so call isPalindrome on str.slice(1, string.length - 1)