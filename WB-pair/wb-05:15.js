// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 

// You may assume all four edges of the grid are all surrounded by water.

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3


let grid = [[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]]

var numIslands = function(grid){
    // nested for loop through the grid and label as [x, y] coordinates
    // make a count variable to keep count of # of islands
    // use dfs to traverse thru the grid (helper function)

    let count = 0;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                dfs(i, j, grid);
                count++;
            }
        }
    }
    return count
}

function dfs(x, y, grid){

   if (grid[x] && grid[x][y]&& grid[x][y] === 1){
       grid[x][y] = 0;
       dfs(x, y-1, grid)
       dfs(x-1, y, grid)
       dfs(x+1, y, grid)
       dfs(x, y+1, grid)
   }

}

// console.log(numIslands(grid))

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],                   [1, 4, 7]
//   [4,5,6],   => Transpose    [2, 5, 8] 
//   [7,8,9]                    [3, 6, 9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]




//3X3;

// grid[0,0] -> grid[0,2];
// grid[2,0] -> grid[0,0];
// grid[2,2] -> gird[2,0];
// grid[0,2] -> grid[2,2];

//#1 get its transpose of grid
//#2 then reverse the inner array
//#3 then return 


// iterate through i's outer layer of grid
// iterate through j's inner layer of grid

//grid[i][j]

//change grid[i][j] to grid[j][i]

// transpose grid

// lterate through the grid -> reverse the grid[i]

//return the motified grid



var rotate = function(matrix) {
    let temp;
    for(let i =0; i < matrix.length; i++){
        for (let j= i; j< matrix[0].length; j++){
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp
        }
    }

    for(let k = 0; k < matrix.length; k ++){
        matrix[k].reverse()
    }
    return matrix
};

//t(n^2 + n) => o(n^2)
//o(1)

let matrix = [
      [7,4,1],
      [8,5,2],
      [9,6,3]
]

console.log(rotate(matrix))




