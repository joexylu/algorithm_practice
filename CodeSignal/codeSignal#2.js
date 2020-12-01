//mean group

function meanGroups(a) {
    let resultObj = {}
    
    for(let i = 0; i< a.length; i++){
        let average 
        if(a[i].length < 2){
            average = a[i][0]
        }else{  
            average= a[i].reduce((a,b)=>(a+b))/ a[i].length
        }
        if(resultObj[average]){
            resultObj[average].push(i)
        }else{
            resultObj[average] = [i]
        }
    }
    
    return Object.values(resultObj).sort(sortFunction);
    // return resultObj
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

//mutate array

function mutateTheArray(n, a) {
    if (n == 1) return a
    let result = []
    for(let i = 0; i < n; i++){
        if(i == 0){
            result.push(0+a[i] + a[i + 1])
        }else if( i + 1 == n){
            result.push(a[i-1]+ a[i] + 0)
        }else{
            result.push(a[i-1]+ a[i] + a[i+1])
        }
    }
    
    return result
}

//alternating sort

function alternatingSort(a) {
    
    if(a.length <= 1) return true
    
    let ascend = a.slice().sort((a, b)=>{return a-b})
    let b = []
    let back = a.length -1
    let front = 0
    let i = 0
    while(front <= back){
        if(i%2 == 0){
            b.push(a[front])
            front ++
        }else{
            b.push(a[back])
            back --
        }
        i++
    }
    
    for(let k = 0; k < ascend.length - 1; k++){
        if(ascend[k] == ascend[k+1]){
            return false
        }
    }
    
    for(let j = 0; j < a.length; j++){
        if (ascend[j] != b[j]) {
            return false
        }
    }
    return true
    
}


// You've created a new programming language, and now you've decided to add hashmap support to it. Actually you are quite disappointed that in common programming languages it's impossible to add a number to all hashmap keys, or all its values. So you've decided to take matters into your own hands and implement your own hashmap in your new language that has the following operations:

// insert x y - insert an object with key x and value y.
// get x - return the value of an object with key x.
// addToKey x - add x to all keys in map.
// addToValue y - add y to all values in map.
// To test out your new hashmap, you have a list of queries in the form of two arrays: queryTypes contains the names of the methods to be called (eg: insert, get, etc), and queries contains the arguments for those methods (the x and y values).

// Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.

// Example

// For queryType = ["insert", "insert", "addToValue", "addToKey", "get"] and query = [[1, 2], [2, 3], [2], [1], [3]], the output should be hashMap(queryType, query) = 5.

// The hashmap looks like this after each query:

// 1 query: {1: 2}
// 2 query: {1: 2, 2: 3}
// 3 query: {1: 4, 2: 5}
// 4 query: {2: 4, 3: 5}
// 5 query: answer is 5
// The result of the last get query for 3 is 5 in the resulting hashmap.

// For queryType = ["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"] and query = [[1, 2], [2], [1], [2, 3], [1], [-1], [3]], the output should be hashMap(queryType, query) = 6.

// The hashmap looks like this after each query:

// 1 query: {1: 2}
// 2 query: {1: 4}
// 3 query: answer is 4
// 4 query: {1: 4, 2: 3}
// 5 query: {2: 4, 3: 3}
// 6 query: {2: 3, 3: 2}
// 7 query: answer is 2
// The sum of the results for all the get queries is equal to 4 + 2 = 6.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string queryType

// Array of query types. It is guaranteed that each queryType[i] is either "addToKey", "addToValue", "get", or "insert".

// Guaranteed constraints:
// 1 ≤ queryType.length ≤ 105.

// [input] array.array.integer query

// Array of queries, where each query is represented either by two numbers for insert query or by one number for other queries. It is guaranteed that during all queries all keys and values are in the range [-109, 109].

// Guaranteed constraints:
// query.length = queryType.length,
// 1 ≤ query[i].length ≤ 2.