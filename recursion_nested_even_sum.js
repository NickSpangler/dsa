//write nestedEvenSum(), which returns the sum of all even numbers in an object, which may contain nested objects

//Solved using Helper Method Recursion
function nestedEvenSum(obj) {
    let total = 0

    function addEvens(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
                total += obj[key]
            } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                addEvens(obj[key])
            }
        }
    }
    addEvens(obj)
    return total
}

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

  nestedEvenSum(obj1)