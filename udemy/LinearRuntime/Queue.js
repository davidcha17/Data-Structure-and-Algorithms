class QueueNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
    // our queueNode will contain a similar constructor to a stack node
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
        // similar structure to a stack
    }

    enqueue(val) {
        let newNode = new QueueNode(val) 
        if(!this.first) {
            this.first = newNode
            this.last = newNode
            // if there is no first, we will assign the newNode to the first and last
        } else {
            this.last.next = newNode
            this.last = newNode
            // if there is a first, we will assign the newNode to last.next and then we can assign newNode to last
        }
        return ++this.size
        // increment by 1 and return size
    }

    dequeue() {
        if(!this.first) return undefined
        // if there is no first, the queue does not contain a list
        let temp = this.first 
        // place holder to return the removed node from the beginning of the list 
        if(this.first === this.last) {
            this.last = null
            // we need this before we hit the end of the list, if the first is equal to the last assign null to last
        } 
        this.first = this.first.next
        this.size--
        return temp.val
        // we will assign the first's next Node to this.first and decrement the size by 1 and return the removed value

    }

    peek() {
        if(this.size === 1) return "Queue has 1 Node left"
        let peekNode = this.first.next 
        return peekNode
        // were looking at the next node to be removed 
    }
}

let queueList = new Queue()
queueList.enqueue("First")
queueList.enqueue("Second")
queueList.enqueue("Third")

console.log(queueList, "variable: queueList", "nodeClass: QueueNode")