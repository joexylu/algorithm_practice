class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function invertBTree(tree){
    if(!tree) return;
    if(!tree.left && !tree.right) return;

    swap(tree)

    invertBTree(tree.left);
    invertBTree(tree.right);

}

function swap(tree){
    if(!tree.left && !tree.left) return;
    let left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}