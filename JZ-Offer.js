// 二维数组中找 一个数字

function findIn2DArray(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i].indexOf(target) >= 0){
            return true
        }
    }
    return false
}

//O(n^2)


// 滑动窗口找最短的数组等于target num

function findShort(arr, target){
    let left = 0, sum = 0, min = Infinity

    for(let right = 0; right < arr.length; right++){
        sum += arr[right]
        while(sum >= target){
            min = Math.min(min, right -left + 1)
            sum -= arr[left]
            left ++
        }
    }

    return min < Infinity ? min : 0
}
console.log(findShort([2,3,1,2,4,3], 7))



//复制ip地址

function findIP(str){
    const result = []
    dfsFindIP(str,result,[],0)
    return result
}

function dfsFindIP(str,result, sub, start){
    if(sub.length == 4 && start == str.length){
        result.push(sub.join('.'))
        return
    }

    if(sub.length == 4 && start == str.length) return

    for(let i = 1; i <= 3; i++){
        if(start + i -1 >= str.length) return
        if(i != 1 && str[start] == '0') return

        const piece = str.slice(start, start+i+1)
        if(i == 3 && piece.to_i > 255) return ;

        sub.push(piece)
        dfsFindIP(str, result, sub, start+ i)
        sub.pop()
    }
}

// console.log(findIP("25525511135"))

//merge sort

function mergeSort(arr){
    let len = arr.length
    if(len == 1) return arr
    let mid = Math.floor(len/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let result = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return result.concat(left).concat(right)
}


//quick sort

function quickSort(arr){
    if(arr.length < 2) return arr

    let pivot = arr[0]
    let left = [], right = []
    for(let i = 1; i< arr.length; i ++){
        if (arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot).concat(quickSort(right))
}


// invert binary tree

function invertBtree(root){
    if (root == null) return root

    const temp = root.left
    root.left = root.right
    root.right = temp

    invertBtree(root.left)
    invertBtree(root.right)

    return root
}

//找到二叉树最大路径和

function maxPathSum(root){
    let maxSum = -Infinity

    const dfs= (root)=> {
        if(!root)return 0;
        let left = Math.max(getMax(root.left),0);
        let right = Math.max(getMax(root.right),0);
        maxSum = Math.max(ans,root.val + left + right);
        return root.val + Math.max(left,right)
    }

    dfs(root)

    return maxSum
}

// 矩阵中最长递增路径

function longestIncreasingPath(matrix){
    if(matrix.length===0) return 0

    const row = matrix.length
    const col = matrix[0].length

    const memo = new Array(row)
    for(let i=0; i < row;i++) memo[i] = new Array(col)

    let maxPath = 1

    for(let i=0; i< row; i++){
        for(let j = 0; j< col; j++){
            maxPath = Math.max(maxPath, dfsHelper(matrix, i, j, row, col, memo))
        }
    }

    return maxPath
}

function dfsHelper(matrix, x, y, row, col, memo){
    const arx = [0,1,0,-1]
    const ary = [1,0,-1,0]

    if(memo[i][j]) return memo[i][j]

    let max = 1
    for(let i=0;i<4;i++){
        const xVal = arx[i]+x
        const yVal = ary[i]+y //找上下左右点
        if(xVal>=0&&xVal<row&&yVal>=0&&yVal<col&&matrix[xVal][yVal]>matrix[x][y]){
            max = Math.max(max, 1+dfsHelper(matrix, xVal,yVal,row, col, memo))
        }
    }
    return memo[i][j] = max
}

// 找二叉树最大深度

function binaryMaxDepth(root){
    if(!root){
        return 0
    }else{
        const left = binaryMaxDepth(root.left)
        const right = binaryMaxDepth(root.right)
        return Math.max(left, right) + 1
    }
}

// 合并两个链表

function mergeTwoList(l1,l2){
    if(!l1) return l2
    if(!l2) return l1

    var preHead = new ListNode(-1);
    let pre=preHead

    let list1=l1
    let list2=l2

    while(list1 && list2){
        if(list1.val<=list2.val){
            pre.next=list1
            list1=list1.next
        }else{
            pre.next=list2
            list2=list2.next
        }
        pre=pre.next
    }
    pre.next=list1?list1:list2
    return pre.next
}


//最小堆的实现

class MinHeap{
    constructor(){
        this.heap = []
    }

    swap(i1,i2){
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getLeftIndex(i){
        return i * 2 + 1
    }
    
    getRightIndex(i){
        return i * 2 + 2
    }

    shiftUp(index){
        if(index == 0) return
        const parentIndex = this.getParentIndex(index)
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }

    shiftDown(index){
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if(this.heap[leftIndex] < this.heap[index]){
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if(this.heap[rightIndex] < this.heap[index]){
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    pop(){
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }

    peak(){
        return this.heap[0]
    }


}