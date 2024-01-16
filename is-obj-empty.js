// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

 

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.
 

const isEmpty = function(obj) {
    if (Object.keys(obj).length || obj.length) {
        return false
    } else {
        return true
    }
    // Object.keys(obj).length || obj.length ? true : false
};
const obj = {}
const obj2 = {"x": 5, "y": 42}
const obj3 = [null, false, 0]


console.log(isEmpty(obj)); //true
console.log(isEmpty(obj2)); //false
console.log(isEmpty(obj3)); //false

