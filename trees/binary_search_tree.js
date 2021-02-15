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
    // insert(val) {
    //     let newNode = new Node(val)
    //     if (!this.root) {
    //         this.root = newNode
    //         return this;
    //     }
    //     let current = this.root
    //     while (true) {
    //         if (val === current.val) return undefined
    //         if (newNode.val > current.val) {
    //             if (!current.right) {
    //                 current.right = newNode
    //                 return this
    //             } else {
    //                 current = current.right
    //             }
    //         } else if (newNode.val < current.val) {
    //             if (!current.left) {
    //                 current.left = newNode
    //                 return this
    //             } else {
    //                 current = current.left
    //             } 
    //         }
    //     }
    // }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root
        while (true) {
            if (val === current.val) return undefined
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right
            }
        }
    }

    //.contains() returns TRUE or FALSE if value is in the tree
    contains(val) {
        if (!this.root) return false;
        let current = this.root
        while(current) {
            if (val < current.val) current = current.left;
            else if (val > current.val) current = current.right
            else return true
        }
        return false
    }

    //.find() returns actual node with value, or false
    find(val) {
        if (!this.root) return false;
        let current = this.root, found = false
        while(current && !found) {
            if (val < current.val) current = current.left
            else if (val > current.val) current = current.right
            else found = true
        }
        if (!found) return false
        return current
    }

    bfs() {
        if (!this.root) return null
        let queue = [this.root], visited= [], node;
        while (queue.length > 0) {
            node = queue.shift()
            visited.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return visited
    }
}

let tree = new BST()
tree.insert(10)
tree.insert(2)
tree.insert(13)
