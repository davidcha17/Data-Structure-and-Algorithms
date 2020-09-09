class BinaryNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
    // mentioned earlier theres only a parent node, a left child node, and a right child node.
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
// the root will always be the parent node (the one we start off with)

 
    insert(val) {
        let newNode = new BinaryNode(val) 
        if(!this.root) {
            this.root = newNode 
            return this
        } else {
            let current = this.root

            while(true) {
                if(val === current.val) return undefined
                if(val < current.val) {
                    if(current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if(val > current.val) {
                    if(current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right 
                    }
                }
            }
        }
    }
 

    find(val) {
        if(!this.root) return undefined 
        let current = this.root 
        let found = false 
        while(current && !found) {
            if(val < current.val) {
                current = current.left
            } else if(val > current.val) {
                current = current.right
            } else {
                found = true
            }
        }
        if(!found) return false
        return current
    }

    bfs() {
        // iteratively 
        let data = []
        let queue = []
        let node = this.root

        queue.push(node) 
        while(queue.length) {
            node = queue.shift()
            data.push(node)

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }

    preOrder() {
        // recursively
        let data = []
        let current = this.root 
        function traverse(node) {
            data.push(node) 
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }

    postOrder() {
        // recursively
        let data = []
        let current = this.root
        function traverse(node) {
            if(node.left) traverse(node.left) 
            if(node.right) traverse(node.right)
            data.push(node)
        }
        traverse(current) 
        return data
    }

    inOrder() {
        // recursively
        let data = [] 
        let current = this.root 
        function traverse(node) {
            if(node.left) traverse(node.left)
            data.push(node)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }

}

let BST = new BinarySearchTree()
BST.insert(10)
BST.insert(5)
BST.insert(13)
BST.insert(2)
BST.insert(7)
BST.insert(11)
BST.insert(16)

console.log(BST, "variable: BST", "nodeClass: BinaryNode")