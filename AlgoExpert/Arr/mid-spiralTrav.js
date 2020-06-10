// var rotate = function(matrix) {
//     var result = new Array( matrix[0].length)

//     for(let i = 0; i < result.length; i++){
//         result[i] = new Array(matrix.length);
//         for(let j = 0; j < result[i].length; j++){
//             result[i][j] = matrix[j][i]
//         }
//     }

//     return result.reverse()
// };

function spiralTraverse(array) {
    // Write your code here.

    //naive way:
    // if(array.length === 1) return array[0]
    // let result = array.shift();
    // let tras = rotate(array)
    // return result.concat(spiralTraverse(tras))


    //iterate solution:
    let result = [];

    let startRow = 0, startCol = 0;

    let endRow = array.length - 1;
    let endCol = array[0].length - 1;

    while(startRow <= endRow && startCol <= endCol){
        for (let col = startCol; col <= endCol; col++){
            result.push(array[startRow][col])
        }

        for (let row = startRow + 1; row <= endRow; row++){
            result.push(array[row][endCol])
        }

        for (let col = endCol - 1; col >= startCol; col--){
            if(startRow === endRow) break;
            result.push(array[endRow][col])
        }

        for (let row = endRow - 1; row > startRow; row--){
            if(startCol === endCol) break;
            result.push(array[row][startCol])
        }

        startRow += 1;
        endRow -= 1;
        startCol += 1;
        endCol -= 1;
    }

    return result
}
// [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
// const arr = [[12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]];

// console.log(rotate(arr))
// console.log(spiralTraverse(arr))



