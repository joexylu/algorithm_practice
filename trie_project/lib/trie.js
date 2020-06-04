class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root=this.root){
        let letter = word[0]

        if(!(letter in root.children)){
            root.children[letter] = new Node()
        }

        if(word.length === 1){
            root.children[letter].isTerminal = true;
        }else{
            this.insertRecur(word.slice(1), root.children[letter])
        }
    }

    insertIter(word, root=this.root){

    }

    searchRecur(word, root=this.root){
        if(word.length === 0){
            if(root.isTerminal){
                return true
            }else{
                return false
            }
        }

        let letter = word[0]

        if(letter in root.children){
            return this.searchRecur(word.slice(1), root.children[letter])
        }else{
            return false
        }
    }

    searchIter(word, root=this.root){

    }
}

module.exports = {
    Node,
    Trie
};