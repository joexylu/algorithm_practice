// 二维数组中找 一个数字

function findIn2DArray(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].indexOf(target) >= 0) {
      return true;
    }
  }
  return false;
}

//O(n^2)

// 滑动窗口找最短的数组等于target num

function findShort(arr, target) {
  let left = 0,
    sum = 0,
    min = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  return min < Infinity ? min : 0;
}
console.log(findShort([2, 3, 1, 2, 4, 3], 7));

//复制ip地址

function findIP(str) {
  const result = [];
  dfsFindIP(str, result, [], 0);
  return result;
}

function dfsFindIP(str, result, sub, start) {
  if (sub.length == 4 && start == str.length) {
    result.push(sub.join("."));
    return;
  }

  if (sub.length == 4 && start == str.length) return;

  for (let i = 1; i <= 3; i++) {
    if (start + i - 1 >= str.length) return;
    if (i != 1 && str[start] == "0") return;

    const piece = str.slice(start, start + i + 1);
    if (i == 3 && piece.to_i > 255) return;

    sub.push(piece);
    dfsFindIP(str, result, sub, start + i);
    sub.pop();
  }
}

function getIP(s) {
  if (s.length > 12 || s.length < 4) return [];
  let result = []; //存储所有结果
  let index = 0; //记整ip地址位数
  dfs("", s, index, result);
  function dfs(str, remain, index, result) {
    if (index == 4 && remain.length == 0) result.push(str.substr(1));
    if (index == 4 || remain.length == 0) return;
    // 一位数 可以为0
    dfs(str + "." + remain.substr(0, 1), remain.substr(1), index + 1, result);
    if (remain.length > 1 && parseInt(remain.charAt(0)) !== 0) {
      // 二位数 开头不能为0
      dfs(str + "." + remain.substr(0, 2), remain.substr(2), index + 1, result);
      if (remain.length > 2 && parseInt(remain.substr(0, 3)) <= 255) {
        // 三位数
        dfs(
          str + "." + remain.substr(0, 3),
          remain.substr(3),
          index + 1,
          result
        );
      }
    }
  }
  return result;
}

// console.log(findIP("25525511135"))

//merge sort

function mergeSort(arr) {
  let len = arr.length;
  if (len == 1) return arr;
  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

//quick sort

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let left = [],
    right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left)
    .concat(pivot)
    .concat(quickSort(right));
}

// invert binary tree

function invertBtree(root) {
  if (root == null) return root;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertBtree(root.left);
  invertBtree(root.right);

  return root;
}

//找到二叉树最大路径和

function maxPathSum(root) {
  let maxSum = -Infinity;

  const dfs = root => {
    if (!root) return 0;
    let left = Math.max(getMax(root.left), 0);
    let right = Math.max(getMax(root.right), 0);
    maxSum = Math.max(ans, root.val + left + right);
    return root.val + Math.max(left, right);
  };

  dfs(root);

  return maxSum;
}

// 矩阵中最长递增路径

function longestIncreasingPath(matrix) {
  if (matrix.length === 0) return 0;

  const row = matrix.length;
  const col = matrix[0].length;

  const memo = new Array(row);
  for (let i = 0; i < row; i++) memo[i] = new Array(col);

  let maxPath = 1;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      maxPath = Math.max(maxPath, dfsHelper(matrix, i, j, row, col, memo));
    }
  }

  return maxPath;
}

function dfsHelper(matrix, x, y, row, col, memo) {
  const arx = [0, 1, 0, -1];
  const ary = [1, 0, -1, 0];

  if (memo[i][j]) return memo[i][j];

  let max = 1;
  for (let i = 0; i < 4; i++) {
    const xVal = arx[i] + x;
    const yVal = ary[i] + y; //找上下左右点
    if (
      xVal >= 0 &&
      xVal < row &&
      yVal >= 0 &&
      yVal < col &&
      matrix[xVal][yVal] > matrix[x][y]
    ) {
      max = Math.max(max, 1 + dfsHelper(matrix, xVal, yVal, row, col, memo));
    }
  }
  return (memo[i][j] = max);
}

// 找二叉树最大深度

function binaryMaxDepth(root) {
  if (!root) {
    return 0;
  } else {
    const left = binaryMaxDepth(root.left);
    const right = binaryMaxDepth(root.right);
    return Math.max(left, right) + 1;
  }
}

// 合并两个链表

function mergeTwoList(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  var preHead = new ListNode(-1);
  let pre = preHead;

  let list1 = l1;
  let list2 = l2;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      pre.next = list1;
      list1 = list1.next;
    } else {
      pre.next = list2;
      list2 = list2.next;
    }
    pre = pre.next;
  }
  pre.next = list1 ? list1 : list2;
  return pre.next;
}

