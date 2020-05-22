function numRegions(graph) {
    let visited = new Set();
    let count = 0

    for(let node in graph){
        if(df(node, graph, visited)) count++
    }

    return count
}

function df(node, graph, visited){
    if (visited.has(node)) return false;
    visited.add(node);
    graph[node].forEach(neighber => {
        df(neighber, graph, visited)
    });
    return true
}

module.exports = {
    numRegions
};