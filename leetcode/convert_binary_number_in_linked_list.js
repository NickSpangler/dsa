// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

var getDecimalValue = function(head) {
    let num = []
    let current = head
    while (current) {
        num.push(current.val)
        current = current.next
    }
    console.log(num.join(''))
};

console.log(parseInt(101, 2))