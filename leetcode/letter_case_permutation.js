console.log('gotta find em all')

// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. You can return the output in any order.




var letterCasePermutation = function(S) {
    let res = []
    const upCase = (index) => {
        
    }
    
    const downCase = (index) => {
        
    }

    for (let i = 0; i < S.length; i++) {
        //this isolates non-digits -> only applies to letters
        if (!(S.charCodeAt(i) >= 48 && S.charCodeAt(i) <= 57)) {
            console.log(S[i], S.charCodeAt(i))
        }
    }
};

letterCasePermutation("a1b2")

// using recursion?

// iterate through

// push string with current character capital and lowercase

// then keep going recursively


