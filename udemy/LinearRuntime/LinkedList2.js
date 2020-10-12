class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop() {
        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
            // console.log(current)
        }
        this.tail = newTail;
        newTail.next = null;

        if(this.length === 0) return undefined;
        this.length--
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        let currentHead = this.head;

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode; 
        }
        this.length++
        return this;
    }

    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head; 
        this.head = currentHead.next; 

        this.length--

        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    get(index) {
        if(index < 0 || index > this.length) return undefined; 
        let counter = 0;
        let current = this.head; 

        while(counter !== index) {
            current = current.next; 
            counter++
        }
        return current; 
    }

    set(val, index) {
        let foundIndex = this.get(index); 
        if(foundIndex) {
            foundIndex.val = val;
            return true;
        }
        return false;
    }

    insert(val, index) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new Node(val); 
        let prev = this.get(index - 1);
        let temp = prev.next; 
        prev.next = newNode; 
        newNode.next = temp;
        console.log(prev)

        this.length++
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return false; 
        if(index === this.length - 1) return !!this.pop();
        if(index === 0) return !!this.shift();
        let prevNode = this.get(index - 1);
        let removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        this.length--
        return true;
    }

    reverse() {
        let node = this.head; 
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }


}

let linkedList = new LinkedList() 

linkedList.push("hello")
linkedList.push("medium")
linkedList.push("I am a node")
linkedList.push("for a linked")
linkedList.push("list!!!")
