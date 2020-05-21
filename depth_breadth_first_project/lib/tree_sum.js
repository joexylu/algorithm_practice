function treeSum(root) {
    // if(!root) return 0;

    // let queue = [root]
    // let result = 0
    // while (queue.length){
    //     let node = queue.shift();
    //     result += node.val
    //     if (node.left) queue.push(node.left);
    //     if (node.right) queue.push(node.right);
    // }
    // return result



    if(!root) return 0;
    return treeSum(root.left) + root.val + treeSum(root.right)
}


module.exports = {
    treeSum
};