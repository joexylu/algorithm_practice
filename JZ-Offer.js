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
// console.log(findShort([2,3,1,2,4,3], 7))



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