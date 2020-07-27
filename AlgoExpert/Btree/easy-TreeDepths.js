class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function nodeDepths(root, sum = 0){
    if(!root) return 0;

    return sum + nodeDepths(root.left, sum + 1) + nodeDepths(root.right, sum + 1)
}


// function nodeDepthIter(root){
//     let sumDepth = 0;
//     let stack = [{node: root, depth: 0}];

//     while(stack.length !== 0){
//         let {node, depth} = stack.pop();
//         if(node === null) continue;

//         sumDepth += depth;

//         stack.push({node: node.left, depth: depth + 1})
//         stack.push({node: node.right, depth: depth + 1})
//     }
//     return sumDepth
// }
//On time O(height) space
