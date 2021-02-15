class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
}

let tree = new BST()
tree.root = new Node(10);
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)