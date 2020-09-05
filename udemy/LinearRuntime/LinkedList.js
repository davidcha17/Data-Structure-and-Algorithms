class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    unshift(val) {
        let newNode = new Node(val) 
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode 
        }
        this.length++
        return this
    }

    pop() {
        let current = this.head 
        let newTail = current 

        if(!this.head) return undefined 
        while(current.next) {
            newTail = current 
            current = current.next 
        }
        this.tail = newTail
        this.tail.next = null
        this.length--

        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current 
    }

    shift() {
        if(!this.head) return undefined
        let currentHead = this.head 
        this.head = currentHead.next 

        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    get(index) {
        if(index < 0 || index > this.length) return undefined 
        let counter = 0
        let current = this.head 

        while(counter !== index) {
            current = current.next 
            counter++
        }
        return current 
    }

    set(val, index) {
        let foundIndex = this.get(index) 

        if(foundIndex) {
            foundIndex.val = val
            return true
        }

        return false
    }

    insert(val, index) {
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)

        let newNode = new Node(val) 
        let prev = this.get(index - 1)
        let temp = prev.next 
        prev.next = newNode 
        newNode.next = temp

        this.length++
        return true
    }

    remove(index) {
        if(index < 0 || index > this.length) return false 
        if(index === this.length - 1) return !!this.pop()
        if(index === 0) return !!this.shift()

        let prevNode = this.get(index - 1)
        let removeNode = prevNode.next 
        prevNode.next = removeNode.next
        
        this.length--
        return true
    }

    reverse() {
        let node = this.head 
        this.head = this.tail
        this.tail = node 

        let next;
        let prev = null
        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
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
