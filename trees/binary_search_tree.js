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

    //INSERTING a new Node
        //create new node
        //starting at the root
            //check if there is a root, if not, the root is now the new node
            //if there is, compare value
            //if greater, check to see if right node exists, if there is, move there and and repeat, if not, this node is set as the right property
            //if it is less, check to see if left node exists, if yes, move there and repeat, if not, add this node as left property
    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this;
        }
        let current = this.root
        while (true) {
            if (newNode.val > current.val) {
                if (!current.right) {
                    current.right = newNode
                    return this
                } else {
                    current = current.right
                }
            } else {
                if (!current.left) {
                    current.left = newNode
                    return this
                } else {
                    current = current.left
                } 
            }
        }
        return this
    }
}

let tree = new BST()
tree.root = new Node(10);
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)