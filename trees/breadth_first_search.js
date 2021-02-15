//BFS ITERATIVE STEPS

//create a queue (can just be an array) AND a variable to store values of nodes visited
    //push the root to the queue
//loop as long as there is something in the queue
    //dequeue a node and push the value of the node into the results variable
    //if there is a left property, push to queue
    //if there is a right property, push to queue
//return the variable that stores the values

bfs {
    if (!this.root) return null
    let queue = [this.root], visited= []
    while (queue.length > 0) {
        let node = queue.shift()
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
        visited.push(node.val)
    }
    return visited
}