//最小堆的实现

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  shiftUp(index) {
    if (index == 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  peak() {
    return this.heap[0];
  }
}

// 求根到叶子节点数字之和

function sum(root) {
  dfsSum(root, 0);
}

const dfsSum = (root, prev) => {
  if (root === null) return 0;

  const sum = prev * 10 + root.val;
  if (root.left == null && root.right == null) {
    return sum;
  } else {
    return dfsSum(root.left, sum) + dfsSum(root.right, sum);
  }
};

// 字节 面试

// asyncAdd(3, 5, (err, result) => {
//     console.log(result) // 8
//   })

//   (async () => {
//     const result1 = await sum(1, 4, 6, 9, 10, 14)
//     const result2 = await sum(3, 4, 9, 20, 22, 30, 32, 100, 200)
//     const result3 = await sum(1, 6, 10, 15)
//     console.log([result1, result2, result3]) // [44, 402, 32]
//   })()

//   //
//   function sum() {

// }

// function sum(...args){
//     return new Promise((resolve, reject)=>{
//         let twoNum = args.slice(0,3)
//         asyncAdd(twoNum, (err, result) => {
//             if (error){reject()}
//             if (args.length < 1){
//                 resolve()
//             }else{
//                 asyncAdd(arg.slice(0,3))
//             }

//         })
//     })
// }
// sum().then(()=>())

// 深拷贝
function extend(target, source, deep) {
  for (key in source)
    if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
      // source[key] 是对象，而 target[key] 不是对象， 则 target[key] = {} 初始化一下，否则递归会出错的
      if (isPlainObject(source[key]) && !isPlainObject(target[key]))
        target[key] = {};

      // source[key] 是数组，而 target[key] 不是数组，则 target[key] = [] 初始化一下，否则递归会出错的
      if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
      // 执行递归
      extend(target[key], source[key], deep);
    }
    // 不满足以上条件，说明 source[key] 是一般的值类型，直接赋值给 target 就是了
    else if (source[key] !== undefined) target[key] = source[key];
}

//反转二叉树

var invertTree = function(root) {
  function traversal(root) {
    if (root === null) {
      return null;
    } else {
      [root.left, root.right] = [traversal(root.right), traversal(root.left)];
      return root;
    }
  }
  return traversal(root);
};

// N茶树 遍历
var postorder = function(root) {
    const res = []
    function traversal (root) {
      if (root !== null) {
        root.children.forEach(child => {
          traversal(child)
        })
        res.push(root.val)
      }
    }
    traversal(root)
    return res
  }

// matrix spiral order
const spiralOrder = (matrix) => {
    if (matrix.length == 0) return [];
    const res = [];
  
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
  
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }
      top++;
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right]);
      }
      right--;
  
      if (top > bottom || left > right) break;
  
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
    return res;
  };


//手写一个promise的ajax请求
const getJson = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText, this)
        } else {
          const resJson = { code: this.status, response: this.response};
          reject(resJson);
        }
      } 
    };
    xhr.send();
  })
};
// 使用
getJSON('URL').then((res) => {
	console.log(res);
}).catch((err)=>{
	console.log(err);
})   

let request = new XMLHttpRequest()
    request.open('get', '/xxx') 
    request.onreadystatechange = ()=>{
        if(request.readyState===4){ 
            if(request.status >= 200 && request.status < 300){ 
                console.log('说明请求成功了') 
                let string = request.responseText    
                let object = window.JSON.parse(string)  
             }  }else if(request.status >= 400){
                console.log('说明请求失败') 
            }
        }
    }
    request.send()



// setTimeout 异步，promise，async await

// currying add function
function add(x){
  let sum = x;
  return function resultFn(y){
      if(arguments.length){ //not relying on falsy value
          sum += y;
          return resultFn;
      }
      return sum;
  }
}

function myCurry(fn, object, numArgs){
  let nums = []
  let fcn = fn.bind(object)
  return _myCurry = function(el){
      nums.push(el);
      if (nums.length < numArgs){
          return _myCurry;
      } else {
          return fcn(...nums)
      }
  }
}


//high order component
// hoc is a function that takes a component and return a new component
//to control props or to wrap component to make change

//ES6 Symbol

Symbol

let foo=Symbol('foo');
let foo2=Symbol('foo');
foo===foo2// false
Symbol.for=function(str){}
Symbol.for('foo')===Symbol.for('foo')//true;
new Symbol('foo')//Error

new Object();
new Object();


function Symbol(){
  this instanceof Symbol
  throw error;
}
()=>{} //new
new String('aaa') === new String('aaa')

// for use set and hash map to look for element

// 给定一个未排序的整数数组，找出最长连续序列的长度。要求算法的时间复杂度为 O(n)。

function longestConsecutive( nums ) {
  // write code here
  let max = 0
  let set = new Set(nums)
  for(let i =0; i < nums.length; i++){
      if(!set.has(nums[i]-1)){
          let arrlen = 1;
          let currentNum = nums[i]
          while(set.has(currentNum+1)){
              currentNum+=1
              arrlen+=1
          }
          max = Math.max(arrlen, max)
      }
  }
  return max
}


