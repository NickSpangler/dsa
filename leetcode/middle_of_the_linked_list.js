console.log('middle')

// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.

var middleNode = function(head) {
    let count = 1, current = head
    while (current.next !== null) {
        current = current.next
        count++
    }
    let middle = Math.floor(count / 2) + 1
    
    let newCount = 1, newCurrent = head
    while (true) {
        if (newCount === middle) return newCurrent
        newCurrent = newCurrent.next
        newCount++
    }
}



// find length of list
// if odd, find Math.floor(list / 2) + 1
// if even, find list / 2 + 1
// return that node using counter?