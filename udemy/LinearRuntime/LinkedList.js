class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// Nodes are a basic data structure that contains data and one or more links to another node. They can be represented 
// as a linked list or a tree structure. In these structures, it is also possible to traverse from one node to another.  

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
        // A singly linked list contains 3 properties 
    }

    push(val) {
        let newNode = new Node(val)
        // create a new node that we can insert at the end of the list
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
            // if there is no head on the list or length is 0, make the new node as the head and tail of the list
        } else {
            this.tail.next = newNode
            this.tail = newNode
            // if there is a head on the list, then we associate the tail.next to the newNode. This allows the current tail to contain
            // a next node. The next node will then become the new tail, do this by assinging this.tail to newNode
        }
        this.length++
        return this
        // because were adding something into the list, we must increment the length by one everytime this function is called
    }

    unshift(val) {
        let newNode = new Node(val) 
        // creating a new node that we can insert at the beginning of the list 
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
            // if there is no head or length is 0, we will assign the head and tail to the new node. 
        } else {
            newNode.next = this.head
            this.head = newNode 
            // if there is a head, we associate the new node.next because it has a property of next to the current head. 
            // Now we have to updata the head of the list and assign this.head to newNode. 
        }
        this.length++
        return this
        // because were adding something into the list, we must increment the length by one everytime this function is called
    }

    pop() {
        let current = this.head 
        let newTail = current 
        // were removing a node at the end of the list and we can only go one way starting from the head
        // since were required to start at the beginning and then go towards the end we make a variable current and assign it to the head
        // and since we are establishing a new tail by removing the current tail, we need to make a variable to create a new tail

        if(!this.head) return undefined 
        // if there is no head of length is 0 then return undefined because that would indicate that the list does not contain nodes
        while(current.next) {
            newTail = current 
            current = current.next 
            // while there is a current.next meaning node.next, we will assign a new value to newTail and a new value to current.
            // this will let us reach the end of the list and current will end up being the current tail and the newTail will be the
            // node before it
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        // we are changing the value of the tail to the newTail and then we are taking the next value of the newTail and set it to null
        // since we took the previous tail out we are decrementing the length by 1

        if(this.length === 0) {
            this.head = null
            this.tail = null
            // if the length happens to be 0 we will just make both the head and tail null 
        }
        return current 
        // returning the tail that was removed 
    }

    shift() {
        if(!this.head) return undefined
        // if there is no head or the length is 0, we will return undefined (list does not contain nodes)
        let currentHead = this.head 
        this.head = currentHead.next 
        // were going to start from the head and change the value of the head to the next node. 
        this.length--
        // this would automatically take out the preious head because the nodes do not contain a value of previous and decrement the lenght
        // by 1
        if(this.length === 0) {
            this.tail = null
        }
        // if the length happens to be 0 then make the tail null 
        return currentHead
        // return the head that was removed
    }

    get(index) {
        if(index < 0 || index > this.length) return undefined 
        // created an edge case to see if the input would be less than 0 or greater than the length of the list 
        let counter = 0
        let current = this.head 
        // Since we can only grab any value from starting from the head, we will create a counter and a variable.

        while(counter !== index) {
            current = current.next 
            counter++
            // while the counter is not equal to the index we are assinging a new value of current to the next current
            // we will incremement the counter until the counter reaches index
        }
        return current 
        // the while loop will contain the node at that index because we are constantly assigning a new node towards current
    }

    set(val, index) {
        let foundIndex = this.get(index) 
        // were using the function get to help look for an existing index
        if(foundIndex) {
            foundIndex.val = val
            return true
            // if the function get was able to locate the index then we take the node.val and set it to the new val
            // once we assign a new val, return true
        }

        return false
        // only returns false is the function get could not find the index
    }

    insert(val, index) {
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)
        // edge statements
        // if the index is less than 0 or is greater than the list's length return false
        // if the length is equal to the list's length the we return true and invoke the function push
        // if the length is equal to 0 then we will return true and invoke the function unshift 

        let newNode = new Node(val) 
        let prev = this.get(index - 1)
        let temp = prev.next 
        prev.next = newNode 
        newNode.next = temp
        // If it does not meet any of the edge case, we will create a new node. We will assign the variable prev to the index - 1. That way
        // we can get the node that is before that index. We then create a new variable and assign it to the prev's next node and make that
        // node the newNode and we then assign newNode.next as temp 
        // this way we are shoving the new node in between the prev and the prev.next node.
        this.length++
        return true
    }

    remove(index) {
        if(index < 0 || index > this.length) return false 
        if(index === this.length - 1) return !!this.pop()
        if(index === 0) return !!this.shift()
        // similar edge cases to line 139~141 but we are invoking a different function; popping and shifting
        let prevNode = this.get(index - 1)
        let removeNode = prevNode.next 
        prevNode.next = removeNode.next
        // Similar concept to line 143~147, get the node before the index and assign it to prevNode. Then we will assign the variable
        // removedNode to prevNode.next (that would be the index). Then we take the node after the index and assign it to prevNode.next
        this.length--
        return true
        // decrement the list by 1 and return true 
    }

    reverse() {
        let node = this.head 
        this.head = this.tail
        this.tail = node 
        // were swapping the head and tail of the list. To swap we need a placeholder variable because of the way javascript works

        let next;
        let prev = null
        // we will use the next and prev variables to help switch the nodes
        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
            console.log(next, prev, node)
            // node is the head that is now at the end of the list
            // this will keep shifting the the nodes from node.next
            // [10, 15, 20, 25, 30]
            // 30 -> 25 -> 20 -> 15 -> 10 
            //           ----->  PREV NODE NEXT ----> 
        }
        return this
    }

}

let list = new LinkedList()
list.push("hello")
list.push("bye")
list.push("tree")
list.push("love")
list.push("grind")

console.log(list, "variable: list", "nodeClass: Node")