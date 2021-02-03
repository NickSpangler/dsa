//implement a function called areThereDuplicates which accepts a variable number of args
//and checks wehter there are any duplicates among args passed in.

//this can be solved using frequency counter pattern OR multiple pointers pattern

function areThereDuplicates() {
    let obj = {}
       for (let i = 0; i < arguments.length; i++) {
           if (obj.hasOwnProperty(arguments[i])) {
               console.log('true')
               return true;
           } else {
               obj[arguments[i]] = 1
           }
       }
       console.log('false')
       return false
   }

areThereDuplicates(1,2,3,1)

//BETTER ONE-LINE SOLUTION
//makes a set from arguments, compares sizes. Same size means all unique values
function areThereDups() {
    return new Set(arguments) !== arguments.length
}