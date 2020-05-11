// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = this.size();

    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val)
        this.length += 1;
        if(this.tail){
            this.tail.next = node;
        }else{
            this.head = node;
        }
        this.tail = node
        return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(!this.tail){
            return undefined;
        }else{
            let current = this.head;
            let previous = current;
            while (current.next){
                previous = current;
                current = current.next
            }
            let removed = this.tail
            this.tail = previous;
            this.tail.next = null;
            this.length -= 1;
            if (this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return removed
        }
        
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val)
        this.length += 1;
        if(this.head){
            node.next = this.head;
            this.head = node
        }else{
            this.tail = node
        }
        this.head = node
        return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.head){
            return undefined;
        }else{
            let removed = this.head
            this.head = this.head.next
            this.length -= 1;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return removed
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        let nextNode = this.head.next
        while (currentNode.next){
            if(currentNode.value === target){
                return true
            }else{
                currentNode = nextNode;
                nextNode = nextNode.next
            }
        }
        return false
    }

    // TODO: Implement the get method here
    get(index) {
        if (index >= this.length) return null;
        let currentNode = this.head;
        while(index > 0){
            currentNode = currentNode.next;
            index -= 1
        }
        return currentNode
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index >= this.length) return false;
        let currentNode = this.head;
        while(index > 0){
            currentNode = currentNode.next;
            index -= 1
        }
        currentNode.value = val
        return true
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index >= this.length) return false;
        let currentNode = this.head;
        let previousNode = this.head;
        while(index > 0){
            previousNode = currentNode
            currentNode = currentNode.next;
            index -= 1
        }
        let newNode = new Node(val)
        newNode.next = currentNode
        previousNode.next = newNode;
        this.size();
        return true
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index >= this.length) return undefined;
        let currentNode = this.head;
        let previousNode = this.head;
        while(index > 0){
            previousNode = currentNode
            currentNode = currentNode.next;
            index -= 1
        }
        previousNode.next = currentNode.next;
        this.size();
        return currentNode
    }

    // TODO: Implement the size method here
    size() {
        if(!this.head){
            return 0
        }else if(this.tail.next === null){
            return 1
        }else{
            let count = 1;
            let currentNode = this.head;
            let nextNode = this.head.next
            while (currentNode.next){
                count += 1
                currentNode = nextNode;
                nextNode = nextNode.next
            }
            return count
        }
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
