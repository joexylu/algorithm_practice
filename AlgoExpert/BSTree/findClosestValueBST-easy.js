function findClosestValueInBst(tree, target) {
    // Write your code here.
      return findClosest(tree, target, closestVal=Infinity)
  }
  
function findClosestRecurr(node, target, closestVal){
    if (!node) return closestVal;

    if(Math.abs(closestVal - target) > Math.abs(node.value - target)){
        closestVal = node.value
    }

    if (target < node.value){
        return findClosest(node.left, target, closestVal)
    } else if(target > node.value){
        return findClosest(node.right, target, closestVal)
    }else{
        return closestVal
    }
    
}

function findClosestIter(node, target, closestVal){
    let currNode = node

    while(!!currNode){
        if(Math.abs(closestVal - target) > Math.abs(node.value - target)){
            closestVal = currNode.value
        }
    
        if (target < currNode.value){
            currNode = currNode.left
        } else if(target > currNode.value){
            currNode = currNode.right
        }else{
            break
        }
    }

    return closestVal

}

let test = {
    "nodes": [
      {"id": "10", "left": "5", "right": "15", "value": 10},
      {"id": "5", "left": "2", "right": "5-2", "value": 5},
      {"id": "15", "left": "13", "right": "22", "value": 15},
      {"id": "2", "left": "1", "right": null, "value": 2},
      {"id": "5-2", "left": null, "right": null, "value": 5},
      {"id": "13", "left": null, "right": "14", "value": 13},
      {"id": "22", "left": null, "right": null, "value": 22},
      {"id": "1", "left": null, "right": null, "value": 1},
      {"id": "14", "left": null, "right": null, "value": 14}
    ],
    "root": "10"
}