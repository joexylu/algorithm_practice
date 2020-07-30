//new heap map


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

// [output] integer64

// The sum of the results for all get queries.



function hashMap(queryType, query) {
    let count = 0;
    let array = new Array(100).fill(0);
    
    for (let i = 0; i< queryType.length; i++){
        switch(queryType[i]){
            case "insert":
                array[query[i][0]] = query[i][1];
                break;
            case "addToKey":
                array.splice(query[i][0], 0, 0);
                break;
            case "addToValue":
                array[i] = array[i] + query[i][0]
                break;
            case "get":
                count += array[i-1];
                break;
        }
    }
    
    return count
}


//MergerString

// You are implementing your own programming language and you've decided to add support for merging strings. A typical merge function would take two strings s1 and s2, and return the lexicographically smallest result that can be obtained by placing the symbols of s2 between the symbols of s1 in such a way that maintains the relative order of the characters in each string.

// For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".



// You'd like to make your language more unique, so for your merge function, instead of comparing the characters in the usual lexicographical order, you'll compare them based on how many times they occur in their respective strings (fewer occurrences means the character is considered smaller). If the number of occurrences are equal, then the characters should be compared in the usual way. If both number of occurences and characters are equal, you should take the characters from the first string to the result.

// Given two strings s1 and s2, return the result of the special merge function you are implementing.

// Example

// For s1 = "dce" and s2 = "cccbd", the output should be
// mergeStrings(s1, s2) = "dcecccbd".
// All symbols from s1 goes first, because all of them have only 1 occurrence in s1 and c has 3 occurrences in s2.



// For s1 = "super" and s2 = "tower", the output should be
// mergeStrings(s1, s2) = "stouperwer".
// Because in both strings all symbols occur only 1 time, strings are merged as usual. You can find explanation for this example on the image in the description.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s1

// A string consisting only of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 104.

// [input] string s2

// A string consisting only of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 104.

// [output] string

// The string that results by merging s1 and s2 using your special merge function.


function strCount(str, heapMap){
    for(let i = 0; i < str.length; i++){
        if(!heapMap[str[i]]){
            heapMap[str[i]] = 1
        }else{
            heapMap[str[i]] += 1
        }
    }
}

function mergeStrings(s1, s2) {
    let alpha = ("abcdefghijklmnopqrstuvwxyz").split("")
    let result = []
    let map = {}
    strCount(s1, map);
    strCount(s2, map);
    
    let a1 = s1.split("")
    let a2 = s2.split("")
    
    while(a1.length !== 0 && a2.length !== 0){
        if(map[a1[0]] < map[a2[0]]){
            result.push(a1.shift())
        }else if(map[a1[0]] > map[a2[0]]){
            result.push(a2.shift())
        }else{
            if(alpha.indexOf(a1[0]) < alpha.indexOf(a2[0])){
                result.push(a1.shift())
            }else if (alpha.indexOf(a1[0]) > alpha.indexOf(a2[0])){
                result.push(a2.shift())
            }else{
                result.push(a1.shift())
            }
        }
    }
    
    return result.concat(a1).concat(a2).join("")
}


