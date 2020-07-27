class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root){
    let sum = [];
    branchAllSum(root, 0, sum);
    return sum
}

function branchAllSum(node, runningSum, sums){
    if(!node) return;

    let newRunningSum = node.value + runningSum;

    if(!node.left && !node.right){
        sum.push(newRunningSum);
        return;
    }

    branchAllSum(node.left, newRunningSum, sums);
    branchAllSum(node.right, newRunningSum, sums)
}

//On time, On space