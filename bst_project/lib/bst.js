class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor(){
       this.root = null;
       this.stack = []
   }

   insert(val, root=this.root){
        if(this.root === null) {
            this.root = new TreeNode(val);
            return;
        }

        if(val < root.val){
            if(!root.left){
                root.left = new TreeNode(val);
            }else{
                this.insert(val, root.left)
            }
        }else{
            if(!root.right){
                root.right = new TreeNode(val)
            } else{
                this.insert(val, root.right)
            }
        }
   }

   inOrderPrint(root=this.root){
       if(!root) return;
       this.inOrderPrint(root.left);
       this.stack.push(root.val)
       this.inOrderPrint(root.right);
   }

   searchRecur(val, root=this.root){
        if (!root) return false;
        if (val < root.val) {
            return this.searchRecur(val, root.left);
        } else if (val > root.val){
            return this.searchRecur(val, root.right);
        } else {
            return true;
        }
   }

   searchIter(val, root=this.root){
        this.inOrderPrint(root)
        let i = 0;
        while( i < this.stack.length){
            if(this.stack[i] === val){
                return true
            }
            i++;
        }
        return false
   }
}

module.exports = {
    TreeNode,
    BST
};