function maxValue(node, visited=new Set()) {
    let queue = [ node ];
    let max = 0;
    while (queue.length) {
        let currentNode = queue.shift();

        if (visited.has(currentNode.val)){
            continue
        }else{
            visited.add(currentNode.val);
        }

        if (currentNode.val > max) {
            max = currentNode.val
        };
        queue = queue.concat(currentNode.neighbors)
    }
    return max;
}

module.exports = {
    maxValue
};