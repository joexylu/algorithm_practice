
//1
Given a string, find the first non-repeating character in it and return it's index. 
If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Pseudocode:

function (str){
    let index-collection = {}
    for (i = 0 i, str length i++){
        index-collection[str[i]].push(i)
    }

    for(index-collection){
        if (ele.length < 2){
            return ele[0]
            break
        }
    }
}

JS version: 

function findNonRepeat(str){
    let colletion = {} // {b: [0,1], n:[2], a:[3,4]}
    collection = {} // {b: 2, n: 1, a: 2}
    for (let i =0; i < str.length; i++){
        if (collection.key.includes(str[i])){
            collection[str[i]].push(i)
        }else{
            collection[str[i]] = [i]
        }
    }
    // iterate thru the string 
    // if collection[char] === 1 return the index
    for (let i = 0; i < str.length; i ++)}{
      if (collection[str[i]] === 1)
        return i;
    }
    return -1;

    const all-index = Object.values(collection) [[0,1],[2],[3,4]]
    for (let j =0; j < all-index.length; ++){
        if(all-index[j].length < 2 && all-index[j].length > 0){
            return all-index[j][0]
            break
        }
    }
    return -1
}

cont str1 = "bbnaa"

t= 1+ n + n + n = 3n +1 
O(n) in time

O(n) in space

//2
Given a string, find the length of the longest substring without repeating characters.
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 


"wwww"
max = 1 
i = 2, char = w
start = 2
end = 2
substr = "w"
length = 1

max value = -Infinity;
if str.length === 0, return 0;
iterate thru the str, 
use two pointers to keep track of the start and end of the substr
set both pointers to point to the start of the string 
check whether the new char exists in the substr, 
if exists, 
  grab the length of the substr, and compare it with the max. value.
  if (length > max) => max = length
  reset both pointers to point to the new char
if doesnt exists 
  increment the "end" pointer by one 

const longestSubstring = function (str) {
  let max = -Infinity; 
  if (str.length === 0 ) return 0 ;
  let i = 0; 
  let start = null;
  let end = null; 
  while ( i < str.length){                    
    char = str[i];                            
    if ((start === null) && (end === null)){    
      start = 0;
      end = 0;
    }
    else{
      const substr = str.slice(start,end + 1)
      if (substr.includes(char)){
        if ((end + 1 - start)> max){
          max = end + 1 - start;
        }
        start = i;
        end = i;
      }
      else {
        end ++;
      }
    }
    i ++; 
  }
  return Math.max(max, end + 1 - start);   
}
