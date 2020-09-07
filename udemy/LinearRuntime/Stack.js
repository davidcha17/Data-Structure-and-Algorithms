// Storing data in such way that the first thing added in is the last thing removed
class StackNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
    // the node contains a property of val and next
class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    // the stack node contains a property of first, last and size

    push(val) {
        let newNode = new StackNode(val)
        // creating a new Node 
        if(!this.first) {
            this.first = newNode
            this.last = newNode
            // if there is no first then we will assign newNode to first and last
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
            // if there is a first, we will assign first to a variable and then assign the newNode to first finally we will assign temp to 
            // first.next 
        }
        return ++this.size
        // returns the new incremented size
    }

    pop() {
        if(this.size === 0) return undefined 
        // if the size is 0 the stack contains nothing
        let temp = this.first 
        // what we will return at the end
        if(this.first === this.last) {
            this.last = null
            // this condition is if the size is 1 (first equal to size)
            // this comes first because the Stack Nodes contain a value of next, so we need to make sure that last contains null
        } 
        this.first = this.first.next
        // only need to update first and once we get to the end of the stack, it'll become null
        this.size--
        // decrement the size by 1
        return temp.val
    }
}

let stackList = new Stack()
stackList.push(10)
stackList.push(20)
stackList.push(30)

console.log(stackList, "variable: stackList", "nodeClass: StackNode")