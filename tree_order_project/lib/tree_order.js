function inOrderArray(root) {
    if (root === null) return [];

    const left = inOrderArray(root.left);
    const rootVal = [root.val]
    const right = inOrderArray(root.right);
    return left.concat(rootVal).concat(right)
}

function postOrderArray(root) {
    if (root === null) return [];
    const left = postOrderArray(root.left);
    const right = postOrderArray(root.right);
    const rootVal = [root.val]
    return left.concat(right).concat(rootVal)
}


module.exports = {
    inOrderArray,
    postOrderArray
};