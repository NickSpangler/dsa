//DFS searches DOWN first

//PRE ORDER
//visit node
//explore entire left side
//explore entire right side

//Create variable to store visited nodes
//current = this.root

//dfs PRE Order
function dfsPreOrder() {
    let visited = []
    const traverse = (node) => {
        visited.push(node) //add the visited node IMMEDIATLEY, as soon as you encounter it.
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return visited
}

//dfs POST Order
function dfsPostOrder() {
    let visited = []
    const traverse = (node) => {
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
        visited.push(node) //this is the line that changes, explore DEEP first, then add the node at the END of the process
    }
    traverse(this.root)
    return visited
}

//dfs IN Order
function dfsInOrder() {
    let results = []
    const traverse = (node) => {
        if (node.left) traverse(node.left);
        results.push(node.val)
        if (node.right) traverse(node.right)
    }
    return results
}