class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(val){
        let node  = new Node(val)

        if(this.tail){
            this.tail.next = node;
        }else{
            this.head = node
        }

        this.tail = node;
        this.length += 1;
        return this
    }

    removeTail(){
        if(!this.tail){
            return undefined
        }else{

            // iterate through all the node:
            let current = this.head;
            let prev = current;
            while(current.next){
                prev = current;
                current = current.next;
            }

            let removed = this.tail;
            this.tail = prev;
            this.tail.next = null;
            this.length -= 1;

            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return removed
        }
    }

    addToHead(val){
        let node = new Node(val);

        if(this.head){
            node.next = this.head;
        }else{
            this.tail = node
        }
        this.head = node;
        this.length += 1;
        return this;
    }

    removeHead(){
        if(!this.head){
            return undefined
        }else{
            let removed = this.head
            this.head = this.head.next;
            this.length -= 1;

            if(this.length === 0){
                this.head = null;
                this.tail = null
            }
            return removed
        }
    }

    hasNode(target){
        let current = this.head;

        while(current){
            if(current.value === target){
                return true
            }
            current = current.next
        }
        return false
    }

    get(index){
        if (index >= this.length) return null;

        let current = this.head;

        while(index > 0){
            current = current.next;
            index --
        }
        return current
    }

    set(index, value){
        
    }
}