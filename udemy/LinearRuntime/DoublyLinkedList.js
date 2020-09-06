class NodeForDouble {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new NodeForDouble(val)
        if(!this.head) {
            this.head = newNode 
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode 
        }
        
        this.length++
        return this
    }

    unshift(val) {
        let newNode = new NodeForDouble(val) 
        if(!this.head) {
            this.head = newNode
            this.tail = newNode 
        } else {
            this.head.prev = newNode
            newNode.next = this.head  
            this.head = newNode
        }

        this.length++
        return this
    }

    pop() {
        if(!this.head) return undefined
        let removed = this.tail

        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = removed.prev
            this.tail.next = null
            removed.prev = null
        }

        this.length--
        return this

    }

    shift() {
        if(this.length === 0) return undefined 

        let tempHead = this.head 

        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = tempHead.next
            this.head.prev = null
            tempHead.next = null
        }

        this.length--
        return tempHead
    }

}

let doubleList = new DoublyLinkedList()

doubleList.push("grind")
doubleList.push("doesnt")
doubleList.push("stop")
doubleList.push("keep going")
doubleList.push("!!!")
