//DFS searches DOWN first

//PRE ORDER
//visit node
//explore entire left side
//explore entire right side

//Create variable to store visited nodes
//current = this.root

function dfs() {
    let visited = []
    const traverse = (node) => {
        visited.push(node)
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return visited
}