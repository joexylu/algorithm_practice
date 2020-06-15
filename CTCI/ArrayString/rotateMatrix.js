function rotateMatrix(mat){
    let temp;
    for(let i = 0; i < mat.length; i++){
        for(let j = i; j < mat.length; j++){
            temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp
        }
    }
    mat.forEach(ele => {
        ele.reverse()
    });
    return mat
}


const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

console.log(rotateMatrix(matrix))