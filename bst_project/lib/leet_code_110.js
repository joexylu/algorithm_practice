// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
    if (!root) return true;
    let left, right
    
    left = treeHeight(root.left);
    right = treeHeight(root.right);

    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

function treeHeight(root) {
    if(!root) return -1;

    return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))

}