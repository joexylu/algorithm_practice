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
        if(index >= this.length) return false;

        let currentNode = this.head;

        while(index > 0){
            currentNode = currentNode.next
            index --
        }
        currentNode.value = value
        return true
    }

    insert(index, value){
        if(index >= this.length) return false;

        let currentNode = this.head;
        let previousNode = this.head

        while(index > 0){
            previousNode = currentNode
            currentNode = currentNode.next
            index --
        }

        let newNode = new Node(value)

        newNode.next = currentNode
        previousNode.next = newNode
        this.length += 1
        return true
    }

    remove(index){
        if(index >= this.length) return false;

        let currentNode = this.head;
        let previousNode = this.head

        while(index > 0){
            previousNode = currentNode
            currentNode = currentNode.next
            index --
        }

        previousNode.next = currentNode.next
        this.lenght -= 1
        return currentNode
    }

    removeDup(){
        let heap = {}
        let current = this.head;
        let previousNode = this.head

        while(current){
            if(current.value in heap){
                heap[current.value] += 1
                previousNode.next = current.next
            }else{
                heap[current.value] = 1
                previousNode = currentNode
            }
            current = current.next
        }

        return this
        
    }

    KthToLast(head,k){

        //recursion way

        // if(!!node) return 0

        // let index = this.KthToLast(node.next,k) + 1

        // if (index === k){
        //     return node.value
        // }

        if(!head || k < 1){
            return false
        }
        let i = 0
        let current = head
        let nBehind = head

        while(current){
            i += 1
            current = current.next
        }

        for(let j = 0; j < i-k; j++){
            nBehind = nBehind.next;
            j++
        }
        return nBehind

    }

    removeMidNode(){

    }

    partition(head, x){
        if(!head) return false;

        let previousNode = head
        let currentNode = previousNode.next;
        let replaceNext = head;

        while(currentNode){
            if(currentNode.value < x){
                previousNode.next = currentNode.next

                currentNode.next = replaceNext.next
                replaceNext.next = currentNode
                replaceNext = replaceNext.next
            }else{
                previousNode = currentNode
                currentNode = currentNode.next
            }
        }


    }

    SumList(node1, node2){

    }

    palindrome(node){
        
    }

    intersection(list1, list2){

    }

    loopDetection(list){
        
    }
}