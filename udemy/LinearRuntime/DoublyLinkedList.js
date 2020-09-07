class NodeForDouble {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

// Nodes are basic data structure that contain data and one or more links to another node. They can be used to represent a
// linkedlists or a tree structure. In these structures it is also possible to traverse them from one node to another. 

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
        // a double linked list allows us to start from the beginning or the end of a list because the nodes contain a propety previous
    }

    push(val) {
        let newNode = new Node(val) 
        // create a new node
        if(!this.head) {
            this.head = newNode
            this.tail = newNode 
            // if there is no head or the length is 0 we will assign that new node to the head and tail
        } else {
            this.tail.next = newNode 
            newNode.prev = this.tail
            this.tail = newNode 
            // if there is a head, we will assign that new node to the tail.next and we will give the newNode.prev a value of the current tail
            // then we assign the newNode as the tail
        }
        this.length++
        return this
        // increment the length by 1
    }

    unshift(val) {
        let newNode = new NodeForDouble(val) 
        // create a new node
        if(!this.head) {
            this.head = newNode
            this.tail = newNode 
            // if there is no head or the length is 0 we will assign that new node to the head and tail
        } else {
            this.head.prev = newNode
            newNode.next = this.head  
            this.head = newNode
            // we assign the newNode to the head.prev and take the head and assign it to newNode.next
            // then we will make newNode the head 
        }
        this.length++
        return this
        // increment the length by one
    }

    pop() {
        if(!this.head) return undefined
        // if there happens to be no head or the length is 0 return undefined (list has no nodes)
        let removed = this.tail
        // we need to a variable to hold the tail we are removing
        if(this.length === 1) {
            this.head = null
            this.tail = null
            // if the length happens to be 1 we will assign null to the head and tail
        } else {
            this.tail = removed.prev
            this.tail.next = null
            removed.prev = null
            // if it is not the length of 1 we will assign the removed.prev to this.tail and null to tail.next
            // that will remove the previous tail but we need to seperate any relation towards the list so we assign null
            // to removed.prev
        }
        this.length--
        // decrement the list by 1 and return the removed node
        return removed

    }

    shift() {
        if(this.length === 0) return undefined 
        // if the length is 0 then the list contains no nodes
        let tempHead = this.head 
        // we need to keep track of the current head that will be removed
        if(this.length === 1) {
            this.head = null
            this.tail = null
            // if the length happens to be 1 we will assign null to the head and tail
        } else {
            this.head = tempHead.next
            this.head.prev = null
            tempHead.next = null
            // were assigning the about to be removed head's next node as the head 
            // then were assigning null to the head and were also assigning null to the removed null
            // to seperate the relationship
        }
        this.length--
        // decrement the length by 1 and return the removed head
        return tempHead
    }

    get(index) {
        if(index < 0 || index > this.length) return false 
        // an edge case if the length is less than 0 or greater than the length, return false
        if(index <= this.length / 2) {
            let count = 0
            let current = this.head 
            // because we are able to start from either end of the list, we divide the list by half to see where it should start looking
            // for the index
            // in this case if the index is less than the length/2 then we start from the start 
            // count will start from the 0 index of the list and the current will be the head 
            while(count !== index) {
                current = current.next
                count++
                // while the count is not equal to the index 
                // assign the current node's next value to current and increment the count
            }
            return current
            // return current when the index has been found
        } else {
            let count = this.length - 1
            let current = this.tail
            // when the index is greater than the length/2
            // count will start at the end of the list and the current will be the tail
            while(count !== index) {
                current = current.prev 
                count--
                // while the count is not the index
                // assign the current node's prev as the current and decrement the count 
            }
            return current 
            // return current when the index has been found
        }
        // searching for an index in this structure cuts the time in half because we can start from either sides of the spectrum
    }

    set(index, val) {
        let foundNode = this.get(index) 
        // set a variable to an invoked function get
        if(foundNode != null) {
            foundNode.val = val
            return true
            // if the index is not equal to null, we will assign the new val to the found index's val and return true
        }
        return false 
        // if the function cannot find the index then we return false
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false 
        if(index === 0) return !!this.unshift(val)
        if(index === this.length - 1) return !!this.push(val)
        // 3 edge cases
        // if the index is less than 0 and the index is greater than the length return false 
        // if the index is equal to 0 then we return true and invoke the unshift function
        // if the index is equal to the length of the list - 1, we return true and invoke the push function
        let newNode = new Node(val)
        let beforeNode = this.get(index - 1)
        let afterNode = beforeNode.next
        // if it doesnt meet the conditions of all 3 edge case, we create a new node 
        // because the nodes contain a previous and a next property we must create a place holder for the newNode
        // we set a variable beforeNode that'll be the index before the newNode and afterNode will be the next node of beforeNode
        beforeNode.next = newNode 
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode 
        // this is a bunch of placement swaps and were going to insert the new node values inbetween the before node and the after node
        // the beforeNode's value contained after nodes but were replacing it with the new node and were doing the same to the after node
        // beforeNode is the next node and afterNode is the previous node that'll refer to the newNode
        this.length++
        // increment the length by 1 and return true
        return true
    }

    remove(index) {
        if(index < 0 || index > this.length) return false 
        if(index === 0) return !!this.shift()
        if(index === this.length - 1) return !!this.pop()
        // 3 edge cases
        // if the index is less than 0 or greater than the length return false
        // if the index equals 0 then return true and invoke the function shift
        // if the index is equal to the length of the list - 1return true and invoke the function pop
        let deletedNode = this.get(index)
        deletedNode.prev.next = deletedNode.next
        deletedNode.next.prev = deletedNode.prev
        deletedNode.next = null
        deletedNode.prev = null
        // were invoking the get function to look for the index then assigning it to a variable
        // we are then going to assign the removedNode's next and pervious to each other. then seperate the connection of the
        // deletedNode
        this.length--
        // decrement the list by 1 and return the removedNode
        return deletedNode
    }

    reverse() {
        let node = this.head 
        this.head = this.tail
        this.tail = node
        // swapping the head and tail with a place holder variable
        let next;
        let prev;
        // need these variables to be place holders for swapping the nodes
        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev 
            prev = node 
            node = next
            // the head's next node will become next and the prev will be assigned to the node.next (starting at the head)
            // it'll be a constant swap until the end of the loop
        }
        this.tail.next = null
        this.head.prev = null
        // we need to properly assign the tail.next and head.prev to null
        return this
    }

    print() {
        let arr = []
        let current = this.head
        while(current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }

}

let doubleList = new DoublyLinkedList()

doubleList.push("grind")
doubleList.push("doesnt")
doubleList.push("stop")
doubleList.push("keep going")
doubleList.push("!!!")
