// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    //base case
    if(preorder.length === 0 && inorder.length === 0) return null;
    //find rootNode
    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    //find inorder
    let midIndex = inorder.indexOf(rootVal)
    let leftInorder = inorder.slice(0,midIndex);
    let rightInorder = inorder.slice(midIndex+1)

    //find preorder
    let leftPreorder = preorder.filter(val => leftInorder.includes(val))
    let rightPreorder = preorder.filter(val => rightInorder.includes(val))

    let left = buildTree(leftPreorder, leftInorder);
    let right = buildTree(rightPreorder, rightInorder);

    root.left = left;
    root.right = right;
    return root;
}
