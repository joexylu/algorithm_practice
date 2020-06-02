class MaxHeap {
    constructor(){
        this.array = [null]
    }

    getParent(idx){
        let parentIdx = Math.floor(idx/2);
        return parentIdx
    }

    getLeftChild(idx){
        return idx *2
    }

    getRightChild(idx){
        return idx *2 +1
    }

    insert(val){
        this.array.push(val)
        this.siftUp(this.array.length -1)
    }

    siftUp(idx){
        if(idx === 1) return;

        let parentIdx = this.getParent(idx);
        if( this.array[idx] > this.array[parentIdx]) {
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]]
            this.siftUp(parentIdx)
        }
    }

    deleteMax(){

        let size = this.array.length -1;
        let max;
        if(size === 0){
            return null
        }else if(size === 1){
            max = this.array.pop()
        }else{
            max = this.array[1];
            this.array[1] = this.array.pop()
            this.siftDown(1)
        }
        return max
    }

    siftDown(idx){
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);

        let leftVal = this.array[leftIdx];
        let rightVal = this.array[rightIdx];

        let val = this.array[idx]


        if(leftVal === undefined) leftVal = -Infinity;
        if(rightVal === undefined) rightVal = -Infinity;

        if(val > leftVal && val > rightVal) return;

        let swapIdx;
        if(leftVal > rightVal){
            swapIdx = leftIdx
        }else{
            swapIdx = rightIdx
        }

        [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]]

        this.siftDown(swapIdx)
    }
}


var findKthLargest = function(nums, k) {
    // let sorted = nums.sort((a,b) => (a-b))
    // return sorted[nums.length - k]

    let heap = new MaxHeap();
    nums.forEach(element => {
        heap.insert(element)
    });

    for(let i = 1; i < k; i++){
        heap.deleteMax()
    }
    return heap.deleteMax()
};