var rotate = function(matrix) {
    var result = new Array( matrix[0].length)

    for(let i = 0; i < result.length; i++){
        result[i] = new Array(matrix.length);
        for(let j = 0; j < result[i].length; j++){
            result[i][j] = matrix[j][i]
        }
    }

    // for(let k = 0; k < result.length; k ++){
    //     result[k].reverse()
    // }
    return result.reverse()
};

function spiralTraverse(array) {
    // Write your code here.

    if(array.length === 1) return array[0]
    
    let result = array.shift();

    let tras = rotate(array)

    return result.concat(spiralTraverse(tras))
}
// [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
const arr = [[12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]];

console.log(rotate(arr))
// console.log(spiralTraverse(arr))



